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
    description: `Springfield-based MGN Pools manages swimming pools for apartment communities, condominium associations, HOAs, and recreational facilities. Commercial pool services can include lifeguard staffing, daily cleaning, water chemistry testing and treatment, equipment checks, seasonal opening and winterization, inspection coordination, and on-site supervision.`,
    link: "/commercial"
  },
  {
    icon: HomeIcon,
    title: "Residential Pool Services",
    description: `Residential pool maintenance in Springfield and nearby communities, including routine cleaning and water care, spring opening, winterization, pump and filter troubleshooting, leak detection, equipment repairs, and renovation planning.`,
    link: "/residential"
  },
  {
    icon: Wrench,
    title: "Pool Repairs and Renovations",
    description: `Pool equipment repairs and renovations for Springfield-area commercial and residential facilities, including pumps, filters, plumbing, plaster and resurfacing, tile, coping, and equipment replacement. Projects are evaluated based on the condition of the pool and the requested scope.`,
    link: "/renovations"
  },
  {
    icon: Search,
    title: "Swimming Pool Leak Detection and Repair",
    description: `Swimming pool leak detection and pressure testing in Springfield, including evaluation of underground plumbing, skimmers, fittings, equipment connections, and pool structures. We help investigate unexplained water loss and discuss appropriate repairs.`,
    link: "/repair"
  },
];

const howWeHelp = [
  {
    icon: Building2,
    title: "Commercial Pool Management",
    description: `Commercial pool management and lifeguard staffing for Springfield condominium, apartment, HOA, and recreational pools, with customized seasonal operations, maintenance, and water chemistry services.`,
    link: "/commercial"
  },
  {
    icon: HomeIcon,
    title: "Residential Pool Services",
    description: `Residential pool maintenance, opening and winterization, water care, equipment repairs, leak detection, and renovations for Springfield homeowners.`,
    link: "/residential"
  },
  {
    icon: Wrench,
    title: "Pool Repairs and Renovations",
    description: "Commercial and residential pool repairs and renovations in Springfield, including equipment, plumbing, plaster, tile, coping, and resurfacing projects.",
    link: "/renovations"
  },
];

const springfieldFaqs = [
  { question: "What does commercial pool management include in Springfield, VA?", answer: "MGN Pools provides commercial swimming pool management for apartment buildings, condominium associations, homeowners associations, and recreational facilities in Springfield and surrounding Northern Virginia communities. A management proposal can include certified lifeguard staffing, daily cleaning, water chemistry testing and adjustments, equipment checks, pool opening and winterization, and operational supervision. We also help properties prepare for required pool inspections and address maintenance concerns during the swimming season. Each pool has different operating hours, staffing requirements, and equipment, so the specific responsibilities are outlined in the agreement. Property managers can request a customized proposal for their facility." },
  { question: "Does MGN Pools provide lifeguard staffing for Springfield HOA and condominium pools?", answer: "Yes. MGN Pools provides lifeguard staffing for commercial swimming pools, including condominium communities, apartment properties, HOAs, and recreation facilities in Springfield and nearby areas. We work with property representatives to review operating hours, the number of guards requested, and the pool’s specific needs. Staffing can be combined with daily cleaning, chemical management, seasonal operations, and routine equipment maintenance under a broader pool management agreement. Lifeguard coverage and scheduling are determined for each property rather than offered as a one-size-fits-all package. To discuss staffing, share your facility address, proposed pool schedule, and anticipated coverage requirements." },
  { question: "Is MGN Pools located in Springfield, Virginia?", answer: "Yes. MGN Pools is based at 5954 Hall Street, Springfield, VA 22152. Established in 2007, the company provides commercial swimming pool management, lifeguard staffing, residential pool services, repairs, renovations, and leak detection throughout Northern Virginia and Washington, DC. Springfield is a convenient base for serving nearby communities such as West Springfield, North Springfield, Burke, Franconia, and Newington. Whether you represent a condominium board, apartment property, HOA, or private residence, contact MGN Pools with the pool location and requested services so our team can review availability and the appropriate scope of work." },
  { question: "Which neighborhoods near Springfield does MGN Pools serve?", answer: "MGN Pools serves Springfield and surrounding Northern Virginia communities, including West Springfield, North Springfield, Burke, Newington, and Franconia. Our broader service area also includes locations such as Alexandria, Arlington, Fairfax, and Washington, DC. Services may include commercial pool management, lifeguard staffing, residential maintenance, equipment repairs, pool renovations, and leak detection, depending on the property and scheduling availability. For commercial facilities, we review pool size, operating hours, staffing needs, and maintenance responsibilities when preparing a proposal. If your property is in a nearby neighborhood not listed here, contact us with the address and type of service requested." },
  { question: "Can MGN Pools open and winterize commercial pools in Springfield?", answer: "Yes. Seasonal pool opening and winterization are available for commercial and residential pools in Springfield and surrounding areas. Opening services may include preparing equipment, starting circulation and filtration, cleaning, evaluating water conditions, and preparing the pool for its intended operating season. Winterization involves procedures appropriate to the pool and equipment to help protect the facility during the off-season. The precise scope varies based on the pool’s plumbing, equipment, and site conditions. Commercial properties may also ask about off-season water-care visits. Planning ahead helps property managers coordinate seasonal service with their scheduled opening and closing dates." },
  { question: "Does MGN Pools repair pumps, filters, plumbing, and pool surfaces?", answer: "Yes. MGN Pools provides swimming pool repairs and renovation services for commercial and residential facilities in Springfield. Work can include circulation pumps, filters, plumbing, valves, equipment replacement, plaster and resurfacing, tile, and coping. When a pool has poor circulation, filtration problems, damaged surfaces, or equipment failures, the first step is to evaluate the symptoms and determine an appropriate scope. Some projects require parts, property approval, or planned downtime, particularly at commercial facilities. Repairs and renovations may be coordinated alongside ongoing management services or considered as separate projects. Visit our pool repairs and renovations page for more information." },
  { question: "How do I know if my Springfield swimming pool has a leak?", answer: "Unexpected water loss can be caused by evaporation, splash-out, or a leak, so it is important to evaluate the circumstances before assuming a plumbing or structural problem. Signs that may warrant investigation include repeated refilling, unusually wet areas near the pool, air entering the circulation system, or unexplained changes in water level. MGN Pools offers pool leak detection and pressure testing in Springfield to help identify potential issues with underground plumbing, skimmers, fittings, equipment connections, and pool structures. Testing methods depend on the symptoms and the pool’s design. After evaluating the likely source, we can discuss appropriate repair options." },
  { question: "How can a Springfield property manager request a pool management proposal?", answer: "Property managers, HOA representatives, condominium boards, and apartment operators can request a commercial pool management proposal through the Request a Proposal button on this page. Useful information includes the property address, pool size and type, planned season dates, daily operating hours, lifeguard staffing expectations, and any known equipment or maintenance issues. Let us know whether the property needs full-service management, lifeguard staffing, seasonal opening and closing, repairs, or a combination of services. MGN Pools uses these details to discuss a suitable scope and prepare property-specific pricing. The more complete the information, the easier it is to develop a relevant proposal." }
];

export const SpringfieldPage = () => {

  return (
    <>
      <Helmet>
      <title>Commercial Pool Management & Residential Pool Services Springfield VA | MGN Pools</title>
        <meta
          name="description"
           content="MGN Pools provides commercial pool management, lifeguard staffing, residential pool services, repairs and renovations throughout Springfield, VA. Springfield-based company established in 2007."
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
         content="MGN Pools provides commercial pool management, lifeguard staffing, residential pool services, repairs and renovations throughout Springfield, VA. Springfield-based company established in 2007."
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
            "telephone": "+1-571-332-2431",
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
                "name": cityInfo.fullName
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
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "@id": "https://mgnpools.com/locations/springfield-pool-service#faq",
            "mainEntity": springfieldFaqs.map(({ question, answer }) => ({
              "@type": "Question",
              "name": question,
              "acceptedAnswer": { "@type": "Answer", "text": answer }
            }))
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
           Springfield-Based Pool Management Company Established in 2007
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
                      
{service.link === "/commercial"
  ? "Springfield Commercial Pool Management"
  : service.link === "/residential"
  ? "Residential Pool Maintenance Services"
  : service.link === "/renovations"
  ? "Pool Repairs and Renovations"
  : "Pool Leak Detection and Repair"}
<ArrowRight className="w-4 h-4" />

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
                  
{item.link === "/commercial"
  ? "Explore HOA and Condominium Pool Management"
  : item.link === "/residential"
  ? "Explore Residential Pool Services"
  : "Explore Pool Renovation Services"}
<ArrowRight className="w-4 h-4" />

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
              <p className="mb-4">
               MGN Pools provides <strong>commercial pool management</strong> in {cityInfo.fullName} for apartment communities, condominiums, HOAs, and recreation facilities. Our services include lifeguard staffing, routine maintenance, water chemistry management, seasonal opening and closing, and pool facility support.
              </p>
              <p className="mb-4">
                We also provide <strong>residential pool services</strong> throughout Springfield, including maintenance, opening and winterization, equipment repairs, leak detection and pressure testing, and pool renovations.
              </p>
              <p>
                 MGN Pools has operated since 2007 and is based at 5954 Hall Street in Springfield, Virginia. We provide pool services for properties in West Springfield, North Springfield, Burke, Newington, Franconia, and surrounding Fairfax County communities.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Springfield local commercial pool management information */}
      <section className="py-16 bg-white" aria-labelledby="springfield-commercial-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="springfield-commercial-heading" className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            Springfield-Based Commercial Pool Management for HOAs and Condominiums
          </h2>
          <p className="text-gray-600 leading-relaxed mb-5">
            MGN Pools is based in Springfield, Virginia, and works with property managers, condominium boards, apartment communities, and homeowners associations across Northern Virginia and Washington, DC. Our <Link to="/commercial" className="text-sky-700 font-semibold hover:underline">commercial pool management services</Link> are planned around each facility's operating schedule, lifeguard requirements, maintenance needs, and seasonal opening and closing dates.
          </p>
          <p className="text-gray-600 leading-relaxed mb-5">
            For communities in West Springfield, North Springfield, Burke, Franconia, and Newington, we can discuss <Link to="/commercial" className="text-sky-700 font-semibold hover:underline">lifeguard staffing and HOA pool operations</Link>, routine cleaning, chemical testing, equipment maintenance, and inspection preparation. Pool-specific responsibilities and staffing levels are established in each proposal.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Properties needing technical assistance can also explore <Link to="/renovations" className="text-sky-700 font-semibold hover:underline">pool repairs and renovations</Link> or <Link to="/repair" className="text-sky-700 font-semibold hover:underline">pool leak detection and pressure testing</Link>. Homeowners can review our <Link to="/residential" className="text-sky-700 font-semibold hover:underline">residential pool maintenance services</Link>.
          </p>
        </div>
      </section>

      {/* Visible Springfield FAQs: same answers as FAQPage structured data */}
      <section className="py-20 bg-slate-50" aria-labelledby="springfield-faq-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="springfield-faq-heading" className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            Springfield Pool Management & Service FAQs
          </h2>
          <p className="text-lg text-gray-600 text-center mb-10">
            Answers for Springfield property managers, condominium associations, HOAs, and homeowners.
          </p>
          <div className="space-y-4">
            {springfieldFaqs.map((faq, index) => (
              <details key={index} className="group rounded-2xl border border-slate-200 bg-white p-5 open:shadow-md">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-gray-900 [&::-webkit-details-marker]:hidden">
                  <span>{faq.question}</span>
                  <ChevronDown className="w-5 h-5 shrink-0 text-sky-600 transition-transform group-open:rotate-180" aria-hidden="true" />
                </summary>
                <p className="mt-4 leading-relaxed text-gray-600">{faq.answer}</p>
              </details>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/commercial" className="inline-flex items-center gap-2 text-sky-700 font-semibold hover:underline">
              Explore Commercial Pool Management Services <ArrowRight className="w-4 h-4" />
            </Link>
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
