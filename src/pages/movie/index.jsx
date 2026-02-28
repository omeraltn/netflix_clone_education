import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../utils/api";
import Loader from "../../components/loader";
import Error from "../../components/error";
import Buttons from "./buttons";
import Banner from "./banner";
import Content from "./content";
import Actors from "./actors";

const Movie = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [movie, setMovie] = useState(null);

  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    const params = { append_to_response: "credits" };
    api
      .get(`/movie/${id}`, { params })
      .then((res) => setMovie(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);
  if (loading) return <Loader />;
  if (error) return <Error message={error} />;
  return (
    <div>
      <Buttons movie={movie} />

      <Banner movie={movie} />

      <Content movie={movie} />

      <Actors cast={movie.credits.cast} />
    </div>
  );
};

export default Movie;
