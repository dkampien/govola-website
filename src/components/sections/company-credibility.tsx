"use client";

import { motion } from "framer-motion";
import { Calendar, Users, BarChart3, Star } from "lucide-react";

export function CompanyCredibility() {
  const achievements = [
    {
      icon: Calendar,
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
      icon: BarChart3,
      value: "Deloitte Fast50",
      label: "3 Consecutive Years",
      description: "Fastest-growing tech company in CEE",
    },
    {
      icon: Star,
      value: "18+ Years",
      label: "Industry Experience",
      description: "Award-winning development team",
    },
  ];

  return (
    <section className="w-full py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance mb-4">
          Built by Travel Technology Leaders
        </h2>
        <p className="text-lg text-muted-foreground font-medium max-w-2xl mx-auto">
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

      <div className="grid grid-cols-2 md:grid-cols-4 border-y border-border">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`relative group bg-white dark:bg-zinc-900 h-[180px] flex flex-col items-center pt-6 px-6 pb-4 cursor-pointer transition-all duration-300 hover:z-10 hover:shadow-[0_0_0_1px_rgba(91,143,255,0.2),0_10px_40px_rgba(91,143,255,0.12),0_2px_10px_rgba(0,0,0,0.05)] hover:bg-[#fafbff] dark:hover:bg-zinc-800/50 ${
                  index < 3 ? 'md:border-r md:border-border' : ''
                } ${
                  index % 2 === 0 ? 'border-r border-border md:border-r' : ''
                } ${
                  index < 2 ? 'border-b border-border md:border-b-0' : ''
                }`}
              >
                {/* Dot pattern overlay on hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300 pointer-events-none"
                  style={{
                    backgroundImage: 'radial-gradient(circle, #e5e7eb 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                  }}
                />
                
                {/* Blue accent line at bottom */}
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#5B8FFF] to-[#4A7FEF] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                
                {/* Icon */}
                <motion.div 
                  className="w-12 h-12 flex items-center justify-center mb-2 relative z-10"
                  whileHover={{ 
                    y: [0, -4, 0],
                    transition: {
                      duration: 1,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                >
                  <Icon className="w-6 h-6 text-primary" />
                </motion.div>
                
                {/* Value text */}
                <div className="text-3xl font-medium text-primary tracking-tight leading-tight text-center relative z-10 h-9 flex items-center justify-center">
                  {achievement.value}
                </div>
                
                {/* Label text */}
                <div className="text-base font-medium text-primary tracking-tight text-center relative z-10 h-12 flex items-center justify-center px-2">
                  <span className="line-clamp-2">{achievement.label}</span>
                </div>
                
                {/* Description text */}
                <div className="text-sm font-normal text-muted-foreground text-center max-w-[200px] mx-auto relative z-10 h-12 flex items-center justify-center">
                  <span className="line-clamp-2">{achievement.description}</span>
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
    </section>
  );
}