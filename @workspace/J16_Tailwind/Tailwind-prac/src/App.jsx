import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
     <div>
  <div class="bg-gradient-to-r from-cyan-500 to-blue-500 min-h-screen flex items-center justify-center">
    <div class="bg-white p-8 rounded-lg shadow-lg w-96">
      <h1 class="text-3xl font-bold text-center text-blue-700 mb-4">PolyConnect</h1>
      <form class="space-y-4">
        <div>
          <label for="email" class="block text-gray-700 font-bold mb-2">Email</label>
          <input type="email" id="email" name="email"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your email">
        </div>
        <div>
          <label for="password" class="block text-gray-700 font-bold mb-2">Password</label>
          <input type="password" id="password" name="password"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your password">
        </div>
        <div class="flex justify-between items-center">
          <div class="flex items-center">
            <input type="checkbox" id="remember" class="mr-2">
            <label for="remember" class="text-gray-700">Remember Me</label>
          </div>
          <a href="#" class="text-blue-500 hover:underline">Forgot Password?</a>
        </div>
        <button type="submit"
          class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline">
          Login <i class="fas fa-sign-in-alt ml-2"></i>
        </button>
        <div class="mt-4 text-center">
          <p class="text-gray-600">Don't have an account? <a href="#" class="text-blue-500 hover:underline">Sign Up</a>
          </p>
        </div>
        <div class="flex justify-center mt-4 space-x-4">
          <a href="#" class="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#" class="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-full">
            <i class="fab fa-google"></i>
          </a>
          <a href="#" class="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded-full">
            <i class="fab fa-twitter"></i>
          </a>
        </div>
      </form>
    </div>
  </div>
</div>

    </>
  )
}

export default App
