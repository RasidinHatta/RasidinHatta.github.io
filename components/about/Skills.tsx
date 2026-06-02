"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";
import { skills } from "@/data/about";
import AnimatedSection from "@/components/ui/animated-section";
import { useState } from "react";

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [expandedGroup, setExpandedGroup] = useState<number | null>(null);
  return (
    <AnimatedSection className="mb-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-foreground">
        Technical Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skillGroup, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 + index * 0.1 }}
            onMouseEnter={() => setExpandedGroup(index)}
            onMouseLeave={() => setExpandedGroup(null)}
            whileHover={{ scale: 1.02 }}
          >
            <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all cursor-pointer">
              <CardContent className="p-6">
                <motion.div
                  animate={{
                    scale: expandedGroup === index ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-2 mb-4"
                >
                  <motion.div
                    className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center"
                    animate={{
                      backgroundColor:
                        expandedGroup === index
                          ? "var(--primary)"
                          : "var(--primary-10)",
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      animate={{
                        color:
                          expandedGroup === index
                            ? "var(--primary-foreground)"
                            : "var(--primary)",
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <skillGroup.icon className="w-4 h-4" />
                    </motion.div>
                  </motion.div>
                  <h3 className="font-semibold text-lg text-foreground">
                    {skillGroup.category}
                  </h3>
                </motion.div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex: number) => (
                    <motion.span
                      key={skillIndex}
                      onMouseEnter={() =>
                        setHoveredSkill(`${index}-${skillIndex}`)
                      }
                      onMouseLeave={() => setHoveredSkill(null)}
                      whileHover={{
                        scale: 1.1,
                        y: -3,
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm transition-all cursor-pointer border border-primary/20 hover:border-primary/50"
                      animate={{
                        backgroundColor:
                          hoveredSkill === `${index}-${skillIndex}`
                            ? "var(--primary)"
                            : "var(--primary-10)",
                        color:
                          hoveredSkill === `${index}-${skillIndex}`
                            ? "var(--primary-foreground)"
                            : "var(--primary)",
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Skills;
