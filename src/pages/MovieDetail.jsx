import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import Banner from "../components/MovieDetail/Banner";
import ActorList from "../components/MovieDetail/ActorList";

const MovieDetail = () => {
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?append_to_response=release_dates,credits`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YjdiZDc2MzY5NjRlMDNiMWM1OGU4MTM3NDgyNzk4NCIsIm5iZiI6MTcyMDE4ODA4OS43NDAyNzQsInN1YiI6IjY2ODdmYjQ0YzA4NjJhYmVlYWQ0ZGVjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4gCFYDDyvipIesrHjs10NCVvhLG_jdh33R9uXj4VBaI",
        },
      },
    )
      .then(async (res) => {
        const data = await res.json();
        setMovieInfo(data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <Banner mediaInfo={movieInfo} />
      <div className="bg-black">
        <div className="mx-auto flex max-w-screen-xl px-6 py-10">
          <div className="flex-[2]">
            <ActorList />
          </div>
          <div className="flex-1">
            <p>information</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieDetail;
