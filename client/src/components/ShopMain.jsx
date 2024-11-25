import React, { useState } from "react";
import ProductModal from "./ProductModel";
import image1 from "/images/RUB-50RED.jpg";
import image2 from "/images/RUB-50BLUE.jpg";
import image3 from "/images/OD-4BLACK.jpg";
import image4 from "/images/OD-1BLACK.jpg";
import image5 from "/images/OD-1BROWN.jpg";
import image6 from "/images/TrekingStick.jpg";

const products = [
  {
    name: "RUB-50 RED",
    price: "1799",
    imageSrc: image1,
    imageAlt: "RUB-50 RED Shoe",
    ProductDetails:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    AnkleLength: "High Ankle (Prevents Ankle Twist)",
    Weight: "450 Grams (each)",
    Sole: "Anti-skid rubber gum sole",
    Properties: "Water-resistant",
  },
  {
    name: "RUB-50 BLUE",
    price: "1799",
    imageSrc: image2,
    imageAlt: "RUB-50 BLUE",
    ProductDetails:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    AnkleLength: "High Ankle (Prevents Ankle Twist)",
    Weight: "450 Grams (each)",
    Sole: "Anti-skid rubber gum sole",
    Properties: "Water-resistant",
  },
  {
    name: "OD-4 BLACK",
    price: "1799",
    imageSrc: image3,
    imageAlt: "OD-4 BLACK",
    ProductDetails:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    AnkleLength: "High Ankle (Prevents Ankle Twist)",
    Weight: "450 Grams (each)",
    Sole: "Anti-skid rubber gum sole",
    Properties: "Water-resistant",
  },
  {
    name: "OD-1 BLACK",
    price: "1299",
    imageSrc: image4,
    imageAlt: "OD-1 BLACK",
    ProductDetails:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    AnkleLength: "High Ankle (Prevents Ankle Twist)",
    Weight: "450 Grams (each)",
    Sole: "Anti-skid rubber gum sole",
    Properties: "Water-resistant",
  },
  {
    name: "OD-1 BROWN",
    price: "1299",
    imageSrc: image5,
    imageAlt: "OD-1 BROWN",
    ProductDetails:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    AnkleLength: "High Ankle (Prevents Ankle Twist)",
    Weight: "450 Grams (each)",
    Sole: "Anti-skid rubber gum sole",
    Properties: "Water-resistant",
  },
];

const TrekStick = {
  name: "Trekking Pole",
  price: "549, Available on Rent (Rs 50 per day)",
  imageSrc: image6,
  imageAlt: "Trekking Pole",
  ProductDetails: [
    'Collapsible: Fully extended - 52", Collapsed - 25", Disassembled - 21".',
    "Lightweight: 290 gm.",
    "Anti-Shock: The shock-absorbent design helps to reduce strains on hands and wrists during trekking, very helpful for people with weak joints, prior sports injuries, or unstable hips, knees, or ankles.",
    "Perfect for Nordic walking, regular walks, leisurely hiking, or adventurous treks.",
  ],
};

const ShopMain = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setModalOpen(false);
  };

  const handleBooking = (productName) => {
    const message = `Hey Alpha Adventures, I'm interested in the ${productName}. Can you provide more details?`;
    const whatsappNumber = "+919403449240"; // Replace with your actual WhatsApp number
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="bg-gray-100 font-body min-h-screen">
      <div className="container mx-auto px-4 py-16 sm:px-6 sm:py-12 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Explore Our Shoes Collection
        </h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group cursor-pointer bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 transform"
            >
              <div
                className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-gray-200"
                onClick={() => openModal(product)}
              >
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="object-cover object-center group-hover:opacity-75 transition-opacity duration-300"
                />
              </div>
              <div className="mt-4 text-start">
                <h3 className="text-lg font-semibold text-gray-900">
                  {product.name}
                </h3>
                <p className="mt-1 text-sm text-gray-700">Rs {product.price}</p>
                <p className="mt-2 text-sm text-gray-500">
                  {product.ProductDetails}
                </p>
                <ul className="mt-4 text-sm text-gray-600 space-y-1">
                  <li>
                    <strong>Ankle Length:</strong> {product.AnkleLength}
                  </li>
                  <li>
                    <strong>Weight:</strong> {product.Weight}
                  </li>
                  <li>
                    <strong>Sole:</strong> {product.Sole}
                  </li>
                  <li>
                    <strong>Properties:</strong> {product.Properties}
                  </li>
                </ul>
              </div>
              <button
                className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                onClick={() => handleBooking(product.name)}
              >
                Order Now
              </button>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-center text-gray-800 my-8">
          Explore Our Trekking Equipments
        </h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8 items-center">
          <div
            className="group cursor-pointer bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 transform"
            onClick={() => openModal(TrekStick)}
          >
            <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-gray-200">
              <img
                src={TrekStick.imageSrc}
                alt={TrekStick.imageAlt}
                className="object-cover object-center group-hover:opacity-75 transition-opacity duration-300"
              />
            </div>
            <div className="mt-4 text-start">
              <h3 className="text-lg font-semibold text-gray-900">
                {TrekStick.name}
              </h3>
              <p className="mt-1 text-sm text-gray-700">Rs {TrekStick.price}</p>
              <p className="mt-2 text-sm text-gray-500">
                {TrekStick.ProductDetails.map((detail, index) => (
                  <span key={index} className="block">
                    {detail}
                  </span>
                ))}
              </p>
            </div>
            <button
              className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
              onClick={() => handleBooking(TrekStick.name)}
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
      <ProductModal
        isOpen={isModalOpen}
        onClose={closeModal}
        product={selectedProduct}
      />
    </div>
  );
};

export default ShopMain;
