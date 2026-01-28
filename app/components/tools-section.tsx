import { Brush, Award, Video, Code } from "lucide-react";
import { Database } from "lucide-react";

export function ToolsSection() {
  return (
    <section id="tools" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Tools</h2>
          <p className="text-base text-gray-600 mx-auto">
            Here you'll find all the tools I use in my web development and
            graphics design.
            <br />
            Proficient in multiple programming languages for diverse development
            projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Programming */}
          <div className="border border-gray rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Programming
              </h3>
            </div>

            <p className="text-gray-600 text-sm mb-4">
              Programming languages I use in for web development and software
              projects.
            </p>

            <div className="flex flex-wrap gap-2">
              {[
                {
                  name: "PHP",
                  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
                },
                {
                  name: "Python",
                  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
                },
                {
                  name: "JavaScript",
                  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
                },
                {
                  name: "TypeScript",
                  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
                },
                {
                  name: "Java",
                  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
                },
              ].map((lang) => (
                <span
                  key={lang.name}
                  className="px-3 py-1 border border-gray-200 rounded-full text-gray-700 text-xs font-medium flex items-center gap-2"
                  title={lang.name}
                >
                  <img
                    src={lang.logo}
                    alt={`${lang.name} logo`}
                    className="w-4 h-4 object-contain"
                  />
                  {lang.name}
                </span>
              ))}
            </div>
          </div>
          {/* Frameworks */}
          <div className="bg-gradient-to-br from-purple-50 to-white border border-purple-200 rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-700 rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
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
          <div className="border border-gray rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                <Database className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Databases</h3>
            </div>

            <p className="text-gray-600 text-sm mb-4">
              Database design, optimization, and management across multiple
              platforms.
            </p>

            <div className="flex flex-wrap gap-2">
              {[
                {
                  name: "MySQL",
                  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
                },
                {
                  name: "PostgreSQL",
                  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
                },
                {
                  name: "SQLite",
                  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
                },
                {
                  name: "MariaDB",
                  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mariadb/mariadb-original.svg",
                },
                {
                  name: "MongoDB",
                  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
                },
              ].map((db) => (
                <span
                  key={db.name}
                  className="px-3 py-1 border border-gray-200 rounded-full text-gray-700 text-xs font-medium flex items-center gap-2"
                  title={db.name}
                >
                  <img
                    src={db.logo}
                    alt={`${db.name} logo`}
                    className="w-4 h-4 object-contain"
                  />
                  {db.name}
                </span>
              ))}
            </div>
          </div>

          {/* Multimedia */}
          <div className="bg-gradient-to-br from-pink-50 to-white border border-pink-200 rounded-xl p-6 shadow-lg">
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
              {["Graphics", "Video", "Tools"].map((label, i) => (
                <div key={label} className="flex flex-wrap gap-2">
                  <span className="text-xs font-medium text-gray-500">
                    {label}:
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
