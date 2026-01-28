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
import PoolImage from '../assets/images/commercial/swimming_pool1.jpg';
import backgroundWater from '../assets/images/home/background_water.webp';
import heroBackground from '../assets/images/commercial/hero_background.png';
import poolManagementImage from '../assets/images/commercial/pool_management_image.png';
import whyMgnPoolsImage from '../assets/images/commercial/why_mgn_pools_image.png';

// We Serve - типы объектов
const weServe = [
  {
    icon: Building2,
    title: "Apartment Complexes",
    description: "in Washington DC, Springfield VA and the DC metro area"
  },
  {
    icon: Users,
    title: "HOA Communities",
    description: "across Washington DC, Northern Virginia and DC metro"
  },
  {
    icon: Shield,
    title: "Recreation Facilities",
    description: "in Washington DC, Springfield, Alexandria and surrounding areas"
  },
  {
    icon: Clock,
    title: "Hotels & Resorts",
    description: "throughout Washington DC, Northern Virginia and DC metro"
  },
];

// Наши услуги
const poolServices = [
  {
    icon: Sun,
    title: "Pre Season Pool Opening",
    description: "Prepare your swimming pool for the summer season"
  },
  {
    icon: FileCheck,
    title: "Health Department Inspections",
    description: "Arrange inspections with the Health Department and obtain necessary permits"
  },
  {
    icon: UserCheck,
    title: "Professional Lifeguards",
    description: "Certified lifeguard staffing services - Hire professional lifeguards for your facility. As a trusted lifeguard company, we provide Red Cross and Pool Operator certified lifeguards"
  },
  {
    icon: Sparkles,
    title: "Daily Pool Maintenance",
    description: "Daily pool inspection, cleaning and maintenance"
  },
  {
    icon: ClipboardList,
    title: "Supervision & Reporting",
    description: "Supervision and reporting from our highly trained employees"
  },
  {
    icon: GraduationCap,
    title: "Continuing Training",
    description: "Continuing bi-weekly training to ensure our people are the best in the business"
  },
  {
    icon: Package,
    title: "Chemicals & Equipment",
    description: "Supplying chemicals and pool equipment"
  },
  {
    icon: Truck,
    title: "Supplies Delivery",
    description: "Delivery of all bathroom supplies, janitorial supplies, refill first aid kit"
  },
  {
    icon: Snowflake,
    title: "Pool Winterization",
    description: "Post season pool winterization - prepare your swimming pool for the winter season"
  },
  {
    icon: Search,
    title: "Winter Inspections",
    description: "Winter inspections on your swimming pool"
  },
  {
    icon: Wrench,
    title: "Service & Repair",
    description: "Full in-house service and repair department"
  },
  {
    icon: ShieldCheck,
    title: "Commercial Liability Insurance",
    description: "Full commercial liability insurance coverage"
  },
];

// Why MGN Pools
const whyMgnPools = [
  {
    icon: Star,
    text: "Highly motivated and professional staff."
  },
  {
    icon: Zap,
    text: "We guarantee the fastest response to any pool related problems."
  },
  {
    icon: Phone,
    text: "On-call staff available 24 hours a day 7 days a week."
  },
  {
    icon: Target,
    text: "We train our lifeguards how to perform on the facility assigned for them, keeping in mind the specific account profile. Safety is our top priority."
  },
  {
    icon: Award,
    text: "Certified and experienced in-house service department."
  },
  {
    icon: FileCheck,
    text: "Free estimates for repairs and renovations."
  },
  {
    icon: DollarSign,
    text: "We guarantee the best prices on any parts and repairs needed."
  },
  {
    icon: Heart,
    text: "Each MGN POOLS employee works hard to ensure that you can spend your summer relaxing."
  },
];

export const CommercialPage = () => {

  return (
    <>
      <Helmet>
        <title>Pool Management Services Washington DC | Springfield VA | MGN Pools</title>
        <meta
          name="description"
          content="Professional pool management services in Washington DC and Springfield VA. Commercial pool management for apartments, HOAs, hotels and recreation facilities throughout the DC metro area and Northern Virginia."
        />
        <link rel="canonical" href="https://mgnpools.com/commercial" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Pool Management Services Washington DC | Springfield VA | MGN Pools" />
        <meta property="og:description" content="Professional pool management services in Washington DC and Springfield VA. Commercial pool management for apartments, HOAs, hotels and recreation facilities throughout the DC metro area and Northern Virginia." />
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
            "description": "Professional pool management services in Washington DC and Springfield VA. Commercial pool management for apartments, HOAs, hotels and recreation facilities throughout the DC metro area and Northern Virginia.",
            "url": "https://mgnpools.com/commercial"
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
                "name": "What commercial pool management services do you offer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We offer comprehensive commercial pool management including daily maintenance, professional lifeguards, health department inspections, pool opening and closing, equipment repair, and complete facility management for apartments, HOAs, hotels and recreation facilities."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide lifeguards for commercial pools?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we provide American Red Cross certified lifeguards and pool operators for commercial facilities. All our lifeguards are professionally trained and certified."
                }
              },
              {
                "@type": "Question",
                "name": "How quickly can you respond to commercial pool emergencies?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We guarantee the fastest response to any pool-related problems. Our on-call staff is available 24 hours a day, 7 days a week for commercial pool emergencies."
                }
              }
            ]
          })}
        </script>
      </Helmet>
      <PageHeader
        title="Commercial Pool Management Company in Northern Virginia and Washington DC metro area"
        subtitle="Professional pool management for apartments, HOAs, hotels and recreation facilities in Washington DC, Springfield VA and the DC metro areaProfessional pool management for apartments, HOAs, hotels and recreation facilities in Northern Virginia and Washington DC metro area"
        backgroundImage={heroBackground}
        smallText
        bottomAlign
      />

      {/* Main Content */}
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
                Commercial Pool Management Company in Washington DC & Springfield VA
              </h2>

              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                <strong>MGN Pools Management</strong> is a leading <strong>commercial pool management</strong> company specializing in professional <strong>pool management</strong>, <strong>pool renovation</strong> and <strong>pool repair</strong> solutions for public and private facilities. We provide reliable commercial pool management and certified <strong>lifeguard staffing services</strong> in <strong>Northern Virginia</strong>, and <strong>Washington DC</strong>, serving apartment complexes, HOA communities, recreation facilities, and hotels throughout the <strong>DC metro area</strong>, <strong>Northern Virginia</strong>, and <strong>Maryland</strong>.
              </p>

              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                As a trusted commercial pool company, our experienced team is committed to fast response times and dependable service for all swimming pool needs. We offer customized commercial pool service solutions tailored to each client's unique requirements, ensuring safety, compliance, and smooth pool operations year-round.
              </p>

              <Link
                to="/bid"
                className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl"
              >
                Request a Bid
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
                  alt="Commercial pool management services in Washington DC and Springfield VA for apartments, HOAs and hotels"
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
              Comprehensive pool management solutions for commercial facilities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {poolServices.map((service, index) => (
              <div
                key={index}
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

      {/* Why MGN Pools */}
      <section  className="py-24 bg-blue-900 text-white">
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
                We strive to provide the best service at the best possible price. We achieve that by:
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
            Contact us today for a free consultation and quote.
          </p>
          <Link
            to="/bid"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-sky-600 px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-xl"
          >
            Request a Bid
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
};