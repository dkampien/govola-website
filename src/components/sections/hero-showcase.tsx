"use client";

import { motion } from "framer-motion";
import { Upload, Sparkles, Share2, TrendingUp } from "lucide-react";

export function HeroShowcase() {
  const steps = [
    {
      icon: Upload,
      title: "Upload Content",
      description: "Add your videos & photos",
      color: "text-[#4A6DB5]",
      bgColor: "bg-[#4A6DB5]/10",
    },
    {
      icon: Sparkles,
      title: "AI Generation",
      description: "Create unique variations",
      color: "text-[#5B8DEE]",
      bgColor: "bg-[#5B8DEE]/10",
    },
    {
      icon: Share2,
      title: "Auto-Publish",
      description: "Post to TikTok accounts",
      color: "text-[#87CEEB]",
      bgColor: "bg-[#87CEEB]/10",
    },
    {
      icon: TrendingUp,
      title: "Track Growth",
      description: "Monitor performance",
      color: "text-[#5B8DEE]",
      bgColor: "bg-[#5B8DEE]/10",
    },
  ];

  return (
    <div className="relative px-6 mt-16 mb-20">
      <div className="max-w-6xl mx-auto">
        {/* Animated Workflow */}
        <div className="relative bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-950 rounded-3xl p-8 md:p-12 border border-zinc-200 dark:border-zinc-800">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.4 + index * 0.1,
                    type: "spring",
                    stiffness: 100,
                  }}
                  className="relative"
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div
                      className={`w-16 h-16 rounded-2xl ${step.bgColor} flex items-center justify-center`}
                    >
                      <Icon className={`w-8 h-8 ${step.color}`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-1">{step.title}</h3>
                      <p className="text-xs text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full">
                      <svg
                        className="w-full h-2"
                        viewBox="0 0 100 10"
                        preserveAspectRatio="none"
                      >
                        <motion.path
                          d="M 0 5 L 100 5"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          className="text-zinc-300 dark:text-zinc-700"
                          strokeDasharray="5 5"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{
                            delay: 0.5 + index * 0.1,
                            duration: 0.5,
                          }}
                        />
                      </svg>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Animated Background Pattern */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-yellow-200/20 to-orange-200/20 dark:from-yellow-900/10 dark:to-orange-900/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-tr from-blue-200/20 to-purple-200/20 dark:from-blue-900/10 dark:to-purple-900/10 rounded-full blur-3xl animate-pulse animation-delay-2000" />
          </div>
        </div>
      </div>
    </div>
  );
}