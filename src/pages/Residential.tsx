import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { PageHeader } from '../components/PageHeader';
import { ArrowRight, CheckCircle } from 'lucide-react';
import backgroundWater from '../assets/images/home/background_water.webp';

export const ResidentialPage = () => {

  return (
    <>
      <Helmet>
        <title>Residential Pool Services Northern Virginia & DC | MGN Pools</title>
        <meta
          name="description"
          content="Professional residential pool services throughout Northern Virginia and Washington, DC. Pool maintenance, repairs, renovations, leak detection, opening, closing, and winter care from MGN Pools."
        />
        <link rel="canonical" href="https://mgnpools.com/residential" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Residential Pool Services in Northern Virginia & Washington, DC | MGN Pools" />
        <meta property="og:description" content="Professional residential pool services throughout Northern Virginia and Washington, DC, including pool maintenance, cleaning, repairs, renovations, opening, and winterization." />
        <meta property="og:url" content="https://mgnpools.com/residential" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Residential Pool Services",
            "provider": {
              "@id": "https://mgnpools.com/#localbusiness"
            },
            "description": "Professional residential pool services throughout Northern Virginia and Washington, DC, including pool maintenance, cleaning, repairs, renovations, opening, and winterization.",
      "areaServed": [
  "Northern Virginia",
  "Washington, DC",
  "Alexandria, VA",
  "Arlington, VA",
  "Springfield, VA",
  "Fairfax, VA",
  "Falls Church, VA",
  "McLean, VA",
  "Great Falls, VA",
  "Lorton, VA",
  "Woodbridge, VA",
  "Manassas, VA" 
],           
      "url": "https://mgnpools.com/residential"
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
                "name": "What residential pool services do you offer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "MGN Pools provides residential pool maintenance, cleaning, water chemistry management, pool opening and winterization, leak detection and repairs, equipment repairs, and complete pool renovations throughout Northern Virginia and Washington, DC."
                }
              },
              {
                "@type": "Question",
                "name": "How often should I have my residential pool serviced?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We recommend weekly residential pool service during the swimming season, including water testing and balancing, cleaning, equipment inspection, and preventive maintenance to keep your pool clean, safe, and operating properly."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide emergency pool repair for residential pools?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, MGN Pools provides residential pool repair services for leaks, equipment failures, plumbing problems, pumps, filters, heaters, and other pool system issues throughout Northern Virginia and Washington, DC."
                }
              }
            ]
          })}
        </script>
      </Helmet>
      <PageHeader
        title="Residential Pool Services in Northern Virginia & Washington, DC"
        subtitle="Professional pool maintenance, repairs, renovations, opening, and winterization for homeowners throughout Northern Virginia and Washington, DC"
        backgroundImage="https://images.unsplash.com/photo-1562778612-e1e0cda9915c?w=1600&q=80"
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
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4 }}
              className="order-2 lg:order-1"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1562778612-e1e0cda9915c?w=800&q=80"
                  alt="Residential pool maintenance, repair and renovation services in Northern Virginia and Washington, DC"
                  className="w-full h-[450px] object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
Residential Pool Maintenance & Service in Northern Virginia
              </h2>

              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                <strong>MGN POOLS</strong> provides reliable residential pool maintenance and service for homeowners throughout Northern Virginia and Washington, DC. Our residential services include pool cleaning, water chemistry management, equipment inspection and repair, seasonal opening and closing, leak detection, and pool renovations. Our experienced team helps keep your pool clean, safe, properly maintained, and ready to enjoy throughout the swimming season.
              </p>

              <ul className="space-y-4 mb-8">
  {[
    "Professional pool maintenance",
    "Pool cleaning and water chemistry management",
    "Equipment inspection and repair",
    "Pool leak detection and pressure testing",
    "Seasonal pool opening and closing",
    "Pool renovations and resurfacing",
    "Personalized residential pool service plans"
  ].map((item) => (
    <li
      key={item}
      className="flex items-center gap-3"
    >
      <CheckCircle className="w-5 h-5 text-sky-500 shrink-0" />
      <span className="text-gray-700">{item}</span>
    </li>
  ))}
</ul>

              <Link
                to="/contacts"
                className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Request Residential Pool Service
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-24 bg-gradient-to-b from-sky-50 to-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Choose Your Residential Pool Pricing Plan
            </h2>
            <p className="text-xl text-gray-600">Select the maintenance package that works best for you</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Weekly Maintenance - 4 months */}
            <div className="bg-gradient-to-br from-sky-50 to-sky-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-sky-200">
              <div className="text-center">
                <div className="text-4xl font-bold text-sky-600 mb-2">$2,800</div>
                <div className="text-sm text-gray-600 mb-4">4 payments - $700</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Weekly Maintenance</h3>
                <p className="text-gray-700 mb-6 text-sm">4-month residential pool service plan<br />Includes pool opening, pool closing, and 15 weekly maintenance visits</p>
                <Link
                  to="/contacts"
                  className="inline-flex items-center justify-center w-full bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                >
                  Request This Plan
                </Link>
              </div>
            </div>

            {/* Weekly Maintenance - 5 months */}
            <div className="relative bg-gradient-to-br from-sky-100 to-sky-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border-2 border-sky-400">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-sky-500 text-white px-4 py-1 rounded-full text-sm font-bold z-10">POPULAR</div>
              <div className="text-center">
                <div className="text-4xl font-bold text-sky-600 mb-2 mt-4">$3,250</div>
                <div className="text-sm text-gray-600 mb-4">5 payments - $650</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Weekly Maintenance</h3>
                <p className="text-gray-700 mb-6 text-sm">5-month residential pool service plan<br />Includes pool opening, pool closing, and 20 weekly maintenance visits</p>
                <Link
                  to="/contacts"
                  className="inline-flex items-center justify-center w-full bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                >
                  Request This Plan
                </Link>
              </div>
            </div>

            {/* Bi-weekly Maintenance - 4 months */}
            <div className="bg-gradient-to-br from-sky-50 to-sky-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-sky-200">
              <div className="text-center">
                <div className="text-4xl font-bold text-sky-600 mb-2">$2,200</div>
                <div className="text-sm text-gray-600 mb-4">4 payments - $550</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Bi-Weekly Maintenance</h3>
                <p className="text-gray-700 mb-6 text-sm">4 months<br />Includes pool opening, pool closing, and 8 bi-weekly maintenance visits</p>
                <Link
                  to="/contacts"
                  className="inline-flex items-center justify-center w-full bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                >
                  Request This Plan
                </Link>
              </div>
            </div>

            {/* Bi-weekly Maintenance - 5 months */}
            <div className="bg-gradient-to-br from-sky-50 to-sky-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-sky-200">
              <div className="text-center">
                <div className="text-4xl font-bold text-sky-600 mb-2">$2,500</div>
                <div className="text-sm text-gray-600 mb-4">5 payments - $500</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Bi-Weekly Maintenance</h3>
                <p className="text-gray-700 mb-6 text-sm">5 months<br />Includes pool opening, pool closing, and 10 bi-weekly maintenance visits</p>
                <Link
                  to="/contacts"
                  className="inline-flex items-center justify-center w-full bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                >
                 Request This Plan
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Opening and Closing */}
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-amber-200">
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-600 mb-2">$1,000</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Residential Pool Opening & Closing Package</h3>
                <p className="text-gray-700 mb-6 text-sm">Includes seasonal pool opening, pool closing, chemicals, and vacuuming</p>
                <Link
                  to="/contacts"
                  className="inline-flex items-center justify-center w-full bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                >
                  Order Now
                </Link>
              </div>
            </div>

            {/* Pool Drain and Cleaning */}
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-emerald-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">$800 - $1,500</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Pool Draining & Pressure Cleaning</h3>
                <p className="text-gray-700 mb-6 text-sm">Acid & Pressure Cleaning + Deck Pressure Cleaning</p>
                <Link
                  to="/contacts"
                  className="inline-flex items-center justify-center w-full bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                >
                  Order Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        className="py-24 relative water-bg"
        style={{
          backgroundImage: `url(${backgroundWater})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-slate-50/60 md:bg-slate-50/80"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Residential Services
            </h2>
          </div>

          {/* Services We Offer */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Residential Pool Services We Offer</h3>
              <ul className="space-y-3">
                {[
                  "Residential Pool Opening",
                  "Residential Pool Closing & Winterization",
                  "Pool Renovation & Resurfacing",
                  "Pool Pump & Motor Repair",
                  "Pool Whitecoating & Replastering",
                  "Pool Deck, Tile & Coping Repair and Replacement",
                  "Filter System Installation & Repair",
                  "Pool Skimmer Repair & Replacement",
                  "Pool Main Drain Repair & Replacement",
                  "Pool Safety Cover Installation & Replacement",
                   "Vinyl Liner Replacement",
                   "Pool Leak Detection",
                  "Pool Plumbing Pressure Testing",
                  "Pool Water Chemistry Testing & Balancing"
                ].map((service, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pool Drain & Cleaning */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Residential Pool Opening Service</h3>
              <p className="text-sky-600 font-bold mb-6">Complete Residential Pool Opening & Startup</p>
              <ul className="space-y-3">
                {[
                  "Pool Safety Cover Removal, Cleaning & Storage",
"Pool Filter & Pump Reassembly",
"Pool Deck Debris Removal",
"Initial Pool Vacuuming – Up to 45 Minutes",
"Brushing of Pool Interior Surfaces",
"Pool Heater Startup & Initial Ignition",
"Reinstallation of Ladders & Diving Boards",
"Waterline Tile Cleaning",
"Initial Pool Water Chemical Treatment"
                ].map((service, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

{/* Residential Pool Chemicals, Supplies & Equipment + Winterization */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">

  {/* Residential Pool Chemicals, Supplies & Equipment */}
  <div className="bg-white rounded-xl p-8 shadow-lg">
    <h3 className="text-2xl font-bold text-gray-900 mb-6">
      Residential Pool Chemicals, Supplies & Equipment
    </h3>

    <ul className="space-y-3">
      {[
        "Pool Water Balancing Chemicals",
        "Pool Sanitizers & Disinfectants",
        "Chlorinators & Chemical Feed Systems",
        "Pool Controllers & Automation Systems",
        "Ozonators & Water Treatment Equipment",
        "Pool Safety Covers",
        "Pool Cleaning & Maintenance Supplies",
        "Pool Equipment Repair Parts",
        "Pool Deck Furniture & Accessories"
      ].map((service, index) => (
        <li key={index} className="flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
          <span className="text-gray-700">{service}</span>
        </li>
      ))}
    </ul>
  </div>

  {/* Residential Pool Closing & Winterization */}
  <div className="bg-white rounded-xl p-8 shadow-lg">
    <h3 className="text-2xl font-bold text-gray-900 mb-6">
      Residential Pool Closing & Winterization
    </h3>

    <ul className="space-y-3">
      {[
        "Remove Leaves & Debris From Pool and Spa",
        "Lower Pool Water Level",
        "Blow Out Pool Plumbing Lines",
        "Plug Return Inlets & Pool Fittings",
        "Supply & Apply Winterizing Chemicals",
        "Winterize Pool Pump, Filter & Equipment",
        "Remove Ladders & Diving Boards",
        "Install Pool Safety Cover"
      ].map((service, index) => (
        <li key={index} className="flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
          <span className="text-gray-700">{service}</span>
        </li>
      ))}
    </ul>
  </div>

</div>

{/* Residential Pool Maintenance */}
<div className="bg-white rounded-xl p-8 shadow-lg">
  <h3 className="text-2xl font-bold text-gray-900 mb-6">
    Residential Pool Maintenance
  </h3>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <ul className="space-y-3">
      {[
        "Brush Pool Interior Surfaces",
        "Vacuum Pool",
        "Clean Skimmer Baskets",
        "Clean Waterline Tile"
      ].map((service, index) => (
        <li key={index} className="flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
          <span className="text-gray-700">{service}</span>
        </li>
      ))}
    </ul>

    <ul className="space-y-3">
      {[
        "Clean Pump Strainer Basket",
        "Backwash Pool Filter as Needed",
        "Test & Balance Pool Water Chemistry",
        "Supply & Apply Required Pool Chemicals",
        "Remove Debris From Pool Deck"
      ].map((service, index) => (
        <li key={index} className="flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
          <span className="text-gray-700">{service}</span>
        </li>
      ))}
    </ul>
  </div>
</div>
</div>
      </section>

      {/* CTA */}
      <section
        className="py-20 relative water-bg"
        style={{
          backgroundImage: `url(${backgroundWater})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
  <h2 className="text-3xl font-bold text-white mb-6">
    Ready for Professional Residential Pool Service?
  </h2>
  <p className="text-xl text-white/90 mb-8">
    Contact MGN Pools for reliable residential pool maintenance, opening, closing, repairs, and renovations throughout Northern Virginia and Washington, DC.
  </p>
  <Link
    to="/contacts"
    className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-sky-600 px-8 py-4 rounded-lg font-bold text-lg transition-colors"
  >
    Request a Free Estimate
    <ArrowRight className="w-5 h-5" />
  </Link>
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
              to="/commercial"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow hover:bg-sky-50 group"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-sky-600">
                Commercial Pool Management
              </h3>
              <p className="text-gray-600 mb-4">
  Complete commercial pool management, lifeguard staffing, maintenance, and repair services throughout Northern Virginia and Washington, DC.
</p>
              <span className="text-sky-600 font-semibold flex items-center gap-2">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link
              to="/renovations"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow hover:bg-sky-50 group"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-sky-600">
                Pool Repairs & Renovations
              </h3>
              <p className="text-gray-600 mb-4">
                Professional pool repair, renovation, resurfacing, tile, coping, and equipment services for residential and commercial pools.
              </p>
              <span className="text-sky-600 font-semibold flex items-center gap-2">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link
              to="/repair"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow hover:bg-sky-50 group"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-sky-600">
                Leak Detection & Repair
              </h3>
              <p className="text-gray-600 mb-4">
                Professional pool leak detection, pressure testing, and leak repair for residential and commercial swimming pools.
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

