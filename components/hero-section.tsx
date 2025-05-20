"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowRight, FileText, FileCheck, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "@/components/motion-wrapper";
import { AnimatedGradientBackground } from "@/components/animated-gradient-background";
import confetti from 'canvas-confetti';

export function HeroSection() {
  // Function to trigger confetti effect (only used on button click, not in animation cycle)
  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };
  
  // Reference to track animation cycle
  const animationCycleRef = useRef(false);

  // Job positions to cycle through
  const jobPositions = [
    "Senior Software Engineer",
    "Product Manager",
    "UX/UI Designer",
    "Data Scientist",
    "Marketing Specialist"
  ];

  // Resume templates
  const resumeTemplates = [
    // Template 1 - Technical
    {
      lines: [
        { width: "w-full", content: "5+ years experience in full-stack development" },
        { width: "w-4/5", content: "Proficient in React, Node.js, and TypeScript" },
        { width: "w-3/4", content: "Led team of 5 engineers on critical projects" },
        { width: "w-full", content: "Implemented CI/CD pipelines reducing deploy time by 40%" },
        { width: "w-5/6", content: "Optimized database queries improving performance by 30%" },
        { width: "w-4/5", content: "Bachelor's in Computer Science, Stanford University" }
      ],
      matchPercentage: 98
    },
    // Template 2 - Product
    {
      lines: [
        { width: "w-full", content: "7+ years product management experience" },
        { width: "w-4/5", content: "Launched 3 successful SaaS products from concept to market" },
        { width: "w-5/6", content: "Increased user retention by 45% through data-driven insights" },
        { width: "w-full", content: "Agile certified with experience in SCRUM and Kanban" },
        { width: "w-3/4", content: "MBA from Harvard Business School" },
        { width: "w-4/5", content: "Proficient in product analytics tools and A/B testing" }
      ],
      matchPercentage: 95
    },
    // Template 3 - Design
    {
      lines: [
        { width: "w-full", content: "Award-winning UX/UI designer with 6+ years experience" },
        { width: "w-5/6", content: "Redesigned core product increasing user engagement by 60%" },
        { width: "w-4/5", content: "Expert in Figma, Adobe XD, and design systems" },
        { width: "w-full", content: "Created accessible interfaces compliant with WCAG 2.1 AA" },
        { width: "w-3/4", content: "BFA in Graphic Design, Rhode Island School of Design" },
        { width: "w-4/5", content: "Led design sprints for Fortune 500 clients" }
      ],
      matchPercentage: 92
    }
  ];

  // State for current job position and typing animation
  const [currentJobIndex, setCurrentJobIndex] = useState(0);
  const [typedJob, setTypedJob] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [showResume, setShowResume] = useState(false);
  const [currentResumeIndex, setCurrentResumeIndex] = useState(0);
  const [displayedMatch, setDisplayedMatch] = useState(0);
  const [showMatchPercentage, setShowMatchPercentage] = useState(false);
  const [visibleLines, setVisibleLines] = useState<number[]>([]);

  // Initial animation kick-starter
  useEffect(() => {
    // Start the animation cycle when component mounts
    setIsTyping(true);
    
    // Add this for debugging
    console.log("Animation cycle started");
    
    return () => {
      // Cleanup on unmount
      console.log("Animation cleanup");
    };
  }, []);

  // Main animation controller
  useEffect(() => {
    let timeoutId: NodeJS.Timeout | undefined;
    
    // Step 1: Begin typing the job title
    if (isTyping) {
      const currentJob = jobPositions[currentJobIndex];
      if (typedJob.length < currentJob.length) {
        timeoutId = setTimeout(() => {
          setTypedJob(currentJob.substring(0, typedJob.length + 1));
        }, 100);
      } else {
        timeoutId = setTimeout(() => {
          setIsTyping(false);
          setShowResume(true);
        }, 500);
      }
    }
    
    // Step 2: Show resume lines one by one
    else if (showResume) {
      const totalLines = resumeTemplates[currentResumeIndex].lines.length;
      
      if (visibleLines.length < totalLines) {
        timeoutId = setTimeout(() => {
          setVisibleLines(prev => [...prev, prev.length]);
        }, 300);
      } 
      // Step 3: Show percentage after lines are displayed
      else if (!showMatchPercentage) {
        timeoutId = setTimeout(() => {
          setShowMatchPercentage(true);
        }, 500);
      }
      // Step 4: Animate percentage counter
      else if (showMatchPercentage) {
        const targetMatch = resumeTemplates[currentResumeIndex].matchPercentage;
        if (displayedMatch < targetMatch) {
          timeoutId = setTimeout(() => {
            setDisplayedMatch(prev => Math.min(prev + 2, targetMatch));
          }, 30);
        }
        // Step 5: Wait and reset for next job/resume
        else {
          timeoutId = setTimeout(() => {
            // Reset animation states
            setShowResume(false);
            setVisibleLines([]);
            setDisplayedMatch(0);
            setShowMatchPercentage(false);
            
            // Move to next job and resume template
            const nextJobIndex = (currentJobIndex + 1) % jobPositions.length;
            const nextResumeIndex = (currentResumeIndex + 1) % resumeTemplates.length;
            
            setCurrentJobIndex(nextJobIndex);
            setCurrentResumeIndex(nextResumeIndex);
            setTypedJob("");
            setIsTyping(true);
            
            // No confetti animation as per user request
            
            // Mark that we've completed a cycle
            animationCycleRef.current = true;
          }, 3000);
        }
      }
    }
    
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [currentJobIndex, currentResumeIndex, displayedMatch, isTyping, jobPositions, resumeTemplates, showMatchPercentage, showResume, typedJob, visibleLines]);
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <AnimatedGradientBackground />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-xl"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Get More Interviews with AI-Tailored Resumes
              </h1>
              <p className="mt-6 text-lg md:text-xl text-muted-foreground">
                CV Studio uses advanced AI to analyze job descriptions and automatically tailor your resume to match exactly what employers are looking for.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                    size="lg"
                    className="group"
                    onClick={() => {
                      triggerConfetti(); // your animation function
                      setTimeout(() => {
                        window.location.href = "https://app.cvstudio.ai";
                      }, 1000); // delay in milliseconds (adjust as needed)
                    }}
                  >
                    Create Your Resume
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>

              </div>           
              <div className="mt-12">
                <p className="text-sm text-muted-foreground mb-4">Trusted by professionals from leading companies</p>
                <div className="grid grid-cols-3 md:grid-cols-5 gap-6 opacity-70">
                  {/* Logo placeholders */}
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="h-6 bg-muted/30 rounded animate-pulse"></div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <div className="md:w-1/2 md:pl-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-card border border-border rounded-lg shadow-xl overflow-hidden p-1">
                <div className="rounded-md overflow-hidden border border-border">
                  <div className="h-8 bg-muted flex items-center px-4 gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                    <div className="ml-2 text-xs text-muted-foreground">Resume Preview</div>
                  </div>
                  <div className="p-6 bg-background">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <FileText className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <div className="h-6 w-48 bg-muted/40 rounded-sm"></div>
                        <div className="h-4 w-32 bg-muted/30 rounded-sm mt-2"></div>
                      </div>
                      <div className="ml-auto">
                        {showMatchPercentage && (
                          <Button size="sm" variant="outline" className="text-xs">
                            <FileCheck className="mr-1 h-3 w-3" /> {displayedMatch}% Match
                          </Button>
                        )}
                      </div>
                    </div>
                    
                    <div className="space-y-4 mt-6 min-h-[180px]">
                      {/* Dynamic resume content */}
                      {resumeTemplates[currentResumeIndex].lines.map((line, i) => (
                        <motion.div 
                          key={i} 
                          className="flex gap-4"
                          initial={{ opacity: 1, y: 0 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className={`text-xs text-muted-foreground ${line.width} pl-3`}>
                            {visibleLines.includes(i) ? line.content : ""}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    
                    <motion.div 
                      className="mt-8 p-3 rounded-md border border-primary/20 bg-primary/5 flex gap-3 items-start"
                      initial={{ opacity: 1 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="min-w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                        <ChevronRight className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-sm text-primary mb-2 h-5 overflow-hidden mt-2">
                          {typedJob}<span className={isTyping ? "animate-pulse" : "opacity-0"}>|</span>
                        </div>
                        <div className="h-3 w-full bg-muted/30 rounded mb-2"></div>
                        <div className="h-3 w-5/6 bg-muted/30 rounded"></div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -top-8 -left-8 w-40 h-40 bg-primary/5 rounded-full blur-2xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}