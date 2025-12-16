import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function FeedbackSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-slate-50" id="feedback">
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
              What Leaders Say About MXC
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-navy-900 leading-tight mb-6">
              Feedback from
              <br />
              <span className="text-navy-600">Industry Leaders</span>
            </h2>
            <p className="text-slate-600 text-lg">
              300+ feedback posts on LinkedIn and counting.
            </p>
          </motion.div>

          {/* Full Page Screenshots */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <img
              src="/images/feedback/feedback-page-1.jpg"
              alt="LinkedIn Feedback Posts - Page 1"
              className="w-full rounded-lg shadow-lg"
            />
            <img
              src="/images/feedback/feedback-page-2.jpg"
              alt="LinkedIn Feedback Posts - Page 2"
              className="w-full rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
