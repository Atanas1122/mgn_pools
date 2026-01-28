import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { PageHeader } from '../components/PageHeader';
import { ArrowRight, GraduationCap, Heart, Shield, Award } from 'lucide-react';
import backgroundWater from '../assets/images/home/background_water.webp';
import Training from '../assets/images/training/Lifeguard_training.jpg';
import lifeguardTrainingNew from '../assets/images/training/lifeguard_training_new.png';

const certifications = [
  {
    icon: Heart,
    title: "First Aid",
    description: "Learn to recognize and respond to first-aid emergencies in and around the water."
  },
  {
    icon: Shield,
    title: "CPR & AED",
    description: "Gain the skills to perform CPR and use an Automated External Defibrillator safely."
  },
  {
    icon: Award,
    title: "Professional Rescuer Skills",
    description: "Develop the knowledge and confidence required of a certified lifeguard."
  },
  {
    icon: GraduationCap,
    title: "Lifeguarding Techniques",
    description: "Hands-on practice in surveillance, water rescues and emergency response."
  },
];

export const TrainingPage = () => {

  return (
    <>
      <Helmet>
        <title>Lifeguard Training & Certification in Springfield VA | MGN Pools</title>
        <meta
          name="description"
          content="American Red Cross lifeguard training with First Aid, CPR and AED in Springfield VA and the DC metro area. Professional lifeguard and pool operator certification."
        />
        <link rel="canonical" href="https://mgnpools.com/training" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Lifeguard Training & Certification in Springfield VA | MGN Pools" />
        <meta property="og:description" content="American Red Cross lifeguard training with First Aid, CPR and AED in Springfield VA and the DC metro area. Professional lifeguard and pool operator certification." />
        <meta property="og:url" content="https://mgnpools.com/training" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "Lifeguard Training and Certification",
            "description": "American Red Cross lifeguard classes with First Aid, CPR and AED training.",
            "provider": {
              "@id": "https://mgnpools.com/#localbusiness"
            },
            "url": "https://mgnpools.com/training"
          })}
        </script>
      </Helmet>
      <PageHeader
        title="Training and Certifications"
        subtitle="American Red Cross Lifeguard Classes"
        backgroundImage="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1600&q=80"
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
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-8 h-8 text-sky-500" />
                <span className="text-sky-600 font-semibold uppercase tracking-wider text-sm">Training</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Training and Certifications
              </h2>

              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                <strong>MGN Pools Management</strong> is pleased to offer American Red Cross Lifeguard Classes in Springfield and across Northern Virginia.
              </p>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                The Lifeguard classes include training in First Aid, AED and CPR for the Professional Rescuer.
              </p>

              <Link
                to="/contacts"
                className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Register for Training
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4 }}
              className="flex justify-end pl-8"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl inline-block">
                <img
                  src={lifeguardTrainingNew}
                  alt="American Red Cross lifeguard training and certification classes in Virginia"
                  className="w-auto h-auto max-w-full max-h-[550px] block"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-24 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">What You'll Learn</h2>
            <p className="text-xl text-blue-100">Comprehensive training for future and current lifeguards.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="bg-white/10 rounded-xl p-6 text-center hover:-translate-y-1 transition-transform"
              >
                <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <cert.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">{cert.title}</h3>
                <p className="text-blue-100 text-sm">{cert.description}</p>
              </div>
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
            Ready to Get Certified?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contact us today to learn about upcoming training sessions.
          </p>
          <Link
            to="/contacts"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-sky-600 px-8 py-4 rounded-lg font-bold text-lg transition-colors"
          >
            Contact Us
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
};

