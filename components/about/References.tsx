"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";
import AnimatedSection from "@/components/ui/animated-section";
import { Copy, Check, Mail } from "lucide-react";
import { useState } from "react";

const References = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const references = [
    {
      name: "Dr. Nurfazrina Binti Mohd Zamry",
      role: "FYP Supervisor",
      email: "nurfazrina.mz@utm.my",
    },
    {
      name: "Prof. Madya. Dr. Mohd. Murtadha bin Mohamad",
      role: "Academic Advisor",
      email: "murtadha@utm.my",
    },
    {
      name: "Sheik Hazrin Bin Sheik Othman",
      role: "Senior IT Executive | Industrial Supervisor",
      email: "sheikhazrin@kiswiresea.com",
    },
  ];

  const handleCopyEmail = (email: string, index: number) => {
    navigator.clipboard.writeText(email);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <AnimatedSection className="mt-16">
      <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
        Professional References
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {references.map((ref, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all cursor-pointer h-full">
              <CardContent className="p-6 text-center flex flex-col h-full justify-between">
                <div>
                  <motion.h3
                    className="font-semibold text-foreground mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    {ref.name}
                  </motion.h3>
                  <motion.p
                    className="text-sm text-muted-foreground mb-4 hover:text-foreground transition-colors"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.25 }}
                  >
                    {ref.role}
                  </motion.p>
                </div>

                <motion.div
                  className="flex items-center justify-center gap-2 mt-4 pt-4 border-t border-border"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <Mail className="w-4 h-4 text-primary" />
                  <a
                    href={`mailto:${ref.email}`}
                    className="text-sm text-primary hover:underline flex-1"
                  >
                    {ref.email}
                  </a>
                  <motion.button
                    onClick={() => handleCopyEmail(ref.email, index)}
                    className="p-2 hover:bg-secondary rounded-md transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    title="Copy email to clipboard"
                  >
                    {copiedIndex === index ? (
                      <Check className="w-4 h-4 text-green-500" />
                    ) : (
                      <Copy className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                    )}
                  </motion.button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default References;
