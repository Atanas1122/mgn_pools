import { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { PageHeader } from '../components/PageHeader';
import { ArrowRight, Phone, Mail, MapPin, Clock } from 'lucide-react';
import backgroundWater from '../assets/images/home/background_water.webp';

const SITE_CONFIG = {
  phones: ["571-275-3696", "571-332-2431"],
  email: "mgnpools@yahoo.com",
  address: "5954 Hall Street, Springfield, VA, 22152",
};

export const ContactsPage = () => {
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
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
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
        <title>Contact MGN Pools | Springfield VA Pool Service</title>
        <meta
          name="description"
          content="Contact MGN Pools in Springfield VA for commercial and residential pool services. Call 571-275-3696 or email mgnpools@yahoo.com. Serving Northern Virginia, DC and Maryland."
        />
        <link rel="canonical" href="https://mgnpools.com/contacts" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact MGN Pools | Springfield VA Pool Service" />
        <meta property="og:description" content="Contact MGN Pools in Springfield VA for commercial and residential pool services. Call 571-275-3696 or email mgnpools@yahoo.com. Serving Northern Virginia, DC and Maryland." />
        <meta property="og:url" content="https://mgnpools.com/contacts" />
      </Helmet>
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch with MGN Pools"
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4 bg-slate-50 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Address</div>
                    <div className="text-gray-600">{SITE_CONFIG.address}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-slate-50 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Phone</div>
                    <a href={`tel:${SITE_CONFIG.phones[0]}`} className="block text-gray-600 hover:text-sky-600">
                      {SITE_CONFIG.phones[0]}
                    </a>
                    <a href={`tel:${SITE_CONFIG.phones[1]}`} className="block text-gray-600 hover:text-sky-600">
                      {SITE_CONFIG.phones[1]}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-slate-50 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Email</div>
                    <a href={`mailto:${SITE_CONFIG.email}`} className="text-gray-600 hover:text-sky-600">
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-slate-50 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Business Hours</div>
                    <div className="text-gray-600">
                      <div>Monday - Friday: 8:00 AM - 6:00 PM</div>
                      <div>Saturday: 9:00 AM - 4:00 PM</div>
                      <div>Sunday: Closed</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden h-64 shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.5!2d-77.19!3d38.78!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDQ2JzQ4LjAiTiA3N8KwMTEnMjQuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="MGN Pools Location"
                />
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4 }}
              className="bg-slate-50 rounded-2xl p-8"
              onSubmit={handleSubmit}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>

              <div className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                    <input
                      type="text"
                      required
                      name="firstName"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                    <input
                      type="text"
                      required
                      name="lastName"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    name="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                  <select
                    required
                    name="subject"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none bg-white"
                  >
                    <option value="">Select a subject...</option>
                    <option value="general">General Inquiry</option>
                    <option value="commercial">Commercial Services</option>
                    <option value="residential">Residential Services</option>
                    <option value="repair">Repair Request</option>
                    <option value="training">Training Information</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea
                    rows={5}
                    required
                    name="message"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none resize-none bg-white"
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-sky-500 hover:bg-sky-600 disabled:bg-sky-300 text-white font-semibold py-4 rounded-lg transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <ArrowRight className="w-5 h-5" />
                </button>

                {status === 'success' && (
                  <p className="mt-3 text-sm text-emerald-600">
                    Thank you! Your message has been sent.
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

      {/* Service Areas */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Service Areas</h2>
          <p className="text-center text-gray-600 mb-8">
            We provide swimming pool management, repair and renovation services in Northern Virginia, Maryland and DC.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm text-gray-600">
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Fairfax County</h3>
              <p>Alexandria, Arlington, Annadale, Burke, Centreville, Chantilly, Clifton, Fairfax, Fairfax Station, Falls Church, Fort Belvoir, Great Falls, Herndon, Lorton, McLean, Oakton, Reston, Springfield, Vienna</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Loudoun County</h3>
              <p>Aldie, Ashburn, Bluemont, Dulles, Hamilton, Hillsboro, Lansdowne, Leesburg, Lovettsville, Middleburg, Paeonian Springs, Potomac Falls, Purcellville, Round Hill, South Riding, Sterling, Stoneridge, Waterford</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Prince William County</h3>
              <p>Bristow, Dale City, Dumfries, Gainesville, Haymarket, Manassas, Manassas Park, Nokesville, Occoquan, Quantico, Triangle, Woodbridge</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Spotsylvania County</h3>
              <p>Fredericksburg</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Montgomery County</h3>
              <p>Bethesda, Chevy Chase, Potomac, Rockville, Silver Spring, Takoma Park</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Washington DC</h3>
              <p>All areas of Washington DC</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

