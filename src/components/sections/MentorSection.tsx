import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Briefcase, Landmark, CheckCircle } from "lucide-react";

const mentorTypes = [
  {
    icon: GraduationCap,
    type: "Academic",
    title: "Academic Mentors",
    description: "Professors, researchers, and thought leaders from premier institutions who validate learning outcomes and guide research trajectories.",
    roles: ["Validators", "Research Guides", "Publication Reviewers"],
  },
  {
    icon: Briefcase,
    type: "Industry",
    title: "Industry Mentors",
    description: "Practitioners, executives, and domain experts who shape real-world execution and open doors to opportunities.",
    roles: ["Execution Reviewers", "Career Enablers", "Network Bridges"],
  },
  {
    icon: Landmark,
    type: "Government",
    title: "Government & Policy Mentors",
    description: "Policy makers and public sector leaders enabling impact at scale through institutional access and governance insights.",
    roles: ["Policy Advisors", "Institutional Connectors", "Impact Validators"],
  },
];

export function MentorSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-background" id="mentors">
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
              The Mentor Ecosystem
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-navy-900 leading-tight mb-6">
              Mentors who don't just advise.
              <br />
              <span className="text-navy-600">They enable.</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              In the MXC ecosystem, mentors are not motivational speakers. They are validators, 
              reviewers, opportunity enablers, and decision influencers.
            </p>
          </motion.div>

          {/* Mentor Types Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mentorTypes.map((mentor, index) => (
              <motion.div
                key={mentor.type}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="group bg-slate-100 hover:bg-navy-900 p-8 rounded-sm transition-all duration-500"
              >
                <div className="w-14 h-14 bg-navy-100 group-hover:bg-navy-800 rounded-sm flex items-center justify-center mb-6 transition-colors duration-500">
                  <mentor.icon size={28} className="text-navy-700 group-hover:text-gold transition-colors duration-500" />
                </div>

                <span className="text-xs font-medium tracking-widest uppercase text-navy-600 group-hover:text-gold mb-2 block transition-colors duration-500">
                  {mentor.type}
                </span>

                <h3 className="font-heading text-xl font-semibold text-navy-900 group-hover:text-primary-foreground mb-4 transition-colors duration-500">
                  {mentor.title}
                </h3>

                <p className="text-slate-600 group-hover:text-slate-400 text-sm leading-relaxed mb-6 transition-colors duration-500">
                  {mentor.description}
                </p>

                <ul className="space-y-3">
                  {mentor.roles.map((role) => (
                    <li key={role} className="flex items-center gap-3 text-sm text-slate-700 group-hover:text-slate-300 transition-colors duration-500">
                      <CheckCircle size={16} className="text-navy-600 group-hover:text-gold shrink-0 transition-colors duration-500" />
                      {role}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
