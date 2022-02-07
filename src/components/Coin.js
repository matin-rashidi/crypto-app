import React from "react";

const Coin = ({ name, image, symbol, marketCap, price, changePrice }) => {
  return (
    <div
      className="border-b last:border-none p-5 flex flex-col items-center gap-3
    sm:flex-row
    sm:gap-0
    sm:justify-between
    dark:text-slate-300
    dark:border-slate-500"
    >
      <div className="flex flex-col items-center gap-3 sm:flex-row sm:w-1/5">
        <img className="w-20 h-auto sm:w-12" src={image} alt={name} />
        <span title={name} className="font-bold">
          {name.length > 10 ? `${name.slice(0, 11)}...` : name}
        </span>
      </div>
      <span className="bg-amber-400 text-white p-1 rounded-sm font-semibold sm:w-1/5  sm:text-center sm:bg-inherit sm:text-black dark:text-white sm:dark:text-slate-300">{symbol.toUpperCase()}</span>
      <span className="sm:w-1/5  sm:text-center">$ {price.toLocaleString()}</span>
      <span
        className={
          changePrice > 0
            ? "text-green-500 font-semibold sm:w-1/5  sm:text-center"
            : "text-red-500 font-semibold sm:w-1/5  sm:text-center"
        }
      >
        {changePrice.toFixed(2)} %
      </span>
      <span className="sm:w-1/5  sm:text-center">${marketCap.toLocaleString()}</span>
    </div>
  );
};

export default Coin;
