import React from "react";
const Cards = ({image,coinHeading, coinPrice}) => {
  return (
    <div>
      <div class="border-2 hover:scale-105 ease-in duration-100  border-white rounded-2xl ">
        <div className="p-5 w-full h-48">
          <img class=" mx-auto p-3 h-36 " src={image} alt={""} />
        </div>

        <div class="p-5 bg-gray-600 rounded-2xl">
          <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {coinHeading}
          </h5>

          <p class="mb-3 font-normal text-gray-700 dark:text-white">
            {coinPrice}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
