import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiCode, FiDatabase, FiSmartphone } from "react-icons/fi";
import { SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";

import './App.css';
export default function App() {
  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-100 font-sans">
      {/* Navigation */}
      <nav className="fixed w-full bg-neutral-900/90 backdrop-blur-sm z-50">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
          >
            John Doe
          </motion.h1>
          <div className="flex gap-6">
            {['About', 'Skills', 'Projects', 'Contact'].map((item, i) => (
              <motion.a
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                href={`#${item.toLowerCase()}`}
                className="hover:text-blue-400 transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 p-1 mx-auto mb-6">
              <img 
                src="/profile.jpg" 
                alt="Profile" 
                className="w-full h-full rounded-full object-cover border-4 border-neutral-900"
              />
            </div>
            <motion.h1 className="text-4xl md:text-6xl font-bold mb-4">
              Frontend Developer
            </motion.h1>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              Building beautiful and functional web experiences with React & TypeScript
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center gap-4 mt-8"
          >
            <a href="#contact" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg flex items-center gap-2">
              <FiMail /> Contact Me
            </a>
            <button className="border border-blue-600 text-blue-400 hover:bg-blue-900/30 px-6 py-3 rounded-lg flex items-center gap-2">
              <FiCode /> View Work
            </button>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
          >
            Technical Skills
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { icon: SiReact, name: 'React', color: '#61DAFB' },
              { icon: SiTailwindcss, name: 'Tailwind CSS', color: '#06B6D4' },
              { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
              { icon: FiDatabase, name: 'REST APIs', color: '#4ADE80' },
              { icon: FiSmartphone, name: 'Responsive Design', color: '#F472B6' },
              { icon: FiCode, name: 'Webpack/Vite', color: '#F59E0B' },
            ].map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-xl bg-neutral-800 hover:bg-neutral-700 transition-colors"
              >
                <skill.icon className="text-3xl mb-4" style={{ color: skill.color }} />
                <h3 className="text-lg font-semibold">{skill.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-neutral-800">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
          >
            Featured Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3].map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="bg-neutral-900 rounded-xl overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-neutral-700" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Project Title</h3>
                  <p className="text-neutral-400 mb-4">Project description that explains what the project does and its key features.</p>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'TypeScript', 'Tailwind'].map((tech, j) => (
                      <span 
                        key={j}
                        className="px-3 py-1 rounded-full text-sm bg-neutral-800 text-blue-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
          >
            Get In Touch
          </motion.h2>

          <div className="max-w-xl mx-auto">
            <motion.form
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="space-y-6"
            >
              <div>
                <label className="block mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 bg-neutral-800 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>
              <div>
                <label className="block mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-2 bg-neutral-800 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>
              <div>
                <label className="block mb-2">Message</label>
                <textarea 
                  rows="4"
                  className="w-full px-4 py-2 bg-neutral-800 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                ></textarea>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg">
                Send Message
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800 py-8">
        <div className="max-w-4xl mx-auto px-4 text-center text-neutral-400">
          <div className="flex justify-center gap-6 mb-4">
            <a href="#" className="hover:text-blue-400">
              <FiGithub size={24} />
            </a>
            <a href="#" className="hover:text-blue-400">
              <FiLinkedin size={24} />
            </a>
          </div>
          <p>© 2024 John Doe. All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}