import React from "react";
import CircularProgressBar from "./CircularProgressBar";

const MovieCard = () => {
  return (
    <div className="rounded-lg border border-slate-800">
      <img
        className="rounded-lg"
        src={`https://image.tmdb.org/t/p/original/tncbMvfV0V07UZozXdBEq4Wu9HH.jpg`}
      />
      <div className="px-4 py-2">
        <CircularProgressBar progress={10} />
        <p className="mt-2 font-bold">King of the Planet of the apes</p>
        <p className="text-slate-300">2024-05-08</p>
      </div>
    </div>
  );
};

export default MovieCard;
