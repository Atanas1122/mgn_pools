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

const renovationFaqs = [
  {
    "question": "What commercial and residential pool repair services does MGN Pools provide?",
    "answer": "MGN Pools repairs and renovates commercial and residential swimming pools in Northern Virginia and Washington, DC. Services include pump and motor repairs, filter replacement, skimmer and main drain repairs, leak detection and pressure testing, replastering, deck caulking, safety covers, and vinyl liners. The appropriate work depends on the pool's condition and the results of an on-site evaluation."
  },
  {
    "question": "When should a swimming pool be replastered or resurfaced?",
    "answer": "Rough, stained, cracked, or deteriorating plaster can indicate that a pool surface needs professional evaluation. MGN Pools provides swimming pool replastering and whitecoating for commercial facilities and residential pools. The scope of work depends on the condition of the existing finish and substrate. We can discuss surface preparation, finish options, and a project schedule after inspecting the pool."
  },
  {
    "question": "Can MGN Pools repair commercial pool pumps, motors, and filters?",
    "answer": "Yes. Our team services pool pumps, motors, and filtration equipment for commercial and residential swimming pools. We work on sand, cartridge, and DE filter systems and can assess whether a component should be repaired or replaced. Reliable circulation and filtration are essential to pool operation, so we evaluate the equipment and recommend an appropriate solution."
  },
  {
    "question": "Do you offer swimming pool leak detection and pressure testing?",
    "answer": "Yes. MGN Pools provides leak detection and pressure testing to help locate water loss in pool plumbing, fittings, equipment, skimmers, main drains, and the pool shell. The diagnostic approach depends on the symptoms and the pool's construction. Once the likely source is identified, we can explain repair options and the next steps."
  },
  {
    "question": "Do you repair pool tile, coping, decks, and expansion joints?",
    "answer": "MGN Pools offers pool renovation services that include tile and coping replacement, deck repairs, and perimeter and expansion joint caulking. These components affect both appearance and the condition of the surrounding pool structure. We assess the damaged areas and recommend repairs based on the observed condition and the scope of the project."
  },
  {
    "question": "How long does a commercial swimming pool renovation take?",
    "answer": "Renovation timelines vary based on the pool size, surface condition, repair scope, material availability, weather, and inspection requirements. A limited equipment repair may take much less time than replastering or a larger renovation. For plaster work, startup and water chemistry care after filling are important parts of the schedule. MGN Pools can provide a project-specific estimate and anticipated timeline after evaluating the facility."
  },
  {
    "question": "Do you install safety covers, main drains, and vinyl liners?",
    "answer": "Yes. MGN Pools offers swimming pool safety cover installation and replacement, main drain repairs and replacement, hydrostatic valve installation, and vinyl liner replacement. We assess the existing equipment and pool configuration before recommending materials or installation work. Any required safety or code considerations are addressed as part of project planning."
  },
  {
    "question": "Which areas do you serve, and how can I request a repair estimate?",
    "answer": "MGN Pools provides pool repair and renovation services throughout Northern Virginia and Washington, DC, including Springfield, Alexandria, Arlington, Fairfax, Falls Church, McLean, Vienna, Annandale, Lorton, Woodbridge, and Manassas. Commercial property managers, HOA boards, condominium associations, and residential pool owners can use our Request a Free Estimate form to describe their project and arrange a follow-up."
  }
];

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

        {/* FAQ structured data matches visible answers */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": renovationFaqs.map(({ question, answer }) => ({
              "@type": "Question",
              "name": question,
              "acceptedAnswer": { "@type": "Answer", "text": answer }
            }))
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
                <strong>MGN Pools</strong> provides professional pool repair and renovation services for commercial and residential swimming pools throughout Northern Virginia and Washington, DC.
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
                    MGN Pools provides commercial and residential swimming pool repair and renovation services across Northern Virginia and Washington, DC. Projects may involve replacing deteriorated tile and coping, resurfacing worn pool interiors, repairing damaged components, or modernizing aging circulation equipment. We assess the condition of the pool and discuss the appropriate scope of work with property managers, community associations, and homeowners before preparing an estimate.
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
                    MGN Pools repairs, replaces, and installs swimming pool filtration systems for commercial facilities and residential pools. We work with sand, cartridge, and diatomaceous earth (DE) filters, evaluating issues such as inadequate filtration, leaks, pressure problems, and worn components. Depending on the system's condition, service may include troubleshooting valves and fittings, replacing damaged parts, or recommending a properly sized replacement filter to help restore clear water and dependable circulation.
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
                    A malfunctioning pool pump or motor can reduce water circulation, interfere with filtration, and disrupt normal pool operations. MGN Pools provides swimming pool pump and motor troubleshooting, repair, replacement, and installation for commercial and residential facilities. Our technicians evaluate problems such as leaks, unusual noise, poor flow, and equipment failure, then recommend repairs or replacement based on the equipment's condition and the pool's operating requirements.
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
                    Unexplained water loss can result from leaks in pool plumbing, fittings, skimmers, main drains, equipment connections, or the pool shell. MGN Pools offers swimming pool leak detection and plumbing pressure testing to help locate potential sources of water loss in commercial and residential pools. Identifying the affected area helps determine whether a targeted plumbing repair, component replacement, or more extensive pool-shell repair may be necessary.
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
                    Damaged or deteriorated caulking around a swimming pool can allow water to enter joints between the deck, coping, and pool structure. MGN Pools provides pool perimeter and expansion joint caulking services for commercial and residential swimming pools. We evaluate joint conditions, remove failed material as appropriate, and install suitable replacement sealant to help protect surrounding surfaces and reduce water intrusion. Joint repair is especially important where seasonal movement and weather exposure affect the deck.
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
                    MGN Pools provides pressure washing for swimming pool interiors, decks, and surrounding pool areas as part of seasonal preparation, maintenance, and renovation work. Cleaning can help remove accumulated dirt, algae, and surface buildup before other work begins. Our team considers the surface material and condition when selecting an appropriate cleaning approach, since some finishes require gentler treatment to avoid damage. Pressure washing may also be used to prepare suitable surfaces for further inspection or repair.
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
                    Worn, rough, stained, or deteriorating plaster can affect the appearance and usability of a swimming pool. MGN Pools provides commercial and residential swimming pool replastering and whitecoating services in Northern Virginia and Washington, DC. A resurfacing project may include draining the pool, preparing the existing surface, addressing identified defects, and applying a new finish. After installation, careful startup procedures, circulation, brushing, and water chemistry management are important during the initial curing period to protect the new plaster.
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
                    Swimming pool skimmers collect floating debris and form part of the circulation system. Cracked skimmer bodies, leaking connections, and deterioration around the skimmer opening can contribute to water loss and reduced performance. MGN Pools evaluates and repairs commercial and residential pool skimmers, including associated plumbing and surrounding areas, and replaces damaged units when needed. The recommended approach depends on the location and extent of the damage and the condition of the existing installation.
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
                    MGN Pools provides swimming pool main drain repair and replacement services, including work involving drain covers, sumps, connected plumbing, and hydrostatic valves. Damaged or deteriorated components can affect circulation and require careful evaluation before repair. We assess the existing installation and identify appropriate replacement components and necessary work. Main drain and suction outlet projects must account for applicable safety requirements and compatible equipment before the pool is returned to service.
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
                    MGN Pools installs and replaces swimming pool safety covers for commercial and residential properties. We assess pool dimensions, deck conditions, existing anchor locations, and cover fit to help select an appropriate replacement or new installation. Work may include fitting the cover and installing or replacing compatible anchors and hardware. A properly selected and installed cover helps protect the pool during the off-season; owners should continue to follow the cover manufacturer's safety and maintenance instructions.
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
                    A damaged or aging vinyl liner may show fading, wrinkles, tears, or leaks that affect the pool's appearance and water retention. MGN Pools provides vinyl liner installation and replacement for residential and suitable commercial swimming pools. We evaluate the pool's dimensions and condition, remove the existing liner as needed, prepare the underlying surfaces, and install a properly fitted replacement. We also check visible fittings and related components that may need attention during the project.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pool Repair & Renovation FAQs */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Pool Repair & Renovation FAQs</h2>
          <div className="space-y-4">
            {renovationFaqs.map(({ question, answer }) => (
              <details key={question} className="rounded-xl bg-white shadow-sm border border-slate-100 p-6">
                <summary className="cursor-pointer font-bold text-gray-900 leading-relaxed">{question}</summary>
                <p className="mt-4 text-gray-700 leading-relaxed">{answer}</p>
              </details>
            ))}
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
