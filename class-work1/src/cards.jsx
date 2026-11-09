

function Card({ title, category, price, inStock }) {
  return (
    <div
      style={{
        background: "white",
        borderRadius: "12px",
        padding: "14px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        textAlign: "center",
      }}
    >
      <small style={{ background: "#e0e7ff", color: "#1e3a8a", padding: "2px 10px", borderRadius: "20px" }}>
        {category}
      </small>
      <h3>{title}</h3>
      <p style={{ fontSize: "22px", fontWeight: "bold", color: "#047857" }}>${price.toFixed(2)}</p>
      <p style={{ fontWeight: "bold", color: inStock ? "#16a34a" : "#dc2626" }}>
        {inStock ? "● In Stock" : "● Out of Stock"}
      </p>
      <button
        onClick={() => alert(`You are viewing: ${title}`)}
        style={{ background: "#1e3a8a", color: "white", border: "none", padding: "10px 18px", borderRadius: "6px", cursor: "pointer" }}
      >
        View Product
      </button>
    </div>
  );
}
 
function Cards({ products }) {
  return (
    <main
      style={{
        maxWidth: "1100px",
        margin: "24px auto",
        padding: "0 16px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
        gap: "20px",
      }}
    >
      {products.map((p) => (
        <Card key={p.id} title={p.title} category={p.category} price={p.price} inStock={p.inStock} />
      ))}
    </main>
  );
}
 
export default Cards;