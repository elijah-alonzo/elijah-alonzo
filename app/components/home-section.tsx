import { MessageCircle } from "lucide-react";

interface HomeSectionProps {
  setShowChat: (show: boolean) => void;
}

export function HomeSection({ setShowChat }: HomeSectionProps) {
  return (
    <section
      id="home"
      className="py-32 px-4 sm:px-6 lg:px-8 bg-white min-h-screen flex items-center"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight whitespace-nowrap">
              <span className="bg-gradient-to-r from-blue-600 to-blue-900 bg-clip-text text-transparent">
                Elijah Alonzo
              </span>
            </h1>

            <p className="text-base text-gray-600 leading-relaxed max-w-lg">
              An information technology student with a passion for learning and
              developing skills in software development, networking, and
              cybersecurity. Eager to contribute to real-world projects and gain
              hands-on experience in the IT industry.
            </p>

            <div className="flex gap-4 flex-wrap">
              <button
                onClick={() => setShowChat(true)}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105 flex items-center gap-2"
              >
                <MessageCircle size={20} />
                Ask My Digital Twin
              </button>
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-blue-500 text-blue-600 hover:bg-blue-50 hover:border-blue-600 font-semibold rounded-lg transition"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="flex justify-center">
            <div className="relative w-80 h-80">
              {/* Image Container */}
              <div className="relative w-full h-full rounded-full shadow-lg">
                <img
                  src="/profile.png"
                  alt="Elijah Taguinod Alonzo"
                  className="w-full h-full object-cover rounded-full"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent rounded-full"></div>
              </div>
              {/* Badge */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-2 rounded-full font-medium text-sm shadow-lg text-center min-w-max">
                Web Developer
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
