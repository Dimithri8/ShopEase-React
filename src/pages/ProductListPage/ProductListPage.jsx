import { useState, useEffect } from "react";

import Header from "../../components/Header/Header";
import Filter from "../../components/Filters/Filter";
import ProductCard from "../../components/ProductCard/ProductCard";

import "./ProductListPage.css";

export default function ProductListPage() {
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCondition, setSelectedCondition] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
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

  useEffect(() => {
    applyFilters();
  }, [selectedCategory, selectedCondition, selectedPrice]);

  function handleChange(event) {
    let userInput = event.target.value;
    setSearch(userInput);
    console.log(`Search term: ${search}`);
  }
  function clearFilter() {
    setProducts(allProducts);
    setSelectedCategory("");
    setSelectedCondition("");
    setSelectedPrice("");
  }
  function handleClick() {
    if (!search) {
      setProducts(allProducts);
    } else {
      setProducts(allProducts.filter((product) => product.name === search));
    }
  }
  function applyFilters() {
    let filtered = allProducts
      .filter(
        (product) => !selectedCategory || product.category === selectedCategory
      )
      .filter(
        (product) =>
          !selectedCondition || product.condition === selectedCondition
      )
      .filter((product) => !selectedPrice || product.price <= selectedPrice);
    setProducts(filtered);
  }
  function selectCategory(event) {
    let selectedValue = event.target.value;
    setSelectedCategory(selectedValue);
  }

  function selectConditon(event) {
    let selectedValue = event.target.value;
    setSelectedCondition(selectedValue);
  }
  function selectPrice(event) {
    let selectedValue = event.target.value;
    setSelectedPrice(selectedValue);
  }
  return (
    <>
      <Header
        input={search}
        handleChange={handleChange}
        handleClick={handleClick}
      />

      <Filter
        category={allProducts.map((product) => product.category)}
        condition={allProducts.map((product) => product.condition)}
        selectCategory={selectCategory}
        selectConditon={selectConditon}
        clearFilter={clearFilter}
        selectPrice={selectPrice}
        selectedCategory={selectedCategory}
        selectedCondition={selectedCondition}
        selectedPrice={selectedPrice}
      />

      <section className="product-cards-container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </>
  );
}
