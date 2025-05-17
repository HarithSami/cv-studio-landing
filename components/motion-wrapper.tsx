"use client";

// This is a simpler wrapper for motion, to avoid needing framer-motion
// We're implementing just the basic animations we need

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type MotionProps = {
  initial?: {
    opacity?: number;
    y?: number;
    x?: number;
    scale?: number;
  };
  animate?: {
    opacity?: number;
    y?: number;
    x?: number;
    scale?: number;
  };
  whileInView?: {
    opacity?: number;
    y?: number;
    x?: number;
    scale?: number;
  };
  viewport?: {
    once?: boolean;
    margin?: string;
  };
  transition?: {
    duration?: number;
    delay?: number;
  };
  className?: string;
  children: React.ReactNode;
};

export const motion = {
  div: function MotionDiv({
    initial,
    animate,
    whileInView,
    viewport,
    transition,
    className,
    children,
    ...props
  }: MotionProps & React.HTMLAttributes<HTMLDivElement>) {
    const ref = useRef<HTMLDivElement>(null);
    const [isInView, setIsInView] = useState(false);
    const [style, setStyle] = useState(initial || {});

    useEffect(() => {
      if (!whileInView) return;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            if (viewport?.once) {
              observer.disconnect();
            }
          } else if (!viewport?.once) {
            setIsInView(false);
          }
        },
        {
          rootMargin: viewport?.margin || "0px",
          threshold: 0.1,
        }
      );
      
      if (ref.current) {
        observer.observe(ref.current);
      }
      
      return () => {
        observer.disconnect();
      };
    }, [whileInView, viewport]);

    useEffect(() => {
      if (isInView && whileInView) {
        const timer = setTimeout(() => {
          setStyle({
            ...whileInView,
            transition: `all ${transition?.duration || 0.3}s ease-out ${transition?.delay || 0}s`,
          });
        }, 0);
        return () => clearTimeout(timer);
      } else if (animate && !whileInView) {
        const timer = setTimeout(() => {
          setStyle({
            ...animate,
            transition: `all ${transition?.duration || 0.3}s ease-out ${transition?.delay || 0}s`,
          });
        }, 0);
        return () => clearTimeout(timer);
      }
    }, [isInView, animate, whileInView, transition]);

    const styleObj: React.CSSProperties = {};
    
    if (style.opacity !== undefined) styleObj.opacity = style.opacity;
    if (style.y !== undefined) styleObj.transform = `translateY(${style.y}px)`;
    if (style.x !== undefined) styleObj.transform = `translateX(${style.x}px)`;
    if (style.scale !== undefined) styleObj.transform = `scale(${style.scale})`;
    if (style.transition) styleObj.transition = style.transition;
    
    if (style.y !== undefined && style.x !== undefined) {
      styleObj.transform = `translate(${style.x}px, ${style.y}px)`;
    }
    
    if ((style.scale !== undefined) && (style.y !== undefined || style.x !== undefined)) {
      const translatePart = style.y !== undefined && style.x !== undefined 
        ? `translate(${style.x}px, ${style.y}px)` 
        : style.y !== undefined 
          ? `translateY(${style.y}px)` 
          : `translateX(${style.x}px)`;
      
      styleObj.transform = `${translatePart} scale(${style.scale})`;
    }
    
    return (
      <div
        ref={ref}
        className={className}
        style={styleObj}
        {...props}
      >
        {children}
      </div>
    );
  },

  // Add more components as needed
  h2: function MotionH2({
    initial,
    animate,
    whileInView,
    viewport,
    transition,
    className,
    children,
    ...props
  }: MotionProps & React.HTMLAttributes<HTMLHeadingElement>) {
    const Component = motion.div;
    return (
      <Component
        initial={initial}
        animate={animate}
        whileInView={whileInView}
        viewport={viewport}
        transition={transition}
        className={className}
        {...props}
      >
        <h2 className={cn("", className)}>{children}</h2>
      </Component>
    );
  },

  p: function MotionP({
    initial,
    animate,
    whileInView,
    viewport,
    transition,
    className,
    children,
    ...props
  }: MotionProps & React.HTMLAttributes<HTMLParagraphElement>) {
    const Component = motion.div;
    return (
      <Component
        initial={initial}
        animate={animate}
        whileInView={whileInView}
        viewport={viewport}
        transition={transition}
        className={className}
        {...props}
      >
        <p className={cn("", className)}>{children}</p>
      </Component>
    );
  },

  li: function MotionLi({
    initial,
    animate,
    whileInView,
    viewport,
    transition,
    className,
    children,
    ...props
  }: MotionProps & React.HTMLAttributes<HTMLLIElement>) {
    const Component = motion.div;
    return (
      <Component
        initial={initial}
        animate={animate}
        whileInView={whileInView}
        viewport={viewport}
        transition={transition}
        className={className}
        {...props}
      >
        <li className={cn("", className)}>{children}</li>
      </Component>
    );
  },
};