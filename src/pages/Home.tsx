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
    description: "Commercial pool management for apartment buildings, condominium associations, HOAs, and recreation facilities in Northern Virginia and Washington, DC. Services can include lifeguard staffing, water chemistry, routine cleaning, seasonal opening and closing, equipment maintenance, and operational supervision.",
    link: "/commercial"
  },
  {
    icon: HomeIcon,
    title: "Residential Pool Services",
    description: "Residential swimming pool maintenance, seasonal opening and winterization, equipment troubleshooting and repairs, leak detection, and renovations for homeowners across our Northern Virginia and Washington, DC service area.",
    link: "/residential"
  },
  {
    icon: Wrench,
    title: "Pool Repairs and Renovations",
    description: "Swimming pool repair and renovation services including pump and filter work, plumbing repairs, plaster and resurfacing, tile and coping replacement, and equipment upgrades for commercial and residential pools.",
    link: "/renovations"
  },
  {
    icon: Search,
    title: "Pool Leak Detection, Pressure Testing & Repair",
    description: "Swimming pool leak detection, pressure testing, and repairs to help locate water loss in underground plumbing, fittings, equipment connections, and pool structures.",
    link: "/repair"
  },
];

const howWeHelp = [
  {
    icon: Building2,
    title: "Commercial Pool Management",
    description: "Commercial pool management for apartment buildings, condominium associations, HOAs, and recreation facilities in Northern Virginia and Washington, DC. Services can include lifeguard staffing, water chemistry, routine cleaning, seasonal opening and closing, equipment maintenance, and operational supervision.",
    link: "/commercial"
  },
  {
    icon: HomeIcon,
    title: "Residential Pool Services",
    description: "Residential swimming pool maintenance, seasonal opening and winterization, equipment troubleshooting and repairs, leak detection, and renovations for homeowners across our Northern Virginia and Washington, DC service area.",
    link: "/residential"
  },
  {
    icon: Wrench,
    title: "Pool Repairs And Renovations",
    description: "Swimming pool repair and renovation services including pump and filter work, plumbing repairs, plaster and resurfacing, tile and coping replacement, and equipment upgrades for commercial and residential pools.",
    link: "/renovations"
  },
];


const homepageFaqs = [
  {
    question: "What does commercial pool management include?",
    answer: "MGN Pools provides commercial swimming pool management for apartment communities, condominium associations, homeowners associations, and recreational facilities throughout Northern Virginia and Washington, DC. Depending on the property\u2019s needs, a management agreement can include certified lifeguard staffing, daily pool cleaning, water chemistry testing and treatment, routine equipment checks, pool opening and winterization, and operational supervision. We also help coordinate pool inspections and address maintenance concerns that arise during the swimming season. Because facilities differ in size, operating hours, and staffing requirements, the services and responsibilities for each location are specified in its individual proposal and agreement. Property managers can request a customized scope for their community."
  },
  {
    question: "Does MGN Pools provide lifeguards for apartment and condominium pools?",
    answer: "Yes. Lifeguard staffing is a core part of MGN Pools\u2019 commercial swimming pool management services for apartment buildings, condominium communities, HOAs, and other shared aquatic facilities in Northern Virginia and Washington, DC. We work with property managers to plan coverage around the pool\u2019s operating schedule, expected use, and applicable facility requirements. Lifeguard services may be combined with daily cleaning, water chemistry management, and routine maintenance under a broader management agreement. The number of guards and their scheduled hours depend on the individual pool and its operating needs. Contact us with your pool\u2019s location, hours, and staffing expectations to discuss an appropriate proposal."
  },
  {
    question: "Which areas does MGN Pools serve?",
    answer: "MGN Pools provides commercial pool management, lifeguard staffing, residential pool services, repairs, and renovations across Northern Virginia and Washington, DC. Communities in our service area include Alexandria, Arlington, Springfield, Fairfax, Falls Church, Annandale, McLean, Great Falls, Woodbridge, Lorton, and surrounding neighborhoods. We work with apartment properties, condominium associations, HOAs, recreational facilities, and homeowners. Service availability and scheduling may vary depending on the type of work and the property's location. If your community is outside the cities listed here, you can still contact us with the address and requested services. Our team can confirm whether we can support your pool and discuss next steps."
  },
  {
    question: "Can MGN Pools handle pool opening and winterization?",
    answer: "Yes. MGN Pools offers seasonal pool opening and winterization for commercial and residential swimming pools in Northern Virginia and Washington, DC. Opening work can involve preparing pool equipment, starting circulation and filtration systems, cleaning, evaluating water conditions, and getting the facility ready for the swimming season. Winterization focuses on protecting the pool and relevant equipment when seasonal operation ends. The exact work depends on the pool\u2019s design, equipment, and site conditions. For properties that need attention beyond the summer season, we can also discuss off-season or winter water-care visits. Property managers should plan seasonal work early so it fits their intended opening and closing schedule."
  },
  {
    question: "Do you repair commercial swimming pool equipment?",
    answer: "Yes. MGN Pools provides swimming pool equipment troubleshooting, maintenance, and repair services for commercial facilities and residential pools. Common areas of work include circulation pumps, filters, plumbing, valves, and related mechanical components. We also handle larger pool improvement projects, including plaster and resurfacing, tile, coping, and other renovation work. When a property experiences low circulation, filtration problems, visible damage, or equipment failures, an assessment can help determine the appropriate repair scope. Some projects require additional parts, approvals, or scheduled downtime. Our repair and renovation services can complement an ongoing pool management contract or be discussed as a separate project, depending on the property\u2019s needs."
  },
  {
    question: "Do you offer swimming pool leak detection?",
    answer: "Yes. MGN Pools offers swimming pool leak detection, plumbing pressure testing, and repair services in Northern Virginia and Washington, DC. Unexplained water loss can come from several sources, including underground plumbing, pool fittings, skimmers, equipment connections, or the pool structure itself. Leak detection starts by evaluating the symptoms and selecting suitable testing methods to help narrow down the source. Once a likely problem area is identified, we can discuss repair options and the scope of work needed. If you notice recurring water loss, air entering the system, wet areas near the pool, or unusual water bills, contact us to describe the issue and arrange an evaluation."
  },
  {
    question: "Does MGN Pools service residential swimming pools?",
    answer: "Yes. In addition to managing commercial swimming pools, MGN Pools provides residential pool services for homeowners throughout our Northern Virginia and Washington, DC service area. Available work includes routine pool maintenance, seasonal opening and closing, equipment troubleshooting and repairs, leak detection, and renovation projects such as plaster, tile, and coping improvements. Residential pools vary in equipment, condition, and maintenance needs, so the recommended service schedule and scope will depend on the property. Whether you need ongoing help maintaining water quality or assistance with a specific repair, you can describe your pool and the work requested. Our team can review the details and discuss service availability."
  },
  {
    question: "How can a property manager request a pool management proposal?",
    answer: "Property managers, condominium boards, HOA representatives, and apartment operators can request a customized commercial pool management proposal through the Request a Pool Proposal button on this website. Helpful details include the property address, pool type and approximate size, desired opening and closing dates, daily operating hours, number of lifeguards requested, and any known maintenance or repair concerns. You can also explain whether the property needs full-service management, lifeguard staffing, seasonal opening and winterization, or a combination of services. MGN Pools can use that information to discuss the proposed scope and prepare pricing based on the facility\u2019s specific needs. Providing complete details helps make the proposal more relevant to your property."
  }
];

export const HomePage = () => {

  return (
    <>
      <Helmet>
        <title>Commercial Pool Management & Lifeguard Services | Northern Virginia & DC | MGN Pools</title>
        <meta
  name="description"
  content="MGN Pools provides commercial pool management, lifeguard staffing, pool repairs and renovations, and residential pool services throughout Northern Virginia and Washington, DC."
/>
        <link rel="canonical" href="https://mgnpools.com/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Commercial Pool Management & Lifeguard Services | Northern Virginia & DC | MGN Pools" />
        <meta property="og:description" content="MGN Pools provides commercial pool management, lifeguard staffing, pool repairs and renovations, and residential pool services throughout Northern Virginia and Washington, DC." />
        <meta property="og:url" content="https://mgnpools.com/" />
        <meta property="og:site_name" content="MGN Pools" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Commercial Pool Management & Lifeguard Services | Northern Virginia & DC | MGN Pools" />
        <meta name="twitter:description" content="MGN Pools provides commercial pool management, lifeguard staffing, pool repairs and renovations, and residential pool services throughout Northern Virginia and Washington, DC." />
        {/* Structured data: business identity and services */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "LocalBusiness",
                "@id": "https://mgnpools.com/#localbusiness",
                "name": "MGN Pools",
                "url": "https://mgnpools.com/",
                "description": "Commercial swimming pool management, lifeguard staffing, pool maintenance, repairs, renovations, and residential pool services in Northern Virginia and Washington, DC.",
                "telephone": "+1-571-275-3696",
                "email": "mgnpools@yahoo.com",
                "foundingDate": "2007",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "5954 Hall Street",
                  "addressLocality": "Springfield",
                  "addressRegion": "VA",
                  "postalCode": "22152",
                  "addressCountry": "US"
                },
                "areaServed": [
                  { "@type": "AdministrativeArea", "name": "Northern Virginia" },
                  { "@type": "City", "name": "Washington, DC" },
                  ...["Springfield", "Alexandria", "Arlington", "Woodbridge", "Fairfax", "Annandale", "Falls Church", "Lorton", "Manassas", "Vienna", "McLean", "Great Falls"].map(name => ({ "@type": "Place", name: `${name}, Virginia` }))
                ]
              },
              ...[
                ["Commercial Pool Management", "Management and maintenance of apartment, condominium, HOA, and community swimming pools."],
                ["Lifeguard Staffing", "Lifeguard staffing and supervision for commercial swimming pools."],
                ["Residential Pool Services", "Residential pool maintenance, opening, closing, and seasonal care."],
                ["Pool Repairs and Renovations", "Swimming pool equipment repairs, plumbing repairs, plaster, tile, coping, and renovations."],
                ["Pool Leak Detection and Pressure Testing", "Pool leak detection, plumbing pressure testing, and leak repairs."],
                ["Lifeguard Training", "American Red Cross lifeguard training and certification courses."]
              ].map(([name, description], index) => ({
                "@type": "Service",
                "@id": `https://mgnpools.com/#service-${index + 1}`,
                "name": name,
                "description": description,
                "provider": { "@id": "https://mgnpools.com/#localbusiness" },
                "areaServed": [
                  { "@type": "AdministrativeArea", "name": "Northern Virginia" },
                  { "@type": "City", "name": "Washington, DC" }
                ]
              })),
              {
                "@type": "FAQPage",
                "@id": "https://mgnpools.com/#faq",
                "mainEntity": homepageFaqs.map(({ question, answer }) => ({
                  "@type": "Question",
                  "name": question,
                  "acceptedAnswer": { "@type": "Answer", "text": answer }
                }))
              }
            ]
          })}
        </script>
      </Helmet>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-32">
        <div className="absolute inset-0 z-0">
          <img
            src={heroBackground}
            alt="Commercial pool management, lifeguard staffing, pool repair and renovation services in Northern Virginia and Washington DC"
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
Commercial Pool Management, Lifeguard Staffing, Repair & Renovation, and Residential Pool Services in Northern Virginia & Washington, DC
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-lg text-white/90 mb-6 max-w-3xl mx-auto mt-4"
          >
           MGN Pools provides professional commercial pool management, certified lifeguard staffing, pool repairs and renovations, and residential pool services throughout Northern Virginia and Washington, DC.
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
              Professional Pool Services for Commercial & Residential Properties
            </h2>
            <p className="text-lg text-gray-600">
              MGN Pools provides commercial pool management, certified lifeguard staffing, pool repairs and renovations, and residential pool services throughout Northern Virginia and Washington, DC.
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
                      Explore {service.title} <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

{/* Commercial Pool Management SEO Section */}
<section className="py-20 bg-white">
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
      Commercial Swimming Pool Management for Apartments, Condominiums & HOAs
    </h2>

    <p className="text-lg text-gray-600 leading-relaxed mb-5">
      Since 2007, MGN Pools has provided commercial swimming pool management
      services throughout Northern Virginia and Washington, DC. We help
      property managers, condominium associations, HOAs, and residential
      communities operate safe, clean, and professionally managed swimming pools.
    </p>

    <p className="text-lg text-gray-600 leading-relaxed mb-5">
      Our <Link to="/commercial" className="text-sky-700 font-semibold underline underline-offset-2 hover:text-sky-800">commercial pool management and lifeguard staffing services</Link> include daily pool operations,
      water chemistry management, routine maintenance, support with health department
      inspections, pool opening and winterization, and ongoing supervision.
    </p>

    <p className="text-lg text-gray-600 leading-relaxed mb-8">
      MGN Pools also provides technical maintenance and <Link to="/renovations" className="text-sky-700 font-semibold underline underline-offset-2 hover:text-sky-800">swimming pool repairs and renovations</Link>,
      helping commercial properties identify problems early and respond efficiently.
      For unexplained water loss, explore our <Link to="/repair" className="text-sky-700 font-semibold underline underline-offset-2 hover:text-sky-800">pool leak detection and repair services</Link>.
    </p>

    <Link
      to="/commercial"
      className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-7 py-4 rounded-lg font-semibold transition-colors"
    >
      Explore Our Commercial Pool Management Services
      <ArrowRight className="w-5 h-5" />
    </Link>
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
            <p className="text-lg text-gray-600">Complete Pool Management, Maintenance, Repair & Renovation Solutions</p>
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
                  Explore {item.title} <ArrowRight className="w-4 h-4" />
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
                  alt="American Red Cross lifeguard training and certification in Northern Virginia and Washington DC"
                  className="w-full h-[350px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Visible FAQs: answers match FAQPage structured data above */}
      <section className="py-20 bg-white" aria-labelledby="homepage-faq-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="homepage-faq-heading" className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            Frequently Asked Questions About Pool Management & Services
          </h2>
          <p className="text-lg text-gray-600 text-center mb-10">
            Answers for property managers, condominium boards, HOAs, and homeowners in Northern Virginia and Washington, DC.
          </p>
          <div className="space-y-4">
            {homepageFaqs.map((faq, index) => (
              <details key={index} className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 open:bg-white open:shadow-md">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-gray-900 [&::-webkit-details-marker]:hidden">
                  <span>{faq.question}</span>
                  <ChevronDown className="w-5 h-5 shrink-0 text-sky-600 transition-transform group-open:rotate-180" aria-hidden="true" />
                </summary>
                <p className="mt-4 leading-relaxed text-gray-600">{faq.answer}</p>
              </details>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/bid" className="inline-flex items-center gap-2 text-sky-600 font-semibold hover:text-sky-700">
              Request a customized pool service proposal <ArrowRight className="w-4 h-4" />
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
            Request a Pool Service Proposal or Estimate
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

      {/* Internal links to local pool service pages */}
      <section className="py-14 bg-slate-50" aria-labelledby="service-areas-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="service-areas-heading" className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
            Pool Management and Pool Services by Location
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8">
            Explore MGN Pools' commercial pool management, lifeguard staffing, maintenance, and repair services in communities throughout Northern Virginia and Washington, DC.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: 'Springfield, VA', path: '/locations/springfield-pool-service' },
              { name: 'Alexandria, VA', path: '/locations/alexandria-pool-service' },
              { name: 'Arlington, VA', path: '/locations/arlington-pool-service' },
              { name: 'Fairfax, VA', path: '/locations/fairfax-pool-service' },
              { name: 'Woodbridge, VA', path: '/locations/woodbridge-pool-service' },
              { name: 'McLean, VA', path: '/locations/mclean-pool-service' },
              { name: 'Great Falls, VA', path: '/locations/great-falls-pool-service' },
              { name: 'Annandale, VA', path: '/locations/annandale-pool-service' },
              { name: 'Washington, DC', path: '/locations/washington-dc-pool-service' },
            ].map((location) => (
              <Link
                key={location.path}
                to={location.path}
                className="inline-flex items-center rounded-lg border border-sky-200 bg-white px-4 py-3 text-sky-700 font-semibold hover:bg-sky-50 hover:border-sky-400 transition-colors"
              >
                Pool Services in {location.name}
                <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
              </Link>
            ))}
          </div>
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
