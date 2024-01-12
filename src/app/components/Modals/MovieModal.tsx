import React, { useContext } from "react";
import { Movie } from "@/app/types/Movie";
import { GoDotFill } from "react-icons/go";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { CartContext } from "@/app/context/CartContext";

import { IoCartOutline } from "react-icons/io5";
interface MovieModalProps {
  movie: Movie;
  onClose: () => void;
}

const MovieModal: React.FC<MovieModalProps> = ({ movie, onClose }) => {
  const { addItem } = useContext(CartContext);
  return (
    <div className="z-auto fixed top-0 left-0 w-full h-screen bg-gray-900 bg-opacity-75 backdrop-blur flex justify-center items-center">
      <div className="bg-[#1F2936] p-5 rounded-lg shadow-lg w-[40vw] relative">
        <div className="absolute top-0 right-2">
          <button
            onClick={onClose}
            className="text-gray-600 text-2xl focus:outline-none"
          >
            &times;
          </button>
        </div>
        <div className="flex">
          <div className="w-1/3">
            <img
              src={movie.coverImage}
              alt={movie.title}
              className="w-full rounded-sm"
            />
            <button
              className="mt-4 bg-[#FFC900] inline-flex items-center justify-center px-4 py-2 rounded-md w-full"
              onClick={() => addItem(movie)}
            >
              <IoCartOutline className="mr-2" />
              Add to Cart
            </button>
          </div>
          <div className="w-2/3 pl-4">
            <h2 className="mb-1 text-xl font-bold text-gray-300">
              {movie.title}
            </h2>
            <p className="flex flex-row gap-1 text-center mb-1 text-sm text-gray-400">
              {movie.year}
              <GoDotFill className={"w-2 h-2 mx-1 text-gray-400 mt-1.5"} />
              {movie.duration} miniutes
            </p>
            <p className=" flex flex-row gap-1 mb-1 text-sm text-gray-400 ">
              {movie.genre}
              <GoDotFill className={"w-2 h-2 mx-1 text-gray-400 mt-1.5"} />
              <MdOutlineStarPurple500 className={"w-5 h-5  text-gray-400 "} />
              {movie.rating}
              <GoDotFill className={"w-2 h-2 mx-1 text-gray-400 mt-1.5"} />
              <p className="text-gray-300 font-bold ">
                ${movie.price.toFixed(2)}
              </p>
            </p>

            <div className=" border-b-[1px] border-gray-700 " />

            <p className="mb-4 mt-1 text-sm text-gray-400">
              {" "}
              {movie.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
