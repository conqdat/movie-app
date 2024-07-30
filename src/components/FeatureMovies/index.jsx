import PaginateIndicator from "./PaginateIndicator";
import Movie from "./Movie";
import { useState } from "react";

const FeatureMovies = () => {
  const [movies, setMovies] = useState([]);
  console.log('Rendering');

  // fetch("https://api.themoviedb.org/3/movie/popular", {
  //   method: "GET",
  //   headers: {
  //     accept: "application/json",
  //     Authorization:
  //       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YjdiZDc2MzY5NjRlMDNiMWM1OGU4MTM3NDgyNzk4NCIsIm5iZiI6MTcyMDE4ODA4OS43NDAyNzQsInN1YiI6IjY2ODdmYjQ0YzA4NjJhYmVlYWQ0ZGVjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4gCFYDDyvipIesrHjs10NCVvhLG_jdh33R9uXj4VBaI",
  //   },
  // }).then(async (res) => {
  //   const data = await res.json();
  //   console.log({data});
  //   setMovies(data.results);
  // });

  // console.log(movies);

  return (
    <div className="relative text-white">
      <Movie />
      <PaginateIndicator />
    </div>
  );
};
export default FeatureMovies;
