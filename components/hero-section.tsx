"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet"

export function HeroSection() {
  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-sky-100 via-sky-50 to-orange-50">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 pt-8">
          {/* Left Column - Content */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left ">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/60 px-4 py-2 text-sm font-medium text-sky-700 shadow-sm backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-sky-500" />
              AI-Powered Travel Planning
            </span>

            <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-slate-800 sm:text-5xl lg:text-6xl">
              Your next journey begins with{" "}
              <span className="bg-gradient-to-r from-sky-600 to-orange-500 bg-clip-text text-transparent">AI</span>
            </h1>

            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-slate-600 sm:text-xl">
              Plan personalized trips instantly with WanderAI's smart travel suggestions. Discover hidden gems and
              create unforgettable memories.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    size="lg"
                    className="rounded-full bg-slate-900 px-8 py-6 text-base font-semibold text-white shadow-lg shadow-slate-900/20 transition-all hover:bg-slate-800 hover:shadow-xl"
                  >
                    Plan my trip
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Plan your trip</DialogTitle>
                    <DialogDescription>
                      Tell us a bit about your trip and we'll generate a personalized itinerary.
                    </DialogDescription>
                  </DialogHeader>

                  <form className="grid gap-4 py-4">
                    <label className="text-sm text-slate-700">
                      Destination
                      <input
                        name="destination"
                        placeholder="e.g. Kyoto"
                        className="mt-1 block w-full rounded-md border border-slate-200 px-3 py-2"
                      />
                    </label>

                    <label className="text-sm text-slate-700">
                      Dates
                      <input
                        name="dates"
                        placeholder="e.g. Jul 12 - Jul 19"
                        className="mt-1 block w-full rounded-md border border-slate-200 px-3 py-2"
                      />
                    </label>

                    <div className="flex items-center justify-end gap-2 pt-2">
                      <DialogClose asChild>
                        <Button variant="ghost">Cancel</Button>
                      </DialogClose>
                      <Button type="button">Start planning</Button>
                    </div>
                  </form>

                  <DialogFooter />
                </DialogContent>
              </Dialog>

              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    size="lg"
                    className="rounded-full border-2 border-slate-300 bg-white/50 px-8 py-6 text-base font-semibold text-slate-700 backdrop-blur-sm transition-all hover:border-slate-400 hover:bg-white"
                  >
                    Explore destinations
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <SheetHeader>
                    <SheetTitle>Explore destinations</SheetTitle>
                    <SheetDescription>Quick suggestions to inspire your next trip.</SheetDescription>
                  </SheetHeader>

                  <div className="grid gap-3 px-4 py-4">
                    {[
                      'Paris, France',
                      'Kyoto, Japan',
                      'Reykjavík, Iceland',
                      'Marrakesh, Morocco',
                    ].map((d) => (
                      <div key={d} className="flex items-center justify-between rounded-md border p-3">
                        <div className="text-sm text-slate-800">{d}</div>
                        <div className="flex gap-2">
                          <SheetClose asChild>
                            <Button size="sm">View</Button>
                          </SheetClose>
                        </div>
                      </div>
                    ))}
                  </div>

                  <SheetFooter />
                </SheetContent>
              </Sheet>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3 items-center">
                {[
                  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=640&auto=format&fit=crop&ixlib=rb-4.0.3',
                  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=640&auto=format&fit=crop&ixlib=rb-4.0.3',
                  'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=640&auto=format&fit=crop&ixlib=rb-4.0.3',
                  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=640&auto=format&fit=crop&ixlib=rb-4.0.3',
                ].map((src, i) => (
                  <div
                    key={i}
                    className="relative h-10 w-10 rounded-full ring-2 ring-white shadow-sm bg-slate-100 flex items-center justify-center overflow-hidden"
                    style={{ flex: '0 0 40px' }}
                  >
                    <Image
                      src={src}
                      alt={`Traveler ${i + 1}`}
                      width={40}
                      height={40}
                      className="object-cover rounded-full"
                      unoptimized
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm text-slate-600">
                <span className="font-semibold text-slate-800">10,000+</span> travelers trust WanderAI
              </div>
            </div>
          </div>

          {/* Right Column - Illustration */}
          <div className="relative flex items-center justify-center">
            <div className="relative h-80 w-80 sm:h-96 sm:w-96 lg:h-[480px] lg:w-[480px]">
              {/* Main globe/world circle */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-sky-200/80 to-sky-100/50 shadow-2xl shadow-sky-200/50" />
              <div className="absolute inset-12 rounded-full bg-gradient-to-br from-white/60 to-sky-50/40 backdrop-blur-sm" />

              {/* Continent shapes */}
              <div className="absolute left-1/4 top-1/3 h-16 w-24 rounded-3xl bg-emerald-300/60" />
              <div className="absolute right-1/4 top-1/4 h-12 w-16 rounded-2xl bg-emerald-400/50" />
              <div className="absolute bottom-1/3 left-1/3 h-14 w-20 rounded-3xl bg-emerald-300/50" />

              {/* Cloud shapes */}
              <div className="absolute -left-4 top-1/4 flex gap-1">
                <div className="h-8 w-12 rounded-full bg-white/80 shadow-lg" />
                <div className="h-6 w-8 rounded-full bg-white/80 shadow-lg" />
              </div>
              <div className="absolute -right-2 top-1/2 flex gap-1">
                <div className="h-6 w-10 rounded-full bg-white/70 shadow-md" />
                <div className="h-5 w-6 rounded-full bg-white/70 shadow-md" />
              </div>
              <div className="absolute -bottom-2 left-1/4 flex gap-1">
                <div className="h-5 w-8 rounded-full bg-white/60 shadow-sm" />
                <div className="h-4 w-5 rounded-full bg-white/60 shadow-sm" />
              </div>

              {/* Floating travel icons - Plane */}
              <div className="absolute -left-8 bottom-1/4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-xl shadow-slate-200/50">
                <svg
                  className="h-8 w-8 text-sky-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                  />
                </svg>
              </div>

              {/* Floating travel icons - Location Pin */}
              <div className="absolute -right-6 top-1/3 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-xl shadow-slate-200/50">
                <svg
                  className="h-7 w-7 text-orange-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </div>

              {/* Floating travel icons - Camera */}
              <div className="absolute -bottom-4 right-1/4 flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-lg shadow-slate-200/50">
                <svg
                  className="h-6 w-6 text-emerald-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </div>

              {/* Dotted flight path line */}
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 400">
                <path
                  d="M 80 200 Q 150 100, 200 150 T 320 180"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                  className="text-sky-300"
                />
              </svg>

              {/* Sparkle accents */}
              <div className="absolute left-1/4 top-8 h-2 w-2 rounded-full bg-orange-400" />
              <div className="absolute right-1/3 top-12 h-1.5 w-1.5 rounded-full bg-sky-400" />
              <div className="absolute bottom-16 right-1/4 h-2 w-2 rounded-full bg-emerald-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
