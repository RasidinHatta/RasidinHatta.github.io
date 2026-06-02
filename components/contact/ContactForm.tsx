import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { GithubIcon, LinkedinIcon } from "@/components/logos/Logo"
import { motion } from "motion/react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { contactInfo } from "@/data/contact"
import { Send, ExternalLink } from "lucide-react"
import { Button } from "../ui/button"
import { contactSchema } from "@/lib/schemas/contact"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import Link from "next/link"

type ContactFormData = z.infer<typeof contactSchema>

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    })

    const onSubmit = async (data: ContactFormData) => {
        const subject = data.subject || "Portfolio contact"
        const body = [
            `Name: ${data.name}`,
            `Email: ${data.email}`,
            "",
            data.message,
        ].join("\n")

        const mailtoUrl = `mailto:${contactInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
        window.open(mailtoUrl, "_self")

        toast.success("Email Draft Opened", {
            description: "Your message has been prepared in your email app.",
        })
        reset()
    }
    return (
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
        >
            <Card className="border-0 shadow-xl">
                <CardHeader>
                    <CardTitle>Send Me a Message</CardTitle>
                    <CardDescription>
                        Fill out the form below and I&apos;ll respond within 24 hours.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <Label htmlFor="name">Full Name</Label>
                                <Input
                                    id="name"
                                    placeholder="Your Name"
                                    {...register("name")}
                                    className={errors.name ? "border-destructive focus-visible:ring-destructive" : ""}
                                />
                                {errors.name && (
                                    <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
                                )}
                            </div>
                            <div>
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="you@example.com"
                                    {...register("email")}
                                    className={errors.email ? "border-destructive focus-visible:ring-destructive" : ""}
                                />
                                {errors.email && (
                                    <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
                                )}
                            </div>
                        </div>

                        <div>
                            <Label htmlFor="subject">Subject</Label>
                            <Input
                                id="subject"
                                placeholder="Project Collaboration"
                                {...register("subject")}
                                className={errors.subject ? "border-destructive focus-visible:ring-destructive" : ""}
                            />
                            {errors.subject && (
                                <p className="text-sm text-destructive mt-1">{errors.subject.message}</p>
                            )}
                        </div>

                        <div>
                            <Label htmlFor="message">Message</Label>
                            <Textarea
                                id="message"
                                placeholder="Tell me about your project..."
                                rows={5}
                                {...register("message")}
                                className={errors.message ? "border-destructive focus-visible:ring-destructive" : ""}
                            />
                            {errors.message && (
                                <p className="text-sm text-destructive mt-1">{errors.message.message}</p>
                            )}
                        </div>

                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="cursor-target w-full rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
                        >
                            {isSubmitting ? (
                                "Sending..."
                            ) : (
                                <>
                                    <Send className="mr-2 w-4 h-4" />
                                    Send Message
                                </>
                            )}
                        </Button>
                    </form>

                    {/* GitHub & LinkedIn Buttons */}
                    <div className="mt-8 pt-6 border-t border-border">
                        <p className="text-sm text-muted-foreground mb-4 text-center">
                            Or connect with me directly:
                        </p>
                        <div className="flex gap-3 justify-center">
                            <Button
                                asChild
                                variant="outline"
                                size="lg"
                                className="cursor-target rounded-full px-6 transition-all duration-300 hover:scale-105 hover:shadow-md"
                            >
                                <Link href={contactInfo.github} target="_blank" rel="noopener noreferrer">
                                    <GithubIcon className="mr-2 w-5 h-5" />
                                    GitHub
                                    <ExternalLink className="ml-2 w-3 h-3" />
                                </Link>
                            </Button>

                            <Button
                                asChild
                                size="lg"
                                className="cursor-target rounded-full px-6 bg-primary hover:bg-primary/90 text-background transition-all duration-300 hover:scale-105 hover:shadow-md"
                            >
                                <Link href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer">
                                    <LinkedinIcon className="mr-2 w-5 h-5" />
                                    LinkedIn
                                    <ExternalLink className="ml-2 w-3 h-3" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    )
}

export default ContactForm
