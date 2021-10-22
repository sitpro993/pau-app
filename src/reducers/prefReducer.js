import {
  ADD_TO_POPULATION_LIST_FAIL,
  ADD_TO_POPULATION_LIST_SUCCESS,
  PREFECTURE_LIST_FAIL,
  // PREFECTURE_LIST_FAIL_SERVER,
  // PREFECTURE_LIST_FAIL_USER,
  PREFECTURE_LIST_REQUEST,
  PREFECTURE_LIST_SUCCESS,
  REMOVE_TO_POPULATION_LIST,
} from "../constants/prefContants";

export const prefListReducer = (
  state = { loading: true, prefectures: [] },
  action
) => {
  switch (action.type) {
    case PREFECTURE_LIST_REQUEST:
      return { loading: true };
    case PREFECTURE_LIST_SUCCESS:
      return { loading: false, prefectures: action.payload };
    // case PREFECTURE_LIST_FAIL_SERVER:
    //   return { loading: false, message: action.payload };
    case PREFECTURE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const dataListReducer = (state = { list: [] }, action) => {
  switch (action.type) {
    case ADD_TO_POPULATION_LIST_SUCCESS:
      return {
        ...state,
        list: [...state.list, action.payload],
        message: null,
      };
    case ADD_TO_POPULATION_LIST_FAIL:
      return {
        ...state,
        message: action.payload,
      };
    case REMOVE_TO_POPULATION_LIST:
      return {
        ...state,
        list: state.list.filter((x) => x.id !== action.payload),
      };
    default:
      return state;
  }
};
