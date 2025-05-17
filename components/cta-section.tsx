"use client";

import { useState } from "react";
import { motion } from "@/components/motion-wrapper";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Info } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import confetti from 'canvas-confetti';

export function CtaSection() {
  // Functions to trigger different confetti effects
  const triggerConfettiBasic = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };
  
  // Confetti with firework effect
  const triggerConfettiFirework = () => {
    const end = Date.now() + 800;
    
    let interval: NodeJS.Timeout;
    interval = setInterval(() => {
      if (Date.now() > end) {
        return clearInterval(interval);
      }
      
      confetti({
        particleCount: 30,
        spread: 100,
        origin: { y: 0.6 },
        startVelocity: 30,
        colors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff']
      });
    }, 50);
  };
  
  // Confetti with school pride effect
  const triggerConfettiSchoolPride = () => {
    const count = 200;
    const defaults = {
      origin: { y: 0.7 }
    };
    
    function fire(particleRatio: number, opts: Record<string, any>) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio)
      });
    }
    
    fire(0.25, {
      spread: 26,
      startVelocity: 55,
      colors: ['#4f46e5']
    });
    fire(0.2, {
      spread: 60,
      colors: ['#10b981']
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
      colors: ['#f59e0b']
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
      colors: ['#ef4444']
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
      colors: ['#3b82f6']
    });
  };
  const benefits = [
    "Land more interviews",
    "Save hours of resume editing",
    "Beat ATS screening systems",
    "Highlight your relevant skills",
  ];

  const [creditCount, setCreditCount] = useState(50);
  const [selectedPlan, setSelectedPlan] = useState("credits");
  
  // Calculate price based on credits (with volume discount)
  const calculatePrice = (credits: number): number => {
    if (credits <= 30) return credits * 0.5;
    if (credits <= 100) return credits * 0.4;
    return credits * 0.3;
  };

  const price = calculatePrice(creditCount).toFixed(2);
  const cvCount = Math.floor(creditCount / 5); // Assuming 5 credits per CV

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2
              className="text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Flexible Pricing for Every Need
            </motion.h2>
            <motion.p
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Choose the plan that works best for you
            </motion.p>
          </div>
          
          <motion.div
            className="bg-card rounded-2xl shadow-lg overflow-hidden mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="p-8">
              <Tabs defaultValue="credits" value={selectedPlan} onValueChange={setSelectedPlan} className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="credits">Pay As You Go</TabsTrigger>
                  <TabsTrigger value="subscription">Monthly Subscription</TabsTrigger>
                </TabsList>
                
                <TabsContent value="credits" className="space-y-8">
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <h3 className="text-2xl font-bold">Credit Pack</h3>
                      <div className="text-3xl font-bold text-primary">${price}</div>
                    </div>
                    
                    <div className="bg-muted/50 p-6 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{creditCount} Credits</span>
                          <div className="flex items-center text-muted-foreground text-sm">
                            <Info className="h-4 w-4 mr-1" />
                            <span>≈ {cvCount} CV generations</span>
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          ${(parseFloat(price) / creditCount).toFixed(2)} per credit
                        </div>
                      </div>
                      
                      <Slider
                        defaultValue={[50]}
                        min={10}
                        max={200}
                        step={10}
                        value={[creditCount]}
                        onValueChange={(value) => setCreditCount(value[0])}
                        className="py-4"
                      />
                      
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>10 credits</span>
                        <span>200 credits</span>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>Professional templates</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>AI keyword optimization</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>ATS-friendly formats</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>Multiple download formats</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>Credits never expire</span>
                      </div>
                    </div>
                    
                    <Button className="w-full" size="lg">
                      Purchase Credits
                    </Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="subscription" className="space-y-8">
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <h3 className="text-2xl font-bold">Monthly Plan</h3>
                      <div className="text-3xl font-bold text-primary">$14.99<span className="text-sm text-muted-foreground font-normal">/month</span></div>
                    </div>
                    
                    <div className="bg-muted/50 p-6 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium">50 Credits per month</span>
                        <div className="flex items-center text-muted-foreground text-sm">
                          <Info className="h-4 w-4 mr-1" />
                          <span>≈ 10 CV generations</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground">
                        Subscribe and save with our monthly plan. Perfect for active job seekers.
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>All features from credit pack</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>50 fresh credits every month</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>Priority support</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>Advanced CV analytics</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>Cancel anytime</span>
                      </div>
                    </div>
                    
                    <Button className="w-full" size="lg" onClick={triggerConfettiFirework}>
                      Start 7-Day Free Trial
                    </Button>
                    
                    <div className="text-xs text-center text-muted-foreground">
                      No credit card required for trial. Cancel anytime.
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </motion.div>
          
          <div className="bg-card rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12">
                <motion.h2 
                  className="text-3xl font-bold mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  Get Started with CV Studio Today
                </motion.h2>
                
                <motion.p 
                  className="text-muted-foreground mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Join thousands of job seekers who have unlocked the power of AI-tailored resumes.
                </motion.p>
                
                <ul className="space-y-3 mb-8">
                  {benefits.map((benefit, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                    >
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Button size="lg" className="group" onClick={triggerConfettiSchoolPride}>
                    Get Started Now <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </div>
              
              <div className="flex items-center justify-center relative w-full h-full">
                
                <motion.div 
                  className="relative z-10 w-full max-w-md aspect-[4/5]"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <img
                    src="/images/homepage-element.png"
                    alt="Homepage Element"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}