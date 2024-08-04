import React from "react";
import CircularProgressBar from "./CircularProgressBar";

const MovieCard = ({ title, releaseDate, poster, point, mediaType }) => {
  return (
    <div className="relative rounded-lg border border-slate-800">
      {mediaType === "tv" && (
        <p className="- absolute right-1 top-1 rounded bg-black p-1 text-sm text-white">
          TV SHOW
        </p>
      )}
      <img
        className="rounded-lg"
        src={`https://image.tmdb.org/t/p/original/${poster}`}
      />
      <div className="relative -top-[30px] px-4 py-2">
        <CircularProgressBar percent={Math.round(point * 10)} />
        <p className="mt-2 font-bold">{title} </p>
        <p className="text-slate-300">{releaseDate}</p>
      </div>
    </div>
  );
};

export default MovieCard;
