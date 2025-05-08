"use client";

import { motion } from "framer-motion";
import { Upload, DollarSign, CreditCard } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      title: "Upload License",
      description:
        "Securely upload your software license details through our encrypted portal.",
      icon: <Upload className="h-10 w-10 text-teal-500" />,
    },
    {
      title: "Get Valuation",
      description:
        "Our AI-powered system analyzes market data to provide you with the best possible valuation.",
      icon: <DollarSign className="h-10 w-10 text-blue-500" />,
    },
    {
      title: "Get Paid",
      description:
        "Once approved, receive payment directly to your account within 48 hours.",
      icon: <CreditCard className="h-10 w-10 text-teal-500" />,
    },
  ];

  return (
    <section id="how-it-works" className="w-full py-12 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              How It Works
            </h2>
            <p className="max-w-[700px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
              Our streamlined process makes selling your unused software
              licenses quick and hassle-free.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-background rounded-xl shadow-sm border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="p-4 bg-muted rounded-full mb-4">{step.icon}</div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-foreground/70">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
