import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, ExternalLink, Newspaper, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function NewsletterSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-slate-50" id="newsletter">
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
              MentorX Ignite
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-navy-900 leading-tight mb-6">
              Stay Updated
            </h2>
            <p className="text-slate-600 text-lg">
              Subscribe to our LinkedIn newsletter for weekly insights on leadership, 
              innovation, and exclusive opportunities.
            </p>
          </motion.div>

          {/* Newsletter Subscription */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-navy-900 rounded-lg p-8 md:p-12 mb-16 max-w-4xl mx-auto"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center">
                  <Newspaper size={28} className="text-navy-900" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-semibold text-white">MentorX Ignite Newsletter</h3>
                  <p className="text-slate-300 mt-1">Weekly insights on AI, entrepreneurship, and career growth</p>
                </div>
              </div>
              <Button variant="hero" size="lg" asChild>
                <a 
                  href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7322539301647323136" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="gap-2"
                >
                  <Linkedin size={18} />
                  Subscribe on LinkedIn
                  <ExternalLink size={16} />
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Feature Your Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-background border border-slate-200 rounded-lg p-8 md:p-12 text-center max-w-3xl mx-auto"
          >
            <div className="w-16 h-16 bg-navy-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail size={28} className="text-navy-600" />
            </div>
            <h3 className="font-heading text-2xl font-semibold text-navy-900 mb-4">
              Want Your Story Featured?
            </h3>
            <p className="text-slate-600 mb-8 max-w-xl mx-auto">
              If you're part of the MXC ecosystem and want your founder story featured 
              on our website and newsletter, reach out to us.
            </p>
            <a href="mailto:mentorxcommunity@gmail.com?subject=Feature My Story on MXC">
              <Button variant="hero" size="lg" className="group">
                <Mail size={18} className="mr-2" />
                Email Us Your Story
                <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
