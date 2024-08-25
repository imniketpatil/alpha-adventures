import React from "react";

const ProductModal = ({ isOpen, onClose, product }) => {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center font-body overflow-y-auto">
      <div
        className="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity"
        aria-hidden="true"
        onClick={onClose}
      ></div>

      <div className="relative bg-white rounded-lg shadow-lg transform transition-all sm:max-w-2xl sm:w-full">
        <div className="px-6 py-5">
          <div className="sm:flex sm:items-start">
            <div className="w-full text-center sm:text-left">
              <h3 className="text-2xl font-bold leading-6 text-gray-900 mb-4">
                {product.name}
              </h3>
              <div className="mb-4 flex justify-center items-center">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="rounded-lg max-h-[500px] w-full object-contain"
                />
              </div>

              <div className="mb-4">
                <p className="text-lg font-semibold text-gray-700">
                  Price:{" "}
                  <span className="text-indigo-600">Rs {product.price}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-6 py-3 bg-gray-50 flex justify-end">
          <button
            onClick={onClose}
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
