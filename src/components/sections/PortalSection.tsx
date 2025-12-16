import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Users, Briefcase, Crown, GraduationCap, Building2, ArrowRight } from "lucide-react";

const roles = [
  { icon: Users, label: "Students" },
  { icon: Briefcase, label: "Professionals" },
  { icon: Crown, label: "Founders" },
  { icon: GraduationCap, label: "Mentors" },
  { icon: Building2, label: "Institutions" },
];

export function PortalSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-background" id="portal">
      <div className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Visual */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="relative order-2 lg:order-1"
            >
              <div className="bg-slate-100 rounded-sm p-8 relative">
                {/* Mock Dashboard */}
                <div className="bg-background rounded-sm shadow-premium-lg overflow-hidden">
                  {/* Header Bar */}
                  <div className="bg-navy-900 px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary-foreground/10 rounded-sm flex items-center justify-center">
                        <span className="text-primary-foreground font-heading font-bold text-sm">M</span>
                      </div>
                      <span className="text-primary-foreground text-sm font-medium">MXC Portal</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gold rounded-full" />
                      <span className="text-slate-400 text-xs">Live</span>
                    </div>
                  </div>

                  {/* Content Preview */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="h-3 w-32 bg-slate-200 rounded mb-2" />
                        <div className="h-2 w-24 bg-slate-100 rounded" />
                      </div>
                      <div className="w-10 h-10 bg-navy-100 rounded-sm" />
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-slate-100 p-4 rounded-sm">
                          <div className="h-2 w-12 bg-slate-200 rounded mb-2" />
                          <div className="h-4 w-8 bg-navy-200 rounded" />
                        </div>
                      ))}
                    </div>
                    <div className="h-24 bg-slate-100 rounded-sm" />
                  </div>
                </div>

                {/* Status Badge */}
                <div className="absolute -top-4 -right-4 px-4 py-2 bg-navy-900 text-primary-foreground text-xs font-medium rounded-sm shadow-premium-lg">
                  Early Access
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <span className="text-xs font-medium tracking-widest uppercase text-navy-600 mb-4 block">
                MXC Digital Portal
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-navy-900 leading-tight mb-6">
                Your command center.
                <br />
                <span className="text-navy-600">Rolling out in phases.</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                A login-based system with role-based dashboards. Access opportunities, 
                track execution, build proof—all in one place.
              </p>

              {/* Roles */}
              <div className="flex flex-wrap gap-3 mb-8">
                {roles.map((role) => (
                  <div
                    key={role.label}
                    className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-sm"
                  >
                    <role.icon size={16} className="text-navy-600" />
                    <span className="text-sm font-medium text-navy-800">{role.label}</span>
                  </div>
                ))}
              </div>

              <p className="text-slate-500 text-sm mb-8">
                MXC Portal is rolling out in phases. Early access is granted selectively.
              </p>

              <a href="/auth">
                <Button variant="hero" size="lg" className="group">
                  Request Early Access
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
