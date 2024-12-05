import { useQuery } from "@tanstack/react-query";
import React from "react";
import getMembers from "../hooks/getMembers";
import LoadingSpinner from "./LoadingSpinner";

const TeamSection = () => {
  const {
    data: leaders = [], // Provide a default empty array
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["Members"],
    queryFn: getMembers,
  });

  // console.log(leaders);

  if (isLoading) {
    <div className="h-screen w-screen flex items-center justify-center">
      <LoadingSpinner />
    </div>;
  }

  return (
    <div className="bg-white py-12 sm:py-24 font-body">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet our Leaders
          </h2>
          {/* <p className="mt-6 text-lg leading-8 text-gray-600">
            Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae
            elementum enim vitae ullamcorper suspendisse.
          </p> */}
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {leaders.map((leader, index) => (
            <li key={index}>
              <div className="flex items-center gap-x-6">
                <img
                  className="h-16 w-16 rounded-full"
                  src={leader.images[0]}
                  alt={leader.name}
                />
                <div>
                  <h3 className="text-base flex items-center font-semibold leading-7 tracking-tight text-gray-900">
                    {leader.name}

                    <a
                      className="ml-3 text-indigo-300 cursor-pointer hover:text-indigo-600"
                      href={leader.instagramId}
                      target="_blank"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          width="20"
                          height="20"
                          x="2"
                          y="2"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                      </svg>
                    </a>
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    {leader.bio}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TeamSection;
