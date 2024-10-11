import React from "react";

function RefundPolicy() {
  return (
    <div>
      {/* Header Section */}
      <div className="bg-gray-50 py-12 font-sans">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Refund & Cancellation Policy
            </h1>
          </div>

          {/* Policy Section */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Terms & Conditions
            </h2>

            {/* Policy Items */}
            <div className="space-y-6">
              <div className="p-4 border-l-4 border-red-500 bg-red-50">
                <p className="text-gray-800 text-lg">
                  <strong>No refund</strong> for cancellations made{" "}
                  <strong>9 days or less</strong> before the trip.
                </p>
              </div>

              <div className="p-4 border-l-4 border-yellow-500 bg-yellow-50">
                <p className="text-gray-800 text-lg">
                  <strong>25% refund</strong> for cancellations made{" "}
                  <strong>10 to 14 days</strong> before the trip.
                </p>
              </div>

              <div className="p-4 border-l-4 border-blue-500 bg-blue-50">
                <p className="text-gray-800 text-lg">
                  <strong>50% refund</strong> for cancellations made{" "}
                  <strong>15 to 30 days</strong> before the trip.
                </p>
              </div>

              <div className="p-4 border-l-4 border-green-500 bg-green-50">
                <p className="text-gray-800 text-lg">
                  <strong>100% refund</strong> if the trek or trip is canceled
                  by us due to unforeseen circumstances.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RefundPolicy;
