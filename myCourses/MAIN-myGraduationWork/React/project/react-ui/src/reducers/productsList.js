import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_SUCCESS_FIRST,
  FETCH_PRODUCTS_SUCCESS_MORE,
  CLEAR_PRODUCTS,
  SET_LOADING_FALSE,
  SET_SEARCH_STRING,
} from '../actions/actionTypes';

const initialState = {
  items: [],
  query: '',
  loading: false,
  error: null,
};

export default function productsListReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_PRODUCTS_FAILURE:
      const { error } = action.payload;
      return {
        ...state,
        loading: false,
        error,
      };
    case FETCH_PRODUCTS_SUCCESS_FIRST:
      const { items } = action.payload;
      return {
        ...state,
        items,
        loading: false,
        error: null,
      };
    case FETCH_PRODUCTS_SUCCESS_MORE:
      const { moreItems } = action.payload;
      return {
        ...state,
        items: [...state.items, ...moreItems],
        loading: false,
        error: null,
      };
    case CLEAR_PRODUCTS:
      return {
        ...state,
        items: [],
      };
    case SET_LOADING_FALSE:
      return {
        ...state,
        loading: false,
      };
    case SET_SEARCH_STRING:
      const { query } = action.payload;
      return {
        ...state,
        query,
      };
    default:
      return state;
  }
}
