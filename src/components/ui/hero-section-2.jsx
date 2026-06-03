import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Globe, Phone, MapPin, ShieldCheck, Award, Ship } from "lucide-react";
import { GlobeStickers } from "./cobe-globe-stickers";

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
  (
    {
      className,
      logo,
      slogan,
      title,
      subtitle,
      callToAction,
      backgroundImage,
      contactInfo,
      highlights,
      ...props
    },
    ref,
  ) => {
    // Check if the intro just finished to delay our animations until the doors open
    const [animationDelay] = useState(() => {
      return window.introJustFinished ? 1.0 : 0.2;
    });

    useEffect(() => {
      if (window.introJustFinished) {
        setTimeout(() => {
          window.introJustFinished = false;
        }, 2000);
      }
    }, []);

    // Animation variants for the container to orchestrate children animations
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.15,
          delayChildren: animationDelay,
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
          className,
        )}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        {...props}
      >
        {/* Center Interactive Globe Stickers Background */}
        <div className="absolute inset-0 flex items-center justify-center z-[5] opacity-60 pointer-events-none">
          <div className="w-[120%] sm:w-[90%] md:w-[450px] lg:w-[550px] aspect-square pointer-events-auto opacity-80 mix-blend-screen">
            <GlobeStickers speed={0.002} />
          </div>
        </div>

        {/* Left Side: Content */}
        <div className="flex w-full flex-col justify-center p-6 pt-24 pb-12 md:w-1/2 md:p-12 lg:w-3/5 lg:p-16 z-10 relative flex-1 pointer-events-none">
          {/* Top Section: Logo & Main Content */}
          <div className="flex-1 flex flex-col justify-center pointer-events-auto">
            <motion.header className="mb-8 md:mb-12" variants={itemVariants}>
              {logo && (
                <div className="flex items-center">
                  {logo.url && (
                    <div className="relative mr-3 group">
                      {/* Logo Image */}
                      <img
                        src={logo.url}
                        alt={logo.alt}
                        className="h-10 md:h-14 object-contain relative z-10"
                      />

                      {/* Sparkling Star 1 (Top Right) */}
                      <motion.svg
                        className="absolute -top-1 -right-1 w-4 h-4 text-gold-300 pointer-events-none z-20 drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        animate={{
                          scale: [0, 1.2, 1.4, 0],
                          rotate: [0, 90, 180, 270],
                          opacity: [0, 1, 1, 0],
                        }}
                        transition={{
                          duration: 2.2,
                          repeat: Infinity,
                          repeatDelay: 3.5,
                          ease: "easeInOut",
                        }}
                      >
                        <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
                      </motion.svg>

                      {/* Sparkling Star 2 (Bottom Left-Center) */}
                      <motion.svg
                        className="absolute -bottom-1 left-2 w-3.5 h-3.5 text-gold-400 pointer-events-none z-20 drop-shadow-[0_0_6px_rgba(250,204,21,0.6)]"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        animate={{
                          scale: [0, 1.1, 0],
                          rotate: [45, 135, 225],
                          opacity: [0, 0.9, 0],
                        }}
                        transition={{
                          duration: 1.8,
                          repeat: Infinity,
                          repeatDelay: 4.8,
                          ease: "easeInOut",
                          delay: 1.2,
                        }}
                      >
                        <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
                      </motion.svg>

                      {/* Ultra-sharp Metallic Gold Specular Glint */}
                      <motion.div
                        initial={{ x: "-150%", opacity: 0 }}
                        animate={{ x: "250%", opacity: [0, 0.8, 0.8, 0] }}
                        transition={{
                          duration: 1.6,
                          repeat: Infinity,
                          repeatDelay: 4.5,
                          ease: "easeInOut",
                          delay: 0.8,
                        }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-200/40 to-transparent w-[25%] h-full -skew-x-20 z-20 pointer-events-none mix-blend-color-dodge"
                      />
                    </div>
                  )}
                  <div>
                    {logo.text && (
                      <p className="text-base md:text-lg font-heading font-bold tracking-wider text-white">
                        {logo.text}
                      </p>
                    )}
                    {slogan && (
                      <p className="text-[9px] md:text-[10px] tracking-[0.18em] uppercase text-gold-300/80 mt-1">
                        {slogan}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </motion.header>

            <motion.main variants={containerVariants}>
              <motion.h1
                className="text-3xl sm:text-4xl font-heading font-bold leading-tight text-white md:text-5xl lg:text-6xl"
                variants={itemVariants}
              >
                {title}
              </motion.h1>
              <motion.div
                className="my-5 md:my-6 h-1 w-16 md:w-20 bg-gold-gradient rounded-full"
                variants={itemVariants}
              ></motion.div>
              <motion.p
                className="mb-8 max-w-lg text-base md:text-lg font-body text-white/80 leading-relaxed"
                variants={itemVariants}
              >
                {subtitle}
              </motion.p>
              <motion.a
                href={callToAction.href}
                className="inline-flex items-center justify-center gap-2 px-6 md:px-7 py-3.5 w-full sm:w-auto bg-gold-400 text-navy-800 font-body font-bold rounded-full transition-all duration-300 hover:bg-gold-300 hover:shadow-gold hover:scale-105 active:scale-95"
                variants={itemVariants}
              >
                {callToAction.text}
              </motion.a>
            </motion.main>
          </div>

          {/* Bottom Section: Footer Info or Highlights */}
          {(highlights || contactInfo) && (
            <motion.footer
              className="mt-10 md:mt-12 w-full pointer-events-auto"
              variants={itemVariants}
            >
              {highlights ? (
                <div className="flex flex-wrap gap-4 text-xs md:text-sm font-body text-white/80">
                  {highlights.map((h, idx) => (
                    <div
                      key={idx}
                      className="flex items-center bg-white/5 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-200"
                    >
                      {h.icon && <span className="mr-2 text-gold-400 flex items-center">{h.icon}</span>}
                      <span className="font-medium tracking-wide">{h.text}</span>
                    </div>
                  ))}
                </div>
              ) : (
                contactInfo && (
                  <div className="flex flex-col gap-4 text-xs md:text-sm font-body text-white/70 sm:flex-row sm:gap-6">
                    {contactInfo.website && (
                      <div className="flex items-center">
                        <InfoIcon type="website" />
                        <span>{contactInfo.website}</span>
                      </div>
                    )}
                    {contactInfo.phone && (
                      <div className="flex items-center">
                        <InfoIcon type="phone" />
                        <span>{contactInfo.phone}</span>
                      </div>
                    )}
                    {contactInfo.address && (
                      <div className="flex items-center">
                        <InfoIcon type="address" />
                        <span className="whitespace-pre-line truncate max-w-[200px] md:max-w-none">
                          {contactInfo.address}
                        </span>
                      </div>
                    )}
                  </div>
                )
              )}
            </motion.footer>
          )}
        </div>

        {/* Right Side: Image with Clip Path Animation (Responsive) */}
        <motion.div
          className="relative w-full h-[300px] md:absolute md:inset-y-0 md:right-0 md:w-1/2 md:h-full lg:w-2/5"
          initial={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
          animate={{
            clipPath:
              window.innerWidth >= 768
                ? "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)"
                : "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          }}
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
  },
);

HeroSection.displayName = "HeroSection";

export { HeroSection };
