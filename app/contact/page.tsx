// app/contact/page.tsx
'use client'

import { motion } from "motion/react"
import ContactForm from "@/components/contact/ContactForm"
import ContactInformation from "@/components/contact/ContactInformation"
import SocialLinks from "@/components/contact/SocialLinks"
import LocationMap from "@/components/contact/LocationMap"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-transparent">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's collaborate and build something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <ContactForm />
          {/* Contact Info & Map */}
          <div className="space-y-8">
            <ContactInformation />
            {/* <SocialLinks /> */}
            <LocationMap />
          </div>
        </div>
      </div>
    </div>
  )
}
