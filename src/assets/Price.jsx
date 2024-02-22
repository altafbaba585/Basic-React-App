import "./Product1.css";

function Price({ oldPrices, newPrices }) {
  return (
    <div className="Price">
      <span className="oldprice">{oldPrices}</span>
      &nbsp; &nbsp; &nbsp; &nbsp;
      <span className="newprice">{newPrices}</span>
    </div>
  );
}

export default Price;
