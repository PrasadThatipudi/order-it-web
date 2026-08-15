import { useEffect, useState } from "react";
import ProductCard from "./Product.tsx";
import API from "./api.ts";

const Products = () => {
  const [productResponse, setProducts] = useState({ products: [] });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setProducts(await API.fetchProducts());
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section id="products" style={{ display: "flex", flexWrap: "wrap" }}>
      {productResponse.products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};

export default Products;
