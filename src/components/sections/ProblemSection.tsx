import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, GraduationCap, FileText, Users, Briefcase, Link } from "lucide-react";

const problems = [
  {
    icon: GraduationCap,
    title: "Tier 2/3 students lack industry exposure",
    description: "Colleges teach theory, not outcome. No real-world connection.",
  },
  {
    icon: FileText,
    title: "Learn a Lot, Execute Nothing",
    description: "AI/ML learners finish courses but fail to execute real projects.",
  },
  {
    icon: Users,
    title: "No Community, Mentorship, or Recognition",
    description: "Students invisible in fragmented ecosystems with no guidance.",
  },
  {
    icon: Briefcase,
    title: "Founders can't access mentorship",
    description: "Idea-stage founders have no structured path to execution.",
  },
  {
    icon: Link,
    title: "No personal branding or visibility",
    description: "No global community. No LinkedIn presence. No recognition.",
  },
  {
    icon: AlertTriangle,
    title: "Opportunity doesn't reach students",
    description: "Ecosystem is fragmented. Talent exists everywhere, opportunity doesn't.",
  },
];

export function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-slate-100" id="problem">
      <div className="section-padding">
        <div className="container-wide">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-16"
          >
            <span className="text-xs font-medium tracking-widest uppercase text-navy-600 mb-4 block">
              The Global Failure MXC Solves
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-navy-900 leading-tight mb-6">
              The system is broken.
              <br />
              <span className="text-slate-500">We built a new one.</span>
            </h2>
          </motion.div>

          {/* Problems Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((problem, index) => (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background p-8 rounded-sm border border-border hover:shadow-premium-md transition-all duration-300"
              >
                <div className="w-12 h-12 bg-navy-100 rounded-sm flex items-center justify-center mb-6">
                  <problem.icon size={24} className="text-navy-700" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-navy-900 mb-3">
                  {problem.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {problem.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 pt-16 border-t border-slate-200"
          >
            <blockquote className="max-w-2xl">
              <p className="font-heading text-2xl md:text-3xl font-semibold text-navy-900 leading-snug">
                "Talent is everywhere.
                <br />
                <span className="text-navy-600">Opportunity is not.</span>
                <br />
                MXC fixes that."
              </p>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
