const Contact = () => {
    return (
      <section className="py-20 px-4 md:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Contact Me
          </h2>
          <div className="bg-gray-800 p-8 rounded-lg shadow-md">
            <form className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 bg-gray-900 text-gray-300"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 bg-gray-900 text-gray-300"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 bg-gray-900 text-gray-300"
                ></textarea>
              </div>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    )
  }
  
  export default Contact