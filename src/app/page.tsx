"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import React from "react";export default function Home() {
  return (
    <>
      <section id="hero"><Hero /></section>
      <section id="experience"><Experience /></section>
      <section id="projects"> <Projects/> </section>
      <section id="contact"><Contact /></section>       
      <section id="about"><About /></section>
    </>
  );
}
