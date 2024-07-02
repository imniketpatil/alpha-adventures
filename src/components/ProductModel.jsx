import React from "react";

const ProductModal = ({ isOpen, onClose, product }) => {
  if (!isOpen || !product) return null; // Add a check for product being undefined

  return (
    <div className="fixed inset-0 overflow-y-auto font-body z-50 flex items-center justify-center">
      <div
        className="fixed inset-0 transition-opacity "
        aria-hidden="true"
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>

      <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-xl sm:max-h-2xl sm:w-full ">
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            <div className="text-center sm:text-left w-full">
              <h3
                className="text-xl font-semibold leading-6 text-gray-900"
                id="modal-headline"
              >
                {product.name}
              </h3>
              <div className="mt-2  flex justify-center items-center">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-64 w-full object-contain"
                />
              </div>
              <div className="mt-2">
                <p className="text-lg text-gray-500">
                  Price: Rs {product.price}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button
            onClick={onClose}
            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
