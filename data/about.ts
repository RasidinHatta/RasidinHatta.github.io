import { GithubIcon, LinkedinIcon } from "@/components/logos/Logo";
import { Experience } from "@/types/experience";
import { Code, Globe, Network, Shield } from "lucide-react";
import { contactInfo } from "./contact";

export const personalInfo = {
  name: "RASIDIN BIN HATTA",
  title: "Computer Science Graduate",
  subtitle: "Fresh Computer Science (Network & Security) graduate with practical experience in full-stack development, cybersecurity, and system deployment",
  bio: "Seeking to leverage expertise in secure web applications, cloud infrastructure, and network optimization to drive innovation and operational excellence in a dynamic tech environment.",
  location: "Masai, Johor, Malaysia",
  email: "rasidinhatta8@gmail.com",
  phone: "+60 11-36619228",
  address: "No.64, Jalan Suria 47, Bandar Seri Alam, 81750 Masai, Johor",
  avatar: "/avatars/avatar.png",
  resumeUrl: "/file/RasidinBinHatta_Resume.pdf", // ✅ Place PDF in public/ folder
  resumeFileName: "RasidinBinHatta_Resume.pdf"
}

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Full Stack Developer Intern",
    company: "Kiswire Sdn Bhd",
    location: "Johor Bahru, Johor",
    period: "Sept 2024 - Feb 2025",
    type: "work",
    description: "Involved in the maintenance of systems, infrastructure enhancement, and process optimization. Participated in database development, application framework modernization, and network deployment.",
    achievements: [
      "Enhanced operational efficiency and facilitated technological innovation",
      "Participated in network deployment including IP configuration and routing",
      "Contributed to database development and application framework modernization"
    ],
    image: "",
    longDescription: undefined,
    team: undefined,
    features: undefined,
    githubUrl: "",
    liveUrl: ""
  },
  {
    id: 2,
    title: "Bachelor of Computer Science (Network and Security)",
    company: "Universiti Teknologi Malaysia",
    location: "Skudai, Johor",
    period: "2021 - 2025 (Graduation: Nov 2025)",
    type: "education",
    description: "CGPA: 3.51. Focused on Network Security, Cryptography, Secure Programming, Application Development, and Internet of Things.",
    achievements: [
      "CGPA: 3.51",
      "Coursework: Network Security, Cryptography, Secure Programming, Application Development, IoT",
      "Activities: Robotic Club Member, IEEE Computer Society Volunteer, CyberDas Workshop participant"
    ],
    image: "",
    longDescription: undefined,
    team: undefined,
    features: undefined,
    githubUrl: "",
    liveUrl: ""
  }
]

export const projects: Experience[] = [
  {
    id: 3,
    title: "Study Archive Management System",
    company: "Final Year Project",
    location: "Universiti Teknologi Malaysia",
    period: "Mar 2024 - Sept 2025",
    type: "project",
    description: "Document Management System using Waterfall methodology, featuring Authentication, RBAC, Content Preference, and Collaboration.",
    achievements: [
      "Implemented backend using NextJS and deployed via Vercel",
      "Enhanced student study experience with collaborative document sharing",
      "Security features: HTTPS, 2FA, JWT, RBAC, Authentication, client/server actions"
    ],
    tech: ["NextJS", "TailwindCSS", "Prisma", "AuthJS", "PostgreSQL", "Vercel"],
    image: "",
    longDescription: undefined,
    team: undefined,
    features: undefined,
    githubUrl: "https://github.com/RasidinHatta/study-archive-management-system",
    liveUrl: "https://study-archive-management-system.vercel.app"
  },
  {
    id: 4,
    title: "Learning Management System (Crunchy Code)",
    company: "IEEE Computer Society Project",
    location: "Universiti Teknologi Malaysia",
    period: "Nov 2023 - Dec 2023",
    type: "project",
    description: "Web-based platform aimed at introducing secondary school students to the basics of computer science using Agile methodology.",
    achievements: [
      "Worked in 5-person team to design and build the platform",
      "Implemented backend functionalities using Laravel framework",
      "Deployed application via Heroku with focus on making coding enjoyable and interactive"
    ],
    tech: ["Laravel", "Composer", "PHPMyAdmin", "Heroku", "Agile Methodology"],
    image: "",
    longDescription: undefined,
    team: undefined,
    features: undefined,
    githubUrl: "",
    liveUrl: ""
  }
]

// Updated skills based on resume
export const skills = [
  {
    category: "Cybersecurity & Networking",
    items: ["Network Security", "Cryptography", "Route & Switch", "DNS", "DHCP", "Firewall Configuration", "VPN", "TCP/IP"],
    icon: Shield
  },
  {
    category: "Web Development",
    items: ["NextJS", "NestJS", "ReactBit", "ShadcnUI", "TailwindCSS", "Prisma", "AuthJS"],
    icon: Code
  },
  {
    category: "3D & Interactive Web",
    items: ["Spline", "ThreeJS", "WebGL"],
    icon: Globe
  },
  {
    category: "Professional Skills",
    items: ["Effective Team Collaboration", "English Proficient", "Bahasa Melayu", "Agile Methodology", "Waterfall Methodology"],
    icon: Network
  }
]

export const socialLinks = [
  { icon: GithubIcon, href: contactInfo.github, label: "GitHub" },
  { icon: LinkedinIcon, href: contactInfo.linkedin, label: "LinkedIn" }
];