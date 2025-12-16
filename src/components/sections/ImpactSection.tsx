import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Mic, Globe, UserCheck } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "4,000+",
    label: "Students Engaged",
    description: "Active learners across engineering, management, and emerging tech.",
  },
  {
    icon: Mic,
    value: "15+",
    label: "Workshops & Hackathons",
    description: "AI, ML, Data Science, Design Thinking & Entrepreneurship.",
  },
  {
    icon: Globe,
    value: "50+",
    label: "Industry Mentors",
    description: "Domain experts, founders, and professionals onboarded.",
  },
  {
    icon: UserCheck,
    value: "500+",
    label: "LinkedIn Feedback Posts",
    description: "Personal brands grown with public recognition.",
  },
];

export function ImpactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-navy-900" id="impact">
      <div className="section-padding">
        <div className="container-wide">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-xs font-medium tracking-widest uppercase text-gold mb-4 block">
              Impact & Credibility
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground leading-tight mb-6">
              Proof over promises.
              <br />
              <span className="text-slate-400">Numbers that matter.</span>
            </h2>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-navy-800 rounded-sm flex items-center justify-center mx-auto mb-6">
                  <stat.icon size={28} className="text-gold" />
                </div>
                <div className="font-heading text-4xl font-semibold text-primary-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-slate-300 mb-2">
                  {stat.label}
                </div>
                <p className="text-xs text-slate-500">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Credibility Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-20 pt-12 border-t border-navy-800"
          >
            <div className="max-w-4xl mx-auto text-center">
              <blockquote className="font-heading text-2xl md:text-3xl font-semibold text-primary-foreground leading-relaxed mb-8">
                "Where Ordinary Students
                <br />
                <span className="text-gold">Become Global Leaders."</span>
              </blockquote>
              <p className="text-slate-500 text-sm">
                MXC Ignite LLP — The operating system for next-generation leadership.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
