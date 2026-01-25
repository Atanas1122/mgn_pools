import { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { PageHeader } from '../components/PageHeader';
import { ArrowRight, FileText, CheckCircle } from 'lucide-react';
import backgroundWater from '../assets/images/home/background_water.webp';

export const BidPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;

    setIsSubmitting(true);
    setStatus('idle');
    setErrorMessage(null);

    const formData = new FormData(form);

    const payload = {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      email: formData.get('email') as string,
      phone: (formData.get('phone') as string) || '',
      subject: 'Bid Request',
      message: [
        `Company/Property Name: ${formData.get('company') || '—'}`,
        `Property Address: ${formData.get('address') || '—'}`,
        `Service Type: ${formData.get('serviceType') || '—'}`,
        '',
        'Additional Details:',
        formData.get('details') as string || '—',
      ].join('\n'),
    };

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => null);

      if (!data || data.success !== true) {
        throw new Error(data?.error || 'Failed to send message');
      }

      setStatus('success');
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Request a Pool Service Quote in Springfield VA | MGN Pools</title>
        <meta
          name="description"
          content="Request a free quote for commercial and residential pool services in Springfield and Northern Virginia. Get pricing for pool management, maintenance, repair and renovation."
        />
        <link rel="canonical" href="https://mgnpools.com/bid" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Request a Pool Service Quote in Springfield VA | MGN Pools" />
        <meta property="og:description" content="Request a free quote for commercial and residential pool services in Springfield and Northern Virginia. Get pricing for pool management, maintenance, repair and renovation." />
        <meta property="og:url" content="https://mgnpools.com/bid" />
      </Helmet>
      <PageHeader
        title="Bid Request"
        subtitle="Request a quote for our pool services"
        backgroundImage="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=1600&q=80"
      />

      <section
        className="py-24 relative water-bg"
        style={{
          backgroundImage: `url(${backgroundWater})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-white/70 md:bg-white/85"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-8 h-8 text-sky-500" />
                <span className="text-sky-600 font-semibold uppercase tracking-wider text-sm">Bid Request</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Get a Quote Now
              </h2>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Fill out the form to request a bid for our pool services. We offer competitive pricing and customized solutions for both commercial and residential pools.
              </p>

              <div className="bg-slate-50 rounded-2xl p-6 mb-8">
                <h3 className="font-bold text-gray-900 mb-4">What We Offer:</h3>
                <ul className="space-y-3">
                  {[
                    "Commercial Pool Management",
                    "Residential Pool Services",
                    "Pool Repairs and Renovations",
                    "Leak Detection and Repair",
                    "Lifeguard Training and Certification"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-sky-500 shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-900 rounded-2xl p-6 text-white">
                <h3 className="font-bold mb-2">Quick Response Guaranteed</h3>
                <p className="text-blue-100 text-sm">
                  Our team guarantees the fastest response to anything related to your swimming pool.
                </p>
              </div>
            </motion.div>

            {/* Form */}
            <motion.form
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4 }}
              className="bg-slate-50 rounded-2xl p-8"
              onSubmit={handleSubmit}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Request a Bid</h3>

              <div className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company/Property Name</label>
                  <input
                    type="text"
                    name="company"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Property Address</label>
                  <input
                    type="text"
                    name="address"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Type *</label>
                  <select
                    name="serviceType"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none bg-white"
                  >
                    <option value="">Select a service...</option>
                    <option value="commercial">Commercial Pool Management</option>
                    <option value="residential">Residential Pool Services</option>
                    <option value="renovation">Pool Renovation</option>
                    <option value="repair">Pool Repair</option>
                    <option value="leak">Leak Detection</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Additional Details</label>
                  <textarea
                    rows={4}
                    name="details"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none resize-none bg-white"
                    placeholder="Please provide any additional information about your pool or service needs..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-sky-500 hover:bg-sky-600 disabled:bg-sky-300 text-white font-semibold py-4 rounded-lg transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? 'Sending...' : 'Submit Bid Request'}
                  <ArrowRight className="w-5 h-5" />
                </button>

                {status === 'success' && (
                  <p className="mt-3 text-sm text-emerald-600">
                    Thank you! Your bid request has been submitted successfully. We'll get back to you soon.
                  </p>
                )}

                {status === 'error' && (
                  <p className="mt-3 text-sm text-red-600">
                    {errorMessage || 'Something went wrong. Please try again.'}
                  </p>
                )}
              </div>
            </motion.form>
          </div>
        </div>
      </section>
    </>
  );
};