import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Instagram, MessageCircle, ArrowRight } from "lucide-react";
export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2
  });
  return <section ref={ref} className="py-24 lg:py-32 bg-background" id="contact">
      <div className="section-padding">
        <div className="container-narrow">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.6
        }} className="text-center">
            <span className="text-xs font-medium tracking-widest uppercase text-navy-600 mb-4 block">
              Connect
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-navy-900 leading-tight mb-6">
              Ready to enter
              <br />
              <span className="text-navy-600">the ecosystem?</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed max-w-xl mx-auto mb-12">
              For ecosystem partnerships, institutions, governments, and global collaborators.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button variant="hero" size="lg" className="group w-full sm:w-auto" asChild>
                <a href="mailto:mentorxcommunity@gmail.com">
                  <Mail size={18} />
                  mentorxcommunity@gmail.com
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Button>
              <Button variant="hero-outline" size="lg" className="w-full sm:w-auto" asChild>
                <a href="https://www.linkedin.com/company/mxcignite/" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={18} />
                  LinkedIn
                </a>
              </Button>
              <Button variant="hero-outline" size="lg" className="w-full sm:w-auto" asChild>
                <a href="https://www.instagram.com/mentorxcommunity" target="_blank" rel="noopener noreferrer">
                  <Instagram size={18} />
                  Instagram
                </a>
              </Button>
              <Button variant="hero-outline" size="lg" className="w-full sm:w-auto" asChild>
                <a href="https://chat.whatsapp.com/JG6cgUxH8RYBZXyXWbfNWp" target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={18} />
                  WhatsApp Community
                </a>
              </Button>
            </div>

            <p className="text-slate-400 text-sm mt-8">MXC Ignite LLP • Established November 2024</p>
          </motion.div>
        </div>
      </div>
    </section>;
}