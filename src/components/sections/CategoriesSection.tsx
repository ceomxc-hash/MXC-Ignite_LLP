import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { 
  Users, Rocket, Briefcase, Crown, Building2, GraduationCap, 
  Network, Landmark, FlaskConical, Brain, FileSearch, 
  Award, DollarSign, Building, Handshake, Globe2, 
  Megaphone, Search, Lightbulb, TrendingUp, FileText, 
  Wallet, Shield, ChevronDown, ChevronUp 
} from "lucide-react";

const categories = [
  { 
    id: 1, 
    title: "Student Core Membership", 
    icon: Users,
    description: "Foundation-level access to the MXC ecosystem for active learners."
  },
  { 
    id: 2, 
    title: "Fresher Accelerator Track", 
    icon: Rocket,
    description: "Transition from graduate to execution-ready professional."
  },
  { 
    id: 3, 
    title: "Working Professional Track", 
    icon: Briefcase,
    description: "Upskill, cross-skill, and unlock new career trajectories."
  },
  { 
    id: 4, 
    title: "Mid-Level Leadership Track", 
    icon: Crown,
    description: "Develop strategic thinking and team leadership capabilities."
  },
  { 
    id: 5, 
    title: "Founder & CXO Circle", 
    icon: Building2,
    description: "Exclusive access for builders, founders, and executive leaders."
  },
  { 
    id: 6, 
    title: "Academic Mentor Network", 
    icon: GraduationCap,
    description: "Professors and researchers guiding next-gen talent."
  },
  { 
    id: 7, 
    title: "Industry Mentor Network", 
    icon: Network,
    description: "Practitioners and executives shaping real-world execution."
  },
  { 
    id: 8, 
    title: "Government & Policy Mentor Network", 
    icon: Landmark,
    description: "Policy makers and public sector leaders enabling impact at scale."
  },
  { 
    id: 9, 
    title: "Udbhav – Entrepreneurship Simulation", 
    icon: FlaskConical,
    description: "Build, fail, iterate—in a controlled, high-stakes environment."
  },
  { 
    id: 10, 
    title: "AarambhAI – AI & Data Execution", 
    icon: Brain,
    description: "Hands-on AI/ML execution with real data and business problems."
  },
  { 
    id: 11, 
    title: "Research & Publication Track", 
    icon: FileSearch,
    description: "Publish, present, and build academic credibility."
  },
  { 
    id: 12, 
    title: "Premium Internship Portal", 
    icon: Award,
    description: "Curated, high-quality internships with outcome guarantees."
  },
  { 
    id: 13, 
    title: "Job & Opportunity Portal", 
    icon: Briefcase,
    description: "Direct placement pipelines with vetted employers."
  },
  { 
    id: 14, 
    title: "Paid Execution Marketplace", 
    icon: DollarSign,
    description: "Fixed-scope, fixed-deadline paid micro-projects. Subscription required."
  },
  { 
    id: 15, 
    title: "Founder Office-as-a-Service", 
    icon: Building,
    description: "Work inside founder offices on real, live problems."
  },
  { 
    id: 16, 
    title: "Institutional Talent Pipeline", 
    icon: Handshake,
    description: "Long-term talent pipelines for colleges, corporates, governments."
  },
  { 
    id: 17, 
    title: "Corporate Innovation Taskforce", 
    icon: Lightbulb,
    description: "Companies post real internal problems to be solved by MXC talent."
  },
  { 
    id: 18, 
    title: "Global Exposure & Exchange Desk", 
    icon: Globe2,
    description: "India–Japan and global innovation immersion programs."
  },
  { 
    id: 19, 
    title: "Thought Leadership & Influence Engine", 
    icon: Megaphone,
    description: "LinkedIn, newsletter, and authority building for emerging leaders."
  },
  { 
    id: 20, 
    title: "Startup Due-Diligence & Research Cell", 
    icon: Search,
    description: "Market research and validation for VCs and corporates."
  },
  { 
    id: 21, 
    title: "Innovation-as-a-Service", 
    icon: Lightbulb,
    description: "Innovation labs operated for institutions and enterprises."
  },
  { 
    id: 22, 
    title: "Skill-to-Revenue Incubator", 
    icon: TrendingUp,
    description: "Convert one skill into income with structured accountability."
  },
  { 
    id: 23, 
    title: "Policy, Whitepaper & Proposal Studio", 
    icon: FileText,
    description: "High-end documentation for governments and institutions."
  },
  { 
    id: 24, 
    title: "Alumni Capital & Angel Syndicate", 
    icon: Wallet,
    description: "Alumni-backed funding loops and founder syndicates. (Coming Soon)"
  },
  { 
    id: 25, 
    title: "Digital Proof & Credential Vault", 
    icon: Shield,
    description: "Verifiable execution records, not certificates."
  },
];

export function CategoriesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [showAll, setShowAll] = useState(false);

  const visibleCategories = showAll ? categories : categories.slice(0, 12);

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-navy-900" id="categories">
      <div className="section-padding">
        <div className="container-wide">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-16"
          >
            <span className="text-xs font-medium tracking-widest uppercase text-gold mb-4 block">
              The Ecosystem Architecture
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground leading-tight mb-6">
              25 infrastructure categories.
              <br />
              <span className="text-slate-400">One integrated system.</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Each category is not a feature—it's infrastructure. Built to scale. 
              Designed to transform.
            </p>
          </motion.div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {visibleCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.5) }}
                className="group p-6 bg-navy-800/50 hover:bg-navy-800 border border-navy-700/50 hover:border-navy-600 rounded-sm transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-navy-700/50 group-hover:bg-gold/20 rounded-sm flex items-center justify-center shrink-0 transition-colors duration-300">
                    <category.icon size={20} className="text-slate-400 group-hover:text-gold transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-semibold text-primary-foreground mb-2 leading-tight">
                      {category.title}
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Show More/Less Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 text-slate-400 hover:text-primary-foreground text-sm font-medium transition-colors duration-300"
            >
              {showAll ? (
                <>
                  Show Less <ChevronUp size={16} />
                </>
              ) : (
                <>
                  View All 25 Categories <ChevronDown size={16} />
                </>
              )}
            </button>
          </motion.div>

          {/* Subscription Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-16 p-8 bg-navy-800/30 border border-navy-700/30 rounded-sm"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h4 className="font-heading text-lg font-semibold text-primary-foreground mb-2">
                  Access is not open. It's earned.
                </h4>
                <p className="text-slate-500 text-sm">
                  Membership unlocks access. Subscriptions enable execution. Entry is selective.
                </p>
              </div>
              <a
                href="#portal"
                className="shrink-0 px-6 py-3 bg-gold text-navy-900 text-sm font-semibold rounded-sm hover:bg-amber-500 transition-colors duration-300"
              >
                Request Access
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
