"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import Chat from "./components/chat";
import NavigationBar from "./components/navigation-bar";
import { ToolsSection } from "./pages/tool";
import { HomeSection } from "./pages/home";
import ProjectsSection from "./pages/project";
import ContactSection from "./pages/contact";

export default function Page() {
  const [showChat, setShowChat] = useState(false);
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [formMessage, setFormMessage] = useState("");

  async function handleContactSubmit(e: React.FormEvent<HTMLFormElement>) {
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
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-black dark:text-white transition-colors duration-300">
      {/* Navigation */}
      <NavigationBar />

      {/* Home Section */}
      <HomeSection setShowChat={setShowChat} />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Tools Section */}
      <ToolsSection />

      {/* Contact Section */}
      <ContactSection
        formStatus={formStatus}
        formMessage={formMessage}
        handleContactSubmit={handleContactSubmit}
      />

      {/* Floating Chat Button */}
      {!showChat && (
        <button
          onClick={() => setShowChat(true)}
          className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white rounded-full shadow-lg hover:shadow-xl transition transform hover:scale-110 z-30"
          aria-label="Open chat"
        >
          <MessageCircle size={28} />
        </button>
      )}

      {/* Chat Modal */}
      {showChat && (
        <div className="fixed inset-0 bg-black/50 dark:bg-black/70 backdrop-blur-sm z-50 flex items-center justify-end p-4">
          <div className="w-full max-w-md md:max-w-lg h-[600px] md:h-[650px] bg-gradient-to-b from-white via-blue-50 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-2xl shadow-2xl border border-blue-200 dark:border-gray-700 flex flex-col overflow-hidden hover:border-blue-300 dark:hover:border-gray-500 transition">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-gray-800 dark:to-gray-900 p-5 flex justify-between items-center shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/20">
                  <img
                    src="/profile.png"
                    alt="Elijah Taguinod Alonzo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-white text-base">
                    Elijah Alonzo
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setShowChat(false)}
                className="p-2 hover:bg-white/20 dark:hover:bg-gray-800/40 rounded-lg transition transform hover:scale-110"
                aria-label="Close chat"
              >
                <X size={24} className="text-white" />
              </button>
            </div>
            {/* Chat Content */}
            <div className="flex-1 overflow-hidden bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
              <Chat />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
