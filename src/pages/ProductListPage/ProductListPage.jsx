import Header from "../../components/Header/Header";
import Filter from "../../components/Filters/Filter";
import ProductCard from "../../components/ProductCard/ProductCard";

import "./ProductListPage.css";
export default function ProductListPage() {
  return (
    <>
      <Header />
      <Filter />
      <section className="product-cards-container">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </section>
    </>
  );
}
