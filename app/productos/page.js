"use client";

import products from "@/data/products.json";
import ProductCard from "@/components/ProductCard";
import AuthGuard from "@/components/AuthGuard";
import "./productos.css";

export default function Productos() {
  return (
    <AuthGuard>
      <div style={{ padding: "20px" }}>
        <h1 className="products-title">Productos en venta</h1>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "20px"
        }}>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </AuthGuard>
  );
}
