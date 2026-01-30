"use client";
import React, { useState } from "react";
import HomeSection from "../pages/home";
import { TechSection } from "../pages/tech";
import ProjSection from "../pages/project";
import ContactSection from "../pages/contact";
import Navbar from "./nav";

export default function HomePage() {
  const [formStatus, setFormStatus] = useState("idle");
  const [formMessage, setFormMessage] = useState("");

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");
    const formData = new FormData(e.currentTarget);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setFormStatus("success");
        setFormMessage("Thank you! Your message has been sent successfully.");
        (e.target as HTMLFormElement).reset();
        setTimeout(() => {
          setFormStatus("idle");
          setFormMessage("");
        }, 5000);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setFormStatus("error");
      setFormMessage(
        "Sorry, there was an error sending your message. Please try emailing me directly at elijahalonzo.me@gmail.com",
      );
      setTimeout(() => {
        setFormStatus("idle");
        setFormMessage("");
      }, 5000);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
      <Navbar />
      <HomeSection />
      <TechSection />
      <ProjSection />
      <ContactSection
        formStatus={formStatus as any}
        formMessage={formMessage}
        handleContactSubmit={handleContactSubmit}
      />
    </div>
  );
}
