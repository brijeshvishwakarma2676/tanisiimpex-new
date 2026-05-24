import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, A11y } from 'swiper/modules';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/data/testimonials';
import 'swiper/css';
import 'swiper/css/pagination';

function StarRating({ count = 5 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="fill-gold-400 text-gold-400" />
      ))}
    </div>
  );
}

export default function TestimonialCarousel() {
  return (
    <Swiper
      modules={[Pagination, Autoplay, A11y]}
      spaceBetween={24}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000, pauseOnMouseEnter: true, disableOnInteraction: false }}
      loop
      breakpoints={{
        640: { slidesPerView: 1 },
        1024: { slidesPerView: 2 },
        1280: { slidesPerView: 3 },
      }}
      className="pb-12"
    >
      {testimonials.map((t) => (
        <SwiperSlide key={t.id}>
          <div className="card p-6 h-full flex flex-col gap-4 rounded-2xl">
            {/* Quote icon */}
            <div className="w-10 h-10 rounded-xl bg-navy-50 flex items-center justify-center">
              <Quote size={18} className="text-navy-500" />
            </div>

            {/* Stars */}
            <StarRating count={t.rating} />

            {/* Text */}
            <p className="text-gray-600 font-body text-sm leading-relaxed flex-1 italic">
              "{t.text}"
            </p>

            {/* Client info */}
            <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
              {/* Avatar initial */}
              <div className="w-11 h-11 rounded-full bg-navy-gradient flex items-center justify-center shrink-0">
                <span className="text-white font-heading font-bold text-lg">
                  {t.name.charAt(0)}
                </span>
              </div>
              <div>
                <div className="font-body font-semibold text-navy-800 text-sm">{t.name}</div>
                <div className="text-xs text-gray-400 font-body">{t.role}, {t.company}</div>
                <div className="text-xs text-gray-400 font-body mt-0.5">
                  {t.flag} {t.country}
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
