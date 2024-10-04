import React from "react";
import LoadingSpinner from "./LoadingSpinner";

function InclusionExclusionInfoDetails({
  trekInfo,
  trekInclusions,
  trekExclusions,
  trekCancellationPolicy,
  trekHighlights,
  isLoadingDate,
  isLoadingTrek,
}) {
  return (
    <div className="container mx-auto max-w-[1450px] w-full p-4 sm:p-6 md:p-8 lg:p-10 rounded-xl mb-6">
      {/* Trek Info, Highlights, and Cancellation Policy Sections */}
      <div className="flex flex-col lg:flex-row gap-6 md:gap-8 mb-6">
        {/* Trek Info Section */}
        <div className="flex-1 p-4 md:p-6 lg:p-8 rounded-lg bg-white shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-2 mb-4">
            <span role="img" aria-label="Trek Overview">
              🏞️
            </span>
            Trek Overview
          </h2>
          <div className="space-y-3 md:space-y-4">
            {isLoadingDate || isLoadingTrek ? (
              <div className="flex justify-center py-4">
                <LoadingSpinner />
              </div>
            ) : (
              trekInfo.map((info, index) => (
                <p
                  key={index}
                  className="text-gray-700 text-base md:text-lg font-medium leading-relaxed"
                >
                  <span>•</span> {info}
                </p>
              ))
            )}
          </div>
        </div>

        {/* Highlights Section */}
        {/* <div className="flex-1 p-4 md:p-6 lg:p-8 rounded-lg bg-white shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-2 mb-4">
            <span role="img" aria-label="Trek Highlights">
              🌟
            </span>
            Trek Highlights
          </h2>
          <ul className="list-disc list-inside text-base md:text-lg text-gray-800 space-y-2 pl-4">
            {isLoadingDate || isLoadingTrek ? (
              <div className="flex justify-center py-4">
                <LoadingSpinner />
              </div>
            ) : (
              trekHighlights.map((highlight, index) => (
                <li
                  key={index}
                  className="flex gap-2 md:gap-3 text-gray-700 text-base md:text-lg font-medium"
                >
                  <span>•</span> {highlight}
                </li>
              ))
            )}
          </ul>
        </div> */}

        {/* Cancellation Policy Section */}
        <div className="flex-1 p-4 md:p-6 lg:p-8 rounded-lg bg-white shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-2 mb-4">
            <span role="img" aria-label="Cancellation Policy">
              📢
            </span>
            Cancellation Policy
          </h2>
          <ul className="list-disc list-inside text-base md:text-lg text-gray-800 space-y-2 pl-4">
            {isLoadingDate || isLoadingTrek ? (
              <div className="flex justify-center py-4">
                <LoadingSpinner />
              </div>
            ) : (
              trekCancellationPolicy.map((policy, index) => (
                <li
                  key={index}
                  className="flex gap-2 md:gap-3 text-gray-700 text-base md:text-lg font-medium"
                >
                  <span>•</span> {policy}
                </li>
              ))
            )}
          </ul>
        </div>
      </div>

      {/* Exclusions and Inclusions Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div className="p-4 md:p-6 lg:p-8 rounded-lg bg-white shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-2 mb-4">
            <span role="img" aria-label="Exclusions">
              🚫
            </span>
            What's Not Included
          </h2>
          <ul className="list-disc list-inside text-base md:text-lg text-gray-800 space-y-2 pl-4">
            {isLoadingDate || isLoadingTrek ? (
              <div className="flex justify-center py-4">
                <LoadingSpinner />
              </div>
            ) : (
              trekExclusions.map((exclusion, index) => (
                <li
                  key={index}
                  className="flex gap-2 md:gap-3 text-gray-700 text-base md:text-lg font-medium"
                >
                  <span>•</span> {exclusion}
                </li>
              ))
            )}
          </ul>
        </div>

        <div className="p-4 md:p-6 lg:p-8 rounded-lg bg-white shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-2 mb-4">
            <span role="img" aria-label="Inclusions">
              ✅
            </span>
            What's Included
          </h2>
          <ul className="list-disc list-inside text-base md:text-lg text-gray-800 space-y-2 pl-4">
            {isLoadingDate || isLoadingTrek ? (
              <div className="flex justify-center py-4">
                <LoadingSpinner />
              </div>
            ) : (
              trekInclusions.map((inclusion, index) => (
                <li
                  key={index}
                  className="flex gap-2 md:gap-3 text-gray-700 text-base md:text-lg font-medium"
                >
                  <span>•</span>
                  {inclusion}
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default InclusionExclusionInfoDetails;
