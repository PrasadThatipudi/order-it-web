import type { INR, Product } from "./types.ts";

type ProductCardProps = {
  product: Product;
};

const representCost = (cost: INR) =>
  `₹${cost.rupees}.${cost.paisa.toString().padStart(2, "0")}`;

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div
      className="product"
      id={`product-${product.id}`}
      style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}
    >
      <p>{product.name}</p>
      <p>{`Cost: ${representCost(product.cost)}`}</p>
      <button type="button" onClick={() => alert(`Buying ${product.name}`)}>
        Buy Now 
      </button>
    </div>
  );
}
