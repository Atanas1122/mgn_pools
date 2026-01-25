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
        <title>Pool Repair & Renovation in Springfield VA | MGN Pools</title>
        <meta
          name="description"
          content="Licensed, certified and insured pool repair and renovation in Springfield VA and the DC metro area. Replastering, equipment installation, leak detection and more."
        />
        <link rel="canonical" href="https://mgnpools.com/renovations" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Pool Repair & Renovation in Springfield VA | MGN Pools" />
        <meta property="og:description" content="Licensed, certified and insured pool repair and renovation in Springfield VA and the DC metro area. Replastering, equipment installation, leak detection and more." />
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
              { "@type": "City", "name": "Arlington" }
            ],
            "description": "Licensed, certified and insured pool repair and renovation services including replastering, equipment installation and leak detection.",
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
        title="Pool Repairs and Renovation"
        subtitle="Licensed, certified and insured pool renovation services"
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
                Pool Repairs and Renovation
              </h2>

              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                <strong>MGN POOLS</strong> provides expert pool repair and pool renovation services for residential and commercial pools throughout <strong>Northern Virginia</strong> and <strong>Washington DC</strong> metro area. Fully licensed, certified, and insured, our team is qualified to handle all types of pool repairs and pool renovations, ensuring safe, reliable, and long-lasting results.
              </p>

              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                From pool equipment repairs to complete pool renovations, you can trust our experienced professionals to manage projects of any size. Whether you need minor pool repairs or a full pool transformation, MGN Pools delivers dependable service and fast response times across Northern Virginia.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  "Fully licensed and certified",
                  "Insured services",
                  "Expert pool repair",
                  "Complete renovations",
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
                  alt="Professional pool renovation and repair services in Springfield, Virginia"
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
                    alt="Pool Repairs and Renovations"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 md:p-6 flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Pool Repairs and Renovations</h3>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    Swimming pool renovation. If you are looking for an expert to renovate your swimming pool or repair and replace your damaged or old equipment, MGN POOLS is the right choice. We can replace your tiles, coping stones and deck, we can resurface the shell of your swimming pool, we can repair or replace all structural, plumbing, decking, electrical, filter and pump equipment.
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
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Filter System Repair and Installation</h3>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    The filtration system is of high importance because it performs the functions of a mechanic cleaner of the water in your swimming pool. If the system is able to catch even the smallest fragments you will have perfectly clean water. If your pool water appears cloudy it might be time to service the filter or install a new one. MGN POOLS will give you the professional advice before you spend thousands in repairs.
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
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Pump and Motor Repair and Replacement</h3>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    The heart of your circulation system, your pool pump pulls water from one or more suction ports (i.e., skimmer and main drain), and then pushes it through the filter and heater (if you have one) and back to the pool's return ports. If your motor is leaking, noisy or does not pump water as usual it is time for repair or replacement. MGN POOLS will diagnose the problem and provide an expert repair.
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
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Leak Detection and Pressure Test</h3>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    Swimming pools can leak through any of the fittings or accessories, plumbing, or even right through the shell. It is important to repair leaks, not only to save water, heat, and chemicals, but also to prevent undermining pool structural components and washing away fill dirt. MGN POOLS will gladly consult with you regarding your pool leak findings and price quote.
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
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Deck, Pool Perimeter and Expansion Joint Caulking</h3>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    Deck, pool perimeter and expansion joint caulking is important in keeping water out of areas that could be damaged during winter, such as water seeping and freezing under coping stones and behind the tiles.
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
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Pressure Washing</h3>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    Pressure washing is a fast and affordable way to make your decks, pools and bathrooms look fresh and clean. The best time to have your deck pressure washed is right before opening. Contact MGN POOLS for a free estimate.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Whitecoating */}
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
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Whitecoating (Re-plastering)</h3>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    The lifetime for plaster is about 4-7 years. A nice and smooth finish of your swimming pool shell will make the water look clear and sparkling. After we apply the new plaster, MGN POOLS will provide the special attention and treatments, which are required by your facility for the next few weeks. And last but not the least we will give you the best warranty in the industry.
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
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Skimmer Replacement</h3>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    The interface of the plastic skimmer to the concrete pool, plaster, tile and coping creates many opportunities for problems to occur. Even when the pool is properly winterized, excessive rain, snow, and low temperatures can cause damage to a skimmer body that will require replacing the entire skimmer. Contact MGN POOLS for a professional opinion.
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
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Main Drain and Hydrostatic Valve Installation</h3>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    Damaged or poorly maintained main drains can become an entrapment hazard for swimmers. As of December 20, 2008 all Commercial and Semi Commercial Swimming Pools will have to Replace all their Main Drain and Side Wall Suctions Covers to come into compliance with the new "Virginia Graeme Baker Pool and Spa Safety Act (A112.19.8-2007)". Hydrostatic valves are very simple devices that have an extremely important function: They adjust the water pressure that builds up below the pool. MGN POOLS can assist you in replacing your Main Drains and Hydrostatic valves for the best price in the industry.
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
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Safety Pool Cover Installation</h3>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    Any pool. Any size. Any style. You'll probably never need a safety pool cover strong enough to support the weight of the African elephant. But imagine how safe you'll feel owning the only pool cover that's proven it can.
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
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Vinyl Liner Installation</h3>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    A designer in-ground pool liner can be the spectacular centerpiece of your backyard environment, transforming your pool into a work of art. Whether you would like to update the look of your current in-ground pool, or enhance the beauty of a new pool, MGN POOLS can install the vinyl liner for you.
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
            Ready to Transform Your Pool?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us for a free renovation estimate and consultation.
          </p>
          <Link
            to="/repair"
            className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
          >
            Get Free Estimate
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
};