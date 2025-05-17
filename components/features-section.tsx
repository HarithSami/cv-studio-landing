"use client";

import { motion } from "@/components/motion-wrapper";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Zap, Target, Shield, BarChart, Clock, FileText } from "lucide-react";

const features = [
  {
    icon: <Sparkles className="h-10 w-10 text-blue-500" />,
    title: "AI-Powered Matching",
    description: "Our AI analyzes job descriptions and automatically highlights your most relevant skills and experiences."
  },
  {
    icon: <Zap className="h-10 w-10 text-amber-500" />,
    title: "Instant Optimization",
    description: "Transform your generic resume into a tailored application in seconds, not hours."
  },
  {
    icon: <Target className="h-10 w-10 text-emerald-500" />,
    title: "Keyword Optimization",
    description: "Beat ATS systems by automatically including critical keywords from the job description."
  },
  {
    icon: <Shield className="h-10 w-10 text-purple-500" />,
    title: "Professional Templates",
    description: "Choose from dozens of ATS-friendly, professionally designed resume templates."
  },
  {
    icon: <BarChart className="h-10 w-10 text-rose-500" />,
    title: "Match Scoring",
    description: "See your application strength with a real-time match score between your resume and the job."
  },
  {
    icon: <FileText className="h-10 w-10 text-rose-500" />,
    title: "Various Templates",
    description: "Choose from dozens of ATS-friendly, professionally designed resume templates."
  }
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            AI Supercharged Resume Tools
          </motion.h2>
          <motion.p 
            className="mt-4 text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            CV Studio combines cutting-edge AI with professional resume expertise to help you stand out from the competition.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card className="h-full border-border hover:border-primary/50 transition-colors duration-300">
                <CardHeader className="pb-2">
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}