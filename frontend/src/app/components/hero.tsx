"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-background/80">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            className="flex flex-col justify-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">
                Turn Unused Software Licenses Into Cash
              </h1>
              <p className="max-w-[600px] text-foreground/80 md:text-xl">
                SoftSell helps businesses maximize the value of their software
                investments by providing a secure marketplace to resell unused
                licenses at the best market rates.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white px-8 py-6 text-lg">
                Sell My Licenses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="px-8 py-6 text-lg">
                Get a Valuation
              </Button>
            </div>
          </motion.div>
          <motion.div
            className="mx-auto lg:mr-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-full h-[400px] bg-gradient-to-br from-teal-100 to-blue-100 dark:from-teal-900/20 dark:to-blue-900/20 rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="p-8 bg-background/80 backdrop-blur-sm rounded-xl shadow-lg max-w-md">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-xs text-foreground/60">
                      Software License Manager
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-6 bg-foreground/10 rounded w-3/4"></div>
                    <div className="h-6 bg-foreground/10 rounded w-full"></div>
                    <div className="h-6 bg-foreground/10 rounded w-5/6"></div>
                    <div className="h-6 bg-teal-500/20 rounded w-full"></div>
                    <div className="h-6 bg-foreground/10 rounded w-2/3"></div>
                    <div className="h-6 bg-blue-500/20 rounded w-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
