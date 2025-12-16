import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Zap, Target, Award, Briefcase, Globe } from "lucide-react";

const systemSteps = [
  { label: "Skill", icon: Zap, color: "navy-600" },
  { label: "Execution", icon: Target, color: "navy-700" },
  { label: "Proof", icon: Award, color: "navy-800" },
  { label: "Paid Work", icon: Briefcase, color: "navy-900" },
  { label: "Leadership", icon: Globe, color: "navy-900" },
];

const frameworks = [
  {
    title: "Startup Execution Engine",
    description: "Real problems. Real deadlines. Real founders. Work inside startup ecosystems solving live challenges.",
  },
  {
    title: "Outcome Intelligence",
    description: "Data-driven proof of execution. Every action tracked, measured, and verified for credibility.",
  },
  {
    title: "Inner Growth & Legacy Building",
    description: "Leadership isn't taught—it's developed through structured introspection and accountability systems.",
  },
];

export function SystemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-background" id="system">
      <div className="section-padding">
        <div className="container-wide">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-20"
          >
            <span className="text-xs font-medium tracking-widest uppercase text-navy-600 mb-4 block">
              The MXC Operating System
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-navy-900 leading-tight mb-6">
              A proprietary system that
              <br />
              <span className="text-navy-600">turns potential into power.</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              MXC isn't a program. It's infrastructure—a system that integrates every stage 
              from skill acquisition to global leadership.
            </p>
          </motion.div>

          {/* Pipeline Visualization */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-20"
          >
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-0">
              {systemSteps.map((step, index) => (
                <div key={step.label} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-sm bg-navy-800 flex items-center justify-center shadow-premium-md" style={{ opacity: 0.7 + (index * 0.075) }}>
                      <step.icon size={28} className="text-primary-foreground" />
                    </div>
                    <span className="mt-3 text-sm font-medium text-navy-800">{step.label}</span>
                  </div>
                  {index < systemSteps.length - 1 && (
                    <ArrowRight size={20} className="mx-4 text-slate-400 hidden md:block" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Frameworks */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {frameworks.map((framework, index) => (
              <motion.div
                key={framework.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="group relative p-8 bg-slate-100 rounded-sm hover:bg-navy-900 transition-all duration-500"
              >
                <div className="relative z-10">
                  <div className="w-8 h-px bg-navy-600 group-hover:bg-gold mb-6 transition-colors duration-500" />
                  <h3 className="font-heading text-xl font-semibold text-navy-900 group-hover:text-primary-foreground mb-4 transition-colors duration-500">
                    {framework.title}
                  </h3>
                  <p className="text-slate-600 group-hover:text-slate-300 text-sm leading-relaxed transition-colors duration-500">
                    {framework.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
