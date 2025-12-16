import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--navy-800)) 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }} />
      </div>

      {/* Gradient Orb */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gradient-to-br from-navy-100/50 via-slate-100/30 to-transparent rounded-full blur-3xl transform translate-x-1/2" />

      <div className="section-padding relative z-10 pt-32 pb-20">
        <div className="container-wide">
          <div className="max-w-4xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-navy-100 text-navy-700 text-xs font-medium tracking-widest uppercase rounded-sm">
                <span className="w-1.5 h-1.5 bg-navy-600 rounded-full animate-pulse-subtle" />
                Private Talent-to-Opportunity Ecosystem
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-5xl md:text-6xl lg:text-7xl font-semibold text-navy-900 leading-[1.1] tracking-tight mb-8"
            >
              MXC Is Where
              <br />
              <span className="text-navy-600">Talent Becomes Power.</span>
            </motion.h1>

            {/* Subtext */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mb-12 space-y-4"
            >
              <p>
                You don't need more information.
                <br />
                You need access, execution, and proof.
              </p>
              <p className="text-slate-500">
                MXC Ignite LLP is a private ecosystem where individuals stop waiting and start building.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a href="/auth">
                <Button variant="hero" size="lg" className="group">
                  Enter the MXC Ecosystem
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </a>
              <a href="#categories">
                <Button variant="hero-outline" size="lg">
                  Explore Opportunities
                </Button>
              </a>
            </motion.div>

            {/* Secondary Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-6 mt-8"
            >
              <a href="#portal" className="text-sm text-slate-500 hover:text-navy-700 transition-colors font-medium">
                Access Portal (Early Access)
              </a>
              <span className="w-px h-4 bg-slate-300" />
              <a href="#partners" className="text-sm text-slate-500 hover:text-navy-700 transition-colors font-medium">
                Partner with MXC
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-slate-400 tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-slate-300 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
