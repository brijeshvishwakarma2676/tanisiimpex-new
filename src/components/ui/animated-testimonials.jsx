"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Quote, Star } from "lucide-react"
import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"

export function AnimatedTestimonials({
  title = "Loved by the community",
  subtitle = "Don't just take our word for it. See what developers and companies have to say about our starter template.",
  badgeText = "Trusted by developers",
  testimonials = [],
  autoRotateInterval = 6000,
  trustedCompanies = [],
  trustedCompaniesTitle = "Trusted by developers from companies worldwide",
  className,
}) {
  const [activeIndex, setActiveIndex] = useState(0)

  // Refs for scroll animations
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const controls = useAnimation()

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  // Trigger animations when section comes into view
  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  // Auto rotate testimonials
  useEffect(() => {
    if (autoRotateInterval <= 0 || testimonials.length <= 1) return

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, autoRotateInterval)

    return () => clearInterval(interval)
  }, [autoRotateInterval, testimonials.length])

  if (testimonials.length === 0) {
    return null
  }

  return (
    <div ref={sectionRef} className={`w-full overflow-hidden ${className || ""}`}>
      <div className="w-full">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 gap-16 w-full md:grid-cols-2 lg:gap-24"
        >
          {/* Left side: Heading and navigation */}
          <motion.div variants={itemVariants} className="flex flex-col justify-center">
            <div className="space-y-6">
              {badgeText && (
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gold-400/10 text-gold-500 border border-gold-400/20">
                  <Star className="mr-1 h-3.5 w-3.5 fill-gold-500 text-gold-500" />
                  <span>{badgeText}</span>
                </div>
              )}

              <h2 className="text-3xl font-heading font-bold tracking-tight text-navy-800 sm:text-4xl md:text-5xl">{title}</h2>

              <p className="max-w-[600px] text-gray-500 font-body text-base md:text-lg/relaxed">{subtitle}</p>

              <div className="flex items-center gap-3 pt-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      activeIndex === index ? "w-10 bg-gold-400" : "w-2.5 bg-gray-300"
                    }`}
                    aria-label={`View testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right side: Testimonial cards */}
          <motion.div variants={itemVariants} className="relative h-full min-h-[300px] md:min-h-[400px] flex items-center">
            <div className="relative w-full h-[280px] md:h-[320px]">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  className="absolute inset-0"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{
                    opacity: activeIndex === index ? 1 : 0,
                    x: activeIndex === index ? 0 : 100,
                    scale: activeIndex === index ? 1 : 0.9,
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  style={{ zIndex: activeIndex === index ? 10 : 0 }}
                >
                  <div className="bg-white border border-gray-100 shadow-card rounded-2xl p-6 md:p-8 h-full flex flex-col justify-between">
                    <div>
                      <div className="mb-4 flex gap-1">
                        {Array(testimonial.rating)
                          .fill(0)
                          .map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
                          ))}
                      </div>

                      <div className="relative mb-4 flex-1">
                        <Quote className="absolute -top-2 -left-2 h-6 w-6 text-gold-400/10 rotate-180" />
                        <p className="relative z-10 text-sm md:text-base font-body font-medium leading-relaxed italic text-navy-800">
                          "{testimonial.content}"
                        </p>
                      </div>
                    </div>

                    <div>
                      <Separator className="my-4 bg-gray-100" />

                      <div className="flex items-center gap-4">
                        <Avatar className="h-11 w-11 border border-gray-100 shadow-sm shrink-0">
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} className="object-cover" />
                          <AvatarFallback className="bg-navy-gradient text-white font-bold text-sm">
                            {testimonial.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold font-body text-navy-800 text-sm">{testimonial.name}</h3>
                          <p className="text-xs text-gray-400 font-body">
                            {testimonial.role}, {testimonial.company}
                          </p>
                          {testimonial.country && (
                            <p className="text-[10px] text-gray-400 font-body mt-0.5">
                              {testimonial.flag} {testimonial.country}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-4 -left-4 h-20 w-20 rounded-xl bg-gold-400/5 -z-10"></div>
            <div className="absolute -top-4 -right-4 h-20 w-20 rounded-xl bg-navy-500/5 -z-10"></div>
          </motion.div>
        </motion.div>

        {/* Logo cloud */}
        {trustedCompanies.length > 0 && (
          <motion.div variants={itemVariants} initial="hidden" animate={controls} className="mt-20 text-center">
            <h3 className="text-xs font-semibold text-gray-400 tracking-wider uppercase mb-6">{trustedCompaniesTitle}</h3>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
              {trustedCompanies.map((company) => (
                <div key={company} className="text-lg md:text-xl font-heading font-bold text-navy-800/20 hover:text-navy-800/40 transition-colors">
                  {company}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
