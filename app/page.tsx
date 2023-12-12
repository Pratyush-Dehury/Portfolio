"use client";

import React from "react";
import Encryption from "@/components/main/encryption";
import Hero from "../components/main/hero";
import Skills from "@/components/main/skills";
import Projects from "@/components/main/projects";
import Footer from "@/components/main/footer";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Encryption />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
