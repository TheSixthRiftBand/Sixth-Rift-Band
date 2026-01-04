import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Dimensional Rehearsal",
    category: "Live"
  },
  {
    url: "https://images.unsplash.com/photo-1514525253361-bee87187040b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Cosmic Lights",
    category: "Concert"
  },
  {
    url: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Studio Sessions",
    category: "Studio"
  },
  {
    url: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Ethereal Echoes",
    category: "BTS"
  },
  {
    url: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Rift Visuals",
    category: "Visuals"
  },
  {
    url: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Main Stage",
    category: "Live"
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Visual Rift
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Capturing the moments between dimensions
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden group cursor-pointer border-primary/20 hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-0 relative aspect-video">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary mb-1">
                      {image.category}
                    </span>
                    <h4 className="text-lg font-bold">{image.title}</h4>
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
