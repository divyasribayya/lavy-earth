"use client";
import Image from "next/image";
import Link from "next/link";
import { products } from "../data/products";
import { useState } from "react";
import { FaStar, FaArrowDown } from "react-icons/fa";

export default function ProductsList() {
  const [visibleCount, setVisibleCount] = useState(4);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <section id="product" className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-8">
          <p className="text-[#7EB693] text-sm font-semibold uppercase mb-2">Categories</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#274c5b]">Our Products</h2>
        </div>
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-10">
          {products.slice(0, visibleCount).map((product) => (
            <div
              key={product.id}
              className="bg-[#F9F8F8] p-4 rounded-lg shadow hover:shadow-lg transition-all"
            >
              {/* Tag */}
              <span className="inline-block bg-[#7EB693] text-white text-xs px-2 py-1 rounded-md mb-3">
                {product.tag}
              </span>
              {/* Image */}
              <div className="flex justify-center mb-3">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={190}
                  height={190}
                  className="object-cover rounded-md"
                />
              </div>
              {/* Product Name */}
              <p className="text-[#274c5b] font-semibold text-lg mb-2 text-center md:text-left">
                {product.name}
              </p>
              {/* Detail Section */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between border-t border-[#E5E5E5] pt-3 gap-3">
                {/* Prices */}
                <div className="flex gap-2">
                  <p className="text-gray-400 line-through text-sm font-semibold">
                    {product.discount}
                  </p>
                  <p className="text-[#274c5b] font-bold text-base">
                    {product.price}
                  </p>
                </div>
                {/* Rating */}
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                      key={star}
                      className={star <= product.rating ? "text-orange-400" : "text-gray-300"}
                      size={16}
                    />
                  ))}
                </div>
              </div>
              {/* Button */}
              <div className="mt-4 text-center">
                <Link
                  href="#"
                  className="inline-block bg-[#274c5b] text-white px-4 py-2 rounded-md hover:bg-[#3d6a7c] transition text-sm font-medium"
                >
                  Add to cart
                </Link>
              </div>
            </div>
          ))}
        </div>
        {/* Load More Button */}
        {visibleCount < products.length && (
          <div className="text-center">
            <button
              onClick={loadMore}
              className="inline-flex items-center gap-2 bg-[#274c5b] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#3d6a7c] transition"
            >
              Load More
              <FaArrowDown size={16} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
} 