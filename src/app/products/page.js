"use client";
import Image from "next/image";
import Link from "next/link";
import { products } from "../../data/products";
import { useState } from "react";
import { FaStar, FaArrowDown } from "react-icons/fa";
import Banner from "../../components/Banner";
import ProductsList from "../../components/ProductsList";

export default function Products() {
  const [visibleCount, setVisibleCount] = useState(4);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <>
      <Banner title="Products" bgImage="/contact-page/Banner.png" />
      <ProductsList />
    </>
  );
}
