"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function AnimatedGradientBackground({ className }: { className?: string }) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={cn("absolute inset-0 overflow-hidden -z-10", className)}>
      {/* Large gradient orb - top left */}
      <div 
        className={cn(
          "absolute w-[600px] h-[600px] rounded-full blur-3xl opacity-20 -top-64 -left-64",
          "animate-float-slow",
          theme === "dark" ? "bg-gradient-to-br from-blue-600 to-cyan-400" : "bg-gradient-to-br from-blue-300 to-cyan-200"
        )}
      />
      
      {/* Medium gradient orb - right */}
      <div 
        className={cn(
          "absolute w-[400px] h-[400px] rounded-full blur-3xl opacity-20 top-[20%] -right-32",
          "animate-float",
          theme === "dark" ? "bg-gradient-to-tl from-purple-600 to-pink-400" : "bg-gradient-to-tl from-purple-300 to-pink-200"
        )}
      />
      
      {/* Small gradient orb - bottom */}
      <div 
        className={cn(
          "absolute w-[300px] h-[300px] rounded-full blur-3xl opacity-20 bottom-[10%] left-[25%]",
          "animate-float-fast",
          theme === "dark" ? "bg-gradient-to-tr from-emerald-600 to-teal-400" : "bg-gradient-to-tr from-emerald-300 to-teal-200"
        )}
      />
    </div>
  );
}