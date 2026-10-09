import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const cities = [
  {
    name: "Springfield",
    state: "VA",
    path: "/locations/springfield-pool-service",
    neighborhoods: "West Springfield, North Springfield, Newington, Franconia, Saratoga, Kings Park"
  },
  {
    name: "Alexandria",
    state: "VA",
    path: "/locations/alexandria-pool-service",
    neighborhoods: "Old Town, Del Ray, West End, Rosemont, Kingstowne, Belle Haven, Fort Hunt"
  },
  {
    name: "Arlington",
    state: "VA",
    path: "/locations/arlington-pool-service",
    neighborhoods: "Ballston, Clarendon, Rosslyn, Crystal City, Pentagon City, Shirlington, Columbia Pike"
  },
  {
    name: "Woodbridge",
    state: "VA",
    path: "/locations/woodbridge-pool-service",
    neighborhoods: "Lake Ridge, Dale City, Potomac Mills, Occoquan, Montclair"
  },
  {
    name: "Fairfax",
    state: "VA",
    path: "/locations/fairfax-pool-service",
    neighborhoods: "Fairfax City, Fair Oaks, Fairfax Station, Mantua, Kings Park West, Burke"
  },
  {
    name: "McLean",
    state: "VA",
    path: "/locations/mclean-pool-service",
    neighborhoods: "Tysons, Langley, Chesterbrook, Lewinsville, Pimmit Hills"
  },
  {
    name: "Great Falls",
    state: "VA",
    path: "/locations/great-falls-pool-service",
    neighborhoods: "Forestville, Colvin Run, River Bend, Great Falls Village"
  },
  {
    name: "Washington DC",
    state: "DC",
    path: "/locations/washington-dc-pool-service",
    neighborhoods: "Georgetown, Dupont Circle, Capitol Hill, Navy Yard, Foggy Bottom, Cleveland Park, Petworth"
  },
  {
    name: "Annandale",
    state: "VA",
    path: "/locations/annandale-pool-service",
    neighborhoods: "Ravensworth, Wakefield, Broyhill Crest, Canterbury Woods, North Springfield"
  },
];

export const CitySelector = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pool Services in Your City
          </h2>
          <p className="text-lg text-gray-600">
            Select your location to find pool services near you
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cities.map((city, index) => (
            <motion.div
              key={city.path}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
            >
              <Link
                to={city.path}
                className="block bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-2 border-transparent hover:border-sky-500 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-sky-500 transition-colors">
                    <MapPin className="w-6 h-6 text-sky-600 group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-sky-600 transition-colors">
                      {city.name}, {city.state}
                    </h3>
                    <p className="text-sm text-gray-500 mb-3">
                      {city.neighborhoods}
                    </p>
                    <span className="text-sky-600 font-semibold text-sm group-hover:underline">
                      View Pool Services →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
