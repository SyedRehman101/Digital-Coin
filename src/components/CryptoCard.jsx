import React from "react";

const CryptoCard = ({ image, name, price }) => {
  return (
    <div className="card block p-6 max-w-sm bg-gray-400 rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <div className="card_image ">
        <img src={image} alt={name} />
      </div>
      <div className="card_info">
        <p className="text-lg font-bold">{name}</p>
        <p className="text-xs font-semibold">{"$" + price}</p>
      </div>
    </div>
  );
};

export default CryptoCard;
