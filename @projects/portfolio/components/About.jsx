const About = () => {
    return (
      <section className="py-20 px-4 md:px-8 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            About Me
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/3">
              <img
                src="/profile.jpg"
                alt="Profile"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="w-full md:w-2/3 text-gray-300">
              <p className="mb-4">
                Passionate frontend developer with X years of experience in creating
                beautiful and functional web applications.
              </p>
              <div className="flex gap-4 mt-8 justify-center">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                  Download CV
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-900 transition duration-300">
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default About