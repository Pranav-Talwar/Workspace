const Hero = () => {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-center max-w-2xl px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Hi, I'm Your Name
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Frontend Developer | React Specialist
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300">
            View My Work
          </button>
        </div>
      </section>
    )
  }
  
  export default Hero