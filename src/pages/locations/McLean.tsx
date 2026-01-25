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
  name: "McLean",
  state: "VA",
  fullName: "McLean, VA",
  neighborhoods: "Tysons Corner, Great Falls, Langley, McLean Gardens",
  description: "serving Tysons Corner, Langley, and McLean Gardens",
  geo: { latitude: "38.9339", longitude: "-77.1773" }
};

const services = [
  {
    icon: Building2,
    title: "Commercial Pool Management",
    description: `MGN Pools Management specializes in providing quality commercial pool management services in ${cityInfo.fullName} and throughout Northern Virginia, DC and MD. Our team guarantee the fastest response to anything related to your swimming pool. We offer customized solutions that will fit our clients unique needs.`,
    link: "/commercial"
  },
  {
    icon: HomeIcon,
    title: "Residential Pool Services",
    description: "MGN POOLS understands that the swimming pool is not only an important asset to you, but it is a place for relaxation and fun.",
    link: "/residential"
  },
  {
    icon: Wrench,
    title: "Pool Repairs and Renovation",
    description: "MGN POOLS offers expert pool repair service. We are fully licensed, certified and insured to perform any type of pool repairs and renovations. You can trust our professionals with any pool repair from equipment to renovations.",
    link: "/renovations"
  },
  {
    icon: Search,
    title: "Swimming Pool Leak Detection and Repair",
    description: "Swimming pools can leak through any of the fittings or accessories, plumbing, or even right through the shell. It is important to repair leaks, not only to save water, heat, and chemicals, but also to prevent undermining pool structural components and washing away fill dirt.",
    link: "/repair"
  },
];

const howWeHelp = [
  {
    icon: Building2,
    title: "Commercial Pool Management",
    description: `MGN Pools Management specializes in providing quality commercial pool management services in ${cityInfo.fullName} to apartment complexes, HOAs, hotels and recreation facilities.`,
    link: "/commercial"
  },
  {
    icon: HomeIcon,
    title: "Residential Pool Services",
    description: "MGN Pools understands that the swimming pool is not only an important asset to you, but it is a place for relaxation and fun.",
    link: "/residential"
  },
  {
    icon: Wrench,
    title: "Pool Repairs And Renovations",
    description: "We are fully licensed, certified and insured to perform any type of pool repairs and renovations. You can trust our professionals.",
    link: "/renovations"
  },
];

export const McLeanPage = () => {

  return (
    <>
      <Helmet>
        <title>Pool Company & Lifeguard Services in {cityInfo.fullName} | Pool Service, Management & Repairs | MGN Pools</title>
        <meta
          name="description"
          content={`Top-rated pool company and lifeguard services in ${cityInfo.fullName}. Professional pool service, pool management, pool repairs, and certified pool lifeguard staffing. Trusted lifeguard company serving ${cityInfo.name} since 2010.`}
        />
        <link
          rel="canonical"
          href={`https://mgnpools.com/locations/mclean-pool-service`}
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`Pool Company & Lifeguard Services in ${cityInfo.fullName} | MGN Pools`} />
        <meta property="og:description" content={`Top-rated pool company and lifeguard services in ${cityInfo.fullName}. Professional pool service, pool management, pool repairs, and certified pool lifeguard staffing. ${cityInfo.description}.`} />
        <meta property="og:url" content={`https://mgnpools.com/locations/mclean-pool-service`} />
        <meta property="og:site_name" content="MGN Pools" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Pool Company & Lifeguard Services ${cityInfo.fullName} | MGN Pools`} />
        <meta name="twitter:description" content={`Top-rated pool company and lifeguard services in ${cityInfo.fullName}. Pool service, pool management, pool repairs & pool lifeguard staffing.`} />

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
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": cityInfo.geo.latitude,
              "longitude": cityInfo.geo.longitude
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
              "Pool Company",
              "Pool Service",
              "Pool Management",
              "Pool Repairs",
              "Pool Renovation",
              "Lifeguard Company",
              "Lifeguard Services",
              "Pool Lifeguard",
              "Lifeguard Staffing",
              "Lifeguard Training",
              "Pool Maintenance",
              "Pool Cleaning"
            ]
          })}
        </script>
      </Helmet>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-32">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt={`Pool company and lifeguard services in ${cityInfo.fullName} - pool service, pool management, pool repairs`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-sky-700/70" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sky-300 text-lg md:text-xl mb-6 font-medium"
          >
            Trusted Pool Experts in {cityInfo.fullName}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Pool Company & Lifeguard Services in {cityInfo.fullName}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/90 mb-6 max-w-3xl mx-auto mt-4"
          >
            MGN Pools is your trusted <strong>pool company</strong> and <strong>lifeguard company</strong> serving {cityInfo.name} homeowners and businesses. We provide professional <strong>pool service</strong>, <strong>pool management</strong>, and <strong>pool repairs</strong> including cleaning, maintenance, and certified <strong>pool lifeguard</strong> staffing for commercial and residential pools in <strong>{cityInfo.fullName}</strong> and across Northern Virginia, Maryland & the DC metro area.
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
              Get a Free Quote in 24 Hours
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
            Serving {cityInfo.neighborhoods} and all of {cityInfo.fullName} since 2010.
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
              Trusted Pool Company & Management in {cityInfo.fullName}
            </h2>
            <p className="text-lg text-gray-600">
              Premier pool company providing pool service and pool management in {cityInfo.fullName}, {cityInfo.description}, and across Northern Virginia, Maryland & the DC metro area
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
            <p className="text-lg text-gray-600">from MGN Pools!</p>
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
                Training and Certifications in {cityInfo.fullName}
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                As a trusted <strong>lifeguard company</strong> in {cityInfo.fullName}, MGN Pools Management provides professional <strong>lifeguard staffing services</strong> and American Red Cross Lifeguard Classes. Our pool management solutions include hiring, training, and supervising certified lifeguards. The Lifeguard classes include training in First Aid, AED and CPR for the Professional Rescuer.
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
                  alt={`Lifeguard company and lifeguard staffing services in ${cityInfo.fullName}`}
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
              Your Trusted Pool Company & Lifeguard Services in {cityInfo.fullName}
            </h2>
            <div className="prose prose-lg text-gray-600 max-w-none">
              <p className="mb-4">
                Looking for a reliable <strong>pool company {cityInfo.fullName}</strong>? MGN Pools is your
                trusted <strong>lifeguard company {cityInfo.fullName}</strong> providing comprehensive
                <strong> pool service {cityInfo.fullName}</strong> for residential and commercial properties.
              </p>
              <p className="mb-4">
                Our professional <strong>pool management {cityInfo.fullName}</strong> team handles everything
                from routine maintenance to complete <strong>pool repairs {cityInfo.fullName}</strong>.
                We also offer certified <strong>pool lifeguard {cityInfo.fullName}</strong> staffing
                and <strong>lifeguard {cityInfo.fullName}</strong> training services.
              </p>
              <p>
                As the leading <strong>lifeguard company</strong> and <strong>pool company</strong> in {cityInfo.name},
                we pride ourselves on delivering exceptional <strong>pool service</strong>, <strong>pool management</strong>,
                and <strong>pool repairs</strong> throughout {cityInfo.fullName} and the surrounding areas.
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
            Ready for Professional Pool Services in {cityInfo.fullName}?
          </h2>
          <Link
            to="/contacts"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-sky-600 px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-xl"
          >
            Contact Us
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
              Companies That We Work With in {cityInfo.fullName}
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

