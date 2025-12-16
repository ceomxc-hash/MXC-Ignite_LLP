import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
export function PartnersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2
  });
  return <section ref={ref} className="py-24 lg:py-32 bg-slate-100" id="partners">
      <div className="section-padding">
        <div className="container-wide">
          {/* Header */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.6
        }} className="max-w-3xl mb-16">
            <span className="text-xs font-medium tracking-widest uppercase text-navy-600 mb-4 block">
              MoU & Strategic Partners
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-navy-900 leading-tight mb-6">
              Strategic Leaders MXC
              <br />
              <span className="text-navy-600">Has Interacted With & MOU </span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              MXC Ignite is expanding its impact through high-value partnerships with industry leaders, 
              incubators, institutions, and global innovation ecosystems.
            </p>
          </motion.div>

          {/* MOU Slide from Pitch Deck */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.5,
          delay: 0.1
        }} className="bg-background rounded-sm overflow-hidden shadow-premium-md hover:shadow-premium-lg transition-all duration-300 mb-16">
            <img src="/images/partners/mou-slide.jpg" alt="MXC MoU & Strategic Partners - Indobox and Codebasics" className="w-full h-auto" />
          </motion.div>

          {/* Strategic Leaders Images */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={isInView ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            duration: 0.5,
            delay: 0.2
          }} className="bg-background rounded-sm overflow-hidden shadow-premium-md hover:shadow-premium-lg transition-all duration-300">
              <img src="/images/partners/strategic-leaders-1.jpg" alt="Strategic Leaders MXC Has Interacted With" className="w-full h-auto" />
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={isInView ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            duration: 0.5,
            delay: 0.3
          }} className="bg-background rounded-sm overflow-hidden shadow-premium-md hover:shadow-premium-lg transition-all duration-300">
              <img src="/images/partners/strategic-leaders-2.jpg" alt="Strategic Leaders MXC Has Interacted With" className="w-full h-auto" />
            </motion.div>
          </div>

          {/* Partners Logo Grid Image */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.6,
          delay: 0.4
        }} className="bg-background rounded-sm overflow-hidden shadow-premium-md">
            <div className="p-6 border-b border-border">
              <h3 className="font-heading text-xl font-semibold text-navy-900 text-center">
                Past Event Collaborators & Partners
              </h3>
            </div>
            <div className="p-4">
              <img src="/images/partners/partners-grid.jpg" alt="MXC Partners and Collaborators" className="w-full h-auto rounded-sm" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
}