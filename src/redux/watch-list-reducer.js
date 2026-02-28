import AT from "./action-types";

const initialState = {
  loading: true,
  error: null,
  watchlist: [],
};

const watchListReducer = (state = initialState, action) => {
  switch (action.type) {
    case AT.LIST_LOADING:
      return { ...state, loading: true };
    case AT.LIST_ERROR:
      return { ...state, loading: false, error: action.payload };
    case AT.LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        watchlist: action.payload,
      };
    case AT.ADD_TO_LIST: {
      const updatedList = state.watchlist.concat(action.payload);
      return { ...state, watchlist: updatedList };
    }
    case AT.REMOVE_FROM_LIST: {
      const filtredList = state.watchlist.filter(
        (item) => item.id !== action.payload,
      );
      return { ...state, watchlist: filtredList };
    }

    default:
      return state;
  }
};

export default watchListReducer;
