import React from 'react';
import { cn } from "@/lib/utils";
import { motion } from 'framer-motion';
import { Globe, Phone, MapPin } from 'lucide-react';

// Icon component for contact details
const InfoIcon = ({ type }) => {
    const icons = {
        website: <Globe className="h-5 w-5 text-gold-400" />,
        phone: <Phone className="h-5 w-5 text-gold-400" />,
        address: <MapPin className="h-5 w-5 text-gold-400" />,
    };
    return <div className="mr-2 flex-shrink-0">{icons[type]}</div>;
};

const HeroSection = React.forwardRef(
  ({ className, logo, slogan, title, subtitle, callToAction, backgroundImage, contactInfo, ...props }, ref) => {
    
    // Animation variants for the container to orchestrate children animations
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.15,
          delayChildren: 0.2,
        },
      },
    };

    // Animation variants for individual text/UI elements
    const itemVariants = {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: "easeOut",
        },
      },
    };
    
    return (
      <motion.section
        ref={ref}
        className={cn(
          "relative flex w-full flex-col overflow-hidden bg-navy-900 text-white md:flex-row min-h-[100vh] md:min-h-[90vh]",
          className
        )}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        {...props}
      >
        {/* Left Side: Content */}
        <div className="flex w-full flex-col justify-center p-6 pt-24 pb-12 md:w-1/2 md:p-12 lg:w-3/5 lg:p-16 z-10 relative flex-1">
            {/* Top Section: Logo & Main Content */}
            <div className="flex-1 flex flex-col justify-center">
                <motion.header className="mb-8 md:mb-12" variants={itemVariants}>
                    {logo && (
                        <div className="flex items-center">
                            {logo.url && <img src={logo.url} alt={logo.alt} className="mr-3 h-8 md:h-10 object-contain" />}
                            <div>
                                {logo.text && <p className="text-base md:text-lg font-heading font-bold tracking-wider text-white">{logo.text}</p>}
                                {slogan && <p className="text-[9px] md:text-[10px] tracking-[0.18em] uppercase text-gold-300/80 mt-1">{slogan}</p>}
                            </div>
                        </div>
                    )}
                </motion.header>

                <motion.main variants={containerVariants}>
                    <motion.h1 className="text-3xl sm:text-4xl font-heading font-bold leading-tight text-white md:text-5xl lg:text-6xl" variants={itemVariants}>
                        {title}
                    </motion.h1>
                    <motion.div className="my-5 md:my-6 h-1 w-16 md:w-20 bg-gold-gradient rounded-full" variants={itemVariants}></motion.div>
                    <motion.p className="mb-8 max-w-lg text-base md:text-lg font-body text-white/80 leading-relaxed" variants={itemVariants}>
                        {subtitle}
                    </motion.p>
                    <motion.a href={callToAction.href} className="inline-flex items-center justify-center gap-2 px-6 md:px-7 py-3.5 w-full sm:w-auto bg-gold-400 text-navy-800 font-body font-bold rounded-full transition-all duration-300 hover:bg-gold-300 hover:shadow-gold hover:scale-105 active:scale-95" variants={itemVariants}>
                        {callToAction.text}
                    </motion.a>
                </motion.main>
            </div>

            {/* Bottom Section: Footer Info */}
            <motion.footer className="mt-10 md:mt-12 w-full" variants={itemVariants}>
                <div className="flex flex-col gap-4 text-xs md:text-sm font-body text-white/70 sm:flex-row sm:gap-6">
                    <div className="flex items-center">
                        <InfoIcon type="website" />
                        <span>{contactInfo.website}</span>
                    </div>
                    <div className="flex items-center">
                        <InfoIcon type="phone" />
                        <span>{contactInfo.phone}</span>
                    </div>
                    <div className="flex items-center">
                        <InfoIcon type="address" />
                        <span className="whitespace-pre-line truncate max-w-[200px] md:max-w-none">{contactInfo.address}</span>
                    </div>
                </div>
            </motion.footer>
        </div>

        {/* Right Side: Image with Clip Path Animation (Responsive) */}
        <motion.div 
          className="relative w-full h-[300px] md:absolute md:inset-y-0 md:right-0 md:w-1/2 md:h-full lg:w-2/5"
          initial={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
          animate={{ clipPath: window.innerWidth >= 768 ? 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' : 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
          transition={{ duration: 1.2, ease: "circOut" }}
        >
          {/* Overlay for blending on mobile */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900 to-transparent md:hidden z-10" />
          <div className="absolute inset-0 bg-navy-900/20 z-10 hidden md:block" />
          
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
        </motion.div>
      </motion.section>
    );
  }
);

HeroSection.displayName = "HeroSection";

export { HeroSection };
