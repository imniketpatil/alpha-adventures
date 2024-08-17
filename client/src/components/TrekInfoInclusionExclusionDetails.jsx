import React, { memo } from "react";

const TrekInfoInclusionExclusionDetails = memo(
  function TrekInfoInclusionExclusionDetails() {
    return (
      <div className="mx-auto max-w-[1380px] w-full p-8 rounded-xl mb-6">
        {/* Trek Info Section */}
        <div className="mb-8 p-6 rounded-lg bg-white shadow-lg">
          <h2 className="text-3xl font-extrabold text-gray-600 flex items-center gap-4 mb-4">
            <span>🏞️</span> <span>Trek Overview</span>
          </h2>
          <div className="space-y-4">
            {/* {trekInfo.map((info, index) => (
              <p
                key={index}
                className="text-gray-700 text-lg font-semibold leading-relaxed"
              >
                {info}
              </p>
            ))} */}
          </div>
        </div>

        {/* Highlights Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-3xl font-extrabold text-gray-600 flex items-center gap-4 mb-4">
              <span>🌟</span> <span>Trek Highlights</span>
            </h2>
            <ul className="list-disc list-inside text-lg text-gray-800 space-y-2 pl-4">
              {/* {trekHighlights.map((highlight, index) => (
                <li
                  key={index}
                  className="flex text-gray-700 text-lg font-semibold gap-4"
                >
                  <span>•</span> <span>{highlight}</span>
                </li>
              ))} */}
            </ul>
          </div>

          {/* Cancellation Policy Section */}
          <div className="p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-3xl font-extrabold text-gray-600 flex items-center gap-4 mb-4">
              <span>📢</span> <span>Cancellation Policy</span>
            </h2>
            <ul className="list-disc list-inside text-lg text-gray-800 space-y-2 pl-4">
              {/* {trekCancellationPolicy.map((policy, index) => (
                <li
                  key={index}
                  className="flex gap-4 text-gray-700 text-lg font-semibold"
                >
                  <span>•</span> <span>{policy}</span>
                </li>
              ))} */}
            </ul>
          </div>
        </div>

        {/* Exclusions and Inclusions Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-3xl font-extrabold text-gray-600 flex items-center gap-4 mb-4">
              <span>🚫</span> <span>What's Not Included</span>
            </h2>
            <ul className="list-disc list-inside text-lg text-gray-800 space-y-2 pl-4">
              {/* {trekExclusions.map((exclusion, index) => (
                <li
                  key={index}
                  className="flex gap-4 text-gray-700 text-lg font-semibold"
                >
                  <span>•</span> <span>{exclusion}</span>
                </li>
              ))} */}
            </ul>
          </div>

          <div className="p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-3xl font-extrabold text-gray-600 flex items-center gap-4 mb-4">
              <span>✅</span> <span>What's Included</span>
            </h2>
            <ul className="list-disc list-inside text-lg text-gray-800 space-y-2 pl-4">
              {/* {trekInclusions.map((inclusion, index) => (
                <li
                  key={index}
                  className="flex gap-4 text-gray-700 text-lg font-semibold"
                >
                  <span>•</span> <span>{inclusion}</span>
                </li>
              ))} */}
            </ul>
          </div>
        </div>
      </div>
    );
  }
);

export default TrekInfoInclusionExclusionDetails;
