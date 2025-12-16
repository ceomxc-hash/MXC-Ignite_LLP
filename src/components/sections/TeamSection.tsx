import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-background" id="team">
      <div className="section-padding">
        <div className="container-wide">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-xs font-medium tracking-widest uppercase text-navy-600 mb-4 block">
              MXC Visionaries
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-navy-900 leading-tight mb-6">
              Our Team
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              A team of builders, innovators, and ecosystem architects dedicated to transforming how talent meets opportunity.
            </p>
          </motion.div>

          {/* Strategic Advisors */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <div className="bg-background rounded-sm overflow-hidden shadow-premium-md">
              <img
                src="/images/team/advisors-page.jpg"
                alt="MXC Strategic Advisors"
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          {/* Leadership Team */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-background rounded-sm overflow-hidden shadow-premium-md">
              <img
                src="/images/team/leadership-page.jpg"
                alt="MXC Leadership Team"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
