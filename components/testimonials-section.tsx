import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    location: "Tokyo, Japan",
    avatar: "/professional-asian-woman-smiling.png",
    rating: 5,
    text: "WanderAI transformed my solo trip to Japan. The AI suggested hidden temples and local izakayas I never would have found on my own. Absolutely magical!",
  },
  {
    name: "Marcus Williams",
    location: "Barcelona, Spain",
    avatar: "/professional-black-man-smiling.png",
    rating: 5,
    text: "Planning family trips used to be stressful. Now I just tell WanderAI what we love, and it creates perfect itineraries that keep everyone happy.",
  },
  {
    name: "Elena Rodriguez",
    location: "Santorini, Greece",
    avatar: "/professional-latina-woman-smiling.png",
    rating: 5,
    text: "The real-time updates saved our honeymoon when our flight got cancelled. WanderAI instantly rebooked and adjusted our entire plan. Lifesaver!",
  },
]

export function TestimonialsSection() {
  return (
    <section className="w-full bg-gradient-to-b from-sky-50 via-white to-orange-50/50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-700">
            Testimonials
          </span>
          <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl lg:text-5xl">
            Loved by Travelers Worldwide
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-slate-600">
            Join thousands of happy explorers who have discovered their perfect trips with WanderAI.
          </p>
        </div>
      </div>

      {/* Full-bleed marquee */}
      <div className="mt-16 w-full overflow-hidden">
        <div className="relative w-screen left-1/2 -translate-x-1/2">
          <div className="flex gap-8 marquee will-change-transform">
            {[...testimonials, ...testimonials].map((testimonial, idx) => (
              <div
                key={`${testimonial.name}-${idx}`}
                className="relative min-w-[320px] max-w-sm flex-shrink-0 rounded-3xl bg-white p-8 shadow-lg shadow-slate-200/50"
              >
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-orange-400 text-orange-400" />
                  ))}
                </div>
                <p className="mt-6 text-lg leading-relaxed text-slate-700">"{testimonial.text}"</p>
                <div className="mt-8 flex items-center gap-4">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="h-14 w-14 rounded-full bg-gradient-to-br from-sky-200 to-orange-200 object-cover"
                  />
                  <div>
                    <p className="font-semibold text-slate-800">{testimonial.name}</p>
                    <p className="text-sm text-slate-500">{testimonial.location}</p>
                  </div>
                </div>
                <div className="absolute right-6 top-6 text-6xl font-serif text-sky-100">"</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
