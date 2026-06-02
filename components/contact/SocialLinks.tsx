'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "motion/react"
import Link from "next/link"
import { contactInfo } from "@/data/contact"
import { ExternalLink } from "lucide-react"

const SocialLinks = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4 }}
    >
      <Card className="border-0 shadow-xl">
        <CardHeader>
          <CardTitle>Follow Me</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {contactInfo.social.map((social, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="w-full rounded-lg transition-all duration-200 hover:bg-primary hover:text-primary-foreground hover:border-primary"
                >
                  <Link href={social.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <social.icon className="w-4 h-4" />
                    <span className="hidden sm:inline text-xs font-medium">Visit</span>
                    <ExternalLink className="w-3 h-3" />
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default SocialLinks
