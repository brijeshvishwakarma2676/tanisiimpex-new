import { testimonials } from '@/data/testimonials';
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';

const avatars = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
];

export default function TestimonialCarousel() {
  const formattedTestimonials = testimonials.map((t, i) => ({
    id: t.id,
    name: t.name,
    role: t.role,
    company: t.company,
    content: t.text,
    rating: t.rating,
    country: t.country,
    flag: t.flag,
    avatar: avatars[i % avatars.length]
  }));

  return (
    <AnimatedTestimonials
      title="Trusted Globally, Endorsed Professionally"
      subtitle="Hear directly from international importers and trade partners who trust Tanisi Impex for seamless sourcing and flawless logistics."
      badgeText="Verify Our Credibility"
      testimonials={formattedTestimonials}
      trustedCompanies={["Dubai Agro LLC", "EuroFoods Co.", "Singapore Spices", "UK Wholesale Ltd."]}
      trustedCompaniesTitle="Partnered with leading distributors globally"
      autoRotateInterval={7000}
    />
  );
}
