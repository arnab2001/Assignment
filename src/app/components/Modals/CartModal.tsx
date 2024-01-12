import React, { useState, useRef, useEffect, useContext } from "react";
import { IoCartOutline } from "react-icons/io5";
import CartDescriptionCard from "../Movie/CartDescriptionCard";
import { CartContext } from "../../context/CartContext";
interface CartButtonProps {}

const CartButton: React.FC<CartButtonProps> = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { getNumberOfItems } = useContext(CartContext);
  const numberOfItems = getNumberOfItems();
  const handleCheckout = () => {
    setIsDropdownOpen(false);
    alert("Checkout");
  };

  const handleCancel = () => {
    setIsDropdownOpen(false);
    alert("Cancel");
  };

  // const movie: Movie =

  useEffect(() => {
    if (buttonRef.current) {
      const { top, left } = buttonRef.current.getBoundingClientRect();
      setDropdownPosition({ top: top + 30, left: -200 });
    }
  }, [buttonRef, isDropdownOpen]);

  return (
    <div className="relative inline-block">
      <button
        ref={buttonRef}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="relative "
      >
        <span className="relative">
          <IoCartOutline
            className="w-6 h-6 mt-2 "
            style={{ color: isDropdownOpen ? "#9CA3AF" : "#71717a" }}
          />
          {numberOfItems > 0 && (
            <span
              className="absolute top-0 left-0 rounded-full w-4 h-4 text-center text-xs font-bold bg-black"
              style={{ backgroundColor: "#FFC900", color: "black" }}
            >
              {numberOfItems}
            </span>
          )}
        </span>
      </button>

      {isDropdownOpen && (
        <div
          className="absolute  bg-[#1F2936] divide-y divide-white rounded-sm shadow  w-100 h-40 "
          style={{ top: dropdownPosition.top, left: dropdownPosition.left }}
        >
          <CartDescriptionCard
            onCancel={() => handleCancel()}
            onCheckout={() => handleCheckout()}
          />
        </div>
      )}
    </div>
  );
};

export default CartButton;
