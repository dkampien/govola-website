"use client";

import { motion } from "framer-motion";
import { Trophy, Users, Rocket, Building2 } from "lucide-react";

export function CompanyCredibility() {
  const achievements = [
    {
      icon: Building2,
      value: "Since 2007",
      label: "Travel Technology Innovation",
      description: "Leading Romania's travel platform development",
    },
    {
      icon: Users,
      value: "1M+",
      label: "Satisfied Customers",
      description: "Trusted by travelers worldwide",
    },
    {
      icon: Trophy,
      value: "Deloitte Fast50",
      label: "3 Consecutive Years",
      description: "Fastest-growing tech company in CEE",
    },
    {
      icon: Rocket,
      value: "18+ Years",
      label: "Industry Experience",
      description: "Award-winning development team",
    },
  ];

  return (
    <section className="w-full py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Built by Travel Technology Leaders
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            <a 
              href="https://www.vola.ro" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#5B8DEE] hover:text-[#4A6DB5] underline underline-offset-2 transition-colors"
            >
              Vola.ro
            </a>{" "}
            has been at the forefront of travel technology innovation since 2007,
            serving millions of travelers and winning prestigious awards.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative group"
              >
                <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-zinc-200 dark:border-zinc-800 hover:border-[#5B8DEE] dark:hover:border-[#5B8DEE] transition-all duration-300 hover:shadow-lg">
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="w-12 h-12 bg-[#5B8DEE]/10 rounded-xl flex items-center justify-center mb-2">
                      <Icon className="w-6 h-6 text-[#5B8DEE]" />
                    </div>
                    <div className="text-2xl font-bold text-primary">
                      {achievement.value}
                    </div>
                    <div className="text-sm font-semibold text-primary">
                      {achievement.label}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-[#5B8DEE]/10 rounded-full">
            <span className="text-sm font-medium">
              Backed by major European investment funds
            </span>
            <span className="text-xs px-2 py-1 bg-gradient-to-r from-[#4A6DB5] to-[#5B8DEE] text-white rounded-full font-semibold">
              Trusted Partner
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}