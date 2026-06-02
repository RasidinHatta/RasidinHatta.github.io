'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"
import { motion } from "motion/react"
import { contactInfo } from "@/data/contact"
import CopyButton from "./CopyButton"

const ContactInformation = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3 }}
    >
      <Card className="border-0 shadow-xl">
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
          <CardDescription>
            Feel free to reach out through any of these channels
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Email */}
          <motion.div
            className="flex items-center justify-between gap-4 p-3 rounded-lg transition-colors duration-200 hover:bg-primary/5"
            whileHover={{ x: 4 }}
          >
            <div className="flex items-center gap-4 flex-1">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">Email</p>
                <a href={`mailto:${contactInfo.email}`} className="text-primary hover:underline break-all">
                  {contactInfo.email}
                </a>
              </div>
            </div>
            <CopyButton text={contactInfo.email} label="Email" />
          </motion.div>

          {/* Phone */}
          <motion.div
            className="flex items-center justify-between gap-4 p-3 rounded-lg transition-colors duration-200 hover:bg-primary/5"
            whileHover={{ x: 4 }}
          >
            <div className="flex items-center gap-4 flex-1">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Phone</p>
                <a href={`tel:${contactInfo.phone}`} className="text-primary hover:underline">
                  {contactInfo.phone}
                </a>
              </div>
            </div>
            <CopyButton text={contactInfo.phone} label="Phone" />
          </motion.div>

          {/* Location */}
          <motion.div
            className="flex items-center justify-between gap-4 p-3 rounded-lg transition-colors duration-200 hover:bg-primary/5"
            whileHover={{ x: 4 }}
          >
            <div className="flex items-center gap-4 flex-1">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Location</p>
                <p className="text-primary">{contactInfo.location}</p>
              </div>
            </div>
            <CopyButton text={contactInfo.location} label="Location" />
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default ContactInformation
