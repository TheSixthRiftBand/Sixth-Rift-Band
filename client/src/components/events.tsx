import { motion } from "framer-motion";
import { Calendar, MapPin, Ticket, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const events = [
  {
    date: "Jan 25, 2026",
    time: "8:00 PM",
    venue: "Cosmic Arena",
    location: "Mumbai, India",
    type: "Live Concert",
    status: "Tickets Available"
  },
  {
    date: "Feb 12, 2026",
    time: "9:30 PM",
    venue: "Interdimensional Hall",
    location: "Pune, India",
    type: "Fusion Night",
    status: "Selling Fast"
  },
  {
    date: "Mar 05, 2026",
    time: "7:00 PM",
    venue: "The Digital Rift",
    location: "Online Stream",
    type: "Virtual Release",
    status: "Free Entry"
  }
];

export default function Events() {
  return (
    <section id="events" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Upcoming Portals
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join us as we bridge musical dimensions live
          </p>
        </div>

        <div className="space-y-4">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="hover:border-primary/50 transition-all duration-300 overflow-hidden">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex items-center gap-6">
                      <div className="bg-primary/10 rounded-xl p-4 text-center min-w-[100px]">
                        <span className="block text-2xl font-bold text-primary">
                          {event.date.split(",")[0].split(" ")[1]}
                        </span>
                        <span className="block text-sm font-medium text-muted-foreground uppercase">
                          {event.date.split(",")[0].split(" ")[0]}
                        </span>
                      </div>
                      <div>
                        <Badge variant="outline" className="mb-2 border-primary/30 text-primary">
                          {event.type}
                        </Badge>
                        <h4 className="text-2xl font-bold text-foreground mb-1">
                          {event.venue}
                        </h4>
                        <div className="flex items-center gap-4 text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <MapPin size={16} /> {event.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar size={16} /> {event.time}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                      <span className="text-sm font-medium text-accent">
                        {event.status}
                      </span>
                      <Button className="w-full sm:w-auto gap-2 group">
                        {event.location === "Online Stream" ? (
                          <>Set Reminder <ExternalLink size={18} /></>
                        ) : (
                          <>Get Tickets <Ticket size={18} className="group-hover:rotate-12 transition-transform" /></>
                        )}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
