// Simple Vercel serverless function to send contact form emails via Resend

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ success: false, error: 'Method not allowed' }));
        return;
    }

    try {
        // Read raw body and parse JSON (works reliably across runtimes)
        let body = '';
        for await (const chunk of req) {
            body += chunk;
        }

        const data = body ? JSON.parse(body) : {};
        const { firstName, lastName, email, phone, subject, message } = data;

        if (!firstName || !lastName || !email || !subject || !message) {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: false, error: 'Missing required fields' }));
            return;
        }

        const apiKey = process.env.RESEND_API_KEY;
        if (!apiKey) {
            console.error('RESEND_API_KEY is not set');
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: false, error: 'Email service is not configured' }));
            return;
        }

        const payload = {
            from: 'MGN Pools <info@mgnpools.com>',
            to: ['areke.zhake@gmail.com'],
            // to: ['mgnpools@yahoo.com'],
            subject: `New contact form message: ${subject}`,
            text: [
                `First name: ${firstName}`,
                `Last name: ${lastName}`,
                `Email: ${email}`,
                `Phone: ${phone || '—'}`,
                `Subject: ${subject}`,
                '',
                'Message:',
                message,
            ].join('\n'),
        };

        const response = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Resend API error:', response.status, errorText);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: false, error: 'Failed to send email' }));
            return;
        }

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ success: true }));
    } catch (error) {
        console.error('Email handler error:', error);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ success: false, error: 'Internal server error' }));
    }
}


