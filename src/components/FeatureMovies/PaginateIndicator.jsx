const PaginateIndicator = ({ movies, activeMovieId, setActiveMovieId }) => {
  const handleClick = (movie) => {
    setActiveMovieId(movie.id);
  };

  return (
    <div className="absolute bottom-[10%] right-8">
      <ul className="flex gap-1">
        {movies.map((movie) => {
          return (
            <li
              key={movie.id}
              className={`h-1 w-6 cursor-pointer ${movie.id === activeMovieId ? "bg-slate-100" : "bg-slate-600"}`}
              onClick={() => handleClick(movie)}
            ></li>
          );
        })}
      </ul>
    </div>
  );
};

export default PaginateIndicator;
