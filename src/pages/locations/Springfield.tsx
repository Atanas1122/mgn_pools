import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, ChevronDown, Building2, Home as HomeIcon, Wrench, Search, GraduationCap, Droplets } from 'lucide-react';
import LifeGuard from '../../assets/images/home/lifeguad.png';
import backgroundWater from '../../assets/images/home/background_water.webp';

// Company logos
import Company1 from '../../assets/images/companies/company1.jpg';
import Company2 from '../../assets/images/companies/company2.jpg';
import Company3 from '../../assets/images/companies/company3.jpg';
import Company4 from '../../assets/images/companies/company4.jpg';
import Company5 from '../../assets/images/companies/company5.jpg';

const companyLogos = [Company1, Company2, Company3, Company4, Company5];

const cityInfo = {
  name: "Springfield",
  state: "VA",
  fullName: "Springfield, VA",
  neighborhoods: "West Springfield, North Springfield, Burke, Newington, Franconia",
  description: "serving West Springfield, North Springfield, Burke, Newington, Franconia, and surrounding communities"
};

const services = [
  {
    icon: Building2,
    title: "Commercial Pool Management",
    description: `MGN Pools provides professional commercial pool management in ${cityInfo.fullName} for apartments, condominiums, HOAs, and recreation facilities. Our services include certified lifeguard staffing, pool maintenance, water chemistry, opening and closing, inspections, and ongoing facility support.`,    link: "/commercial"
  },
  {
    icon: HomeIcon,
    title: "Residential Pool Services",
    description: `MGN Pools provides professional residential pool services in ${cityInfo.fullName}, including pool maintenance, seasonal opening and winterization, equipment repairs, leak detection, and pool renovations.`,    link: "/residential"
  },
  {
    icon: Wrench,
    title: "Pool Repairs and Renovation",
    description: `MGN Pools provides professional pool repairs and renovations in ${cityInfo.fullName}, including equipment replacement, plaster and resurfacing, tile and coping repairs, plumbing repairs, and other swimming pool improvements.`,    link: "/renovations"
  },
  {
    icon: Search,
    title: "Swimming Pool Leak Detection and Repair",
    description: `MGN Pools provides professional pool leak detection and repair in ${cityInfo.fullName}, including pressure testing, leak locating, plumbing leak repairs, and evaluation of pool shells, fittings, skimmers, and main drains.`,    link: "/repair"
  },
];

const howWeHelp = [
  {
    icon: Building2,
    title: "Commercial Pool Management",
    description: `Professional commercial pool management in ${cityInfo.fullName} for apartments, condominiums, HOAs, hotels, and recreation facilities, including lifeguard staffing, maintenance, water chemistry, and seasonal operations.`,    link: "/commercial"
  },
  {
    icon: HomeIcon,
    title: "Residential Pool Services",
    description: `Professional residential pool services in ${cityInfo.fullName}, including maintenance, seasonal opening and winterization,    link: "/residential"
  },
  {
    icon: Wrench,
    title: "Pool Repairs And Renovations",
    description: "Professional pool repairs and renovations in Springfield, VA, including equipment replacement, plumbing repairs, plaster and resurfacing, tile and coping repairs, and other pool improvements.",
    link: "/renovations"
  },
];

export const SpringfieldPage = () => {

  return (
    <>
      <Helmet>
      <title>Commercial Pool Management & Residential Pool Services Springfield VA | MGN Pools</title>
        <meta
          name="description"
           content="MGN Pools provides commercial pool management, lifeguard staffing, residential pool services, repairs and renovations throughout Springfield, VA. Serving Springfield since 2007."
        />
        <link
          rel="canonical"
          href="https://mgnpools.com/locations/springfield-pool-service"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
         property="og:title"
         content="Commercial Pool Management & Residential Pool Services in Springfield, VA | MGN Pools"
        />
        <meta
         property="og:description"
         content="MGN Pools provides commercial pool management, lifeguard staffing, residential pool services, repairs and renovations throughout Springfield, VA. Serving Springfield since 2007."
         />
        <meta property="og:url" content="https://mgnpools.com/locations/springfield-pool-service" />
        <meta property="og:site_name" content="MGN Pools" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
       <meta
         name="twitter:title"
         content="Commercial Pool Management & Residential Pool Services in Springfield, VA | MGN Pools"
       />       
       <meta
         name="twitter:description"
         content="MGN Pools provides commercial pool management, lifeguard staffing, residential pool services, repairs and renovations throughout Springfield, VA."
       />
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HomeAndConstructionBusiness",
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
                "@type": "City",
                "name": cityInfo.name
              }
            ],
            "serviceType": [
  "Commercial Pool Management",
  "Lifeguard Staffing",
  "Residential Pool Services",
  "Pool Maintenance",
  "Pool Cleaning",
  "Pool Opening and Winterization",
  "Pool Leak Detection and Pressure Testing",
  "Pool Repair",
  "Pool Renovation and Resurfacing",
  "Lifeguard Training and Certification"
]
          })}
        </script>
      </Helmet>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-32">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Commercial pool management and residential pool services in Springfield, VA"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/65 via-blue-400/60 to-cyan-500/65" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sky-300 text-lg md:text-xl mb-6 font-medium"
          >
           Serving Springfield Pools Since 2007
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Commercial Pool Management & Residential Pool Services in {cityInfo.fullName}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/90 mb-6 max-w-3xl mx-auto mt-4"
          >
            MGN Pools provides professional <strong>commercial pool management</strong>, <strong>certified lifeguard staffing</strong>, <strong>pool repairs and renovations</strong>, and <strong>residential pool services</strong> throughout <strong>{cityInfo.fullName}</strong>, including West Springfield, North Springfield, Burke, Newington, and Franconia.
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
              Request a Proposal
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="#services"
              className="bg-white/10 backdrop-blur hover:bg-white/20 text-white border border-white/30 text-lg px-8 py-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
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
            Serving {cityInfo.neighborhoods} and surrounding Springfield communities.
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
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Professional Pool Service Company in {cityInfo.fullName}
            </h2>
            <p className="text-lg text-gray-600">
              Commercial pool management, lifeguard staffing, residential pool services, repairs and renovations throughout {cityInfo.fullName} and surrounding Springfield communities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-50 rounded-2xl p-8 hover:shadow-xl transition-all group"
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
      <section  className="py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Can Help You in {cityInfo.fullName}
            </h2>
            <p className="text-lg text-gray-600">Complete pool management, maintenance, repair and renovation solutions for commercial and residential properties.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howWeHelp.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all group"
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
      <section  className="py-24 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-8 h-8 text-sky-300" />
                <span className="text-sky-300 font-semibold uppercase tracking-wider text-sm">Training</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Lifeguard Training & Certification in {cityInfo.fullName}
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                MGN Pools provides professional <strong>lifeguard training and certification</strong> in {cityInfo.fullName}. Our American Red Cross Lifeguard classes include First Aid, CPR, AED, and professional rescuer skills. We also provide certified <strong>lifeguard staffing</strong> for commercial swimming pools throughout Springfield.
              </p>
              <Link
                to="/training"
                className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white px-8 py-4 rounded-lg font-semibold transition-all"
              >
                Learn More About Training
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={LifeGuard}
                  alt="American Red Cross lifeguard training and certified lifeguard staffing in Springfield, VA"
                  className="w-full h-[350px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
              Commercial & Residential Pool Services in {cityInfo.fullName}
            </h2>
            <div className="prose prose-lg text-gray-600 max-w-none">
              <<p className="mb-4">
               MGN Pools provides <strong>commercial pool management</strong> in {cityInfo.fullName} for apartment communities, condominiums, HOAs, and recreation facilities. Our services include lifeguard staffing, routine maintenance, water chemistry management, seasonal opening and closing, and pool facility support.
              </p>
              <<p className="mb-4">
                We also provide <strong>residential pool services</strong> throughout Springfield, including maintenance, opening and winterization, equipment repairs, leak detection and pressure testing, and pool renovations.
              </p>
              <p>
                 Serving Springfield since 2007, MGN Pools provides professional pool services throughout West Springfield, North Springfield, Burke, Newington, Franconia, and surrounding Springfield communities.
              </p>
            </div>
          </motion.div>
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
            Request a Pool Service Proposal in {cityInfo.fullName}
          </h2>
          <Link
            to="/bid"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-sky-600 px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-xl"
          >
            Request a Proposal
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Commercial Properties We Serve in {cityInfo.fullName}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
          >
            {companyLogos.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="cursor-pointer transition-shadow duration-300 hover:drop-shadow-lg"
              >
                <img
                  src={logo}
                  alt={`MGN Pools partner company logo ${index + 1}`}
                  className="h-16 md:h-20 w-auto object-contain"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

