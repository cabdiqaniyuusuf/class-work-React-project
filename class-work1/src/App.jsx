import Header from "./Header";
import Cards from "./cards";

const products = [
  { id: 1, title: "Wireless Headphones", category: "Electronics", price: 59.99, inStock: true },
  { id: 2, title: "Running Shoes", category: "Fashion", price: 79.5, inStock: true },
  { id: 3, title: "Smart Watch", category: "Electronics", price: 120, inStock: false },
  { id: 4, title: "Leather Backpack", category: "Bags", price: 45.25, inStock: true },
  { id: 5, title: "Coffee Maker", category: "Home", price: 89.99, inStock: false },
  { id: 6, title: "Sunglasses", category: "Fashion", price: 25, inStock: true },
];

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f6f8",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <Header/>
      <Cards products={products} />
    </div>
  );
}

export default App;
