import { useState, useContext } from "react";
import { CartContext } from "@/app/context/CartContext";
import { Movie } from "@/app/types/Movie";
import { GoDotFill } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineStarPurple500 } from "react-icons/md";
import MovieModal from "../Modals/MovieModal";
interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleShowDetails = () => {
    setIsModalOpen(true);
  };
  const { addItem } = useContext(CartContext);
  return (
    <div className="flex flex-col max-w-sm bg-[#0a111c] hover:bg-[#1f2936] border border-gray-800 rounded-lg">
      <img
        className="rounded-t-lg cursor-pointer object-cover w-full sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] 2xl:h-[400px] "
        src={movie.coverImage}
        alt={movie.title}
        onClick={handleShowDetails}
      />

      <div className="flex-grow p-5 flex flex-col justify-end">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {movie.title}
        </h5>
        <p className="flex flex-row gap-1 text-center mb-2 text-m text-gray-300">
          {movie.genre}
          <GoDotFill className={"w-2 h-2 mx-1 text-gray-400 mt-1.5"} />
          <MdOutlineStarPurple500 className={"w-5 h-5  text-gray-300 "} />
          {movie.rating}
          <GoDotFill className={"w-2 h-2 mx-1 text-gray-400 mt-1.5"} /> $
          {movie.price.toFixed(2)}
        </p>
        <div className="flex justify-between gap-5 h-12">
          <button
            className="w-full font-semibold inline-flex items-center justify-center bg-[#FFC900] hover:bg-yellow-500 text-black rounded"
            onClick={() => addItem(movie)}
          >
            <IoCartOutline className="mr-2" />
            <span>Add</span>
          </button>
          <button
            className="w-full text-gray-100 hover:underline border border-gray-600 rounded "
            onClick={handleShowDetails}
          >
            View Details
          </button>
        </div>

        {isModalOpen && (
          <MovieModal movie={movie} onClose={() => setIsModalOpen(false)} />
        )}
      </div>
    </div>
  );
};

export default MovieCard;
