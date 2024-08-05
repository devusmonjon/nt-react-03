import { products } from "../../constants";
import Product from "../product/product";

const Products = () => {
  return (
    <section>
      <div className="container text-center">
        <h1 className="font-bold text-3xl text-center my-10">
          Shop all latest offers and innovations
        </h1>
        <button className="font-semibold text-xl text-center border-b-2 border-black mb-5">
          View all offers
        </button>
        <ul className="flex items-center gap-4 mb-5 justify-center">
          <li>
            <button className="font-semibold text-xl border-b-2 border-black pb-1">
              For you
            </button>
          </li>
          <li>
            <button className="font-semibold text-xl border-b-2 border-transparent hover:border-black pb-1">
              Top Deals
            </button>
          </li>
          <li>
            <button className="font-semibold text-xl border-b-2 border-transparent hover:border-black pb-1">
              Mobile
            </button>
          </li>
          <li>
            <button className="font-semibold text-xl border-b-2 border-transparent hover:border-black pb-1">
              TV & Audio
            </button>
          </li>
          <li>
            <button className="font-semibold text-xl border-b-2 border-transparent hover:border-black pb-1">
              Home Applianes
            </button>
          </li>
          <li>
            <button className="font-semibold text-xl border-b-2 border-transparent hover:border-black pb-1">
              Computing
            </button>
          </li>
        </ul>
        <div className="flex justify-between flex-wrap gap-10">
          {products.map((product) => (
            <Product key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
