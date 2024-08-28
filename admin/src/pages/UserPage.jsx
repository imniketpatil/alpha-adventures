import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import ChangePassword from "../components/ChangePassword";
import useDeleteAccount from "../hooks/useDeleteAccount";
import EditAccount from "../components/EditAccount";
import CreateAccount from "../components/CreateAccount.jsx";
import client_url from "../utility/config.js";
const authToken = localStorage.getItem("accessToken");

// Function to fetch current user data
const fetchCurrentUser = async () => {
  const response = await axios.get(`${client_url}/users/currentuser`, {
    withCredentials: true, // To send cookies with the request
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`, // If you are using Bearer tokens
    },
  });
  return response.data.data;
};

function UserPage() {
  const [openChangePassword, setChangePassword] = useState(false);
  const [openEditAccount, setEditAccount] = useState(false);
  const [openCreateAccount, setCreateAccount] = useState(false);
  const [openDelete, setDelete] = useState(false);
  const deleteMutation = useDeleteAccount(authToken);

  // Use React Query to fetch user data
  const {
    data: user,
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["currentUser"],
    queryFn: fetchCurrentUser,
    enabled: !!fetchCurrentUser,
  });

  const confirmDelete = () => {
    setDelete(true);
  };

  const handleEditProfile = () => {
    setEditAccount(true);
  };

  const handleCreateNewUser = () => {
    setCreateAccount(true);
  };

  const handleDeleteAccount = async () => {
    deleteMutation.mutate({ userId: "user-id" });
  };

  return (
    <div className="flex w-full h-screen bg-gray-100">
      <div className="w-1/6 h-screen border-r border-gray-300 shadow-lg">
        <Sidebar />
      </div>
      <div className="w-5/6 h-screen">
        <div className="font-body text-3xl px-6 py-4 h-screen bg-white shadow-lg overflow-auto">
          <Navbar />
          <hr className="border-t-2 border-gray-300 my-4" />
          <div className="w-full">
            {isLoading && <>Loading...</>}
            {error && <div>Error loading user data</div>}
            <div className="flex w-full flex-col gap-10 mb-6 px-6">
              <div className="flex flex-col gap-5">
                {user ? (
                  <>
                    <h2 className="text-2xl font-semibold">
                      Name: {user.fullName}
                    </h2>
                    <p className="text-gray-600 text-2xl">
                      Username: @{user.username}
                    </p>
                  </>
                ) : (
                  <p className="text-gray-600 text-2xl">
                    No user data available
                  </p>
                )}
              </div>
              <div className="space-x-4">
                <button
                  className="bg-blue-500 hover:bg-blue-600 transition duration-200 ease-in-out text-white px-4 py-2 rounded-md shadow-md"
                  onClick={() => setChangePassword(!openChangePassword)}
                >
                  {openChangePassword
                    ? "Close Change Password"
                    : "Change Password"}
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 transition duration-200 ease-in-out text-white px-4 py-2 rounded-md shadow-md"
                  onClick={confirmDelete}
                >
                  Delete Account
                </button>
                <button
                  className="bg-gray-500 hover:bg-gray-600 transition duration-200 ease-in-out text-white px-4 py-2 rounded-md shadow-md"
                  onClick={handleEditProfile}
                >
                  Edit Profile
                </button>
                <button
                  className="bg-gray-800 hover:bg-gray-900 transition duration-200 ease-in-out text-white px-4 py-2 rounded-md shadow-md"
                  onClick={handleCreateNewUser}
                >
                  Create New User
                </button>
              </div>
            </div>
            {openChangePassword && (
              <ChangePassword setChangePassword={setChangePassword} />
            )}
            {openDelete && (
              <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div className="bg-white rounded-lg shadow-lg p-6 text-center max-w-md">
                  <p className="text-lg mb-4">
                    Are you sure you want to delete your account?
                  </p>
                  <div className="flex justify-center space-x-4">
                    <button
                      className="bg-red-500 hover:bg-red-600 transition duration-200 ease-in-out text-white py-2 px-4 rounded shadow-md"
                      onClick={handleDeleteAccount}
                    >
                      Yes, Delete
                    </button>
                    <button
                      className="bg-gray-300 hover:bg-gray-400 transition duration-200 ease-in-out text-gray-800 py-2 px-4 rounded shadow-md"
                      onClick={() => setDelete(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}
            {openEditAccount && (
              <EditAccount setEditAccount={setEditAccount} user={user} />
            )}
            {openCreateAccount && (
              <CreateAccount setCreateAccount={setCreateAccount} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPage;
