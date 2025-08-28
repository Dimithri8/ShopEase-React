import { useState, useEffect } from "react";

import Header from "../../components/Header/Header";
import Filter from "../../components/Filters/Filter";
import ProductCard from "../../components/ProductCard/ProductCard";

import "./ProductListPage.css";

export default function ProductListPage() {
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  async function getProducts() {
    try {
      const response = await fetch(`http://localhost:3001/products`);
      const data = await response.json();
      setAllProducts(data);
      setProducts(data);
    } catch (error) {
      console.log(`Error couldn't fetch data`, error);
    }
  }
  useEffect(() => {
    getProducts();
  }, []);

  function handleChange(event) {
    let userInput = event.target.value;
    setSearch(userInput);
    console.log(`Search term: ${search}`);
  }

  function handleClick() {
    if (!search) {
      setProducts(allProducts);
    } else {
      setProducts(allProducts.filter((product) => product.name === search));
    }
  }
  return (
    <>
      <Header
        input={search}
        handleChange={handleChange}
        handleClick={handleClick}
      />
      <Filter />
      <section className="product-cards-container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </>
  );
}
