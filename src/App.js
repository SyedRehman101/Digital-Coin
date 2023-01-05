import axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from "./components/Cards";

const api =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

const App = () => {
  const [state, setState] = useState([]);
  useEffect(() => {
    axios.get(api).then((res) => {
      setState(res.data);
    });
  }, []);

  return (
    <>
    <h1 className="text-center bg-black font-bold font-serif text-white p-5 text-4xl">Digital Coins</h1>
    <div className="p-20 bg-black">
      <div className=" grid grid-cols-4  gap-32 p-5 bg-black">
        {state.map((val) => {
          return(
            <Cards image={val.image}
          coinHeading={val.name}
          coinPrice={"$"+val.current_price} />
          ) 
        })}
      </div>
      </div>
      </>
    
  );
};

export default App;
