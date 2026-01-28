import { Wrench, Palette, Brush, Award, Video } from "lucide-react";

interface SkillsSectionProps {
  animatedSections: Set<string>;
}

export default function SkillsSection({
  animatedSections,
}: SkillsSectionProps) {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-12 transition-all duration-1000 ${animatedSections.has("skills") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills</h2>
          <p className="text-base text-gray-600 mx-auto">
            An overview of my technical skills, tools, and areas of expertise in
            technology and development.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Web Development */}
          <div
            className={`bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-700 transform hover:scale-105 group ${animatedSections.has("skills") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: "100ms" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Web Development
              </h3>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Full-stack development capabilities with modern frameworks and
              responsive design principles.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Frontend & Backend", "REST APIs", "Responsive UI/UX"].map(
                (item) => (
                  <span
                    key={item}
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"
                  >
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>
          {/* Programming Languages */}
          <div
            className={`bg-gradient-to-br from-green-50 to-white border border-green-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-700 transform hover:scale-105 group ${animatedSections.has("skills") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-700 rounded-lg flex items-center justify-center">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Programming Languages
              </h3>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Proficient in multiple programming languages for diverse
              development projects.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                { name: "PHP", level: "Intermediate" },
                { name: "Python", level: "Intermediate" },
                { name: "JavaScript", level: "Intermediate" },
                { name: "Java", level: "Beginner" },
              ].map((lang) => (
                <div
                  key={lang.name}
                  className="flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium"
                >
                  <span>{lang.name}</span>
                  <span className="text-green-500">•</span>
                  <span className="text-green-600">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Frameworks & Libraries */}
          <div
            className={`bg-gradient-to-br from-purple-50 to-white border border-purple-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-700 transform hover:scale-105 group ${animatedSections.has("skills") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-700 rounded-lg flex items-center justify-center">
                <Brush className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Frameworks
              </h3>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Modern frameworks and libraries for efficient development
              workflows.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Laravel", "React", "Next.js", "Django"].map((framework) => (
                <span
                  key={framework}
                  className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium"
                >
                  {framework}
                </span>
              ))}
            </div>
          </div>
          {/* Databases */}
          <div
            className={`bg-gradient-to-br from-orange-50 to-white border border-orange-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-700 transform hover:scale-105 group ${animatedSections.has("skills") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: "400ms" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-700 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Databases</h3>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Database design, optimization, and management across multiple
              platforms.
            </p>
            <div className="flex flex-wrap gap-2">
              {["MySQL", "PostgreSQL", "SQLite", "MariaDB", "MongoDB"].map(
                (db) => (
                  <span
                    key={db}
                    className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium"
                  >
                    {db}
                  </span>
                ),
              )}
            </div>
          </div>
          {/* Multimedia & Design */}
          <div
            className={`bg-gradient-to-br from-pink-50 to-white border border-pink-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-700 transform hover:scale-105 group ${animatedSections.has("skills") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: "500ms" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-700 rounded-lg flex items-center justify-center">
                <Video className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Multimedia
              </h3>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Creative skills in graphic design, video editing, and multimedia
              production.
            </p>
            <div className="space-y-2">
              <div className="flex flex-wrap gap-2">
                <span className="text-xs font-medium text-gray-500">
                  Graphics:
                </span>
                {["Photo Retouching", "Color Correction", "Layout Design"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-pink-100 text-pink-700 rounded text-xs"
                    >
                      {skill}
                    </span>
                  ),
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs font-medium text-gray-500">
                  Video:
                </span>
                {["Editing", "Color Grading", "Motion Graphics"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-pink-100 text-pink-700 rounded text-xs"
                    >
                      {skill}
                    </span>
                  ),
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs font-medium text-gray-500">
                  Tools:
                </span>
                {["Photoshop", "Premiere", "Canva"].map((tool) => (
                  <span
                    key={tool}
                    className="px-2 py-1 bg-pink-100 text-pink-700 rounded text-xs"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
          {/* Soft Skills */}
          <div
            className={`bg-gradient-to-br from-teal-50 to-white border border-teal-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-700 transform hover:scale-105 group ${animatedSections.has("skills") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: "600ms" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-700 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Soft Skills
              </h3>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Leadership and communication skills developed through various
              organizational roles.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Leadership", "Communication", "Public Speaking"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-medium"
                  >
                    {skill}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
