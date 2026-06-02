"use client";

import Introduction from "@/components/about/Introduction";
import Skills from "@/components/about/Skills";
import Experience from "@/components/about/Experience";
import References from "@/components/about/References";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-transparent">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <Introduction />
        <Skills />
        <Experience />
        <References />
      </div>
    </div>
  );
}
