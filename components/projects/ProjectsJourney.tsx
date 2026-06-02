"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {
  Calendar,
  Award,
  Code,
  ChevronDown,
  Users,
  Download
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { projects } from "@/data/project";
import { Project } from "@/types/projects";
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import AnimatedSection from "@/components/ui/animated-section";
import { useState } from "react";

const ProjectsJourney = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <AnimatedSection>
      <div className="relative mt-8">
        <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-border"></div>

        {projects.map((project: Project, index: number) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`relative flex items-center mb-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
          >
            <motion.div
              className={`absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-background border-4 rounded-full z-10 cursor-pointer ${project.type === "academic"
                  ? "border-green-500"
                  : project.type === "professional"
                    ? "border-blue-500"
                    : "border-purple-500"
                }`}
              whileHover={{ scale: 1.3 }}
              onClick={() =>
                setExpandedId(expandedId === project.id ? null : project.id)
              }
            ></motion.div>

            <div
              className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                }`}
            >
              <motion.div
                onClick={() =>
                  setExpandedId(expandedId === project.id ? null : project.id)
                }
                whileHover={{ scale: 1.02 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] cursor-pointer overflow-hidden">
                  {project.image && (
                    <div className="relative w-full h-48 sm:h-56 bg-muted">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                  )}
                  <CardContent className="p-6">
                    <div
                      className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? "md:justify-end" : ""
                        }`}
                    >
                      <Code className="w-5 h-5 text-purple-500" />
                      <span className="text-sm font-medium text-muted-foreground uppercase">
                        {project.type} Project
                      </span>
                    </div>

                    <div
                      className={`flex items-center justify-between gap-4 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                        }`}
                    >
                      <div className={`flex flex-col ${index % 2 === 0 ? "md:items-end" : ""}`}>
                        <div className={`flex items-center gap-2 mb-1 ${index % 2 === 0 ? "md:justify-end flex-row-reverse" : ""}`}>
                          <h3 className="text-xl font-bold text-foreground">
                            {project.title}
                          </h3>
                          {project.status && (
                             <span className={`px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-md border ${
                                project.status === 'active' ? 'bg-green-100/50 border-green-200 text-green-700 dark:bg-green-500/10 dark:border-green-500/20 dark:text-green-400' :
                                project.status === 'completed' ? 'bg-blue-100/50 border-blue-200 text-blue-700 dark:bg-blue-500/10 dark:border-blue-500/20 dark:text-blue-400' :
                                'bg-neutral-100/50 border-neutral-200 text-neutral-600 dark:bg-neutral-500/10 dark:border-neutral-500/20 dark:text-neutral-400'
                             }`}>
                                {project.status}
                             </span>
                          )}
                        </div>

                        <p
                          className={`text-primary font-medium mb-1 ${index % 2 === 0 ? "md:text-right" : ""
                            }`}
                        >
                          {project.description}
                        </p>
                      </div>
                      <motion.div
                        animate={{
                          rotate: expandedId === project.id ? 180 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="cursor-target w-5 h-5 text-muted-foreground" />
                      </motion.div>
                    </div>

                    <div
                      className={`flex items-center gap-4 flex-wrap text-sm text-muted-foreground mb-3 ${index % 2 === 0 ? "md:justify-end" : ""
                        }`}
                    >
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {project.team}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {project.period}
                      </span>
                    </div>

                    <AnimatePresence>
                      {expandedId === project.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="pt-4 border-t border-border"
                        >
                          <p className="text-foreground mb-4">
                            {project.longDescription}
                          </p>

                          {project.githubUrl && (
                            <motion.p
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 }}
                              className={`text-foreground mb-2 ${index % 2 === 0 ? "md:text-right" : ""
                                }`}
                            >
                              <Link
                                href={project.githubUrl}
                                target="_blank"
                                onClick={(e) => e.stopPropagation()}
                                className="cursor-target text-primary hover:underline inline-flex items-center gap-1 hover:scale-105 transition-transform"
                              >
                                GITHUB <FaGithub />
                              </Link>
                            </motion.p>
                          )}

                          {project.liveUrl && (
                            <motion.p
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.15 }}
                              className={`text-foreground mb-4 ${index % 2 === 0 ? "md:text-right" : ""
                                }`}
                            >
                              {project.status === "inactive" ? (
                                <span
                                  className="text-muted-foreground inline-flex items-center gap-1 opacity-70 cursor-not-allowed"
                                  title="Website is currently inactive"
                                >
                                  WEBSITE <CgWebsite /> (Offline)
                                </span>
                              ) : (
                                <Link
                                  href={project.liveUrl}
                                  target="_blank"
                                  onClick={(e) => e.stopPropagation()}
                                  className="cursor-target text-primary hover:underline inline-flex items-center gap-1 hover:scale-105 transition-transform"
                                >
                                  WEBSITE <CgWebsite />
                                </Link>
                              )}
                            </motion.p>
                          )}

                          {project.downloadUrl && (
                            <motion.p
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.18 }}
                              className={`text-foreground mb-4 ${index % 2 === 0 ? "md:text-right" : ""
                                }`}
                            >
                              <Link
                                href={project.downloadUrl}
                                download
                                onClick={(e) => e.stopPropagation()}
                                className="cursor-target text-primary hover:underline inline-flex items-center gap-1 hover:scale-105 transition-transform"
                              >
                                DOWNLOAD <Download className="w-4 h-4" />
                              </Link>
                            </motion.p>
                          )}

                          {project.tech && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.2 }}
                              className={`flex flex-wrap gap-2 mb-4 ${index % 2 === 0 ? "md:justify-end" : ""
                                }`}
                            >
                              {project.tech.map((tech: string, techIndex: number) => (
                                <motion.span
                                  key={techIndex}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{
                                    delay: 0.2 + techIndex * 0.05,
                                  }}
                                  whileHover={{ scale: 1.05 }}
                                  className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs hover:bg-primary/20 transition-colors cursor-pointer border border-primary/10"
                                >
                                  {tech}
                                </motion.span>
                              ))}
                            </motion.div>
                          )}

                          {project.features && (
                            <motion.ul
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.25 }}
                              className={`space-y-2 ${index % 2 === 0 ? "md:text-right" : ""
                                }`}
                            >
                              {project.features.map(
                                (feature: string, featureIndex: number) => (
                                  <motion.li
                                    key={featureIndex}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                      delay: 0.25 + featureIndex * 0.05,
                                    }}
                                    className="text-sm text-muted-foreground flex items-start gap-2 hover:text-foreground transition-colors"
                                  >
                                    {index % 2 === 0 ? (
                                      <>
                                        <span>{feature}</span>
                                        <Award className="w-3 h-3 mt-0.5 shrink-0 ml-auto text-primary" />
                                      </>
                                    ) : (
                                      <>
                                        <Award className="w-3 h-3 mt-0.5 shrink-0 text-primary" />
                                        <span>{feature}</span>
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

export default ProjectsJourney;
