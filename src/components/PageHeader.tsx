import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  smallText?: boolean;
  bottomAlign?: boolean;
}

export const PageHeader = ({ title, subtitle, backgroundImage, smallText = false, bottomAlign = false }: PageHeaderProps) => {
  return (
    <section className={`relative h-[40vh] min-h-[300px] flex justify-center overflow-hidden ${bottomAlign ? 'items-end pb-6' : 'items-center'}`}>
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage || "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=1600&q=80"}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/65 via-blue-400/60 to-cyan-500/65" />
      </div>

      <div className="relative z-10 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={smallText
            ? "text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4"
            : "text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
          }
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={smallText
              ? "text-sm md:text-base text-white/80 max-w-2xl mx-auto"
              : "text-lg md:text-xl text-white/80 max-w-2xl mx-auto"
            }
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
};

