import { Project } from "@/types/projects";

// Projects from your resume
export const projects: Project[] = [
    {
        id: 1,
        title: "Study Archive Management System",
        description: "Document Management System using Waterfall methodology, featuring Authentication, RBAC, Content Preference, and Collaboration",
        longDescription: "Developed as a Final Year Project, this document management system enhances student study experience by providing secure document sharing features. The system implements comprehensive security measures including HTTPS, Two Factor Authentication (2FA), JSON Web Tokens (JWT), Role Based Access Control (RBAC), and secure authentication mechanisms with client/server actions.",
        image: "/projects/sams.png",
        tech: ["NextJS", "TailwindCSS", "Prisma", "AuthJS", "PostgreSQL", "Vercel"],
        features: [
            "Document Management System with Waterfall methodology",
            "Secure Authentication with 2FA and JWT",
            "Role Based Access Control (RBAC)",
            "Content Preference settings",
            "Collaborative document sharing",
            "HTTPS and secure client/server actions"
        ],
        githubUrl: "https://github.com/RasidinHatta/study-archive-management-system",
        liveUrl: "https://study-archive-management-system.vercel.app",
        period: "Mar 2024 - Sept 2025",
        team: "Final Year Project",
        type: "academic",
        status: "completed"
    },
    {
        id: 2,
        title: "Finance Tracker",
        description: "Personal Finance Management System using Waterfall methodology, featuring Authentication, RBAC, Content Preference, and Collaboration",
        longDescription: "Developed as a Open Source Project, this personal finance management system enhances user's financial management by providing secure document sharing features. The system implements comprehensive security measures including HTTPS, Two Factor Authentication (2FA), JSON Web Tokens (JWT), Role Based Access Control (RBAC), and secure authentication mechanisms with client/server actions.",
        image: "/projects/finance-tracker.png",
        tech: ["NextJS", "TailwindCSS", "Prisma", "BetterAuth", "PostgreSQL", "Vercel"],
        features: [
            "Personal Finance Management System with Waterfall methodology",
            "Secure Authentication with 2FA and JWT",
            "Role Based Access Control (RBAC)",
            "Content Preference settings",
            "Collaborative document sharing",
            "HTTPS and secure client/server actions"
        ],
        githubUrl: "https://github.com/RasidinHatta/finance_tracker_better_auth",
        liveUrl: "https://finance-tracker-better-auth.vercel.app",
        period: "Feb 2026 - Mar 2026",
        team: "Open Source Project",
        type: "personal",
        status: "active"
    },
    {
        id: 3,
        title: "Learning Management System (Crunchy Code)",
        description: "Web-based platform aimed at introducing secondary school students to the basics of computer science using Agile methodology",
        longDescription: "An IEEE Computer Society project developed in a 5-person team. The platform, named 'Crunchy Code', focuses on making coding enjoyable and interactive for secondary school students. The project emphasizes fun, challenging, and rewarding learning experiences while introducing fundamental computer science concepts.",
        image: "",
        tech: ["Laravel", "Composer", "PHPMyAdmin", "Heroku", "Agile Methodology"],
        features: [
            "Web-based learning platform for computer science basics",
            "Interactive coding exercises and challenges",
            "Agile methodology development approach",
            "Backend implementation using Laravel framework",
            "Deployment via Heroku",
            "Focus on making coding enjoyable and interactive"
        ],
        githubUrl: "https://github.com/RasidinHatta/crunchy-code",
        liveUrl: "https://crunchy-code.herokuapp.com",
        period: "Nov 2023 - Dec 2023",
        team: "IEEE Computer Society (5 members)",
        type: "academic",
        status: "inactive"
    },
    {
        id: 4,
        title: "MPL Tracker",
        description: "Web based tracking system for tracking MPL",
        longDescription: "An IEEE Computer Society project developed in a 5-person team. The platform, named 'Crunchy Code', focuses on making coding enjoyable and interactive for secondary school students. The project emphasizes fun, challenging, and rewarding learning experiences while introducing fundamental computer science concepts.",
        image: "/projects/mpl-tracker.png",
        tech: ["NextJS", "TailwindCSS", "Prisma", "BetterAuth", "PostgreSQL", "Vercel"],
        features: [
            "Web-based learning platform for computer science basics",
            "Interactive coding exercises and challenges",
            "Agile methodology development approach",
            "Backend implementation using Laravel framework",
            "Deployment via Heroku",
            "Focus on making coding enjoyable and interactive"
        ],
        githubUrl: "https://github.com/RasidinHatta/mpl-tracker",
        liveUrl: "https://mpl-tracker-taupe.vercel.app",
        period: "Apr 2026 - Present",
        team: "Solo Project",
        type: "personal",
        status: "active"
    },
    {
        id: 5,
        title: "HR Leave Management System",
        description: "Windows desktop app for support teams to bulk insert leave taken and brought-forward leave into Microsoft SQL Server",
        longDescription: "Designed and developed a Windows leave management application for Smart Touch Technology to support bulk leave operations, report configuration, database setup, and operational support workflows. The system connects directly to Microsoft SQL Server, uses stored procedures for leave and balance updates, and includes installer/update scripts for deployment to user machines.",
        image: "/projects/hr-leave-management-system.png",
        tech: ["Flutter", "Dart", "Microsoft SQL Server", "Stored Procedures", "ODBC", "Windows Batch Script", "PowerShell"],
        features: [
            "Bulk import for leave taken and brought-forward leave",
            "Direct Microsoft SQL Server integration through ODBC",
            "Stored procedure driven leave summary recalculation",
            "Daily leave report configuration inside the desktop system",
            "Windows release packaging with terminal installer and desktop shortcut",
            "Support-focused workflow for setup, deployment, and database maintenance"
        ],
        githubUrl: "https://github.com/RasidinHatta/leave_management",
        period: "May 2026 - Present",
        team: "Smart Touch Technology Sdn Bhd",
        type: "professional",
        status: "active"
    },
    {
        id: 6,
        title: "HR Daily Leave Report Automation",
        description: "Python automation that generates daily leave reports from SQL Server and emails PDF reports to HR recipients",
        longDescription: "Built a backend report automation workflow connected to the leave management database. The Python script runs daily through Windows Task Scheduler, executes stored procedures, generates daily attendance and leave reports, converts output to PDF, and sends reports to configured recipients or custom receivers.",
        image: "",
        tech: ["Python", "Microsoft SQL Server", "Stored Procedures", "Pandas", "Excel", "PDF", "SMTP", "Windows Task Scheduler"],
        features: [
            "Scheduled daily report generation using Windows Task Scheduler",
            "Stored procedure based attendance and leave report extraction",
            "Excel report generation and PDF conversion",
            "SMTP email delivery with configurable recipients",
            "Custom receiver script for one-off report delivery",
            "Multi-database target support from report configuration"
        ],
        githubUrl: "https://github.com/RasidinHatta/hr_leave_report",
        downloadUrl: "/file/hr_leave_report.zip",
        period: "May 2026 - Present",
        team: "Smart Touch Technology Sdn Bhd",
        type: "professional",
        status: "active"
    }
];
