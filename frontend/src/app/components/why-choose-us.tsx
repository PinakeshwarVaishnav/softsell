"use client";

import { motion } from "framer-motion";
import { Shield, Clock, TrendingUp, Award } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Secure Transactions",
      description:
        "Bank-level encryption and secure payment processing for every transaction.",
      icon: <Shield className="h-8 w-8 text-teal-500" />,
    },
    {
      title: "Fast Turnaround",
      description:
        "Get valuations within hours and payment within 48 hours of approval.",
      icon: <Clock className="h-8 w-8 text-blue-500" />,
    },
    {
      title: "Best Market Rates",
      description:
        "Our AI-powered pricing engine ensures you get the maximum value for your licenses.",
      icon: <TrendingUp className="h-8 w-8 text-teal-500" />,
    },
    {
      title: "Trusted by Enterprises",
      description:
        "Serving Fortune 500 companies and SMBs with the same level of excellence.",
      icon: <Award className="h-8 w-8 text-blue-500" />,
    },
  ];

  return (
    <section id="why-choose-us" className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Why Choose Us
            </h2>
            <p className="max-w-[700px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
              SoftSell offers unmatched benefits when it comes to software
              license reselling.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="flex flex-col p-6 bg-background rounded-xl shadow-sm border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="p-2 bg-muted rounded-full w-fit mb-4">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
              <p className="text-foreground/70">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
