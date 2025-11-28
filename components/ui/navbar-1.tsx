"use client" 

import * as React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
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

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <div className="fixed top-8 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <div className="pointer-events-auto flex items-center justify-between px-6 py-3 bg-white/90 backdrop-blur-sm shadow-lg w-full max-w-7xl relative z-10 border-b border-sky-100 rounded-full">
        {/* Logo (same as footer) */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-sky-600">
            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </div>
          <span className="text-sm font-bold text-slate-900">WanderAI</span>
        </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {["Home", "Destinations", "Plan Trip", "About"].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
              >
                <a href="#" className="text-sm text-slate-900 hover:text-slate-700 transition-colors font-medium">
                  {item}
                </a>
              </motion.div>
            ))}
          </nav>

        {/* Desktop CTA Button */}
        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <Dialog>
            <DialogTrigger asChild>
              <button className="inline-flex items-center justify-center px-5 py-2 text-sm text-white rounded-full bg-slate-900 hover:bg-black transition-colors">
                Plan a Trip
              </button>
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
                    <button className="btn-ghost">Cancel</button>
                  </DialogClose>
                  <button type="button" className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-slate-900 text-white">Start planning</button>
                </div>
              </form>

              <DialogFooter />
            </DialogContent>
          </Dialog>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button className="md:hidden flex items-center" onClick={toggleMenu} whileTap={{ scale: 0.9 }}>
          <Menu className="h-6 w-6 text-slate-900" />
        </motion.button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-50 pt-24 px-6 md:hidden"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <motion.button
              className="absolute top-6 right-6 p-2"
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <X className="h-6 w-6 text-gray-900" />
            </motion.button>
            <div className="flex flex-col space-y-6">
              {["Home", "Destinations", "Plan Trip", "About"].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.1 }}
                  exit={{ opacity: 0, x: 20 }}
                >
                      <a href="#" className="text-base text-slate-900 font-medium" onClick={toggleMenu}>
                        {item}
                      </a>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                exit={{ opacity: 0, y: 20 }}
                className="pt-6"
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <button
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center w-full px-5 py-3 text-base text-white rounded-full bg-black hover:bg-gray-900 transition-colors"
                    >
                      Plan a Trip
                    </button>
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
                          <button className="btn-ghost">Cancel</button>
                        </DialogClose>
                        <button type="button" className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-slate-900 text-white">
                          Start planning
                        </button>
                      </div>
                    </form>

                    <DialogFooter />
                  </DialogContent>
                </Dialog>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}


export { Navbar1 }