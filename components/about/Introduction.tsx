import { personalInfo, socialLinks } from "@/data/about";
import {
  MapPin,
  Mail,
  Phone,
  ChevronRight,
  Loader2,
  Download,
  Eye,
  Copy,
  Check,
} from "lucide-react";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Separator } from "../ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useState } from "react";
import Link from "next/link";

const Introduction = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [hoveredSocial, setHoveredSocial] = useState<number | null>(null);

  const handleDownloadResume = async () => {
    try {
      setIsDownloading(true);

      // Create download link
      const link = document.createElement("a");
      link.href = personalInfo.resumeUrl;
      link.download =
        personalInfo.resumeFileName || "RasidinBinHatta_Resume.pdf";

      // Append to DOM, click, and cleanup
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Reset loading state after delay
      setTimeout(() => setIsDownloading(false), 2000);
    } catch (error) {
      console.error("Download failed:", error);
      setIsDownloading(false);

      // Fallback: open in new tab if download fails
      window.open(personalInfo.resumeUrl, "_blank");
    }
  };

  const handleContact = () => {
    window.location.href = `mailto:${personalInfo.email}`;
  };

  const handleCopyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const contactItems = [
    { icon: MapPin, label: "location", value: personalInfo.location, copyable: false },
    { icon: Mail, label: "email", value: personalInfo.email, copyable: true },
    { icon: Phone, label: "phone", value: personalInfo.phone, copyable: true },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-16"
    >
      <Card className="border-0 shadow-xl">
        <CardContent className="p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer"
            >
              <Avatar className="cursor-target w-32 h-32 md:w-40 md:h-40 border-4 border-background shadow-lg hover:shadow-xl transition-shadow">
                <AvatarImage
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                />
                <AvatarFallback className="text-2xl font-bold bg-primary text-primary-foreground">
                  RBH
                </AvatarFallback>
              </Avatar>
            </motion.div>

            <div className="flex-1 text-center md:text-left">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl font-bold text-foreground mb-2"
              >
                {personalInfo.name}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-primary mb-3"
              >
                {personalInfo.title}
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-muted-foreground mb-6 max-w-2xl"
              >
                {personalInfo.subtitle}
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4 justify-center md:justify-start mb-6"
              >
                {contactItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    onClick={() =>
                      item.copyable &&
                      handleCopyToClipboard(item.value, item.label)
                    }
                    className={`flex items-center gap-2 text-muted-foreground rounded-lg px-3 py-2 transition-all ${
                      item.copyable
                        ? "cursor-pointer hover:bg-secondary hover:text-foreground"
                        : ""
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.value}</span>
                    {item.copyable && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                          opacity:
                            copiedField === item.label ? 1 : 0.5,
                          scale: 1,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {copiedField === item.label ? (
                          <Check className="w-4 h-4 text-green-500" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="flex w-full flex-col justify-center gap-4 sm:flex-row lg:justify-start"
              >
                <Button
                  onClick={handleContact}
                  className="cursor-target w-full sm:w-auto text-background rounded-full px-8 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Get In Touch
                  <ChevronRight className="ml-2 w-4 h-4" />
                </Button>

                {/* Download Button with Loading State */}
                <Button
                  onClick={handleDownloadResume}
                  disabled={isDownloading}
                  variant="outline"
                  size="lg"
                  className="cursor-target rounded-full px-8 transition-all duration-300 hover:scale-105 hover:bg-foreground hover:text-primary bg-accent text-foreground w-full sm:w-auto"
                >
                  {isDownloading ? (
                    <>
                      <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                      Preparing...
                    </>
                  ) : (
                    <>
                      <Download className="mr-2 w-4 h-4" />
                      Download Resume
                    </>
                  )}
                </Button>

                {/* Optional: View Resume Button */}
                <Button
                  asChild
                  variant="ghost"
                  size="lg"
                  className="cursor-target rounded-full px-8 w-full sm:w-auto"
                >
                  <a
                    href={personalInfo.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Eye className="mr-2 w-4 h-4" />
                    View Resume
                  </a>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex gap-4 mt-6 justify-center md:justify-start"
              >
                {socialLinks.map((social, index: number) => (
                  <motion.div
                    key={index}
                    onMouseEnter={() => setHoveredSocial(index)}
                    onMouseLeave={() => setHoveredSocial(null)}
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-target p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 inline-block"
                    >
                      <social.icon className="w-5 h-5" />
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          <Separator className="my-8" />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-foreground leading-relaxed max-w-4xl mx-auto text-center"
          >
            {personalInfo.bio}
          </motion.p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Introduction;
