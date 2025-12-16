import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Linkedin, ArrowLeft, Users, Award, BookOpen, Building2, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  { id: "advisory", label: "Advisory Board", icon: Award },
  { id: "executive", label: "Core Executive", icon: Users },
  { id: "leadership", label: "Leadership Team", icon: BookOpen },
  { id: "industry", label: "Industry Council", icon: Building2 },
  { id: "academic", label: "Academic Council", icon: GraduationCap },
];

const leadershipData = {
  advisory: [
    { name: "Pavithra Addanki", role: "Founder & CEO", organization: "MXC Ignite LLP", image: "/images/team/advisor-pavithra.jpg", linkedin: "https://www.linkedin.com/in/pavithra-addanki" },
    { name: "Sujit Kumar Chakrabarti", role: "Faculty - Software Development", organization: "IIIT Bangalore", image: "/images/team/advisor-sujit.jpg", linkedin: "#" },
    { name: "Daisuke Ueda", role: "Director", organization: "Indobox Japan", image: "/images/team/advisor-daisuke.jpg", linkedin: "#" },
    { name: "Dr. M.K Kaushik", role: "Director", organization: "Anurag University", image: "/images/team/advisor-kaushik.jpg", linkedin: "#" },
    { name: "Hemanand Vaddi", role: "Founder", organization: "Code Basics", image: "/images/team/advisor-hemanand.jpg", linkedin: "#" },
  ],
  executive: [
    { name: "Pavithra Addanki", role: "Founder & CEO", organization: "MXC Ignite LLP", image: "/images/team/pavithra-new.jpg", linkedin: "https://www.linkedin.com/in/pavithra-addanki" },
    { name: "Revanth", role: "Co-Founder", organization: "MXC Ignite LLP", image: "/images/team/revanth-new.jpg", linkedin: "#" },
  ],
  leadership: [
    { name: "Hemanth", role: "Community Lead", organization: "MXC Ignite LLP", image: "/images/team/hemanth-new.jpg", linkedin: "#" },
    { name: "Harshitha", role: "Operations Lead", organization: "MXC Ignite LLP", image: "/images/team/harshitha-new.jpg", linkedin: "#" },
    { name: "Mohammed Mahab", role: "Team Member", organization: "MXC Ignite LLP", image: "/images/team/team-mahab.jpg", linkedin: "#" },
  ],
  industry: [
    { name: "Varad Mehendale", role: "Software Developer", organization: "NVIDIA", image: "/images/team/advisor-varad.jpg", linkedin: "#" },
    { name: "Abhilekh Nath Sharma", role: "AI Engineer", organization: "SAP Labs India", image: "/images/team/advisor-abhilekh.jpg", linkedin: "#" },
    { name: "Lakshit Jain", role: "Engineer", organization: "ISRO", image: "/images/team/advisor-lakshit.jpg", linkedin: "#" },
    { name: "Amol Katdare", role: "CTO", organization: "InfoAxon Tech", image: "/images/team/advisor-amol.jpg", linkedin: "#" },
  ],
  academic: [
    { name: "Salauddin Mohd", role: "Professor", organization: "IIIT Hyderabad", image: "/images/team/advisor-salauddin.jpg", linkedin: "#" },
    { name: "Ashwin Balachandran", role: "Associate Professor", organization: "IIT Delhi", image: "/images/team/advisor-ashwin.jpg", linkedin: "#" },
  ],
};

export default function LeadershipHub() {
  const [activeCategory, setActiveCategory] = useState("advisory");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const currentLeaders = leadershipData[activeCategory as keyof typeof leadershipData] || [];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-navy-900 py-6">
        <div className="section-padding container-wide flex items-center justify-between">
          <a href="/">
            <img src="/mxc-logo.png" alt="MXC Logo" className="h-10 filter brightness-0 invert" />
          </a>
          <Button variant="ghost" asChild className="text-white hover:bg-navy-800">
            <a href="/" className="flex items-center gap-2">
              <ArrowLeft size={18} /> Back to Home
            </a>
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <section ref={ref} className="py-16 bg-gradient-to-b from-navy-900 to-navy-800">
        <div className="section-padding container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-medium tracking-widest uppercase text-gold mb-4 block">
              Leadership Hub
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
              The Minds Behind
              <br />
              <span className="text-gold">MXC Ignite</span>
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Meet the visionary leaders, advisors, and mentors driving the MXC ecosystem forward.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Navigation */}
      <div className="sticky top-0 bg-background border-b z-40">
        <div className="section-padding container-wide py-4">
          <div className="flex overflow-x-auto gap-2 pb-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === category.id
                    ? 'bg-navy-900 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <category.icon size={16} />
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Leaders Grid */}
      <section className="py-16">
        <div className="section-padding container-wide">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {currentLeaders.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden group"
              >
                <div className="aspect-square overflow-hidden bg-slate-100">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = '/placeholder.svg';
                    }}
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-lg font-semibold text-navy-900">{leader.name}</h3>
                  <p className="text-sm text-navy-600 font-medium">{leader.role}</p>
                  <p className="text-sm text-slate-500 mt-1">{leader.organization}</p>
                  {leader.linkedin && leader.linkedin !== "#" && (
                    <a
                      href={leader.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-4 text-sm text-blue-600 hover:text-blue-800"
                    >
                      <Linkedin size={16} />
                      Connect on LinkedIn
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
