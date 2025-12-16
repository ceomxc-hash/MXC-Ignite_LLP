import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Palette, Rocket, CheckCircle } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Learning + Innovation",
    items: [
      "AI/ML, Data Science workshops",
      "Design Thinking, Product & Startup programs",
      "Entrepreneurship bootcamps",
      "Internship-ready projects",
      "Research & publication guidance",
    ],
  },
  {
    icon: Palette,
    title: "MXC Creative Studio",
    items: [
      "LinkedIn Content Creation & Optimization",
      "CXO Ghostwriting & Newsletter Branding",
      "Pitch Deck Creation",
      "Corporate PPT & Poster Design",
      "Professional Video Editing",
      "MoU/NDA/Proposal Documentation",
    ],
  },
  {
    icon: Rocket,
    title: "Execution & Exposure",
    items: [
      "Founder tracks & Startup simulations",
      "Global mentor interactions",
      "Community networking",
      "Project outsourcing from companies",
      "India-Japan innovation programs",
    ],
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-slate-100" id="services">
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
              Our Service Ecosystem
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-navy-900 leading-tight mb-6">
              A complete 360°
              <br />
              <span className="text-navy-600">execution ecosystem.</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              This is the only model in India that blends Skill + Execution + Branding + 
              Psychology + Leadership into a single student journey.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="bg-background p-8 rounded-sm shadow-premium-md"
              >
                <div className="w-14 h-14 bg-navy-100 rounded-sm flex items-center justify-center mb-6">
                  <service.icon size={28} className="text-navy-700" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-navy-900 mb-6">
                  {service.title}
                </h3>
                <ul className="space-y-3">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                      <CheckCircle size={16} className="text-navy-600 shrink-0 mt-0.5" />
                      {item}
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
