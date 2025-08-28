import { useState, useEffect } from "react";

import Header from "../../components/Header/Header";
import Filter from "../../components/Filters/Filter";
import ProductCard from "../../components/ProductCard/ProductCard";

import "./ProductListPage.css";

export default function ProductListPage() {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    try {
      const response = await fetch(`http://localhost:3001/products`);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log(`Error couldn't fetch data`, error);
    }
  }
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Header />
      <Filter />
      <section className="product-cards-container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </>
  );
}
