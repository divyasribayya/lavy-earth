"use client";
import Image from "next/image";
import Link from "next/link";
import { products } from "../data/products";
import { useState } from "react";
import { FaStar, FaArrowDown } from "react-icons/fa";

const categories = [
  "Blended",
  "Ground",
  
];

export default function ProductsList() {
  const [selectedCategory, setSelectedCategory] = useState("Blended");
  const [selectedProduct, setSelectedProduct] = useState(products[1]?.id || null); // Default to Sesame Seeds as in screenshot

  return (
    <section id="product" className="py-16 bg-[#FFFCF5]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col items-start">
            <span className="text-sm font-bold tracking-wide text-[#222] mb-1 flex items-center gap-2">
              PRODUCTS
              <span className="block w-8 h-0.5 bg-[#222] mt-1" />
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#F9B233] mb-2">
              Our Products <span className="text-[#222]">Here..</span>
            </h2>
          </div>
        </div>
        {/* Category Tabs */}
        <div className="flex gap-8 mb-10 border-b border-[#F9B233]/30">
          {categories.map((cat, idx) => (
            <button
              key={cat + idx}
              className={`pb-2 text-lg font-semibold transition-colors ${
                selectedCategory === cat
                  ? "text-[#222] border-b-2 border-[#F9B233]"
                  : "text-[#bbb] border-b-2 border-transparent hover:text-[#F9B233]"
              }`}
              onClick={() => setSelectedCategory(cat)}
              type="button"
            >
              {cat}
            </button>
          ))}
        </div>
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.slice(0, 8).map((product) => (
            <div
              key={product.id}
              className={`bg-white p-6 rounded-lg shadow-sm flex flex-col items-center cursor-pointer transition-all border-2 ${
                selectedProduct === product.id
                  ? "border-[#F9B233]"
                  : "border-transparent hover:border-[#F9B233]/60"
              }`}
              onClick={() => setSelectedProduct(product.id)}
            >
              <div className="mb-4 w-full flex justify-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={180}
                  height={180}
                  className="object-contain"
                />
              </div>
              <p className={`text-lg font-medium text-center mt-2 ${selectedProduct === product.id ? "text-[#F9B233]" : "text-[#222]"}`}>
                {product.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 