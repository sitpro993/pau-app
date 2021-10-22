import axios from "axios";
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
import { API_KEY } from "../url/requestURL";

export const getPrefList = () => async (dispatch) => {
  dispatch({
    type: PREFECTURE_LIST_REQUEST,
  });

  try {
    const { data } = await axios.get(
      "https://opendata.resas-portal.go.jp/api/v1/prefectures",
      { headers: { "X-API-KEY": API_KEY } }
    );

    dispatch({ type: PREFECTURE_LIST_SUCCESS, payload: data });
    // if (data.message) {
    //   dispatch({ type: PREFECTURE_LIST_FAIL_SERVER, payload: data });
    // } else {

    // }
  } catch (error) {
    dispatch({
      type: PREFECTURE_LIST_FAIL,
      payload: error.message,
    });
  }
};

function separateData(result, prefCode, prefName, options) {
  let temp = [];
  temp[0] = [];
  temp[1] = [];
  temp[2] = [];
  temp[3] = [];

  result.data[0].data.forEach((d) => {
    temp[0].push(d.value);
  });
  result.data[1].data.forEach((d) => {
    temp[1].push(d.value);
  });
  result.data[2].data.forEach((d) => {
    temp[2].push(d.value);
  });
  result.data[3].data.forEach((d) => {
    temp[3].push(d.value);
  });

  let data = [];
  options.forEach((option) => {
    data.push({
      label: prefName + "-" + result.data[Number(option)].label,
      dataList: temp[Number(option)],
    });
  });

  const myList = {
    id: prefCode,
    name: prefName,
    boundaryYear: result.boundaryYear,
    data: data,
    years: [],
  };

  result.data[0].data.forEach((element) => {
    myList.years.push(element.year);
  });

  return myList;
}

export const addToDataList = (id, name, options) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${id}`,
      {
        headers: {
          "X-API-KEY": API_KEY,
        },
      }
    );

    dispatch({
      type: ADD_TO_POPULATION_LIST_SUCCESS,
      payload: separateData(data.result, id, name, options),
    });
  } catch (error) {
    dispatch({
      type: ADD_TO_POPULATION_LIST_FAIL,
      payload: error.message,
    });
  }
};
export const removeToDataList = (id) => (dispatch, getState) => {
  dispatch({ type: REMOVE_TO_POPULATION_LIST, payload: id });
};
