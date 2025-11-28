import { Sparkles, Map, Clock, Shield } from "lucide-react"

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Itineraries",
    description: "Get personalized day-by-day travel plans tailored to your preferences, budget, and travel style.",
    gradient: "from-sky-400 to-sky-500",
  },
  {
    icon: Map,
    title: "Hidden Gem Discovery",
    description: "Uncover off-the-beaten-path destinations and local favorites that most tourists never find.",
    gradient: "from-orange-400 to-orange-500",
  },
  {
    icon: Clock,
    title: "Real-Time Updates",
    description: "Stay informed with live flight updates, weather alerts, and instant itinerary adjustments.",
    gradient: "from-emerald-400 to-emerald-500",
  },
  {
    icon: Shield,
    title: "Safe Travel Insights",
    description: "Access up-to-date safety information, travel advisories, and health recommendations.",
    gradient: "from-violet-400 to-violet-500",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="w-full bg-gradient-to-b from-orange-50 via-white to-sky-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700">
            Features
          </span>
          <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl lg:text-5xl">
            Why WanderAI?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-slate-600">
            Experience the future of travel planning with intelligent features designed to make your journey seamless.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative rounded-3xl bg-white p-8 shadow-lg shadow-slate-200/50 transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-lg`}
              >
                <feature.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-slate-800">{feature.title}</h3>
              <p className="mt-3 leading-relaxed text-slate-600">{feature.description}</p>
              <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-sky-100/50 to-orange-100/50 opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
