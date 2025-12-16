import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, Users } from "lucide-react";

const events = [
  {
    title: "Flagship AI & Entrepreneurship Workshop at T-Hub",
    description: "High-impact 2-day workshop on AI & Entrepreneurship at T-Hub, the world's largest innovation hub, attracting over 400+ students and 50+ professionals.",
    image: "/images/events/thub-workshop.jpg",
    stats: { attendees: "400+ students", professionals: "50+ professionals" },
    venue: "T-Hub, Hyderabad",
  },
  {
    title: "UDBHAV 2-Day Workshop at IIIT Hyderabad",
    description: "High-impact UDBHAV Edition 1, a 2-day workshop on Entrepreneurship at IIIT Hyderabad, engaging 60+ students and professionals.",
    image: "/images/events/udbhav-iiith.jpg",
    stats: { attendees: "60+ participants" },
    venue: "IIIT Hyderabad",
  },
  {
    title: "Indo-Japan Forum at IIIT Hyderabad",
    description: "Bringing together leaders, innovators, and students to explore cross-border collaboration and entrepreneurial opportunities between India and Japan.",
    image: "/images/events/indo-japan-forum.jpg",
    stats: { focus: "India-Japan talent pipeline" },
    venue: "CIE, IIIT Hyderabad",
  },
];

export function EventsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-slate-100" id="events">
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
              Flagship Events
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-navy-900 leading-tight mb-6">
              1 Year of Impact.
              <br />
              <span className="text-navy-600">Real execution. Real outcomes.</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              MXC has demonstrated remarkable momentum, establishing itself as a trusted 
              student-centric platform across Andhra Pradesh and Telangana.
            </p>
          </motion.div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="group bg-background rounded-sm overflow-hidden shadow-premium-md hover:shadow-premium-lg transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-lg font-semibold text-navy-900 mb-3 line-clamp-2">
                    {event.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {event.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <MapPin size={14} className="text-navy-600" />
                      {event.venue}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users size={14} className="text-navy-600" />
                      {event.stats.attendees || event.stats.focus}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 text-center"
          >
            <p className="text-navy-700 font-medium text-lg">
              Fastest-growing student innovation community in AP & Telangana.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
