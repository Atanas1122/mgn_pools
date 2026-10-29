import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { PageHeader } from '../components/PageHeader';
import { ArrowRight, Search, Droplet, AlertTriangle, Wrench } from 'lucide-react';
import backgroundWater from '../assets/images/home/background_water.webp';

const leakFaqs = [
  { question: 'How can I tell if my swimming pool has a leak?', answer: 'Common signs of a swimming pool leak include unusually rapid water loss, frequent refilling, increased water bills, wet ground around the pool, air entering circulation lines, or unexplained changes in water chemistry. Evaporation can also lower water levels, so water loss alone does not confirm a leak. MGN Pools can evaluate suspected leaks in commercial and residential pools throughout Northern Virginia and Washington, DC and recommend appropriate testing.' },
  { question: 'How does MGN Pools locate swimming pool leaks?', answer: 'MGN Pools evaluates potential sources of water loss in pool plumbing, fittings, equipment, skimmers, main drains, and the pool shell. Depending on the symptoms and pool configuration, leak detection may involve plumbing pressure testing, visual inspection, dye testing, and specialized listening equipment. Testing helps narrow down the likely source before a repair is recommended. The methods used depend on site conditions and accessibility.' },
  { question: 'Can you pressure test underground swimming pool plumbing?', answer: 'Yes. Pressure testing can help determine whether a pool plumbing line is holding pressure or may have a leak. This can be especially useful when investigating suspected leaks in underground suction or return plumbing at apartment, condominium, HOA, and residential swimming pools. A pressure test helps identify a problem line; additional investigation may be needed to pinpoint the precise leak location and determine the best repair method.' },
  { question: 'Can MGN Pools repair leaks around skimmers, main drains, and fittings?', answer: 'MGN Pools provides swimming pool leak evaluation and repair services involving skimmers, main drains, plumbing connections, and other pool fittings. Leaks may develop around aging components, cracked fittings, deteriorated seals, or damaged plumbing. After inspecting the affected area and identifying the likely cause, our team can recommend an appropriate repair or replacement. The scope depends on the component, accessibility, and condition of the surrounding structure.' },
  { question: 'Do you provide commercial swimming pool leak detection for HOAs and apartments?', answer: 'Yes. MGN Pools serves commercial swimming pools at condominium associations, homeowners associations, apartment communities, and other managed properties throughout Northern Virginia and Washington, DC. We understand that unexplained water loss can affect operating costs and pool availability. Our leak detection and repair services help property managers investigate the problem, understand the findings, and plan repairs with consideration for the facility’s operating schedule.' },
  { question: 'Why is it important to repair a swimming pool leak promptly?', answer: 'An unresolved swimming pool leak can waste water, chemicals, and heating energy. Depending on the location and severity, escaping water may also affect soil around the pool, surrounding decks, plumbing, or structural components. Prompt investigation can help reduce unnecessary operating expenses and limit further damage. Not every drop in water level indicates a leak, but persistent unexplained water loss should be evaluated.' },
  { question: 'How long does pool leak detection and repair take?', answer: 'The time required depends on the pool size, plumbing layout, access to equipment, the suspected leak location, and the extent of any necessary repairs. Some issues can be identified during an initial inspection or pressure test, while concealed underground leaks may require additional investigation. Once the problem is evaluated, MGN Pools can explain the findings and discuss a repair scope and anticipated schedule. We do not promise a fixed timeline before examining the pool.' },
  { question: 'How do I request a pool leak detection or repair estimate?', answer: 'Use the repair request form on this page to provide your contact information, property address, and a description of the suspected leak. Helpful details include how quickly the water level drops, whether the loss changes when the pump is running, and any visible wet areas or equipment problems. MGN Pools will review the request and contact you about the next steps for commercial or residential swimming pool leak detection in Northern Virginia and Washington, DC.' },
];

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
        <title>Pool Leak Detection & Repair Northern Virginia & DC | MGN Pools</title>
        <meta
          name="description"
          content="Professional pool leak detection and repair for commercial and residential pools throughout Northern Virginia and Washington, DC. Pressure testing, leak locating and pool repairs."
        />
        <link rel="canonical" href="https://mgnpools.com/repair" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Pool Leak Detection & Repair Northern Virginia & DC | MGN Pools" />
        <meta property="og:description" content="Professional pool leak detection and repair for commercial and residential pools throughout Northern Virginia and Washington, DC, including pressure testing, leak locating, and pool repairs." />
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
            "description": "Professional pool leak detection and repair for commercial and residential pools throughout Northern Virginia and Washington, DC, including pressure testing, leak locating, and pool repairs.",
            "url": "https://mgnpools.com/repair"
          })}
        </script>

                 {/* FAQ structured data matches the visible FAQ section below. */}
         <script type="application/ld+json">
           {JSON.stringify({
             "@context": "https://schema.org",
             "@type": "FAQPage",
             "mainEntity": leakFaqs.map(({ question, answer }) => ({
               "@type": "Question",
               "name": question,
               "acceptedAnswer": { "@type": "Answer", "text": answer }
             }))
           })}
         </script>
</Helmet>
      <PageHeader
  title="Pool Leak Detection & Repair in Northern Virginia & Washington, DC"
subtitle="Professional leak detection, pressure testing, and pool leak repair for commercial and residential swimming pools"
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
                MGN Pools provides commercial and residential swimming pool leak detection, plumbing pressure testing, and pool leak repair throughout Northern Virginia and Washington, DC. We investigate unexplained water loss involving underground plumbing lines, skimmers, main drains, fittings, pool equipment, and the pool shell. Our services help HOA boards, condominium and apartment property managers, and homeowners identify likely leak sources before choosing a repair approach.
              </p>

              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Pool leaks can increase water, heating, and chemical costs and, in some cases, contribute to damage around decks, plumbing, and the pool structure. Our evaluation may include visual inspection, pressure testing, dye testing, or other suitable methods depending on the facility and suspected leak. After investigating, we explain the findings and recommend practical next steps.
              </p>

              <Link
  to="/bid"
  className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-semibold px-6 py-3 rounded-lg transition mb-8"
>
  Request Leak Detection Service
  <ArrowRight className="w-5 h-5" />
</Link>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Droplet, text: "Save water and chemicals" },
                  { icon: AlertTriangle, text: "Prevent structural damage" },
                  { icon: Search, text: "Pressure Testing & Leak Detection" },
                  { icon: Wrench, text: "Professional Pool Leak Repair" },
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
                  {/* <div className="bg-white/90 backdrop-blur rounded-xl p-4">
                    <p className="text-gray-900 font-semibold">
                      Request your free repair estimate and consultation
                    </p>
                  </div> */}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Request Form */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Request a Pool Leak Detection & Repair Estimate
            </h2>
            <p className="text-lg text-gray-600">
              Tell us about your pool leak or suspected leak, and our team will contact you to discuss the next steps.
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
                <label className="block text-sm font-medium text-gray-700 mb-2">Pool / Property Address</label>
                <input
                  type="text"
                  name="address"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Describe the Leak or Pool Problem *</label>
                <textarea
                  rows={4}
                  name="problem"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none resize-none"
                  placeholder="Please describe the suspected leak, water loss, or other pool issue..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-sky-500 hover:bg-sky-600 disabled:bg-sky-300 text-white font-semibold py-4 rounded-lg transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? 'Sending...' : 'Request Leak Detection Service'}
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

             {/* Helpful answers for property managers and homeowners */}
       <section className="py-20 bg-white" aria-labelledby="leak-faq-heading">
         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 id="leak-faq-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
             Pool Leak Detection &amp; Repair FAQs
           </h2>
           <div className="space-y-4">
             {leakFaqs.map((faq, index) => (
               <details key={index} className="group rounded-xl bg-slate-50 border border-slate-200 shadow-sm p-5 md:p-6">
                 <summary className="cursor-pointer font-bold text-gray-900 leading-relaxed">
                   {faq.question}
                 </summary>
                 <p className="mt-4 text-gray-700 leading-relaxed">{faq.answer}</p>
               </details>
             ))}
           </div>
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
