"use client";

import { useState, useEffect } from "react";
import { MessageCircle, X, Github, Linkedin, Mail, ExternalLink, Palette, Brush, Wrench, Award, Video } from "lucide-react";
import Chat from "./components/chat";

export default function Page() {
  const [showChat, setShowChat] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formMessage, setFormMessage] = useState('');
  const [animatedSections, setAnimatedSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animatedSections.has(entry.target.id)) {
            setAnimatedSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [animatedSections]);

  async function handleContactSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      
      const data = await response.json();
      
      if (data.success) {
        setFormStatus('success');
        setFormMessage('Thank you! Your message has been sent successfully.');
        (e.target as HTMLFormElement).reset();
        setTimeout(() => {
          setFormStatus('idle');
          setFormMessage('');
        }, 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setFormStatus('error');
      setFormMessage('Sorry, there was an error sending your message. Please try emailing me directly at elijahalonzo.me@gmail.com');
      setTimeout(() => {
        setFormStatus('idle');
        setFormMessage('');
      }, 5000);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-blue-200 shadow-lg z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src="/elijah-alonzo.png" alt="Elijah Alonzo" className="h-10 w-auto" />
          </div>
          <div className="hidden md:flex gap-6 items-center">
            <a href="#home" className="text-gray-600 hover:text-blue-600 transition font-medium">Home</a>
            <a href="#skills" className="text-gray-600 hover:text-blue-600 transition font-medium">Skills</a>
            <a href="#certifications" className="text-gray-600 hover:text-blue-600 transition font-medium">Certifications & Training</a>
            <a href="#experiences" className="text-gray-600 hover:text-blue-600 transition font-medium">Experiences</a>
            <a href="#projects" className="text-gray-600 hover:text-blue-600 transition font-medium">Projects</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition font-medium">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-32 px-4 sm:px-6 lg:px-8 bg-white min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className={`space-y-8 transition-all duration-1000 ${animatedSections.has('home') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight whitespace-nowrap">
                 <span className="bg-gradient-to-r from-blue-600 to-blue-900 bg-clip-text text-transparent">Elijah Alonzo</span>
                </h1>
                <p className="text-base text-gray-600 font-medium mb-8 leading-relaxed">
                  IT Student | Certified Database Specialist | Aspiring Cloud Specialist
                </p>
              </div>

              <p className="text-base text-gray-600 leading-relaxed max-w-lg">
                An information technology student with a passion for learning and developing skills in software development, networking, and cybersecurity. Eager to contribute to real-world projects and gain hands-on experience in the IT industry.
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

              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                <a
                  href="https://github.com/elijah-alonzo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-lg text-gray-600 hover:text-blue-600 shadow-sm hover:shadow-md transition"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/elijah-alonzo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-lg text-gray-600 hover:text-blue-600 shadow-sm hover:shadow-md transition"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://www.facebook.com/share/1B6SvsQLH2/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-lg text-gray-600 hover:text-blue-600 shadow-sm hover:shadow-md transition"
                  title="Facebook: Elijah Alonzo"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a
                  href="https://www.instagram.com/eljhalnz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-lg text-gray-600 hover:text-blue-600 shadow-sm hover:shadow-md transition"
                  title="Instagram: @eljhalnz"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a
                  href="mailto:elijahalonzo.me@gmail.com"
                  className="p-3 bg-white hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-lg text-gray-600 hover:text-blue-600 shadow-sm hover:shadow-md transition"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>

            {/* Right Side - Profile Image */}
            <div className={`flex justify-center transition-all duration-1000 delay-300 ${animatedSections.has('home') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative w-80 h-80">
                {/* Image Container */}
                <div  className="relative w-full h-full rounded-full shadow-lg">
                  <img src="/profile.png" alt="Elijah Taguinod Alonzo" className="w-full h-full object-cover rounded-full"/>
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent rounded-full"></div>
                </div>
                {/* Badge */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-2 rounded-full font-medium text-sm shadow-lg text-center min-w-max">
                  Aspiring Cloud Specialist
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-12 transition-all duration-1000 ${animatedSections.has('skills') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
            <p className="text-base text-gray-600 mx-auto">
              An overview of my technical skills, tools, and areas of expertise in technology and development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Web Development */}
            <div className={`bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-700 transform hover:scale-105 group ${animatedSections.has('skills') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '100ms' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                  <Wrench className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Web Development</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Full-stack development capabilities with modern frameworks and responsive design principles.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Frontend & Backend', 'REST APIs', 'Responsive UI/UX'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Programming Languages */}
            <div className={`bg-gradient-to-br from-green-50 to-white border border-green-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-700 transform hover:scale-105 group ${animatedSections.has('skills') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-700 rounded-lg flex items-center justify-center">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Programming Languages</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Proficient in multiple programming languages for diverse development projects.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: 'PHP', level: 'Intermediate' },
                  { name: 'Python', level: 'Intermediate' },
                  { name: 'JavaScript', level: 'Intermediate' },
                  { name: 'Java', level: 'Beginner' }
                ].map(lang => (
                  <div key={lang.name} className="flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                    <span>{lang.name}</span>
                    <span className="text-green-500">•</span>
                    <span className="text-green-600">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Frameworks & Libraries */}
            <div className={`bg-gradient-to-br from-purple-50 to-white border border-purple-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-700 transform hover:scale-105 group ${animatedSections.has('skills') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '300ms' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-700 rounded-lg flex items-center justify-center">
                  <Brush className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Frameworks</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Modern frameworks and libraries for efficient development workflows.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Laravel', 'React', 'Next.js', 'Django'].map(framework => (
                  <span key={framework} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                    {framework}
                  </span>
                ))}
              </div>
            </div>

            {/* Databases */}
            <div className={`bg-gradient-to-br from-orange-50 to-white border border-orange-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-700 transform hover:scale-105 group ${animatedSections.has('skills') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '400ms' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-700 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Databases</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Database design, optimization, and management across multiple platforms.
              </p>
              <div className="flex flex-wrap gap-2">
                {['MySQL', 'PostgreSQL', 'SQLite', 'MariaDB', 'MongoDB'].map(db => (
                  <span key={db} className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">
                    {db}
                  </span>
                ))}
              </div>
            </div>

            {/* Multimedia & Design */}
            <div className={`bg-gradient-to-br from-pink-50 to-white border border-pink-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-700 transform hover:scale-105 group ${animatedSections.has('skills') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '500ms' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-700 rounded-lg flex items-center justify-center">
                  <Video className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Multimedia</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Creative skills in graphic design, video editing, and multimedia production.
              </p>
              <div className="space-y-2">
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-medium text-gray-500">Graphics:</span>
                  {['Photo Retouching', 'Color Correction', 'Layout Design'].map(skill => (
                    <span key={skill} className="px-2 py-1 bg-pink-100 text-pink-700 rounded text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-medium text-gray-500">Video:</span>
                  {['Editing', 'Color Grading', 'Motion Graphics'].map(skill => (
                    <span key={skill} className="px-2 py-1 bg-pink-100 text-pink-700 rounded text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-medium text-gray-500">Tools:</span>
                  {['Photoshop', 'Premiere', 'Canva'].map(tool => (
                    <span key={tool} className="px-2 py-1 bg-pink-100 text-pink-700 rounded text-xs">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Soft Skills */}
            <div className={`bg-gradient-to-br from-teal-50 to-white border border-teal-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-700 transform hover:scale-105 group ${animatedSections.has('skills') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '600ms' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-700 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Soft Skills</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Leadership and communication skills developed through various organizational roles.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Leadership', 'Communication', 'Public Speaking'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Training Section */}
      <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-12 transition-all duration-1000 ${animatedSections.has('certifications') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications and Trainings</h2>
            <p className="text-base text-gray-600 mx-auto">
              A collection of all the certifications, seminars, and training programs I have completed.
            </p>
          </div>
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 ${animatedSections.has('certifications') ? 'opacity-100' : 'opacity-0'}`}>
            {/* ITS Databases Certification */}
            <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-xl overflow-hidden hover:border-blue-400 hover:shadow-lg transition transform hover:scale-105 group shadow-lg">
              <div className="h-32 overflow-hidden relative">
                <img src="/images/itsdatabase.png" alt="ITS Databases" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent opacity-80 group-hover:opacity-60 transition duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">ITS Databases</h3>
                <p className="text-gray-600 mb-4 text-sm">Professional certification in database management and administration.</p>
                <div className="flex gap-2 flex-wrap mb-4">
                  <span className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded">Database</span>
                  <span className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded">SQL</span>
                  <span className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded">Certified</span>
                </div>
              </div>
            </div>

            {/* TCON 2023 */}
            <div className="bg-gradient-to-br from-purple-50 to-white border border-purple-200 rounded-xl overflow-hidden hover:border-purple-400 hover:shadow-lg transition transform hover:scale-105 group shadow-lg">
              <div className="h-32 overflow-hidden relative">
                <img src="/images/itecon2024.png" alt="TCON 2023" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent opacity-80 group-hover:opacity-60 transition duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">TCON 2023</h3>
                <p className="text-gray-600 mb-4 text-sm">The Ultimate Tech Event in the North - Technology conference and networking.</p>
                <div className="flex gap-2 flex-wrap mb-4">
                  <span className="px-2 py-1 text-xs bg-purple-100 text-purple-700 rounded">Tech Event</span>
                  <span className="px-2 py-1 text-xs bg-purple-100 text-purple-700 rounded">Networking</span>
                  <span className="px-2 py-1 text-xs bg-purple-100 text-purple-700 rounded">2023</span>
                </div>
              </div>
            </div>

            {/* CyberSummit 2023 */}
            <div className="bg-gradient-to-br from-red-50 to-white border border-red-200 rounded-xl overflow-hidden hover:border-red-400 hover:shadow-lg transition transform hover:scale-105 group shadow-lg">
              <div className="h-32 overflow-hidden relative">
                <img src="/images/cybersummit2023.png" alt="SPUP CyberSummit 2023" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/60 to-transparent opacity-80 group-hover:opacity-60 transition duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">SPUP CyberSummit 2023</h3>
                <p className="text-gray-600 mb-4 text-sm">Cybersecurity summit focused on digital security and protection strategies.</p>
                <div className="flex gap-2 flex-wrap mb-4">
                  <span className="px-2 py-1 text-xs bg-red-100 text-red-700 rounded">Cybersecurity</span>
                  <span className="px-2 py-1 text-xs bg-red-100 text-red-700 rounded">Security</span>
                  <span className="px-2 py-1 text-xs bg-red-100 text-red-700 rounded">2023</span>
                </div>
              </div>
            </div>

            {/* CyberSummit 2024 */}
            <div className="bg-gradient-to-br from-green-50 to-white border border-green-200 rounded-xl overflow-hidden hover:border-green-400 hover:shadow-lg transition transform hover:scale-105 group shadow-lg">
              <div className="h-32 overflow-hidden relative">
                <img src="/images/ite2025.png" alt="SPUP CyberSummit 2024" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 to-transparent opacity-80 group-hover:opacity-60 transition duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">SPUP CyberSummit 2024</h3>
                <p className="text-gray-600 mb-4 text-sm">Advanced cybersecurity training and threat analysis workshop.</p>
                <div className="flex gap-2 flex-wrap mb-4">
                  <span className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded">Cybersecurity</span>
                  <span className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded">Training</span>
                  <span className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded">2024</span>
                </div>
              </div>
            </div>

            {/* CyberSummit 2025 */}
            <div className="bg-gradient-to-br from-orange-50 to-white border border-orange-200 rounded-xl overflow-hidden hover:border-orange-400 hover:shadow-lg transition transform hover:scale-105 group shadow-lg">
              <div className="h-32 overflow-hidden relative">
                <img src="/images/capstoneshowcase.png" alt="SPUP CyberSummit 2025" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/60 to-transparent opacity-80 group-hover:opacity-60 transition duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">SPUP CyberSummit 2025</h3>
                <p className="text-gray-600 mb-4 text-sm">Latest cybersecurity trends and emerging threat landscape analysis.</p>
                <div className="flex gap-2 flex-wrap mb-4">
                  <span className="px-2 py-1 text-xs bg-orange-100 text-orange-700 rounded">Cybersecurity</span>
                  <span className="px-2 py-1 text-xs bg-orange-100 text-orange-700 rounded">Trends</span>
                  <span className="px-2 py-1 text-xs bg-orange-100 text-orange-700 rounded">2025</span>
                </div>
              </div>
            </div>

            {/* CyberSecurity RoadShow 2025 */}
            <div className="bg-gradient-to-br from-teal-50 to-white border border-teal-200 rounded-xl overflow-hidden hover:border-teal-400 hover:shadow-lg transition transform hover:scale-105 group shadow-lg">
              <div className="h-32 overflow-hidden relative">
                <img src="/images/roadshow.png" alt="SPUP CyberSecurity RoadShow 2025" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 to-transparent opacity-80 group-hover:opacity-60 transition duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">SPUP CyberSecurity RoadShow 2025</h3>
                <p className="text-gray-600 mb-4 text-sm">Interactive cybersecurity awareness and hands-on security demonstrations.</p>
                <div className="flex gap-2 flex-wrap mb-4">
                  <span className="px-2 py-1 text-xs bg-teal-100 text-teal-700 rounded">RoadShow</span>
                  <span className="px-2 py-1 text-xs bg-teal-100 text-teal-700 rounded">Hands-on</span>
                  <span className="px-2 py-1 text-xs bg-teal-100 text-teal-700 rounded">2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section id="experiences" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto"> 
          <div className={`text-center mb-12 transition-all duration-1000 ${animatedSections.has('experiences') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Experiences</h2>
              <p className="text-base text-gray-600 mx-auto">
                A collection of roles, projects, and leadership work that highlight my technical abilities and the soft skills that support them—ranging from hands-on development to collaboration, problem-solving, and project execution.
              </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className={`bg-white/80 backdrop-blur border border-blue-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-1000 ${animatedSections.has('experiences') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h3 className="text-2xl font-semibold text-blue-600 mb-6">Hard Skills Experience</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="text-gray-900 font-semibold mb-1">Project Lead and Developer</h4>
                  <p className="text-gray-600 text-sm">Paulinian Student Government E-Portfolio and Ranking System</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="text-gray-900 font-semibold mb-1">IT Department Leader and Developer</h4>
                  <p className="text-gray-600 text-sm">Collaborative Online International Learning (COIL) Program</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="text-gray-900 font-semibold mb-1">3rd Place</h4>
                  <p className="text-gray-600 text-sm">2023 SPUP–PATHWAY Hackathon</p>
                </div>
              </div>
            </div>
            <div className={`bg-white/80 backdrop-blur border border-indigo-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-1000 delay-200 ${animatedSections.has('experiences') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <h3 className="text-2xl font-semibold text-indigo-600 mb-6">Soft Skills Experience</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-indigo-500 pl-4">
                  <h4 className="text-gray-900 font-semibold mb-1">Senator</h4>
                  <p className="text-gray-600 text-sm">Paulinian Student Government (2022–2023)</p>
                </div>
                <div className="border-l-4 border-indigo-500 pl-4">
                  <h4 className="text-gray-900 font-semibold mb-1">Assistant P.R.O.</h4>
                  <p className="text-gray-600 text-sm">Paulinian Student Government (2023–2024)</p>
                </div>
                <div className="border-l-4 border-indigo-500 pl-4">
                  <h4 className="text-gray-900 font-semibold mb-1">Secretary</h4>
                  <p className="text-gray-600 text-sm">Paulinian Student Government (2023–2024)</p>
                </div>
                <div className="border-l-4 border-indigo-500 pl-4">
                  <h4 className="text-gray-900 font-semibold mb-1">3rd Year Representative</h4>
                  <p className="text-gray-600 text-sm">Junior Philippine Computer Society (2023–2024)</p>
                </div>
                <div className="border-l-4 border-indigo-500 pl-4">
                  <h4 className="text-gray-900 font-semibold mb-1">Member</h4>
                  <p className="text-gray-600 text-sm">Multimedia Committee, Rotaract Club of Tuguegarao (2023–2024)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-12 transition-all duration-1000 ${animatedSections.has('projects') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
            <p className="text-base text-gray-600 mx-auto">
              A portfolio of functional systems I have designed, developed, and successfully deployed throughout my career.
            </p>
          </div>
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 ${animatedSections.has('projects') ? 'opacity-100' : 'opacity-0'}`}>
            {/* Digital Twin */}
            <div className="bg-gradient-to-br from-cyan-50 to-white border border-cyan-200 rounded-xl overflow-hidden hover:border-cyan-400 hover:shadow-lg transition transform hover:scale-105 group shadow-lg">
              <div className="h-48 overflow-hidden relative">
                <img src="/images/digitaltwin.png" alt="Digital Twin Project" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/60 to-transparent opacity-80 group-hover:opacity-60 transition duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Digital Twin</h3>
                <p className="text-gray-600 mb-4 text-sm">An AI-powered digital twin chatbot that provides information about my background, skills, and experiences using RAG technology.</p>
                <div className="flex gap-2 flex-wrap mb-4">
                  {['AI', 'RAG', 'Chatbot'].map(tag => (
                    <span key={tag} className="px-2 py-1 text-xs bg-cyan-100 text-cyan-700 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href="https://github.com/elijah-alonzo/digital-twin.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-700 text-sm"
                >
                  <Github size={16} />
                  View on GitHub
                </a>
              </div>
            </div>

            {/* Equal Learn */}
            <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-xl overflow-hidden hover:border-blue-400 hover:shadow-lg transition transform hover:scale-105 group shadow-lg">
              <div className="h-48 overflow-hidden relative">
                <img src="/images/equallearn.png" alt="Equal Learn Project" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent opacity-80 group-hover:opacity-60 transition duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Equal Learn</h3>
                <p className="text-gray-600 mb-4 text-sm">An educational video hosting website designed for kids and teachers to access and share learning content.</p>
                <div className="flex gap-2 flex-wrap mb-4">
                  {['Education', 'Video Hosting', 'Learning Platform'].map(tag => (
                    <span key={tag} className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href="https://github.com/elijah-alonzo/EqualLearn.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm"
                >
                  <Github size={16} />
                  View on GitHub
                </a>
              </div>
            </div>

            {/* PSG E-Portfolio */}
            <div className="bg-gradient-to-br from-emerald-50 to-white border border-emerald-200 rounded-xl overflow-hidden hover:border-emerald-400 hover:shadow-lg transition transform hover:scale-105 group shadow-lg">
              <div className="h-48 overflow-hidden relative">
                <img src="/images/e-portfolio.png" alt="PSG E-Portfolio Project" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 to-transparent opacity-80 group-hover:opacity-60 transition duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Paulinian Student Government E-Portfolio and Ranking System</h3>
                <p className="text-gray-600 mb-4 text-sm">A comprehensive system for managing student portfolios and rankings within the student government.</p>
                <div className="flex gap-2 flex-wrap mb-4">
                  {['Laravel', 'Portfolio', 'Management'].map(tag => (
                    <span key={tag} className="px-2 py-1 text-xs bg-emerald-100 text-emerald-700 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href="https://github.com/elijah-alonzo/app.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 text-sm"
                >
                  <Github size={16} />
                  View on GitHub
                </a>
              </div>
            </div>

            {/* Gem Catcher */}
            <div className="bg-gradient-to-br from-purple-50 to-white border border-purple-200 rounded-xl overflow-hidden hover:border-purple-400 hover:shadow-lg transition transform hover:scale-105 group shadow-lg">
              <div className="h-48 overflow-hidden relative">
                <img src="/images/gemcatcher.png" alt="Gem Catcher Game" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent opacity-80 group-hover:opacity-60 transition duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Gem Catcher</h3>
                <p className="text-gray-600 mb-4 text-sm">A 2D arcade-style game where players catch gems to gain points and achieve high scores.</p>
                <div className="flex gap-2 flex-wrap mb-4">
                  {['Game', '2D', 'Arcade'].map(tag => (
                    <span key={tag} className="px-2 py-1 text-xs bg-purple-100 text-purple-700 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href="https://github.com/elijah-alonzo/GemCathcer.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 text-sm"
                >
                  <Github size={16} />
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Info */}
            <div className={`transition-all duration-1000 ${animatedSections.has('contact') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Connect</h2>
              <p className="text-base text-gray-600 mb-8 leading-relaxed">
                Whether you're looking for an AI and Web developer, data analyst, freelancer, or graphic designer, feel free to reach out!
              </p>

              <div className="space-y-4">
                {/* Email */}
                <div className="bg-gradient-to-r from-blue-100 to-blue-200 border border-blue-300 rounded-lg p-4 backdrop-blur-sm hover:border-blue-500 hover:shadow-md transition">
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <a href="mailto:elijahalonzo.me@gmail.com" className="text-gray-600 hover:text-blue-600 transition">
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
                      <h3 className="font-semibold text-gray-900 mb-1">LinkedIn</h3>
                      <a href="https://linkedin.com/in/elijah-alonzo" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition flex items-center gap-2">
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
                      <a href="https://github.com/elijah-alonzo" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition flex items-center gap-2">
                        github.com/elijah-alonzo <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Facebook */}
                <div className="bg-gradient-to-r from-blue-100 to-blue-200 border border-blue-300 rounded-lg p-4 backdrop-blur-sm hover:border-blue-500 hover:shadow-md transition">
                  <div className="flex items-start gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Facebook</h3>
                      <a href="https://www.facebook.com/share/1B6SvsQLH2/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition flex items-center gap-2">
                        Elijah Alonzo <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Instagram */}
                <div className="bg-gradient-to-r from-blue-100 to-blue-200 border border-blue-300 rounded-lg p-4 backdrop-blur-sm hover:border-blue-500 hover:shadow-md transition">
                  <div className="flex items-start gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Instagram</h3>
                      <a href="https://www.instagram.com/eljhalnz/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition flex items-center gap-2">
                        @eljhalnz <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className={`bg-gradient-to-br from-white to-blue-50 border border-blue-200 rounded-xl p-8 backdrop-blur-md shadow-lg transition-all duration-1000 delay-200 ${animatedSections.has('contact') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
              <form onSubmit={handleContactSubmit} className="space-y-6">
                {/* Hidden Web3Forms Access Key */}
                <input type="hidden" name="access_key" value="5ff992ce-f259-43d2-adeb-b8668842824a" />
                <input type="hidden" name="subject" value="New Contact Form Submission from Portfolio" />
                <input type="hidden" name="from_name" value="Portfolio Contact Form" />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      required
                      disabled={formStatus === 'submitting'}
                      className="w-full px-4 py-3 bg-white border border-blue-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition disabled:opacity-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="your.email@example.com"
                      required
                      disabled={formStatus === 'submitting'}
                      className="w-full px-4 py-3 bg-white border border-blue-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition disabled:opacity-50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject_line"
                    placeholder="What's this about?"
                    required
                    disabled={formStatus === 'submitting'}
                    className="w-full px-4 py-3 bg-white border border-blue-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition disabled:opacity-50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    placeholder="Tell me about your project or opportunity..."
                    rows={5}
                    required
                    disabled={formStatus === 'submitting'}
                    className="w-full px-4 py-3 bg-white border border-blue-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition resize-none disabled:opacity-50"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold rounded-lg transition transform hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:transform-none disabled:cursor-not-allowed"
                >
                  {formStatus === 'submitting' ? (
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
                {formStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
                    <span className="font-medium">✓ Success!</span> {formMessage}
                  </div>
                )}
                {formStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                    <span className="font-medium">✗ Error:</span> {formMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

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
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-end p-4">
          <div className="w-full max-w-md md:max-w-lg h-[600px] md:h-[650px] bg-gradient-to-b from-white via-blue-50 to-blue-100 rounded-2xl shadow-2xl border border-blue-200 flex flex-col overflow-hidden hover:border-blue-300 transition">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-5 flex justify-between items-center shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/20">
                  <img src="/profile.png" alt="Elijah Taguinod Alonzo" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-medium text-white text-base">Elijah Alonzo</h3>
                </div>
              </div>
              <button
                onClick={() => setShowChat(false)}
                className="p-2 hover:bg-white/20 rounded-lg transition transform hover:scale-110"
                aria-label="Close chat"
              >
                <X size={24} className="text-white" />
              </button>
            </div>
            {/* Chat Content */}
            <div className="flex-1 overflow-hidden bg-gradient-to-b from-white to-blue-50">
              <Chat />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
