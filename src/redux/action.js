import api from "../utils/api";
import AT from "./action-types";

//redux thunk aksiyonu
//izleme listesindeki filmleri api dan alıp reducera haber ver

export const getWatchList = () => (dispatch) => {
  dispatch({ type: AT.LIST_LOADING });

  api
    .get("account/22671231/watchlist/movies")
    .then((res) =>
      dispatch({ type: AT.LIST_SUCCESS, payload: res.data.results }),
    )
    .catch((err) => dispatch({ type: AT.LIST_ERROR, payload: err.message }));
};

//izleme listesine ekle kaldır isteği atıp reducera haber ver

export const toggleWatchList = (movie, isAdd) => (dispatch) => {
  //apia gönderilecek veriyi hazırla
  const body = {
    media_type: "movie",
    media_id: movie.id,
    watchlist: isAdd,
  };
  // api isteğini at
  api.post("/account/22671231/watchlist", body).then(() => {
    //ekleme çıkarma durumuna göre reducera haber ver
    isAdd
      ? dispatch({ type: AT.ADD_TO_LIST, payload: movie })
      : dispatch({ type: AT.REMOVE_FROM_LIST, payload: movie.id });
  });
};
