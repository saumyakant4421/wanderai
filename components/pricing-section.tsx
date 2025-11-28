"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Basic",
    price: "Free",
    period: "forever",
    description: "Perfect for casual travelers exploring new destinations.",
    features: ["3 trip plans per month", "Basic AI recommendations", "Standard destination guides", "Email support"],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Smart Planner",
    price: "$12",
    period: "/month",
    description: "For frequent travelers who want smarter planning.",
    features: [
      "Unlimited trip plans",
      "Advanced AI itineraries",
      "Hidden gem discoveries",
      "Real-time flight updates",
      "Priority support",
      "Offline access",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Premium AI",
    price: "$29",
    period: "/month",
    description: "Full AI power for travel enthusiasts and professionals.",
    features: [
      "Everything in Smart Planner",
      "Concierge-level AI assistant",
      "Group trip coordination",
      "Travel expense tracking",
      "Exclusive partner deals",
      "24/7 priority support",
    ],
    cta: "Start Free Trial",
    highlighted: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="w-full bg-gradient-to-b from-orange-50/50 via-white to-sky-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700">
            Pricing
          </span>
          <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl lg:text-5xl">
            Choose Your Travel Plan
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-slate-600">
            Start free and upgrade as your wanderlust grows. All plans include our core AI features.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  const btn = (e.currentTarget as HTMLElement).querySelector("button") as HTMLButtonElement | null
                  if (btn) btn.click()
                }
              }}
              className={`relative rounded-3xl p-8 transform transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-200/40 hover:scale-105 hover:shadow-xl ${
                plan.highlighted
                  ? "bg-gradient-to-b from-slate-900 to-slate-800 text-white shadow-2xl shadow-slate-900/30 ring-4 ring-sky-400/20 cursor-pointer"
                  : "bg-white shadow-lg shadow-slate-200/50 cursor-pointer"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-sky-400 to-orange-400 px-4 py-1.5 text-sm font-semibold text-white shadow-lg">
                  Most Popular
                </span>
              )}
              <h3 className={`text-xl font-semibold ${plan.highlighted ? "text-white" : "text-slate-800"}`}>
                {plan.name}
              </h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className={`text-5xl font-bold ${plan.highlighted ? "text-white" : "text-slate-800"}`}>
                  {plan.price}
                </span>
                <span className={plan.highlighted ? "text-slate-300" : "text-slate-500"}>{plan.period}</span>
              </div>
              <p className={`mt-4 ${plan.highlighted ? "text-slate-300" : "text-slate-600"}`}>{plan.description}</p>
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                        plan.highlighted ? "bg-sky-400/20 text-sky-400" : "bg-sky-100 text-sky-600"
                      }`}
                    >
                      <Check className="h-4 w-4" />
                    </div>
                    <span className={plan.highlighted ? "text-slate-200" : "text-slate-600"}>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`mt-8 w-full rounded-full py-6 text-base font-semibold ${
                  plan.highlighted
                    ? "bg-white text-slate-900 hover:bg-slate-100"
                    : "bg-slate-900 text-white hover:bg-slate-800"
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
