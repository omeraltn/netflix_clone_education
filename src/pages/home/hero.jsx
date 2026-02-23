import { useEffect, useState } from "react";
import api from "../../utils/api";

const Hero = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    api.get("/movie/popular?language=tr-TR").then((res) => {
      const i = parseInt(Math.random() * 19);
      console.log(i);
      setMovie(res.data.results[i]);
    });
  }, []);
  return <div>Hero</div>;
};

export default Hero;
