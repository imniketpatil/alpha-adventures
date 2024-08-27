import React, { useState, useEffect } from "react";
import useChangeAccountDetails from "../hooks/useChangeAccountDetails";

const EditAccount = ({ setEditAccount, user }) => {
  const [fullName, setFullName] = useState(user.fullName || "");
  const [username, setUserName] = useState(user.username || "");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const authToken = localStorage.getItem("accessToken");
  const editMutation = useChangeAccountDetails(authToken);

  useEffect(() => {
    if (editMutation.isSuccess) {
      setSuccess("Account updated successfully.");
      setError(null);
    } else if (editMutation.isError) {
      setError("Failed to update account. " + editMutation.error.message);
      setSuccess(null);
    }
  }, [editMutation.isSuccess, editMutation.isError, editMutation.error]);

  useEffect(() => {
    setFullName(user.fullName);
    setUserName(user.username);
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    editMutation.mutate({ fullName, username, authToken });
  };

  return (
    <div className="fixed h-full w-full top-0 left-0 bg-slate-400 bg-opacity-70 flex flex-col gap-10 justify-center items-center">
      <div className="w-full max-w-md">
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col gap-5">
          <h2 className="text-2xl font-bold text-center text-gray-700">
            Edit Account
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
                onChange={(e) => setUserName(e.target.value)}
                required
              />
            </div>
            <div className="flex justify-between mt-4">
              <button
                type="submit"
                className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
              >
                Update Account
              </button>
              <button
                type="button"
                className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all"
                onClick={() => setEditAccount(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {success && <div style={{ color: "green" }}>{success}</div>}
      {success && setEditAccount(false)}
    </div>
  );
};

export default EditAccount;
