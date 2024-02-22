import Product from "./Product.jsx";

function ProductTab() {
  let option = ["speed", "realiable", "Good"];
  return (
    <div className="ProductTab">
      <Product
        title="pen"
        price={4000}
        description="Blue Pen"
        features={option}
      />
      <Product
        title="book"
        price={2000}
        description="Sample book"
        features={option}
      />
      <Product title="Pencil" description="Nataraj" features={option} />
    </div>
  );
}

export default ProductTab;
