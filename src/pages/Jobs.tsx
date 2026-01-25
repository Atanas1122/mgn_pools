import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { PageHeader } from '../components/PageHeader';
import { ArrowRight, Briefcase, Users, Award, Clock, CheckCircle, Mail } from 'lucide-react';
import backgroundWater from '../assets/images/home/background_water.webp';

const SITE_CONFIG = {
  email: "mgnpools@yahoo.com",
};

const benefits = [
  {
    icon: Award,
    title: "Competitive Pay",
    description: "We offer competitive wages for all positions."
  },
  {
    icon: Users,
    title: "Great Team",
    description: "Work with experienced professionals in the industry."
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    description: "Various scheduling options available."
  },
  {
    icon: Briefcase,
    title: "Career Growth",
    description: "Opportunities for advancement and skill development."
  },
];

const positions = [
  {
    title: "Lifeguard",
    type: "Full-time / Part-time",
    description: "We are looking for certified lifeguards for commercial pool facilities.",
    requirements: [
      "American Red Cross Lifeguard Certification",
      "CPR/AED/First Aid Certification",
      "Strong swimming skills",
      "Excellent communication skills"
    ]
  },
  {
    title: "Pool Technician",
    type: "Full-time",
    description: "Experienced pool technicians for maintenance and repair work.",
    requirements: [
      "Experience with pool equipment",
      "Knowledge of water chemistry",
      "Valid driver's license",
      "Ability to lift 50+ lbs"
    ]
  },
  {
    title: "Pool Manager",
    type: "Full-time",
    description: "Experienced pool managers for commercial pool facilities.",
    requirements: [
      "Previous management experience",
      "Strong leadership skills",
      "Knowledge of pool operations",
      "CPO certification preferred"
    ]
  },
];

export const JobsPage = () => {

  return (
    <>
      <Helmet>
        <title>Pool Jobs & Careers in Springfield VA | MGN Pools</title>
        <meta
          name="description"
          content="Join MGN Pools in Springfield VA. We're hiring lifeguards, pool technicians and pool managers with competitive pay, flexible schedules and career growth."
        />
        <link rel="canonical" href="https://mgnpools.com/jobs" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Pool Jobs & Careers in Springfield VA | MGN Pools" />
        <meta property="og:description" content="Join MGN Pools in Springfield VA. We're hiring lifeguards, pool technicians and pool managers with competitive pay, flexible schedules and career growth." />
        <meta property="og:url" content="https://mgnpools.com/jobs" />
      </Helmet>
      <PageHeader
        title="Jobs"
        subtitle="Join the MGN Pools team"
        backgroundImage="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=1600&q=80"
      />

      {/* Introduction */}
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
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <Briefcase className="w-16 h-16 text-sky-500 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Join Our Team
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              MGN Pools Management is always looking for dedicated professionals to join our team.
              We offer competitive pay, flexible schedules, and opportunities for career growth.
            </p>
          </motion.div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-xl p-6 text-center"
              >
                <div className="w-14 h-14 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-sky-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
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
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-lg text-gray-600">Current opportunities at MGN Pools</p>
          </motion.div>

          <div className="space-y-6">
            {positions.map((position, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{position.title}</h3>
                    <span className="inline-block bg-sky-100 text-sky-600 px-3 py-1 rounded-full text-sm font-medium mt-2">
                      {position.type}
                    </span>
                  </div>
                    <a
                    href={`mailto:${SITE_CONFIG.email}?subject=Job Application: ${position.title}`}
                    className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors shrink-0"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-gray-600 mb-4">{position.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {position.requirements.map((req, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-sky-500 shrink-0" />
                        <span className="text-gray-600 text-sm">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Interested in Working With Us?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Send us your resume and we'll be in touch about available opportunities.
          </p>
          <a
            href={`mailto:${SITE_CONFIG.email}?subject=Job Application`}
            className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
          >
            <Mail className="w-5 h-5" />
            Send Your Resume
          </a>
        </div>
      </section>
    </>
  );
};

