import "./Product.css";

function Product({ title, price = 20, description, features }) {
  let IsDiscount = price >= 3000;
  let styles = { backgroundColor: IsDiscount && "black" };

  return (
    <div className="Product" style={styles}>
      <h1>{title}</h1>
      <p>Price: {price}</p>
      <h4>{description}</h4>
      <p>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </p>
      {IsDiscount && <p>Discount is 5%</p>}
    </div>
  );
}

export default Product;
