import React from "react";
import CryptoCard from "./CryptoCard";

const CryptoList = ({ coinsData }) => {
  return (
    <div className="crypto_list grid grid-cols-4 h-min">
    {coinsData.map((coins, i) => {
      return (
        <div className="p-2">
        <CryptoCard
            key={i}
            image={coins.image}
            name={coins.name}
            price={coins.current_price}
          /></div>
          
        );
      })}
    </div>
  );
};

export default CryptoList;
