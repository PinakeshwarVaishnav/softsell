"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO",
      company: "TechVision Inc.",
      content:
        "SoftSell helped us recover over $50,000 from unused enterprise software licenses. Their process was seamless and the valuation was higher than we expected.",
      stars: 5,
    },
    {
      name: "Michael Chen",
      role: "IT Director",
      company: "Global Solutions Ltd.",
      content:
        "As we transitioned to cloud services, we had dozens of unused licenses. SoftSell made it incredibly easy to convert these assets into capital that funded our cloud migration.",
      stars: 5,
    },
  ];

  return (
    <section id="testimonials" className="w-full py-12 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              What Our Customers Say
            </h2>
            <p className="max-w-[700px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what our clients
              have to say about their experience with SoftSell.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="flex flex-col p-6 bg-background rounded-xl shadow-sm border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-foreground/80 italic mb-6">
                &quot;{testimonial.content}&quot;
              </p>
              <div className="mt-auto">
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-foreground/70 text-sm">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
