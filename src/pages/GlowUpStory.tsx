import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowLeft, Calendar, MapPin, Users, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const events = [
  {
    id: 1,
    title: "Flagship AI & Entrepreneurship Workshop at T-Hub",
    shortDesc: "High-impact 2-day workshop on AI & Entrepreneurship at T-Hub",
    fullDesc: "A transformative 2-day workshop held at T-Hub, the world's largest innovation hub, bringing together over 400+ students and 50+ industry professionals. The workshop covered AI fundamentals, machine learning applications, entrepreneurship mindset, and hands-on project building. Participants engaged in interactive sessions with industry mentors, culminating in pitch presentations and networking opportunities.",
    image: "/images/events/thub-workshop.jpg",
    date: "2024",
    venue: "T-Hub, Hyderabad",
    attendees: "400+ students, 50+ professionals",
    highlights: [
      "2-day intensive workshop format",
      "Hands-on AI/ML projects",
      "Entrepreneurship masterclasses",
      "Industry mentor interactions",
      "Pitch competitions",
      "Networking sessions"
    ],
  },
  {
    id: 2,
    title: "UDBHAV 2-Day Workshop at IIIT Hyderabad",
    shortDesc: "UDBHAV Edition 1, a 2-day workshop on Entrepreneurship",
    fullDesc: "UDBHAV Edition 1 marked MXC's flagship entrepreneurship simulation workshop at IIIT Hyderabad. Over 60 participants engaged in immersive sessions covering startup ideation, business model development, and pitch presentation. The workshop featured interactive exercises, mentor-led discussions, and real-world case studies from successful entrepreneurs.",
    image: "/images/events/udbhav-iiith.jpg",
    date: "2024",
    venue: "IIIT Hyderabad",
    attendees: "60+ participants",
    highlights: [
      "Entrepreneurship simulation",
      "Startup ideation workshops",
      "Business model canvas",
      "Pitch presentation training",
      "Mentor interactions",
      "Case study discussions"
    ],
  },
  {
    id: 3,
    title: "Indo-Japan Forum at IIIT Hyderabad",
    shortDesc: "Cross-border collaboration and entrepreneurial opportunities",
    fullDesc: "A landmark event bringing together leaders, innovators, and students to explore cross-border collaboration and entrepreneurial opportunities between India and Japan. The forum featured keynote sessions from Japanese business leaders, panel discussions on India-Japan tech partnerships, and networking sessions to foster international connections for students and professionals.",
    image: "/images/events/indo-japan-forum.jpg",
    date: "2024",
    venue: "CIE, IIIT Hyderabad",
    attendees: "Focus: India-Japan talent pipeline",
    highlights: [
      "India-Japan business insights",
      "Cross-border collaboration opportunities",
      "Keynote from Japanese leaders",
      "Tech partnership discussions",
      "Cultural exchange sessions",
      "International networking"
    ],
  },
];

export default function GlowUpStory() {
  const [selectedEvent, setSelectedEvent] = useState<typeof events[0] | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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
              Our Glow Up Story
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
              1 Year of Impact.
              <br />
              <span className="text-gold">Real execution. Real outcomes.</span>
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              From humble beginnings to becoming the fastest-growing student innovation community in AP & Telangana.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Events Timeline */}
      <section className="py-16">
        <div className="section-padding container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                onClick={() => setSelectedEvent(event)}
                className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-semibold text-navy-900 mb-3 line-clamp-2 group-hover:text-navy-700 transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                    {event.shortDesc}
                  </p>
                  <div className="flex flex-wrap gap-3 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <MapPin size={14} className="text-navy-600" />
                      {event.venue}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users size={14} className="text-navy-600" />
                      {event.attendees}
                    </span>
                  </div>
                  <div className="mt-4 text-navy-600 text-sm font-medium group-hover:text-navy-800">
                    Click to read more →
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Detail Modal */}
      <Dialog open={!!selectedEvent} onOpenChange={() => setSelectedEvent(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedEvent && (
            <>
              <DialogHeader>
                <DialogTitle className="font-heading text-2xl text-navy-900">
                  {selectedEvent.title}
                </DialogTitle>
                <DialogDescription className="flex flex-wrap gap-4 text-sm pt-2">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} className="text-navy-600" />
                    {selectedEvent.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} className="text-navy-600" />
                    {selectedEvent.venue}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users size={14} className="text-navy-600" />
                    {selectedEvent.attendees}
                  </span>
                </DialogDescription>
              </DialogHeader>

              <div className="mt-4">
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="w-full rounded-lg"
                />
              </div>

              <div className="mt-6">
                <h4 className="font-semibold text-navy-900 mb-3">About the Event</h4>
                <p className="text-slate-600 leading-relaxed">
                  {selectedEvent.fullDesc}
                </p>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold text-navy-900 mb-3">Key Highlights</h4>
                <ul className="grid grid-cols-2 gap-2">
                  {selectedEvent.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
