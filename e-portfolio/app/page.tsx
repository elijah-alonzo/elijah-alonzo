"use client";
import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import Chat from "./chat";
import HomeSection from "../pages/home";
import { TechSection } from "../pages/tech";
import ProjSection from "../pages/project";
import ContactSection from "../pages/contact";
import Navbar from "./nav";

export default function HomePage() {
  const [showChat, setShowChat] = useState(false);
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

      {/* Floating Chat Button */}
      {!showChat && (
        <button
          onClick={() => setShowChat(true)}
          className="fixed bottom-8 right-8 p-4 bg-blue-600 dark:bg-gray-900 text-white dark:text-blue-400 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-110 z-30"
          aria-label="Open chat"
        >
          <MessageCircle size={28} />
        </button>
      )}

      {/* Chat Modal */}
      {showChat && (
        <div className="fixed inset-0 backdrop-blur-sm z-50 flex items-center justify-end p-4">
          <div className="w-full max-w-md md:max-w-lg h-[600px] md:h-[650px] rounded-2xl shadow-2xl flex flex-col overflow-hidden transition">
            {/* Chat Header */}
            <div className="bg-blue-600 dark:bg-blue-400 p-5 flex justify-between items-center shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img
                    src="/me.jpg"
                    alt="Elijah Taguinod Alonzo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-white dark:text-white text-base">
                    Elijah Alonzo
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setShowChat(false)}
                className="p-2 hover:bg-white/20 dark:hover:bg-gray-800/40 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-110"
                aria-label="Close chat"
              >
                <X size={24} className="text-white" />
              </button>
            </div>
            {/* Chat Content */}
            <div className="flex-1 overflow-hidden bg-white dark:bg-gray-900">
              <Chat />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
