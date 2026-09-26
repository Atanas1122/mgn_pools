import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { PageHeader } from '../components/PageHeader';
import { ArrowRight, CheckCircle } from 'lucide-react';
import backgroundWater from '../assets/images/home/background_water.webp';
import PoolRenovationImg from '../assets/images/renovations/Pool_renovation_services.jpg';
import FilterImg from '../assets/images/renovations/Filter.webp';
import PumpMotorImg from '../assets/images/renovations/Pump_and_Motor.jpg';
import LeakDetectionImg from '../assets/images/renovations/Leak_detection.jpg';
import CaulkingImg from '../assets/images/renovations/Caulking.jpg';
import PressureWashingImg from '../assets/images/renovations/Pressure_washing.jpg';
import ReplasteringImg from '../assets/images/renovations/Replastering.png';
import SkinmerImg from '../assets/images/renovations/Skimmer.jpg';
import MainDrainImg from '../assets/images/renovations/Main_Drain.webp';
import SafetyImg from '../assets/images/renovations/Safety.jpg';
import InstallationImg from '../assets/images/renovations/Installation.jpg';

export const RenovationsPage = () => {

  return (
    <>
      <Helmet>
        <title>Pool Repair & Renovation Northern Virginia & DC | MGN Pools</title>
        <meta
          name="description"
          content="Professional commercial and residential pool repair and renovation throughout Northern Virginia and Washington, DC. Pool replastering, tile, coping, deck repairs, equipment upgrades, and complete pool renovations."
        />
        <link rel="canonical" href="https://mgnpools.com/renovations" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Pool Repair & Renovation Northern Virginia & DC | MGN Pools" />
        <meta property="og:description" content="Professional commercial and residential pool repair and renovation throughout Northern Virginia and Washington, DC. Pool replastering, tile, coping, deck repairs, equipment upgrades, and complete pool renovations." />
        <meta property="og:url" content="https://mgnpools.com/renovations" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Pool Repair and Renovation",
            "provider": {
              "@id": "https://mgnpools.com/#localbusiness"
            },
            "areaServed": [
              { "@type": "City", "name": "Springfield" },
              { "@type": "City", "name": "Alexandria" },
              { "@type": "City", "name": "Arlington" },
              { "@type": "City", "name": "Fairfax" },
{ "@type": "City", "name": "Falls Church" },
{ "@type": "City", "name": "Washington" },
            { "@type": "City", "name": "McLean" },
{ "@type": "City", "name": "Vienna" },
{ "@type": "City", "name": "Annandale" },
{ "@type": "City", "name": "Lorton" },
{ "@type": "City", "name": "Woodbridge" },
{ "@type": "City", "name": "Manassas" }
              ],
      "description": "Professional commercial and residential pool repair and renovation throughout Northern Virginia and Washington, DC. Pool replastering, tile, coping, deck repairs, equipment upgrades, and complete pool renovations.",
            "url": "https://mgnpools.com/renovations"
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
                "name": "What pool repair and renovation services do you offer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We offer comprehensive pool repair and renovation services including replastering, equipment installation and replacement, leak detection, deck repair, tile and coping replacement, filter system repair, pump and motor repair, and complete pool renovations."
                }
              },
              {
                "@type": "Question",
                "name": "Are you licensed and insured for pool repairs and renovations?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we are fully licensed, certified and insured to perform any type of pool repairs and renovations. All our technicians are certified professionals."
                }
              },
              {
                "@type": "Question",
                "name": "How long does a pool renovation take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The duration of a pool renovation depends on the scope of work. Simple repairs can take 1-2 days, while complete renovations including replastering may take 1-2 weeks. We provide detailed timelines during the consultation."
                }
              }
            ]
          })}
        </script>
      </Helmet>
      <PageHeader
        title="Pool Repair & Renovation"
        subtitle="Professional Pool Repair & Renovation in Northern Virginia & Washington, DC"
        backgroundImage="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80"
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Pool Repair & Renovation Services
              </h2>

              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                <strong>MGN POOLS</strong> MGN Pools provides professional pool repair and renovation services for commercial and residential swimming pools throughout Northern Virginia and Washington, DC.
              </p>

              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                From equipment repairs and upgrades to replastering, tile, coping, and complete pool renovations, our experienced team provides reliable solutions for both commercial and residential pools.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  "Fully licensed and certified",
                  "Insured services",
                  "Expert pool repair",
                  "Replastering, tile and coping",
                  "Equipment upgrades"
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
                to="/repair"
                className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Request Free Estimate
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
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
                  alt="Professional pool repair and renovation services in Northern Virginia and Washington, DC"
                  className="w-full h-[450px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Renovation Services */}
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
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Renovation Services
            </h2>
          </div>

          <div className="space-y-12">
            {/* Pool Repairs and Renovations */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-0">
                <div className="relative h-24 md:h-40">
                  <img
                    src={PoolRenovationImg}
                    alt="Commercial and Residential Pool Renovation Services in Northern Virginia and Washington, DC"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 md:p-6 flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Commercial & Residential Pool Repairs and Renovations</h3>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    MGN Pools provides professional pool renovation and repair services for commercial and residential swimming pools throughout Northern Virginia and Washington, DC, including replastering, coping and tile replacement, equipment upgrades, and structural repairs.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Filter System Repair */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-0">
                <div className="relative h-24 md:h-40 order-2 md:order-1">
                  <img
                    src={FilterImg}
                    alt="Filter System Repair"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 md:p-6 flex flex-col justify-center order-1 md:order-2">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Commercial & Residential Pool Filter Repair and Installation</h3>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    MGN Pools provides professional pool filter repair, replacement, and installation for commercial and residential swimming pools, including sand, cartridge, and DE filtration systems.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Pump and Motor Repair */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-0">
                <div className="relative h-28 md:h-44">
                  <img
                    src={PumpMotorImg}
                    alt="Pump and Motor Repair"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 md:p-6 flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Commercial & Residential Pool Pump and Motor Repair</h3>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    MGN Pools provides professional pool pump and motor repair, replacement, and installation for commercial and residential swimming pools, helping restore proper circulation, filtration, and reliable system operation.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Leak Detection */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-0">
                <div className="relative h-28 md:h-40">
                  <img
                    src={LeakDetectionImg}
                    alt="Leak Detection"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 md:p-6 flex flex-col justify-center order-1 md:order-2">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Swimming Pool Leak Detection and Pressure Testing</h3>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    MGN Pools provides professional swimming pool leak detection and pressure testing to identify leaks in plumbing lines, fittings, equipment, main drains, skimmers, and the pool shell.
                  </p>                
                </div>
              </div>
            </motion.div>

            {/* Deck and Caulking */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-0">
                <div className="relative h-28 md:h-44">
                  <img
                    src={CaulkingImg}
                    alt="Deck Caulking"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 md:p-6 flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Pool Deck, Perimeter & Expansion Joint Caulking</h3>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    MGN Pools provides professional pool deck, perimeter, and expansion joint caulking to help prevent water intrusion, protect surrounding structures, and maintain a watertight joint between the pool deck and pool shell.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Pressure Washing */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-0">
                <div className="relative h-28 md:h-40">
                  <img
                    src={PressureWashingImg}
                    alt="Pressure Washing"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 md:p-6 flex flex-col justify-center order-1 md:order-2">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Pool Interior and Deck Pressure Washing</h3>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    MGN Pools provides professional pressure washing for pool interiors, pool decks, and surrounding pool areas to remove dirt, algae, stains, and buildup and prepare surfaces for opening, maintenance, or renovation.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Swimming Pool Whitecoating and Replastering*/}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-0">
                <div className="relative h-28 md:h-40">
                  <img
                    src={ReplasteringImg}
                    alt="Whitecoating"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 md:p-6 flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Swimming Pool Replastering and Whitecoating</h3>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    MGN Pools provides professional swimming pool replastering and whitecoating for commercial and residential pools. We restore worn, rough, stained, or deteriorated pool surfaces to provide a smooth, durable, and attractive finish.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Skimmer Replacement */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="grid grid-cols-1 md:grid-cols-[190px_1fr] gap-0">
                <div className="relative h-28 md:h-40">
                  <img
                    src={SkinmerImg}
                    alt="Skimmer Replacement"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 md:p-6 flex flex-col justify-center order-1 md:order-2">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Swimming Pool Skimmer Repair and Replacement</h3>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    MGN Pools provides professional swimming pool skimmer repair and replacement for commercial and residential pools. We repair leaks and deterioration around the skimmer and replace damaged skimmers when necessary to restore proper circulation and prevent water loss.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Main Drain Installation */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-0">
                <div className="relative h-28 md:h-40">
                  <img
                    src={MainDrainImg}
                    alt="Main Drain Installation"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 md:p-6 flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Swimming Pool Main Drain Repair, Replacement and Hydrostatic Valve Installation</h3>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    MGN Pools provides swimming pool main drain repair and replacement, including drain covers, sumps, connecting plumbing, and hydrostatic valves. We can evaluate damaged or deteriorated main drain components and perform the necessary repairs or replacement to restore safe and proper pool circulation.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Safety Pool Cover */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-0">
                <div className="relative h-28 md:h-40">
                  <img
                    src={SafetyImg}
                    alt="Safety Pool Cover"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 md:p-6 flex flex-col justify-center order-1 md:order-2">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Swimming Pool Safety Cover Installation & Replacement</h3>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    MGN Pools provides professional swimming pool safety cover installation and replacement for commercial and residential pools. We install properly fitted safety covers and replacement anchors to help protect the pool during the off-season.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Vinyl Liner */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-0">
                <div className="relative h-28 md:h-40">
                  <img
                    src={InstallationImg}
                    alt="Vinyl Liner Installation"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 md:p-6 flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Swimming Pool Vinyl Liner Installation & Replacement</h3>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    MGN Pools provides professional swimming pool vinyl liner installation and replacement for residential and commercial pools. We replace worn, faded, leaking, or damaged liners and install properly fitted new liners to restore the appearance and watertight integrity of the pool.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Need Pool Repair or Renovation?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact MGN Pools for a free pool repair or renovation estimate and consultation.
          </p>
          <Link
            to="/repair"
            className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
          >
            Request a Free Estimate
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
};
