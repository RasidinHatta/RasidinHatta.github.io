import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/themes/theme-provider";
import { Navbar, NavbarSidebar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { EffectsProvider } from "@/components/providers/effects-provider";
import PageLoader from "@/components/providers/page-loader";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rasidin Hatta",
  description: "Rasidin Hatta's Portfolio",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <EffectsProvider>
              <PageLoader />
              <NavbarSidebar />
              <div className="relative z-10 flex min-h-screen flex-col w-full">
                <Navbar />
                <main className="flex-1 w-full relative z-10 min-h-screen">
                  <Toaster />
                  {children}
                </main>
                <Footer />
              </div>
            </EffectsProvider>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
