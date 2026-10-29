import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { PageHeader } from '../components/PageHeader';
import {
  ArrowRight, Building2, Shield, Clock, Users,
  Sun, FileCheck, UserCheck, Sparkles, ClipboardList, GraduationCap,
  Package, Truck, Snowflake, Search, Wrench, ShieldCheck,
  Star, Zap, Phone, Target, Award, DollarSign, Heart
} from 'lucide-react';
import backgroundWater from '../assets/images/home/background_water.webp';
import heroBackground from '../assets/images/commercial/hero_background.png';
import poolManagementImage from '../assets/images/commercial/pool_management_image.png';
import whyMgnPoolsImage from '../assets/images/commercial/why_mgn_pools_image.png';

// We Serve - типы объектов
const weServe = [
  {
    icon: Building2,
    title: "Apartment Complexes",
    description: "throughout Northern Virginia and Washington, DC"
  },
  {
    icon: Users,
    title: "HOA Communities",
    description: "throughout Northern Virginia and Washington, DC"
  },
  {
    icon: Shield,
    title: "Recreation Facilities",
    description: "throughout Northern Virginia and Washington, DC"
  },
  {
    icon: Clock,
    title: "Hotels & Resorts",
    description: "throughout Northern Virginia and Washington, DC"
  },
];

// Наши услуги
const poolServices = [
  {
    icon: Sun,
    title: "Pre Season Pool Opening",
    description: "Complete commercial pool opening and startup for the summer season"
  },
  {
    icon: FileCheck,
    title: "Health Department Inspections",
    description: "Coordinate health department inspections and required pool operating permits"
  },
  {
    icon: UserCheck,
    title: "Professional Lifeguards",
    description: "Certified professional lifeguard staffing for commercial pools, apartment communities, condominiums, HOAs, and recreation facilities."
  },
  {
    icon: Sparkles,
    title: "Daily Pool Maintenance",
    description: "Daily commercial pool inspections, water chemistry management, cleaning, and preventive maintenance"
  },
  {
    icon: ClipboardList,
    title: "Supervision & Reporting",
    description: "Professional supervision, routine facility inspections, and detailed operational reporting"
  },
  {
    icon: GraduationCap,
    title: "Continuing Training",
    description: "Ongoing lifeguard and pool operations training to maintain professional service and safety standards"
  },
  {
    icon: Package,
    title: "Chemicals & Equipment",
    description: "Supply and management of commercial pool chemicals, equipment, and operating supplies"
  },
  {
    icon: Truck,
    title: "Supplies Delivery",
    description: "Delivery and restocking of restroom supplies, janitorial supplies, and first-aid materials"
  },
  {
    icon: Snowflake,
    title: "Pool Winterization",
    description: "Complete commercial pool closing and winterization to protect pool equipment, plumbing, and facilities during the off-season"
  },
  {
    icon: Search,
    title: "Winter Inspections",
    description: "Scheduled winter pool inspections to monitor water levels, pool covers, equipment, and overall facility conditions throughout the off-season"
  },
  {
    icon: Wrench,
    title: "Service & Repair",
    description: "In-house commercial pool repair and equipment service for pumps, filters, heaters, plumbing, automation systems, and other pool equipment"
  },
  {
    icon: ShieldCheck,
    title: "Commercial Liability Insurance",
    description: "Comprehensive commercial liability insurance coverage for professional pool management operations"
  },
];

// Why MGN Pools
const whyMgnPools = [
  {
    icon: Star,
    text: "Experienced, professional staff committed to reliable commercial pool operations and excellent customer service."
  },
  {
    icon: Zap,
    text: "Prompt response to pool maintenance, equipment, and operational issues to help minimize downtime."
  },
  {
    icon: Phone,
    text: "24/7 on-call support for urgent pool operational and equipment issues."
  },
  {
    icon: Target,
    text: "Lifeguards receive site-specific training based on each facility’s operating procedures, safety requirements, and client expectations."
  }, 
  {
    icon: ShieldCheck,
    text: "Regular on-site supervisor visits and lifeguard performance inspections throughout the swimming season. Our management team monitors staff performance, safety procedures, facility conditions, and compliance with site-specific operating requirements."
  },
  {
    icon: Award,
    text: "Experienced in-house service technicians for commercial pool equipment, repairs, maintenance, and renovations."
  },
  {
    icon: FileCheck,
    text: "Free estimates for commercial pool repairs and renovation projects."
  },
  {
    icon: DollarSign,
    text: "Competitive pricing on commercial pool equipment, replacement parts, and repairs."
  },
  {
    icon: Heart,
    text: "Our team works to keep your pool operating safely, reliably, and professionally throughout the swimming season."
  },
];

const commercialFaqs = [
  {
    "question": "What services are included in MGN Pools’ commercial pool management contracts?",
    "answer": "MGN Pools provides commercial swimming pool management for condominium associations, homeowners associations (HOAs), apartment communities, and recreation facilities throughout Northern Virginia and Washington, DC. Depending on the agreement, services include certified lifeguard staffing, daily pool cleaning, water chemistry testing and treatment, routine equipment maintenance, seasonal pool opening and winterization, health department inspection coordination, and regular supervisory visits. Our in-house technicians can also handle commercial pool equipment repairs, including pumps, filters, heaters, plumbing, and automation systems. Each proposal is tailored to the property’s operating hours, staffing needs, facility conditions, and maintenance requirements."
  },
  {
    "question": "Does MGN Pools provide certified lifeguards for commercial swimming pools?",
    "answer": "Yes. MGN Pools provides trained, certified lifeguards for apartment complexes, condominium communities, HOAs, and recreation facilities. Lifeguards receive site-specific training on facility rules, emergency procedures, patron supervision, and daily operating responsibilities. Our regional supervisors make routine site visits to monitor lifeguard performance, facility conditions, and established safety procedures. We coordinate staffing with property managers and community boards based on each pool’s operating schedule, layout, and applicable safety requirements."
  },
  {
    "question": "Does MGN Pools handle swimming pool inspections, permits, and health department requirements?",
    "answer": "Yes. Our commercial pool management services include coordinating seasonal health department inspections and required operating permits. We monitor disinfectant and pH levels, check water chemistry, inspect circulation and filtration equipment, and address operational conditions that could affect compliance. Requirements differ by jurisdiction across Northern Virginia and Washington, DC, so we work with property managers to prepare facilities for the applicable inspections. Regulatory approval remains with the relevant authority."
  },
  {
    "question": "Does MGN Pools provide commercial swimming pool equipment repair and maintenance?",
    "answer": "Yes. MGN Pools has in-house technicians who service commercial swimming pool pumps, filtration systems, heaters, plumbing, circulation equipment, and automation systems. Combining pool management with technical repair capabilities helps property managers coordinate maintenance and respond efficiently to equipment problems without depending exclusively on outside contractors. We also provide repair estimates and equipment replacement recommendations when needed. Our goal is to reduce unnecessary downtime and maintain dependable pool operations."
  },
  {
    "question": "Does MGN Pools provide seasonal pool opening and winterization services?",
    "answer": "Yes. We provide commercial swimming pool opening, startup, closing, and winterization services for HOAs, condominiums, apartment communities, and recreation facilities. Preseason work includes preparing circulation and filtration systems, checking equipment, cleaning the pool, establishing water chemistry, and coordinating required inspections. At the end of the season, winterization procedures help protect pool plumbing, equipment, and facilities from cold-weather damage. We also offer scheduled winter inspections and off-season water care services."
  },
  {
    "question": "What areas does MGN Pools serve for commercial pool management?",
    "answer": "MGN Pools provides commercial pool management, lifeguard staffing, maintenance, repairs, and renovation services throughout Northern Virginia and Washington, DC. Areas served include Alexandria, Arlington, Fairfax, Springfield, McLean, Great Falls, Woodbridge, Mount Vernon, and nearby communities. We work with property management companies, condominium associations, homeowners associations, apartment complexes, and recreation facilities. Contact us to confirm availability for your property and request a customized proposal."
  },
  {
    "question": "Why should a condominium association or HOA hire a professional pool management company?",
    "answer": "Commercial swimming pools require ongoing attention to lifeguard staffing, water chemistry, equipment, daily cleaning, safety procedures, and local inspection requirements. A professional pool management company helps condominium boards and homeowners associations coordinate these responsibilities and reduces the day-to-day administrative workload for property managers. MGN Pools combines routine operations, supervisory oversight, inspection coordination, seasonal service, and in-house technical repairs to support consistent, reliable swimming pool operations."
  },
  {
    "question": "How can our community request a commercial pool management proposal?",
    "answer": "Property managers, condominium boards, HOA representatives, and apartment communities can request a customized commercial pool management proposal from MGN Pools. We consider the pool’s size and condition, operating schedule, lifeguard requirements, routine maintenance needs, and seasonal services. Depending on the property, a proposal may include lifeguard staffing, daily pool maintenance, water chemistry management, opening and winterization, inspection coordination, and supervisory visits. Established in 2007, MGN Pools serves commercial swimming pool facilities across Northern Virginia and Washington, DC. Use the Request a Commercial Pool Proposal button on this page to get started."
  }
];

export const CommercialPage = () => {

  return (
    <>
      <Helmet>
        <title>Commercial Pool Management Services Northern Virginia & DC | MGN Pools</title>
        <meta
          name="description"
          content="Commercial pool management services, lifeguard staffing, pool repairs and renovations for apartments, condominiums and HOAs throughout Northern Virginia and Washington, DC."        />
        <link rel="canonical" href="https://mgnpools.com/commercial" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Commercial Pool Management Services | Northern Virginia & DC | MGN Pools" />
        <meta property="og:description" content="Commercial pool management services, lifeguard staffing, pool repairs and renovations for apartments, condominiums and HOAs throughout Northern Virginia and Washington, DC." />
        <meta property="og:url" content="https://mgnpools.com/commercial" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Commercial Pool Management",
            "provider": {
              "@id": "https://mgnpools.com/#localbusiness"
            },
            "description": "Commercial pool management services, lifeguard staffing, pool repairs and renovations for apartments, condominiums and HOAs throughout Northern Virginia and Washington, DC.",
            "url": "https://mgnpools.com/commercial"
          })}
        </script>

        {/* FAQ schema is generated from the same questions visible below. */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": commercialFaqs.map(({ question, answer }) => ({
              "@type": "Question",
              "name": question,
              "acceptedAnswer": { "@type": "Answer", "text": answer }
            }))
          })}
        </script>
      </Helmet>
      <PageHeader
        title="Commercial Pool Management Services in Northern Virginia & Washington, DC"
        subtitle="Complete commercial pool management for apartments, condominiums, HOAs, and recreation facilities, including lifeguard staffing, maintenance, repairs, and renovations."
        backgroundImage={heroBackground}
        smallText
        bottomAlign
      />

      
<div className="flex flex-col sm:flex-row justify-center items-center gap-4 py-6 px-4 bg-white">
  <a
    href="/bid"
    className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold px-8 py-4 rounded-lg shadow-md transition-colors text-center"
  >
    Request a Proposal
  </a>
  
</div>      {/* Main Content */}
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Commercial Pool Management for Apartments, Condominiums & HOAs
              </h2>

              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                MGN Pools provides complete commercial pool management for apartment communities, condominiums, HOAs, and recreation facilities throughout Northern Virginia and Washington, DC. Our services include certified lifeguard staffing, daily pool operations, water chemistry management, inspections, opening and winterization, equipment repairs, and pool renovations.             
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                 With nearly two decades of experience, MGN Pools works with property managers and community associations to provide dependable pool operations, responsive service, and preventive maintenance that helps keep facilities safe, compliant, and ready for residents.
              </p>

              <Link
                to="/bid"
                className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl"
              >
                Request a Commercial Pool Proposal
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
                  src={poolManagementImage}
                  alt="Commercial pool management services in Northern Virginia and Washington, DC for apartments, condominiums, HOAs, and recreation facilities"
                  className="w-full h-[450px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* We Serve */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              We Serve
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {weServe.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-7 h-7 text-sky-600" />
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Pool Management Services */}
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
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Pool Management Services Include
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Complete commercial pool management, lifeguard staffing, maintenance, repairs, and seasonal services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {poolServices.map((service, index) => (
              <div
                key={index}
                id={`service-${index}`}
                className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-shadow group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-sky-500 transition-colors">
                    <service.icon className="w-6 h-6 text-sky-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{service.title}</h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* Commercial Pool Management Experience */}
<section className="py-20 bg-white">
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
      Commercial Pool Management Experience in Northern Virginia & Washington, DC
    </h2>

    <p className="text-lg text-gray-600 leading-relaxed mb-5">
      Established in 2007, MGN Pools works with apartment communities,
      condominium associations, HOAs, and property management companies
      throughout Northern Virginia and Washington, DC. We understand
      the importance of dependable staffing, consistent water quality,
      regulatory compliance, and responsive communication with property managers.
    </p>

    <p className="text-lg text-gray-600 leading-relaxed mb-5">
      Our commercial swimming pool management services combine certified
      lifeguard staffing, daily pool operations, routine maintenance,
      health department inspection coordination, and seasonal pool opening
      and closing. We also provide regular supervisory visits and
      site-specific lifeguard training to support consistent operations.
    </p>

    <p className="text-lg text-gray-600 leading-relaxed mb-8">
      One of our key advantages is our in-house technical maintenance
      and repair capability. Our technicians service commercial pool pumps,
      filters, heaters, plumbing, and automation systems, helping
      property managers address equipment issues without coordinating
      multiple outside contractors.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
      <div className="rounded-xl bg-slate-50 p-5 text-center"><p className="text-2xl font-bold text-sky-700">Since 2007</p><p className="text-sm text-gray-600">Serving local pool communities</p></div>
      <div className="rounded-xl bg-slate-50 p-5 text-center"><p className="text-2xl font-bold text-sky-700">Commercial Focus</p><p className="text-sm text-gray-600">Apartments, condominiums and HOAs</p></div>
      <div className="rounded-xl bg-slate-50 p-5 text-center"><p className="text-2xl font-bold text-sky-700">In-House Repairs</p><p className="text-sm text-gray-600">Equipment service and maintenance</p></div>
    </div>
    <p className="text-gray-600 mb-6">
      Explore our <a className="text-sky-700 underline" href="#service-2">lifeguard staffing</a>,{' '}
      <a className="text-sky-700 underline" href="#service-3">daily maintenance</a>,{' '}
      <a className="text-sky-700 underline" href="#service-10">equipment repair</a>, and{' '}
      <a className="text-sky-700 underline" href="#service-8">winterization</a> services.
    </p>

    <Link
      to="/bid"
      className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-7 py-4 rounded-lg font-semibold transition-colors"
    >
      Request a Commercial Pool Management Proposal
      <ArrowRight className="w-5 h-5" />
    </Link>
  </div>
</section>
      
      {/* Why MGN Pools */}
      <section className="py-24 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why MGN Pools
              </h2>

              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                We provide reliable, professional commercial pool management with responsive service and competitive pricing. Here’s what sets MGN Pools apart:
              </p>

              <div className="space-y-4">
                {whyMgnPools.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 bg-white/10 rounded-lg p-4"
                  >
                    <div className="w-10 h-10 bg-sky-500 rounded-lg flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-blue-100">{item.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4 }}
              className="hidden lg:block"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={whyMgnPoolsImage}
                  alt="Professional commercial swimming pool management and maintenance services"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-20 bg-slate-50" aria-labelledby="commercial-faq-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="commercial-faq-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Commercial Pool Management FAQs
          </h2>
          <div className="space-y-4">
            {commercialFaqs.map(({ question, answer }) => (
              <details key={question} className="rounded-xl bg-white p-6 shadow-sm group">
                <summary className="cursor-pointer font-bold text-gray-900">{question}</summary>
                <p className="text-gray-600 leading-relaxed mt-3">{answer}</p>
              </details>
            ))}
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
        <div className="absolute inset-0 bg-sky-500/70 md:bg-sky-500/85"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contact us today for a free consultation and commercial pool management proposal.
          </p>
          <Link
            to="/bid"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-sky-600 px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-xl"
          >
            Request a Commercial Pool Proposal
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
};
