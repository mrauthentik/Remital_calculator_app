import React, { useState } from "react";
import router from '../Routes/Router'
import  {useNavigate} from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add authentication logic here
    if (!email || !password) {
      setError("Please fill in all fields.");
      
    } else {
      setError("");
      // Proceed with login
      navigate('/signup')
      console.log("Logging in with:", { email, password });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-80"
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-green-600">Login</h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:ring-green-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:ring-green-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition duration-200"
        >
          Login
        </button>
      </form>
    </div>
  );
}