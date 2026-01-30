import { Database, Code, Layers } from "lucide-react";

export function SkillSection() {
  return (
    <section
      id="tools"
      className="py-32 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4">
            Skills
          </h2>
          <p className="text-base text-gray-500 mx-auto">
            Here you'll find all the skills I use in my web development and
            graphics design.
            <br />
            Proficient in multiple programming languages for diverse development
            projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Programming */}
          <div className="border border-gray dark:border-gray-800 dark:bg-gray-900 rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                <Code className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold">Programming</h3>
            </div>

            <p className="text-gray-500 text-sm mb-4">
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
                  className="px-3 py-1 border border-gray dark:border-gray-800 rounded-full text-gray-700 dark:text-gray-200 text-xs font-medium flex items-center gap-2"
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
          <div className="border border-gray dark:border-gray-800 dark:bg-gray-900 rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold">Frameworks</h3>
            </div>

            <p className="text-gray-500 text-sm mb-4">
              Modern frameworks and libraries for efficient development
              workflows.
            </p>

            <div className="flex flex-wrap gap-2">
              {[
                {
                  name: "Laravel",
                  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
                },
                {
                  name: "React",
                  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                },
                {
                  name: "Next.js",
                  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
                },
                {
                  name: "Django",
                  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
                },
                {
                  name: "Tailwind",
                  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
                },
                {
                  name: "Bootstrap",
                  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
                },
              ].map((framework) => (
                <span
                  key={framework.name}
                  className="px-3 py-1 border border-gray dark:border-gray-800 rounded-full text-gray-700 dark:text-gray-200 text-xs font-medium flex items-center gap-2"
                  title={framework.name}
                >
                  <img
                    src={framework.logo}
                    alt={`${framework.name} logo`}
                    className="w-4 h-4 object-contain"
                  />
                  {framework.name}
                </span>
              ))}
            </div>
          </div>

          {/* Databases */}
          <div className="border border-gray dark:border-gray-800 dark:bg-gray-900 rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold">Databases</h3>
            </div>

            <p className="text-gray-500 text-sm mb-4">
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
                  className="px-3 py-1 border border-gray dark:border-gray-800 rounded-full text-gray-700 dark:text-gray-200 text-xs font-medium flex items-center gap-2"
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
        </div>
      </div>
    </section>
  );
}
