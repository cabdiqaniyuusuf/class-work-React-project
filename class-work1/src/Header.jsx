function Header({ name, tagline }) {
  return (
    <header style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Navbar */}
      <nav
        style={{
          background: "white",
          padding: "16px 28px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2 style={{ margin: 0, fontSize: "22px", color: "#17658a" }}>MiniMart.</h2>

        <ul
          style={{
            margin: 0,
            padding: 0,
            listStyle: "none",
            display: "flex",
            gap: "48px",
            fontSize: "14px",
            color: "#5b7083",
          }}
        >
          <li>Home</li>
          <li>Products</li>
          <li>About</li>
        </ul>
      </nav>

      {/* Banner */}
      <section
        style={{
          background: "#e3f2f7",
          padding: "24px 28px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <h1 style={{ margin: 0, fontSize: "30px", color: "#1e2f4d" }}>{name}shop your essential</h1>
          <p style={{ margin: "6px 0 0", fontSize: "14px", color: "#5b7083" }}>{tagline}explore every day tech product at simple price</p>
        </div>

        <span
          style={{
            padding: "8px 18px",
            border: "1px solid #a9d3df",
            borderRadius: "999px",
            background: "#eef8fb",
            color: "#17687f",
            fontSize: "12px",
            fontWeight: "bold",
            letterSpacing: "0.5px",
          }}
        >
          PRODUCT CATALOG
        </span>
      </section>
    </header>
  );
}

export default Header;