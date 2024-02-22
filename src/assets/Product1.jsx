import Price from "./Price";
import "./Product1.css";

function Product1({ title, idx }) {
  let oldPrices = ["12,111", "599", "699", "799"];
  let newPrices = ["10,111", "499", "299", "399"];
  let description = [
    ["8,000 dpi", "intutive surface"],
    ["intutive surface", "designed for ipad pro"],
    ["designed for ipad pro", "Good Product"],
    ["wireless", "Recomended by Product Designer"],
  ];
  return (
    <div className="flex">
      <div className="Product1">
        <h1>{title}</h1>

        <h2>{description[idx][0]}</h2>
        <h2>{description[idx][1]}</h2>

        <Price oldPrices={oldPrices[idx]} newPrices={newPrices[idx]} />
      </div>
    </div>
  );
}

export default Product1;
