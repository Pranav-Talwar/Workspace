const skills = [
    'React',
    'JavaScript',
    'Tailwind CSS',
    'HTML5',
    'CSS3',
    'Git',
    'Node.js',
    'TypeScript',
  ]
  
  const Skills = () => {
    return (
      <section className="py-20 px-4 md:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="bg-gray-800 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300"
              >
                <span className="text-gray-200 font-medium">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default Skills