"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
    AceSidebar,
    AceSidebarBody,
    AceSidebarLink,
    useAceSidebar,
} from "@/components/ui/sidebar";
import { motion } from "motion/react";
import { BriefcaseBusiness, House, Mail, UserRound } from "lucide-react";
import DesktopSidebarLogo from "./DesktopSidebarLogo";
import { portfolioSidebarLinks } from "./linkList";
import { SettingsMenu } from "@/components/themes/settings-menu";

const menuIcons = {
    "/": House,
    "/about": UserRound,
    "/projects": BriefcaseBusiness,
    "/contact": Mail,
};

// Inner bottom bar — mirrors AceSidebarLink layout exactly
function SidebarBottomBar() {
    const { open, animate } = useAceSidebar();
    return (
        <div className="flex items-center justify-start gap-2 py-2 ml-2 pl-2 mb-2">
            <SettingsMenu />
            <motion.span
                animate={{
                    display: animate ? (open ? "inline-block" : "none") : "inline-block",
                    opacity: animate ? (open ? 1 : 0) : 1,
                }}
                className="text-neutral-700 dark:text-neutral-200 text-sm whitespace-pre inline-block !p-0 !m-0"
            >
                Settings
            </motion.span>
        </div>
    );
}

export function DesktopSidebar() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    const links = portfolioSidebarLinks.map((link) => ({
        ...link,
        icon: (() => {
            const Icon = menuIcons[link.href as keyof typeof menuIcons];
            return (
                <Icon className="h-5 w-5 shrink-0 text-muted-foreground transition-colors duration-150 group-hover/sidebar:text-primary" />
            );
        })(),
    }));

    const handleNav = (
        e: React.MouseEvent<HTMLAnchorElement>,
        href: string
    ) => {
        e.preventDefault();
        router.push(href);
    };

    return (
        // Only render on desktop — hidden on mobile
        <div className="hidden md:block">
            <AceSidebar open={open} setOpen={setOpen}>
                <AceSidebarBody className="justify-between gap-10 p-0 bg-white/10 dark:bg-white/5 backdrop-blur-lg border-r border-white/20 dark:border-white/10 shadow-sm">
                    <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
                        {/* Logo */}
                        <DesktopSidebarLogo open={open} />

                        {/* Navigation links */}
                        <div className="mt-4 flex flex-col gap-1">
                            {links.map((link, idx) => {
                                const isActive = pathname === link.href;
                                return (
                                    <AceSidebarLink
                                        key={idx}
                                        link={link}
                                        onClick={(e) => handleNav(e, link.href)}
                                        className={`border-r-4 border-r-transparent transition-colors duration-200 rounded-r-md ${isActive
                                            ? "pl-2 bg-primary/12 border-l-4 border-l-primary [&_svg]:text-primary"
                                            : "ml-2 pl-2 hover:bg-primary/8 dark:hover:bg-primary/10"
                                            }`}
                                    />
                                );
                            })}
                        </div>
                    </div>

                    {/* Bottom — settings */}
                    <SidebarBottomBar />
                </AceSidebarBody>
            </AceSidebar>
        </div>
    );
}
