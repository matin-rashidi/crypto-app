import React, { useEffect, useState } from "react";

// API
import { getCoins } from "../services/api";

// Components
import Loading from "./Loading";
import Coin from "./Coin";

// Icons
import dark from "../assets/dark.svg";
import light from "../assets/light.svg";

const Landing = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const fetchApi = async () => {
      setCoins(await getCoins());
    };

    fetchApi();
    localStorage.setItem("theme", "light");
  }, []);

  const searchHandler = (event) => {
    setSearch(event.target.value);
  };

  const searchedCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="w-full flex justify-center items-center gap-4">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={searchHandler}
          className="bg-slate-50 px-3 py-2 my-5 w-9/12 rounded-lg outline-none font-semibold focus:bg-white focus:shadow-md focus:ring-2 dark:bg-slate-500 dark:text-white transition-all border: ;
        md:w-6/12
        md:py-3"
        />
        <img
          onClick={() => {
              setDarkMode(!darkMode)
            const root = window.document.documentElement;
            root.classList.toggle("dark");
          }}
          className="w-7 h-fit cursor-pointer"
          src={darkMode ? light : dark}
          alt="switcher"
        />
      </div>
      {coins.length ? (
        <div className="bg-slate-50 w-10/12 border rounded-md dark:bg-slate-900 dark:border-slate-500 mb-8">
          {searchedCoins.map((coin) => (
            <Coin
              key={coin.id}
              name={coin.name}
              image={coin.image}
              symbol={coin.symbol}
              price={coin.current_price}
              marketCap={coin.market_cap}
              changePrice={coin.market_cap_change_percentage_24h}
            />
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Landing;
