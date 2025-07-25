"use client";

import ProductCard from "@/components/ProductCard/ProductCard";
import type { Product } from "@/types";
import { useEffect, useState } from "react";

export default function ProductsClient() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    fetchProducts();
  }, []);
  async function fetchProducts() {
    const res = await fetch("https://api.escuelajs.co/api/v1/products");
    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }
    const arr = await res.json();
    setProducts(arr);
  }
  return (
    <div>
      <ul>
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </ul>
    </div>
  );
}
