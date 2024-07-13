// src/components/Login.js
import React, { useState } from "react";
import useLoginMutation from "../hooks/useLoginMutation";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const mutation = useLoginMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({ username, password });
  };

  return (
    <div className="bg-slate-900 flex flex-col justify-center items-center h-screen gap-5">
      <h1 className="text-white text-3xl font-medium p-1">Login</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-80">
        <label htmlFor="username" className="text-white text-lg font-medium">
          Username
        </label>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 rounded bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500"
        />
        <label htmlFor="password" className="text-white text-lg font-medium">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 rounded bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500"
        />
        <button
          type="submit"
          className="mt-5 px-5 py-2 text-xl font-semibold bg-blue-600 text-white rounded hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Login
        </button>
      </form>
      {mutation.isLoading && <p className="text-white">Logging in...</p>}
      {mutation.isError && (
        <p className="text-red-500">Login failed: {mutation.error.message}</p>
      )}
    </div>
  );
}

export default Login;
