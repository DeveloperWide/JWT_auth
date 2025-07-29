import React, { useState } from "react";
import axios from "axios";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/auth/signup", form);
    alert("User Registered! Please Login.");
  };

  return (
    <>
     <h2 className="text-center py-3 text-2xl font-semibold italic">Sign up here</h2>
      <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center h-80">
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} className="input"/>
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} className="input"/>
      <input type="password" name="password" value={form.password} placeholder="Password" onChange={handleChange} className="input"/>
      
      <button type="submit" className="btn">Sign Up</button>
      <p className="py-1 px-2 text-gray-600">Already Have a Account <a href="/login" className="px-0.5 font-semibold text-blue-500 hover:underline">Sign In</a></p>
    </form>
    </>
  );
}
