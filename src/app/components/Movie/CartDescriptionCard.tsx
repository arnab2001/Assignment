import React, { useContext, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import { Movie } from "@/app/types/Movie";
import { CartContext } from "@/app/context/CartContext";
import { LuShoppingCart } from "react-icons/lu";
interface CartDescriptionCardProps {
  onCheckout: () => void;
  onCancel: () => void;
}

const CartDescriptionCard: React.FC<CartDescriptionCardProps> = ({
  onCheckout,
  onCancel,
}) => {
  const { items, getTotalCartValue, removeItem, getNumberOfItems } =
    useContext(CartContext);


  const handleRemoveFromCart = (movie: Movie) => {
    removeItem(movie);
  };

  return (
    <div
      className="absolute  bg-[#1F2936] divide-y divide-white rounded-sm shadow px-4 py-2 w-60"
      style={{ transform: "translate(-5%, 0%)" }}
    >
      {items.length > 0 ? (
        <ul className="py-2 text-sm text-gray-700">
          {items.map((movie) => (
            <li
              key={movie.id}
              className="flex items-center justify-between line border-b border-solid my-2 border-gray-600"
            >
              <div className="flex flex-row items-start justify-left w-full">
                <img
                  src={movie.coverImage}
                  alt={movie.title}
                  className="w-[50px] h-[70px] rounded-md mb-2 "
                />
                <div className="flex flex-col overflow-hidden items-start gap-1 p-1 pl-2">
                  <h4 className="truncate w-48 overflow-hidden whitespace-nowrap font-bold text-white ">
                    {movie.title.length > 20
                      ? `${movie.title.slice(0, 17)}...`
                      : movie.title}
                  </h4>
                  <p className="text-white">${movie.price.toFixed(2)}</p>
                </div>
              </div>
              <button onClick={() => handleRemoveFromCart(movie)}>
                <RxCross2 />
              </button>
            </li>
          ))}
          <div className="flex flex-col items-center gap-2 justify-between mt-2">
            <div className="flex flex-row items-top justify-between w-full">
              <div className="flex flex-col items-left justify-around w-full">
                <p className="text-gray-400 text-xs">Number of movies</p>
                <p className="text-white">{getNumberOfItems()}</p>
              </div>
              <div className="flex flex-col items-end justify-between w-full">
                <p className="text-gray-400 text-x">Total cost</p>
                <p className="text-white font-bold">
                  ${getTotalCartValue().toFixed(2)}
                </p>
              </div>
            </div>
            <button
              className="inline-flex items-center mb-2 justify-center bg-[#FFC900] hover:bg-yellow-600 font-extrabold   py-2 rounded-sm w-full"
              onClick={onCheckout}
            >
              <LuShoppingCart className="mr-4 font-extrabold" />{" "}
              <span>Checkout</span>
            </button>
            <button
              className="border-2 border-gray-500 hover:bg-gray-500 text-gray-300 p-2 rounded-sm w-full"
              onClick={onCancel}
            >
              Cancel
            </button>
          </div>
        </ul>
      ) : (
        <p className="text-white text-center p-10">Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartDescriptionCard;
