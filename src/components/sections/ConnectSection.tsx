import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Linkedin, Mail, MessageCircle, Instagram, Newspaper } from "lucide-react";
const connectLinks = [{
  icon: Globe,
  label: "Website",
  description: "Explore MXC Ignite",
  href: "/",
  color: "bg-slate-100 hover:bg-slate-200 text-slate-700"
}, {
  icon: Linkedin,
  label: "LinkedIn",
  description: "Follow MXC Ignite",
  href: "https://www.linkedin.com/company/mxcignite/",
  color: "bg-blue-50 hover:bg-blue-100 text-blue-700"
}, {
  icon: Mail,
  label: "Email",
  description: "mentorxcommunity@gmail.com",
  href: "mailto:mentorxcommunity@gmail.com",
  color: "bg-red-50 hover:bg-red-100 text-red-700"
}, {
  icon: MessageCircle,
  label: "WhatsApp",
  description: "Join Community",
  href: "https://chat.whatsapp.com/JG6cgUxH8RYBZXyXWbfNWp",
  color: "bg-green-50 hover:bg-green-100 text-green-700"
}, {
  icon: Instagram,
  label: "Instagram",
  description: "@mentorxcommunity",
  href: "https://www.instagram.com/mentorxcommunity",
  color: "bg-pink-50 hover:bg-pink-100 text-pink-700"
}, {
  icon: Newspaper,
  label: "Newsletter",
  description: "Subscribe on LinkedIn",
  href: "https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7322539301647323136",
  color: "bg-indigo-50 hover:bg-indigo-100 text-indigo-700"
}];
export function ConnectSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2
  });
  return <section ref={ref} className="py-24 lg:py-32 bg-background" id="connect">
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
        }} className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-medium tracking-widest uppercase text-navy-600 mb-4 block">
              Connect With Us
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-navy-900 leading-tight mb-6">
              Stay Connected
            </h2>
            <p className="text-slate-600 text-lg">
              Join our community and stay updated with the latest opportunities.
            </p>
          </motion.div>

          {/* Connect Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {connectLinks.map((link, index) => <motion.a key={link.label} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined} initial={{
            opacity: 0,
            y: 20
          }} animate={isInView ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            duration: 0.4,
            delay: 0.1 + index * 0.05
          }} className={`flex flex-col items-center justify-center p-6 rounded-lg transition-all ${link.color} group`}>
                <link.icon size={28} className="mb-3 group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-sm">{link.label}</span>
                <span className="text-xs mt-1 opacity-75 text-center">{link.description}</span>
              </motion.a>)}
          </div>

          {/* MXC Logo Box */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.6,
          delay: 0.4
        }} className="mt-16 bg-slate-50 rounded-lg p-8 flex flex-col items-center justify-center">
            <img src="/mxc-logo.png" alt="MXC Ignite Logo" className="h-16 w-auto object-contain mb-4" />
            <p className="text-slate-600 text-sm text-center">MXC Ignite LLP • Established August 2025 (Earlier MentorX Community • Established November 2024) 
          </p>
            <p className="text-slate-400 text-xs mt-2">
              Where Talent Becomes Power
            </p>
          </motion.div>
        </div>
      </div>
    </section>;
}