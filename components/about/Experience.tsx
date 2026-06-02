"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  MapPin,
  Calendar,
  Briefcase,
  GraduationCap,
  Award,
  Code,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { experiences, projects } from "@/data/about";
import { Experience as ExperienceType } from "@/types/experience";
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import AnimatedSection from "@/components/ui/animated-section";
import { useState } from "react";

const Experience = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const timelineItems: ExperienceType[] = [...experiences, ...projects];

  return (
    <AnimatedSection>
      <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
        Experience & Projects Journey
      </h2>

      <div className="relative">
        <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-border"></div>

        {timelineItems.map((exp, index: number) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`relative flex items-center mb-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
          >
            <motion.div
              className={`absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-background border-4 rounded-full z-10 cursor-pointer ${exp.type === "work"
                  ? "border-blue-500"
                  : exp.type === "education"
                    ? "border-green-500"
                    : "border-purple-500"
                }`}
              whileHover={{ scale: 1.3 }}
              onClick={() =>
                setExpandedId(expandedId === exp.id ? null : exp.id)
              }
            ></motion.div>

            <div
              className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                }`}
            >
              <motion.div
                onClick={() =>
                  setExpandedId(expandedId === exp.id ? null : exp.id)
                }
                whileHover={{ scale: 1.02 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] cursor-pointer">
                  <CardContent className="p-6">
                    <div
                      className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? "md:justify-end" : ""
                        }`}
                    >
                      {exp.type === "work" ? (
                        <Briefcase className="w-5 h-5 text-blue-500" />
                      ) : exp.type === "education" ? (
                        <GraduationCap className="w-5 h-5 text-green-500" />
                      ) : (
                        <Code className="w-5 h-5 text-purple-500" />
                      )}
                      <span className="text-sm font-medium text-muted-foreground">
                        {exp.type === "work"
                          ? "Work Experience"
                          : exp.type === "education"
                            ? "Education"
                            : "Project"}
                      </span>
                    </div>

                    <div
                      className={`flex items-center justify-between gap-4 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                        }`}
                    >
                      <div>
                        <h3
                          className={`text-xl font-bold mb-1 text-foreground ${index % 2 === 0 ? "md:text-right" : ""
                            }`}
                        >
                          {exp.title}
                        </h3>

                        <p
                          className={`text-primary font-medium mb-1 ${index % 2 === 0 ? "md:text-right" : ""
                            }`}
                        >
                          {exp.company}
                        </p>
                      </div>
                      <motion.div
                        animate={{
                          rotate: expandedId === exp.id ? 180 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="cursor-target w-5 h-5 text-muted-foreground" />
                      </motion.div>
                    </div>

                    <div
                      className={`flex items-center gap-4 text-sm text-muted-foreground mb-3 ${index % 2 === 0 ? "md:justify-end" : ""
                        }`}
                    >
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </span>
                    </div>

                    <AnimatePresence>
                      {expandedId === exp.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="pt-4 border-t border-border"
                        >
                          <p className="text-foreground mb-3">
                            {exp.description}
                          </p>

                          {exp.githubUrl && (
                            <motion.p
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 }}
                              className={`text-foreground mb-2 ${index % 2 === 0 ? "md:text-right" : ""
                                }`}
                            >
                              <Link
                                href={exp.githubUrl}
                                target="_blank"
                                className="cursor-target text-primary hover:underline inline-flex items-center gap-1 hover:scale-105 transition-transform"
                              >
                                GITHUB <FaGithub />
                              </Link>
                            </motion.p>
                          )}

                          {exp.liveUrl && (
                            <motion.p
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.15 }}
                              className={`text-foreground mb-2 ${index % 2 === 0 ? "md:text-right" : ""
                                }`}
                            >
                              <Link
                                href={exp.liveUrl}
                                target="_blank"
                                className="cursor-target text-primary hover:underline inline-flex items-center gap-1 hover:scale-105 transition-transform"
                              >
                                WEBSITE <CgWebsite />
                              </Link>
                            </motion.p>
                          )}

                          {exp.tech && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.2 }}
                              className={`flex flex-wrap gap-2 mb-3 ${index % 2 === 0 ? "md:justify-end" : ""
                                }`}
                            >
                              {exp.tech.map((tech: string, techIndex: number) => (
                                <motion.span
                                  key={techIndex}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{
                                    delay: 0.2 + techIndex * 0.05,
                                  }}
                                  whileHover={{ scale: 1.05 }}
                                  className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs hover:bg-primary/20 transition-colors cursor-pointer"
                                >
                                  {tech}
                                </motion.span>
                              ))}
                            </motion.div>
                          )}

                          {exp.achievements && (
                            <motion.ul
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.25 }}
                              className={`space-y-2 ${index % 2 === 0 ? "md:text-right" : ""
                                }`}
                            >
                              {exp.achievements.map(
                                (achievement: string, achIndex: number) => (
                                  <motion.li
                                    key={achIndex}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                      delay: 0.25 + achIndex * 0.05,
                                    }}
                                    className="text-sm text-muted-foreground flex items-start gap-2 hover:text-foreground transition-colors"
                                  >
                                    {index % 2 === 0 ? (
                                      <>
                                        <span>{achievement}</span>
                                        <Award className="w-3 h-3 mt-0.5 shrink-0 ml-auto" />
                                      </>
                                    ) : (
                                      <>
                                        <Award className="w-3 h-3 mt-0.5 shrink-0" />
                                        <span>{achievement}</span>
                                      </>
                                    )}
                                  </motion.li>
                                )
                              )}
                            </motion.ul>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Experience;
