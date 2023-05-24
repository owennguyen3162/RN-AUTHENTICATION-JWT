import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAIL } from "../actions/types";

const initialState = {
  data: null,
  isLoading: false,
};

export default function (state = initialState, payload) {
  switch (payload.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        data: payload.payload,
        isLoading: payload.isLoading,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        data: payload.payload,
        isLoading: payload.isLoading,
      };
    case FETCH_FAIL:
      return {
        ...state,
        data: payload.payload,
        isLoading: payload.isLoading,
      };
    default:
      return state;
  }
}
