"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type TypewriterTextProps = {
  words: string[];
  className?: string;
};

const TYPE_SPEED = 95;
const DELETE_SPEED = 55;
const HOLD_DURATION = 1300;

export function TypewriterText({ words, className }: TypewriterTextProps) {
  const prefersReducedMotion = useReducedMotion();
  const safeWords = useMemo(
    () => words.filter((word) => word.trim().length > 0),
    [words]
  );
  const [wordIndex, setWordIndex] = useState(0);
  const [visibleLength, setVisibleLength] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const activeWord = safeWords[wordIndex] ?? "";
  const visibleText = prefersReducedMotion
    ? activeWord
    : activeWord.slice(0, visibleLength);

  useEffect(() => {
    if (prefersReducedMotion || safeWords.length === 0) {
      return;
    }

    const isComplete = visibleLength === activeWord.length;
    const isEmpty = visibleLength === 0;
    const delay = isComplete
      ? HOLD_DURATION
      : isDeleting
        ? DELETE_SPEED
        : TYPE_SPEED;

    const timeout = window.setTimeout(() => {
      if (!isDeleting && isComplete) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && isEmpty) {
        setIsDeleting(false);
        setWordIndex((current) => (current + 1) % safeWords.length);
        return;
      }

      setVisibleLength((current) => current + (isDeleting ? -1 : 1));
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [
    activeWord.length,
    isDeleting,
    prefersReducedMotion,
    safeWords.length,
    visibleLength,
  ]);

  if (safeWords.length === 0) {
    return null;
  }

  return (
    <motion.p
      animate={{ opacity: 1, y: 0 }}
      className={className}
      initial={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
    >
      <span>{visibleText}</span>
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        className="ml-1 inline-block"
        transition={{ duration: 0.9, repeat: Infinity }}
      >
        |
      </motion.span>
    </motion.p>
  );
}
