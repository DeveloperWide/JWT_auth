import React, { useState } from "react";
import axios from "axios";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/auth/login", form).then((res) => {
      localStorage.setItem("token", res.data.token);
    alert("Login Successful!");
    window.location = "/dashboard";
    }).catch((err) => {
      console.log(err)
    });
    
  };

  return (
    <>
     <h2 className="text-center py-3 text-2xl font-semibold italic">Welcome Back</h2>
    <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center h-60">
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} className="input"/>
      <input type="password" name="password" value={form.password} placeholder="Password" onChange={handleChange} className="input"/>
      <button type="submit" className="btn">Login</button>
      <p className="py-1 px-2 text-gray-600">Create New Account <a href="/signup" className="px-0.5 font-semibold text-blue-500 hover:underline">Sign Up</a> here.</p>
    </form>
    </>
  );
}
