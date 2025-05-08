"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send } from "lucide-react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

// Predefined questions and answers
const faqData = {
  "how do i sell my license?":
    "To sell your license, simply click the 'Sell My Licenses' button at the top of the page and follow the 3-step process: upload your license details, receive a valuation, and get paid within 48 hours after approval.",
  "what types of licenses do you buy?":
    "We purchase a wide range of software licenses including enterprise software, cloud services, desktop applications, SaaS subscriptions, and more. If you're unsure, please contact us with details about your specific license.",
  "how long does the process take?":
    "The entire process typically takes 2-5 business days. You'll receive a valuation within 24 hours, and once approved, payment is processed within 48 hours.",
  "is my information secure?":
    "Absolutely. We use bank-level encryption to protect all your data. Our platform is SOC 2 compliant and we never share your information with third parties without your explicit consent.",
  "how much can i get for my licenses?":
    "The value depends on factors like software type, remaining subscription time, and current market demand. Our AI-powered valuation system ensures you get the best possible market rate for your licenses.",
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi there! 👋 How can I help you with selling your software licenses today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage = { role: "user" as const, content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Check if the question matches any predefined FAQ
    const lowerCaseInput = input.toLowerCase();
    let response = "";

    // Check for matching FAQ
    for (const [question, answer] of Object.entries(faqData)) {
      if (
        lowerCaseInput.includes(question) ||
        question.includes(lowerCaseInput)
      ) {
        response = answer;
        break;
      }
    }

    // Add assistant response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: response },
      ]);
      setIsLoading(false);
    }, 500);
  };

  return (
    <>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Button
          onClick={toggleChat}
          className="rounded-full w-14 h-14 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 shadow-lg"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <MessageCircle className="h-6 w-6" />
          )}
        </Button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 w-80 sm:w-96 h-96 bg-background border rounded-lg shadow-xl z-50 flex flex-col"
          >
            <div className="p-4 border-b bg-muted/50 rounded-t-lg">
              <h3 className="font-semibold">SoftSell Assistant</h3>
              <p className="text-xs text-foreground/70">
                Ask us anything about selling software licenses
              </p>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.role === "user"
                        ? "bg-gradient-to-r from-teal-500 to-blue-600 text-white"
                        : "bg-muted"
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] p-3 rounded-lg bg-muted">
                    <div className="flex space-x-2">
                      <div
                        className="w-2 h-2 rounded-full bg-foreground/30 animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      ></div>
                      <div
                        className="w-2 h-2 rounded-full bg-foreground/30 animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      ></div>
                      <div
                        className="w-2 h-2 rounded-full bg-foreground/30 animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSubmit} className="p-4 border-t flex gap-2">
              <Input
                value={input}
                onChange={handleInputChange}
                placeholder="Type your message..."
                className="flex-1"
                disabled={isLoading}
              />
              <Button type="submit" size="icon" disabled={isLoading}>
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
