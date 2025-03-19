const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce platform built with React and Node.js',
      tech: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
      image: '/project1.jpg',
    },
    // Add more projects
  ]
  
  const Projects = () => {
    return (
      <section className="py-20 px-4 md:px-8 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-blue-900 text-blue-200 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default Projects