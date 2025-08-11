"use client";

import { HeroExperimental } from '@/components/sections/hero-experimental';
import { useScroll, useTransform } from "framer-motion";
import React from "react";

export default function HeroExperimentPage() {
  const ref = React.useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  const pathLengths = [
    pathLengthFirst,
    pathLengthSecond,
    pathLengthThird,
    pathLengthFourth,
    pathLengthFifth,
  ];

  return (
    <main className="min-h-screen">
      <HeroExperimental pathLengths={pathLengths} scrollRef={ref} />
      {/* Add scroll space for animation to trigger */}
      <div className="h-[200vh]" />
    </main>
  );
}