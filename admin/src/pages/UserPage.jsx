import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import ChangePassword from "../components/ChangePassword";
import useDeleteAccount from "../hooks/useDeleteAccount";
import EditAccount from "../components/EditAccount";
import CreateAccount from "../components/CreateAccount.jsx";

// Function to fetch current user data
const fetchCurrentUser = async () => {
  const response = await axios.get(
    "http://localhost:8000/api/v1/users/currentuser",
    {
      withCredentials: true, // To send cookies with the request
    }
  );
  return response.data.data;
};

function UserPage() {
  const [openChangePassword, setChangePassword] = useState(false);
  const [openEditAccount, setEditAccount] = useState(false);
  const [openCreateAccount, setCreateAccount] = useState(false);
  const [openDelete, setDelete] = useState(false);
  const deleteMutation = useDeleteAccount();

  // Use React Query to fetch user data
  const {
    data: user,
    error,
    isLoading,
    refetch, // Function to refetch user data after mutation
  } = useQuery({ queryKey: ["currentUser"], queryFn: fetchCurrentUser });

  const confirmDelete = () => {
    setDelete(true); // Open the delete confirmation modal
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

  if (isLoading) {
    return <>Loading...</>;
  }

  if (error) {
    return <div>Error loading user data</div>;
  }

  return (
    <div className="flex w-full h-screen">
      <div className="w-1/6 h-screen border-r-2 border-gray-300">
        <Sidebar />
      </div>
      <div className="w-5/6 h-screen">
        <div className="font-body text-3xl flex-grow px-4 pb-4 h-screen bg-white">
          <Navbar />
          <hr className="border-1 border-gray-300" />
          <div className="w-full mt-10">
            <div className="flex flex-col gap-10 justify-between items-center mb-6">
              <div className="flex flex-col gap-5">
                <h2 className="text-2xl font-semibold">
                  Name: {user.fullName}
                </h2>
                <p className="text-gray-600 text-2xl">
                  Username: @{user.username}
                </p>
              </div>
              <div className="space-x-4">
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                  onClick={() => setChangePassword(!openChangePassword)}
                >
                  {openChangePassword
                    ? "Close Change Password"
                    : "Change Password"}
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
                  onClick={confirmDelete}
                >
                  Delete Account
                </button>
                <button
                  className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md"
                  onClick={handleEditProfile}
                >
                  Edit Profile
                </button>
                <button
                  className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-md"
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
                <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg text-center max-w-md">
                  <p className="text-gray-800 text-lg md:text-xl mb-4">
                    Are you sure you want to delete your account?
                  </p>
                  <div className="flex justify-center gap-4">
                    <button
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors focus:outline-none"
                      onClick={handleDeleteAccount} // Confirm deletion
                    >
                      Yes, Delete
                    </button>
                    <button
                      className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors focus:outline-none"
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
