import React, { useState } from "react";
import useChangePassword from "../hooks/useChangePassword";

const ChangePassword = ({ setChangePassword }) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const mutation = useChangePassword();

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(
      { oldPassword, newPassword },
      {
        onSuccess: () => {
          setSuccess("Password changed successfully!");
          setError(null);
          setOldPassword("");
          setNewPassword("");
        },
        onError: (error) => {
          setError(error.response?.data?.message || "An error occurred");
          setSuccess(null);
        },
      }
    );
  };

  return (
    <div className="fixed h-full w-full top-0 left-0 bg-slate-400 bg-opacity-70 flex flex-col gap-10 justify-center items-center">
      <div className="w-full max-w-md">
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col gap-5">
          <h2 className="text-2xl font-bold text-center text-gray-700">
            Change Password
          </h2>
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label htmlFor="oldPassword" className="mb-2 text-gray-700">
                Old Password
              </label>
              <input
                type="password"
                id="oldPassword"
                className="p-2 border border-gray-300 rounded-lg"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="newPassword" className="mb-2 text-gray-700">
                New Password
              </label>
              <input
                type="password"
                id="newPassword"
                className="p-2 border border-gray-300 rounded-lg"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex justify-between mt-4">
              <button
                type="submit"
                className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
              >
                Change Password
              </button>
              <button
                type="button"
                className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all"
                onClick={() => setChangePassword(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {success && <div style={{ color: "green" }}>{success}</div>}
    </div>
  );
};

export default ChangePassword;
