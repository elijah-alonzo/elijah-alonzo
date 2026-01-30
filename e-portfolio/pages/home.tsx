import React from "react";

const HomeSection = () => (
  <section
    id="home"
    className="min-h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16"
  >
    <div className="max-w-6xl mx-auto w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl mb-4 leading-tight whitespace-nowrap">
            I'm{" "}
            <span className="bg-blue-600 dark:bg-blue-400 bg-clip-text text-transparent font-semibold">
              Elijah Alonzo
            </span>
          </h1>

          <p className="text-base text-gray-500 leading-relaxed max-w-lg">
            I’m a web developer and graphics designer, ready to bring your ideas
            to life! Need someone to develop a <b>website</b> or create{" "}
            <b>graphics design</b>? I’m open for commissions!
          </p>
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
            </div>
            {/* Badge */}
            <div
              className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 
            bg-blue-600 dark:bg-gray-900 dark:text-blue-400 px-6 py-2 rounded-full text-white dark:text-black
            font-medium text-sm shadow-lg text-center min-w-max"
            >
              Web Developer & Graphics Designer
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HomeSection;
