import { Minus, Plus } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleWatchList } from "../../redux/action";

const WatchListButton = ({ movie }) => {
  const dispatch = useDispatch();
  //izleme listesi verisine abone ol
  const { watchlist } = useSelector((store) => store.watchListReducer);

  //prop olarak gelen film izleme listesinde var mı

  const isAdded = watchlist.find((item) => item.id === movie.id);

  //apia istek atıp reducera haber veren thunk aksiyonunu dispatch et
  const handleToggle = () => {
    dispatch(toggleWatchList(movie, !isAdded));
  };

  return (
    <button
      onClick={handleToggle}
      to={`/movie/${movie.id}`}
      className="hero-btn from-blue-600 to-blue-700 "
    >
      {isAdded ? (
        <>
          <Minus className="size-5 " />
          Listeden Kaldır
        </>
      ) : (
        <>
          <Plus className="size-5 " />
          Listeye Ekle
        </>
      )}
    </button>
  );
};

export default WatchListButton;
