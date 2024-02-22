import Product1 from "./Product1";
import "./Product1.css";
function ProductTab1() {
  return (
    <div className="ProductTab1">
      <Product1 title="Logitech mx master" idx={0} />
      <Product1 title="Apple Pencil " idx={1} />
      <Product1 title="Zebronics zeb transfer " idx={2} />
      <Product1 title=" Patromnics" idx={3} />
    </div>
  );
}
export default ProductTab1;
