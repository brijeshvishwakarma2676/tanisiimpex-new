import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Globe from "@/components/ui/globe";

/**
 * CTABanner — interactive CSS globe banner
 */
export default function CTABanner({
  heading = "Ready to Start Importing from India?",
  subtext = "Join 1000+ satisfied buyers from 30+ countries. Get your custom quote today and experience seamless international shipping.",
  buttonLabel = "Send Us Your Requirements",
  buttonTo = "/inquiry",
}) {
  return (
    <section className="relative w-full max-w-7xl mx-auto overflow-hidden rounded-[2rem] bg-[#1a1b1e] border border-gray-800 shadow-2xl px-6 py-12 md:px-16 md:py-20 my-16 md:my-24 group">
      <div className="flex flex-col items-center justify-between gap-8 md:gap-10 md:flex-row relative z-10">
        <div className="z-20 w-full max-w-xl text-center md:text-left mt-4 md:mt-0">
          <h2 className="text-3xl md:text-[2.5rem] font-heading font-normal text-white leading-tight">
            <span className="text-white">{heading.split("?")[0]}?</span>
            <br className="hidden md:block" />
            <span className="text-gray-400 text-base md:text-[1.35rem] font-body block mt-3 leading-relaxed w-full md:max-w-[90%] mx-auto md:mx-0">
              {subtext}
            </span>
          </h2>
          <Link to={buttonTo}>
            <Button className="mt-6 md:mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy-950 transition hover:bg-gray-200 hover:scale-105">
              {buttonLabel} <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        <div className="w-full max-w-xl flex items-center justify-center md:justify-end mt-8 md:mt-0">
          <Globe className="w-[260px] h-[260px] md:w-[350px] md:h-[350px] pointer-events-none shrink-0 drop-shadow-2xl" />
        </div>
      </div>
    </section>
  );
}
