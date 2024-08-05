import { IProduct } from "../../interfaces/constants";

const Product = ({ id, title, img, desc, newest }: IProduct) => {
  return (
    <a
      href={`/products/${id}`}
      className="w-[448px] h-[330px] rounded-2xl bg-[#f4f4f4] flex justify-center flex-col overflow-hidden relative"
    >
      <div className="flex items-center justify-center hover:scale-105 duration-300">
        <img src={img} alt={title} className="object-contain" />
      </div>
      <h3 className="text-center font-bold px-20 mt-10">
        {title.slice(0, 63)}
        {title.length < 50 ? "" : "..."}
      </h3>
      <p className="px-20 font-thin text-sm text-center mt-5">{desc}</p>
      {newest && (
        <span className="px-1 font-mb text-white text-sm rounded-2xl bg-[#2085f8] w-fit absolute left-5 top-5">
          New
        </span>
      )}
    </a>
  );
};

export default Product;
