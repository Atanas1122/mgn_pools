import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, ChevronDown, Building2, Home as HomeIcon, Wrench, Search, GraduationCap, Droplets } from 'lucide-react';
import LifeGuard from '../assets/images/home/lifeguad.png';
import backgroundWater from '../assets/images/home/background_water.webp';
import heroBackground from '../assets/images/home/hero_background.png';
import { CitySelector } from '../components/CitySelector';

// Company logos
import Company1 from '../assets/images/companies/company1.jpg';
import Company2 from '../assets/images/companies/company2.jpg';
import Company3 from '../assets/images/companies/company3.jpg';
import Company4 from '../assets/images/companies/company4.jpg';
import Company5 from '../assets/images/companies/company5.jpg';

const companyLogos = [Company1, Company2, Company3, Company4, Company5];

const services = [
  {
    icon: Building2,
    title: "Commercial Pool Management",
    description: "MGN Pools provides complete commercial pool management for apartments, condominiums, HOAs, and recreation facilities throughout Northern Virginia and Washington, DC.",
    link: "/commercial"
  },
  {
    icon: HomeIcon,
    title: "Residential Pool Services",
    description: "MGN Pools provides professional residential pool maintenance, repairs, renovations, opening, closing, and seasonal pool services throughout Northern Virginia and Washington, DC.",
    link: "/residential"
  },
  {
    icon: Wrench,
    title: "Pool Repairs and Renovation",
    description: "MGN Pools provides professional swimming pool repairs and renovations, including plaster, tile, coping, equipment replacement, plumbing repairs, and pool restoration.",
    link: "/renovations"
  },
  {
    icon: Search,
    title: "Swimming Pool Leak Detection and Repair",
    description: "MGN Pools provides professional pool leak detection, pressure testing, and leak repair for plumbing, fittings, equipment, and pool structures.",
    link: "/repair"
  },
];

const howWeHelp = [
  {
    icon: Building2,
    title: "Commercial Pool Management",
    description: "MGN Pools provides complete commercial pool management for apartments, condominiums, HOAs, and recreation facilities throughout Northern Virginia and Washington, DC.",
    link: "/commercial"
  },
  {
    icon: HomeIcon,
    title: "Residential Pool Services",
    description: "MGN Pools provides professional residential pool maintenance, repairs, renovations, opening, closing, and seasonal pool services throughout Northern Virginia and Washington, DC.",
    link: "/residential"
  },
  {
    icon: Wrench,
    title: "Pool Repairs And Renovations",
    description: "MGN Pools provides professional swimming pool repairs and renovations, including plaster, tile, coping, equipment replacement, plumbing repairs, and pool restoration.",
    link: "/renovations"
  },
];

export const HomePage = () => {

  return (
    <>
      <Helmet>
        <title>Commercial Pool Management & Lifeguard Services | Northern Virginia & DC | MGN Pools</title>
        <meta
          name="description"
          content="MGN Pools provides commercial pool management, lifeguard staffing, pool repairs and renovations for apartments, condominiums and HOAs throughout Northern Virginia and Washington, DC."        />
        <link rel="canonical" href="https://mgnpools.com/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Commercial Pool Management & Lifeguard Services | Northern Virginia & DC | MGN Pools" />
        <meta property="og:description" content="MGN Pools provides commercial pool management, lifeguard staffing, pool repairs and renovations for apartments, condominiums and HOAs throughout Northern Virginia and Washington, DC." />        <meta property="og:url" content="https://mgnpools.com/" />
        <meta property="og:site_name" content="MGN Pools" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Commercial Pool Management & Lifeguard Services | Northern Virginia & DC | MGN Pools" />
        <meta name="twitter:description" content="MGN Pools provides commercial pool management, lifeguard staffing, pool repairs and renovations for apartments, condominiums and HOAs throughout Northern Virginia and Washington, DC." />
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "GeneralContractor",
            "@id": "https://mgnpools.com/#localbusiness",
            "name": "MGN Pools",
            "image": "https://mgnpools.com/logo.png",
            "telephone": "+1-571-275-3696",
            "email": "mgnpools@yahoo.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "5954 Hall Street",
              "addressLocality": "Springfield",
              "addressRegion": "VA",
              "postalCode": "22152",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "38.7800",
              "longitude": "-77.1900"
            },
            "url": "https://mgnpools.com",
            "priceRange": "$$",
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:00",
                "closes": "18:00"
              }
            ],
            "areaServed": [
              {
                "@type": "State",
                "name": "Virginia"
              },
              {
                "@type": "City",
                "name": "Washington, DC"
              },
              {
                "@type": "City",
                "name": "Springfield"
              },
              {
                "@type": "City",
                "name": "Alexandria"
              },
              {
                "@type": "City",
                "name": "Arlington"
              },
              {
                "@type": "City",
                "name": "Fairfax"
              },
              {
  "@type": "City",
  "name": "Falls Church"
},
              {
  "@type": "City",
  "name": "Lorton"
},
              {
  "@type": "City",
  "name": "Manassas"
},
              {
                "@type": "City",
                "name": "Woodbridge"
              },
              {
                "@type": "City",
                "name": "Vienna"
              },
              {
                "@type": "City",
                "name": "McLean"
              },
              {
                "@type": "City",
                "name": "Great Falls"
              }
            ],
            "serviceType": [
              "Commercial Pool Management",
"Residential Pool Service",
"Pool Maintenance",
"Pool Repair",
"Pool Leak Detection and Repair",
"Pool Renovation",
"Pool Opening and Winterization",
"Pool Water Treatment",
"Lifeguard Staffing",
"Lifeguard Training"
            ]
          })}
        </script>
      </Helmet>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-32">
        <div className="absolute inset-0 z-0">
          <img
            src={heroBackground}
            alt="Professional pool services and pool management services in Springfield VA, Washington DC, Alexandria, Woodbridge, Mount Vernon, and Northern Virginia"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/65 via-blue-400/60 to-cyan-500/65" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-10 md:pt-14">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Commercial & Residential Pool Management, Repair & Renovation Services in Northern Virginia & Washington, DC
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-lg text-white/90 mb-6 max-w-3xl mx-auto mt-4"
          >
           MGN Pools provides professional commercial pool management, residential pool services, certified lifeguard staffing, pool repairs and renovations throughout Northern Virginia and Washington, DC.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-6"
          >
            <Link
              to="/bid"
              className="bg-sky-500 hover:bg-sky-400 text-white text-lg px-8 py-4 rounded-lg font-semibold transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-2"
            >
              Request a Pool Proposal
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="#services"
              className="bg-white/20 hover:bg-white/30 text-white border border-white/30 text-lg px-8 py-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
            >
              Our Services
              <ChevronDown className="w-5 h-5" />
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-sm md:text-base text-sky-200/90 text-center mt-8"
          >
            Serving Alexandria, Arlington, Springfield, Fairfax, Falls Church, McLean, Great Falls, Lorton, Woodbridge, Manassas, and communities throughout Northern Virginia and Washington, DC.
          </motion.p>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-24 relative water-bg"
        style={{
          backgroundImage: `url(${backgroundWater})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-white/70 md:bg-white/85"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Commercial & Residential Pool Management, Repair & Renovation Services in Northern Virginia & Washington, DC
            </h2>
            <p className="text-lg text-gray-600">
              MGN Pools provides commercial pool management and lifeguard staffing, along with commercial and residential pool repairs, renovations, and maintenance throughout Northern Virginia and Washington, DC.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-slate-50 rounded-2xl p-8 hover:shadow-xl transition-shadow group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-sky-100 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-sky-500 transition-colors">
                    <service.icon className="w-7 h-7 text-sky-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                    <Link
                      to={service.link}
                      className="inline-flex items-center gap-2 text-sky-600 font-semibold hover:text-sky-700"
                    >
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Can Help Section */}
      <section className="py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How MGN Pools Can Help
            </h2>
            <p className="text-lg text-gray-600">Professional Pool Services for Commercial and Residential Properties</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howWeHelp.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="w-20 h-20 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-sky-500 transition-colors">
                  <Droplets className="w-10 h-10 text-sky-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{item.description}</p>
                <Link
                  to={item.link}
                  className="inline-flex items-center gap-2 text-sky-600 font-semibold hover:text-sky-700"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section className="py-24 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-8 h-8 text-sky-300" />
                <span className="text-sky-300 font-semibold uppercase tracking-wider text-sm">Training</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Lifeguard Training & Certification
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                MGN Pools offers American Red Cross lifeguard training and certification courses to help prepare professional lifeguards for commercial aquatic facilities.
              </p>
              <Link
                to="/training"
                className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                View Lifeguard Training
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={LifeGuard}
                  alt="Lifeguard Training"
                  className="w-full h-[350px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 relative water-bg"
        style={{
          backgroundImage: `url(${backgroundWater})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-sky-500/70 md:bg-sky-500/85"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Request a Pool Service Proposal or Estimate
          </h2>
          <Link
            to="/contacts"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-sky-600 px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-xl"
          >
            Request a Proposal
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* City Selector Section */}
      <CitySelector />

      {/* Companies Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Trusted by Property Management Companies and Communities
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
            className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
          >
            {companyLogos.map((logo, index) => (
              <div
                key={index}
                className="cursor-pointer transition-transform duration-300 hover:scale-105 hover:-translate-y-1 hover:drop-shadow-lg"
              >
                <img
                  src={logo}
                  alt={`MGN Pools partner company logo ${index + 1}`}
                  className="h-16 md:h-20 w-auto object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};
