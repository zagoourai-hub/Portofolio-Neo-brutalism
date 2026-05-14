"use client";

import {
  motion,
  useAnimationControls,
  useInView,
  useReducedMotion,
  type HTMLMotionProps,
} from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";

import { cn } from "@/lib/utils";

type RevealProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
};

const directionOffset = {
  up: { y: 58, x: 0 },
  down: { y: -58, x: 0 },
  left: { x: 58, y: 0 },
  right: { x: -58, y: 0 },
  none: { x: 0, y: 0 },
};

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  ...props
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();
  const isInView = useInView(ref, {
    amount: 0.28,
    margin: "0px 0px -8% 0px",
  });
  const offset = directionOffset[direction];
  const hiddenState = prefersReducedMotion
    ? { opacity: 1, rotate: 0, x: 0, y: 0 }
    : { opacity: 0, rotate: direction === "none" ? 0 : -2, ...offset };

  useEffect(() => {
    controls.start(isInView ? "show" : "hidden");
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      className={className}
      initial="hidden"
      variants={{
        hidden: hiddenState,
        show: {
          opacity: 1,
          rotate: 0,
          x: 0,
          y: 0,
          transition: {
            delay,
            duration: 1.05,
            ease: [0.16, 1, 0.3, 1],
          },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

type StaggerProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
};

export function Stagger({ children, className, ...props }: StaggerProps) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();
  const isInView = useInView(ref, {
    amount: 0.22,
    margin: "0px 0px -10% 0px",
  });

  useEffect(() => {
    controls.start(isInView || prefersReducedMotion ? "show" : "hidden");
  }, [controls, isInView, prefersReducedMotion]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      className={className}
      initial="hidden"
      variants={{
        hidden: {},
        show: {
          transition: {
            delayChildren: 0.12,
            staggerChildren: 0.16,
          },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

type StaggerItemProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
};

export function StaggerItem({
  children,
  className,
  ...props
}: StaggerItemProps) {
  return (
    <motion.div
      className={cn("h-full", className)}
      variants={{
        hidden: { opacity: 0, y: 42, rotate: -2, scale: 0.96 },
        show: {
          opacity: 1,
          y: 0,
          rotate: 0,
          scale: 1,
          transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

type MotionAnchorProps = HTMLMotionProps<"a"> & {
  children: ReactNode;
};

export function MotionAnchor({
  children,
  className,
  ...props
}: MotionAnchorProps) {
  return (
    <motion.a
      className={className}
      transition={{ type: "spring", stiffness: 420, damping: 18 }}
      whileHover={{ x: -3, y: -3 }}
      whileTap={{ x: 2, y: 2 }}
      {...props}
    >
      {children}
    </motion.a>
  );
}
