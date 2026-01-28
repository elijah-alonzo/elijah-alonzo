import { Mail, Linkedin, Github, ExternalLink } from "lucide-react";

interface ContactSectionProps {
  formStatus: "idle" | "submitting" | "success" | "error";
  formMessage: string;
  handleContactSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function ContactSection({
  formStatus,
  formMessage,
  handleContactSubmit,
}: ContactSectionProps) {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Let's Connect
            </h2>
            <p className="text-base text-gray-600 mb-8 leading-relaxed">
              Whether you're looking for an AI and Web developer, data analyst,
              freelancer, or graphic designer, feel free to reach out!
            </p>
            <div className="space-y-4">
              {/* Email */}
              <div className="bg-gradient-to-r from-blue-100 to-blue-200 border border-blue-300 rounded-lg p-4 backdrop-blur-sm hover:border-blue-500 hover:shadow-md transition">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a
                      href="mailto:elijahalonzo.me@gmail.com"
                      className="text-gray-600 hover:text-blue-600 transition"
                    >
                      elijahalonzo.me@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              {/* LinkedIn */}
              <div className="bg-gradient-to-r from-blue-100 to-blue-200 border border-blue-300 rounded-lg p-4 backdrop-blur-sm hover:border-blue-500 hover:shadow-md transition">
                <div className="flex items-start gap-4">
                  <Linkedin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      LinkedIn
                    </h3>
                    <a
                      href="https://linkedin.com/in/elijah-alonzo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition flex items-center gap-2"
                    >
                      linkedin.com/in/elijah-alonzo <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
              {/* GitHub */}
              <div className="bg-gradient-to-r from-blue-100 to-blue-200 border border-blue-300 rounded-lg p-4 backdrop-blur-sm hover:border-blue-500 hover:shadow-md transition">
                <div className="flex items-start gap-4">
                  <Github className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">GitHub</h3>
                    <a
                      href="https://github.com/elijah-alonzo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition flex items-center gap-2"
                    >
                      github.com/elijah-alonzo <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
              {/* Facebook */}
              <div className="bg-gradient-to-r from-blue-100 to-blue-200 border border-blue-300 rounded-lg p-4 backdrop-blur-sm hover:border-blue-500 hover:shadow-md transition">
                <div className="flex items-start gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Facebook
                    </h3>
                    <a
                      href="https://www.facebook.com/share/1B6SvsQLH2/?mibextid=wwXIfr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition flex items-center gap-2"
                    >
                      Elijah Alonzo <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
              {/* Instagram */}
              <div className="bg-gradient-to-r from-blue-100 to-blue-200 border border-blue-300 rounded-lg p-4 backdrop-blur-sm hover:border-blue-500 hover:shadow-md transition">
                <div className="flex items-start gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Instagram
                    </h3>
                    <a
                      href="https://www.instagram.com/eljhalnz/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition flex items-center gap-2"
                    >
                      @eljhalnz <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right Column - Contact Form */}
          <div className="bg-gradient-to-br from-white to-blue-50 border border-blue-200 rounded-xl p-8 backdrop-blur-md shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send a Message
            </h3>
            <form onSubmit={handleContactSubmit} className="space-y-6">
              {/* Hidden Web3Forms Access Key */}
              <input
                type="hidden"
                name="access_key"
                value="5ff992ce-f259-43d2-adeb-b8668842824a"
              />
              <input
                type="hidden"
                name="subject"
                value="New Contact Form Submission from Portfolio"
              />
              <input
                type="hidden"
                name="from_name"
                value="Portfolio Contact Form"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                    disabled={formStatus === "submitting"}
                    className="w-full px-4 py-3 bg-white border border-blue-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition disabled:opacity-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your.email@example.com"
                    required
                    disabled={formStatus === "submitting"}
                    className="w-full px-4 py-3 bg-white border border-blue-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition disabled:opacity-50"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject_line"
                  placeholder="What's this about?"
                  required
                  disabled={formStatus === "submitting"}
                  className="w-full px-4 py-3 bg-white border border-blue-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition disabled:opacity-50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Tell me about your project or opportunity..."
                  rows={5}
                  required
                  disabled={formStatus === "submitting"}
                  className="w-full px-4 py-3 bg-white border border-blue-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition resize-none disabled:opacity-50"
                />
              </div>
              <button
                type="submit"
                disabled={formStatus === "submitting"}
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold rounded-lg transition transform hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:transform-none disabled:cursor-not-allowed"
              >
                {formStatus === "submitting" ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Mail size={18} />
                    Send Message
                  </>
                )}
              </button>
              {/* Status Messages */}
              {formStatus === "success" && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
                  <span className="font-medium">✓ Success!</span> {formMessage}
                </div>
              )}
              {formStatus === "error" && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                  <span className="font-medium">✗ Error:</span> {formMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
