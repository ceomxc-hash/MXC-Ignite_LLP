import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, GraduationCap, Briefcase, UserCheck, Calendar, Globe, Lightbulb, Mail, Handshake } from "lucide-react";

const stats = [
  { icon: Users, value: "4,000+", label: "Community Strength", description: "Active members in our ecosystem" },
  { icon: GraduationCap, value: "50+", label: "Student Colleges Engaged", description: "Partner institutions across India" },
  { icon: Briefcase, value: "100+", label: "Internship Opportunities", description: "Through MentorX programs" },
  { icon: UserCheck, value: "50+", label: "Industry Mentors", description: "Domain experts & professionals" },
  { icon: Calendar, value: "15+", label: "Events Conducted", description: "Workshops & hackathons" },
  { icon: Globe, value: "10+", label: "Cities Reached", description: "Pan-India presence" },
  { icon: Lightbulb, value: "25+", label: "Student-Led Startups", description: "Supported & incubated" },
  { icon: Mail, value: "1,000+", label: "Newsletter Subscribers", description: "Weekly insights delivered" },
  { icon: Handshake, value: "30+", label: "Partners & Collaborators", description: "Strategic partnerships" },
];

export function JourneySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-navy-900" id="journey">
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
              Our Journey So Far
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground leading-tight mb-6">
              Building the Future,
              <br />
              <span className="text-slate-400">One milestone at a time.</span>
            </h2>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                className="bg-navy-800/50 rounded-lg p-6 text-center hover:bg-navy-800 transition-colors"
              >
                <div className="w-12 h-12 bg-navy-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon size={24} className="text-gold" />
                </div>
                <div className="font-heading text-3xl md:text-4xl font-semibold text-primary-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-gold mb-1">
                  {stat.label}
                </div>
                <p className="text-xs text-slate-500">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
