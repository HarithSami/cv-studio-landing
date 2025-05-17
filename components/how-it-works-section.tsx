"use client";

import { motion } from "@/components/motion-wrapper";
import { Button } from "@/components/ui/button";
import { FileText, Upload, Sparkles, Download, ArrowRight } from "lucide-react";
import confetti from 'canvas-confetti';

export function HowItWorksSection() {
  // Function to trigger confetti effect
  const triggerConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#4f46e5', '#10b981', '#f59e0b']
    });
  };
  const steps = [
    {
      number: "01",
      icon: <Upload className="h-8 w-8" />,
      title: "Upload Your Current Resume",
      description: "Start by uploading your existing resume or creating a new one using our guided builder."
    },
    {
      number: "02",
      icon: <FileText className="h-8 w-8" />,
      title: "Paste the Job Description",
      description: "Copy and paste the job description you're applying for into our analyzer."
    },
    {
      number: "03",
      icon: <Sparkles className="h-8 w-8" />,
      title: "AI Tailors Your Resume",
      description: "Our AI matches your experience to the job requirements and optimizes your resume accordingly."
    },
    {
      number: "04",
      icon: <Download className="h-8 w-8" />,
      title: "Download & Apply",
      description: "Download your perfectly tailored resume in multiple formats, ready to submit to employers."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            How It Works
          </motion.h2>
          <motion.p 
            className="mt-4 text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Get a tailored resume in minutes with our simple four-step process
          </motion.p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 * index }}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    {step.icon}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-primary mb-2">{step.number}</div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
                
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-8 w-0.5 h-32 bg-border"></div>
                )}
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button size="lg" className="group" onClick={triggerConfetti}>
              Try CV Studio Now <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}