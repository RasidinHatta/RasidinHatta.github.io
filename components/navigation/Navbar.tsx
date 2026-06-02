"use client";

import Link from "next/link";
import Image from "next/image";
import { BriefcaseBusiness, Home, Mail, UserRound } from "lucide-react";
import { navItems } from "@/data/navigation";
import { SettingsMenu } from "../themes/settings-menu";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { DesktopSidebar } from "@/components/navigation/sidebar/DesktopSidebarNav";

// Navbar Component
export const Navbar = () => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <header className="sticky top-0 z-50 w-full pt-4 transition-colors duration-500 md:hidden border-b border-white/20 bg-white/10 backdrop-blur-lg dark:border-white/10 dark:bg-white/5 supports-backdrop-filter:bg-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              className="cursor-target flex items-center gap-2.5 group"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary p-1.5 transition-colors group-hover:bg-primary/90">
                <Image
                  src="/rainbow-cat.gif"
                  alt="Rasidin Hatta"
                  width={28}
                  height={28}
                  unoptimized
                  className="h-7 w-7 object-contain"
                />
              </div>
              <span className="text-xl font-black tracking-tight text-foreground whitespace-nowrap">
                Rasidin<span className="text-primary tracking-normal font-medium">Hatta</span>
              </span>
            </Link>

            <div className="flex items-center gap-2">
              <SettingsMenu />
              <SidebarTrigger className="text-foreground" />
            </div>
          </div>
        </div>
      </header>
    );
  }

  // Desktop: fixed left sidebar handles navigation
  return (
    <>
      {/* Fixed left desktop sidebar */}
      <DesktopSidebar />

      {/* Top-right settings strip — desktop only */}
      <header className="fixed top-4 right-4 z-50 hidden md:flex items-center gap-2">
        <SettingsMenu />
      </header>
    </>
  );
};

// Mobile Sidebar Component
export function NavbarSidebar() {
  const isMobile = useIsMobile();

  if (!isMobile) return null;

  return (
    <Sidebar className="fixed left-0 top-0 h-screen md:hidden overflow-hidden border-r border-white/20 bg-white/10 backdrop-blur-lg dark:border-white/10 dark:bg-white/5 supports-backdrop-filter:bg-white/10">
      <SidebarHeader className="pt-8 pl-6">
        <Link
          href="/"
          className="cursor-target flex items-center gap-2.5 group"
        >
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary p-1.5 transition-colors group-hover:bg-primary/90">
            <Image
              src="/rainbow-cat.gif"
              alt="Rasidin Hatta"
              width={28}
              height={28}
              unoptimized
              className="h-7 w-7 object-contain"
            />
          </div>
          <span className="text-xl font-black tracking-tight text-foreground whitespace-nowrap">
            Rasidin<span className="text-primary tracking-normal font-medium">Hatta</span>
          </span>
        </Link>
      </SidebarHeader>
      <SidebarContent className="overflow-hidden">
        <SidebarMenu className="pt-2 pl-5">
          {navItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton asChild>
                <Link href={item.href} className="cursor-target">
                  {item.href === "/" && <Home className="h-4 w-4" />}
                  {item.href === "/about" && <UserRound className="h-4 w-4" />}
                  {item.href === "/projects" && <BriefcaseBusiness className="h-4 w-4" />}
                  {item.href === "/contact" && <Mail className="h-4 w-4" />}
                  {item.label}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
