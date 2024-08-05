import { IHero } from "../../interfaces/components";

const HeroCard = ({ title, list, img, name, desc, color, btnTxt }: IHero) => {
  return (
    <div
      className={`container text-center h-[810px] py-5 flex flex-col justify-between bg-cover bg-center bg-no-repeat`}
      style={{ backgroundImage: `url(${img})` }}
    >
      <div>
        <h1 className={`font-bold text-4xl text-center my-5`} style={{ color }}>
          {title}
        </h1>
        <ul className="flex items-center gap-16 mb-5 justify-center">
          {list.map((item, index) =>
            index === 0 ? (
              <li key={item}>
                <button
                  className={`font-semibold text-xl border-b-2 pb-1`}
                  style={{ color, borderColor: color }}
                >
                  {item}
                </button>
              </li>
            ) : (
              <li key={item}>
                <button
                  className={`font-semibold text-xl border-b-2 border-transparent pb-1`}
                  style={{ color }}
                >
                  Top Deals
                </button>
              </li>
            )
          )}
        </ul>
      </div>
      <div>
        <h1 className={`font-bold text-5xl text-center my-5`} style={{ color }}>
          {name}
        </h1>
        <p className={`my-[8px] leading-[1.33] text-[18px]`} style={{ color }}>
          {desc}
        </p>
        <button
          className={`text-sm p-[10px_24px_11px_24px] rounded-[20px] font-bold ${
            color === "white" ? "bg-white text-black" : "bg-black text-white"
          }`}
          style={{ color: color === "white" ? "black" : "white" }}
        >
          {btnTxt}
        </button>
      </div>
    </div>
  );
};

export default HeroCard;
