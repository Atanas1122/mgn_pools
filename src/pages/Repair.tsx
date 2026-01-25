import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { PageHeader } from '../components/PageHeader';
import { ArrowRight, Search, Droplet, AlertTriangle, Wrench } from 'lucide-react';
import backgroundWater from '../assets/images/home/background_water.webp';

export const RepairPage = () => {
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
      subject: 'Repair Request',
      message: [
        `Address: ${formData.get('address') || '—'}`,
        '',
        'Problem Description:',
        formData.get('problem') as string,
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
        <title>Pool Leak Detection & Repair in Springfield VA | MGN Pools</title>
        <meta
          name="description"
          content="Expert swimming pool leak detection and repair in Springfield VA and the DC metro area. Save water, heat and chemicals with professional leak detection technology."
        />
        <link rel="canonical" href="https://mgnpools.com/repair" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Pool Leak Detection & Repair in Springfield VA | MGN Pools" />
        <meta property="og:description" content="Expert swimming pool leak detection and repair in Springfield VA and the DC metro area. Save water, heat and chemicals with professional leak detection technology." />
        <meta property="og:url" content="https://mgnpools.com/repair" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Pool Leak Detection and Repair",
            "provider": {
              "@id": "https://mgnpools.com/#localbusiness"
            },
            "description": "Expert swimming pool leak detection and repair in Springfield VA and the DC metro area. Save water, heat and chemicals with professional leak detection technology.",
            "url": "https://mgnpools.com/repair"
          })}
        </script>

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How do you detect pool leaks?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We use advanced leak detection technology including pressure testing, dye testing, and electronic listening devices to accurately locate leaks in your pool's plumbing, shell, or equipment."
                }
              },
              {
                "@type": "Question",
                "name": "Why is it important to repair pool leaks quickly?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Pool leaks waste water, heat, and chemicals, increasing your costs. They can also undermine pool structural components and wash away fill dirt, leading to serious damage if not addressed promptly."
                }
              },
              {
                "@type": "Question",
                "name": "How long does pool leak repair take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most pool leak repairs can be completed within 1-2 days depending on the location and severity of the leak. We provide fast, efficient service to minimize disruption."
                }
              }
            ]
          })}
        </script>
      </Helmet>
      <PageHeader
        title="Swimming Pool Leak Detection and Repair"
        subtitle="Expert leak detection and repair services"
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Search className="w-8 h-8 text-sky-500" />
                <span className="text-sky-600 font-semibold uppercase tracking-wider text-sm">Leak Detection</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Swimming Pool Leak Detection and Repair
              </h2>

              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Swimming pools in Springfield and across Northern Virginia can leak through any of the fittings or accessories, plumbing, or even right through the shell.
              </p>

              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                It is important to repair leaks, not only to save water, heat, and chemicals, but also to prevent undermining pool structural components and washing away fill dirt.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Droplet, text: "Save water and chemicals" },
                  { icon: AlertTriangle, text: "Prevent structural damage" },
                  { icon: Search, text: "Advanced detection technology" },
                  { icon: Wrench, text: "Expert repair service" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-slate-50 p-4 rounded-lg"
                  >
                    <item.icon className="w-5 h-5 text-sky-500 shrink-0" />
                    <span className="text-gray-700 text-sm font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1598902108854-10e335adac99?w=800&q=80"
                  alt="Professional swimming pool leak detection and repair services in Virginia"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur rounded-xl p-4">
                    <p className="text-gray-900 font-semibold">
                      Request your free repair estimate and consultation
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Request Form */}
      <section  className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Request Free Repair Estimate
            </h2>
            <p className="text-lg text-gray-600">
              Fill out the form below and we'll get back to you with a free estimate.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl p-8 shadow-xl"
            onSubmit={handleSubmit}
          >
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                <input
                  type="text"
                  name="address"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Describe the Problem *</label>
                <textarea
                  rows={4}
                  name="problem"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none resize-none"
                  placeholder="Please describe the issue with your pool..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-sky-500 hover:bg-sky-600 disabled:bg-sky-300 text-white font-semibold py-4 rounded-lg transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? 'Sending...' : 'Submit Request'}
                <ArrowRight className="w-5 h-5" />
              </button>

              {status === 'success' && (
                <p className="mt-3 text-sm text-emerald-600">
                  Thank you! Your repair request has been submitted successfully. We'll get back to you soon.
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
      </section>

      {/* Related Services */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Related Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/renovations"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow hover:bg-sky-50 group"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-sky-600">
                Pool Repairs & Renovations
              </h3>
              <p className="text-gray-600 mb-4">
                Comprehensive pool repair and renovation services including equipment replacement and upgrades.
              </p>
              <span className="text-sky-600 font-semibold flex items-center gap-2">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link
              to="/commercial"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow hover:bg-sky-50 group"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-sky-600">
                Commercial Pool Management
              </h3>
              <p className="text-gray-600 mb-4">
                Full-service commercial pool management with regular maintenance and emergency repairs.
              </p>
              <span className="text-sky-600 font-semibold flex items-center gap-2">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link
              to="/residential"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow hover:bg-sky-50 group"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-sky-600">
                Residential Pool Services
              </h3>
              <p className="text-gray-600 mb-4">
                Professional residential pool maintenance and care services for homeowners.
              </p>
              <span className="text-sky-600 font-semibold flex items-center gap-2">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

