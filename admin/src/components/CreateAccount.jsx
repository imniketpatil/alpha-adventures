import React, { useState } from "react";
import useCreateAccount from "../hooks/useCreateAccount.js";

function CreateAccount({ setCreateAccount }) {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const mutation = useCreateAccount();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName || !username || !password) {
      console.error("All fields are required.");
      return;
    }
    // console.log("Submitting form with values:", {
    //   fullName,
    //   username,
    //   password,
    // });
    mutation.mutate({ fullName, username, password });
  };

  return (
    <div className="fixed h-full w-full top-0 left-0 bg-slate-400 bg-opacity-70 flex flex-col gap-10 justify-center items-center">
      <div className="w-full max-w-md">
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col gap-5">
          <h2 className="text-2xl font-bold text-center text-gray-700">
            Create Account
          </h2>
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label htmlFor="fullName" className="mb-2 text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                className="p-2 border border-gray-300 rounded-lg"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="username" className="mb-2 text-gray-700">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="p-2 border border-gray-300 rounded-lg"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="mb-2 text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="p-2 border border-gray-300 rounded-lg"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex justify-between mt-4">
              <button
                type="submit"
                className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
              >
                Create Account
              </button>
              <button
                type="button"
                className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all"
                onClick={() => setCreateAccount(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
