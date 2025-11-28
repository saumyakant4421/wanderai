import { Twitter, Instagram } from "lucide-react"

const navigation = [
  { name: "Home", href: "#" },
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
]

const social = [
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
]

export function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-sky-50 to-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-sky-600">
              <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </div>
            <span className="text-xl font-bold text-black">WanderAI</span>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-all hover:bg-slate-200 hover:text-slate-900"
              >
                <item.icon className="h-5 w-5" />
                <span className="sr-only">{item.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="mt-12 border-t border-slate-200 pt-8 text-center">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} WanderAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
