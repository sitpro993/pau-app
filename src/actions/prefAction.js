import axios from "axios";
import {
  ADD_TO_POPULATION_LIST_FAIL,
  ADD_TO_POPULATION_LIST_SUCCESS,
  PREFECTURE_LIST_FAIL_SERVER,
  PREFECTURE_LIST_FAIL_USER,
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

    if (data.message) {
      dispatch({ type: PREFECTURE_LIST_FAIL_SERVER, payload: data });
    } else {
      dispatch({ type: PREFECTURE_LIST_SUCCESS, payload: data });
    }
  } catch (error) {
    dispatch({
      type: PREFECTURE_LIST_FAIL_USER,
      payload: error.message,
    });
  }
};

function separateData(result, prefCode, prefName) {
  let temp1 = [];
  let temp2 = [];
  let temp3 = [];
  let temp4 = [];

  result.data[0].data.forEach((d) => {
    temp1.push(d.value);
  });
  result.data[1].data.forEach((d) => {
    temp2.push(d.value);
  });
  result.data[2].data.forEach((d) => {
    temp3.push(d.value);
  });
  result.data[3].data.forEach((d) => {
    temp4.push(d.value);
  });

  const myList = {
    id: prefCode,
    name: prefName,
    boundaryYear: result.boundaryYear,
    data: [
      {
        label: prefName + "-" + result.data[0].label,
        dataList: temp1,
      },
      {
        label: prefName + "-" + result.data[1].label,
        dataList: temp2,
      },
      {
        label: prefName + "-" + result.data[2].label,
        dataList: temp3,
      },
      {
        label: prefName + "-" + result.data[3].label,
        dataList: temp4,
      },
    ],
    years: [],
  };

  result.data[0].data.forEach((element) => {
    myList.years.push(element.year);
  });

  return myList;
}

export const addToDataList = (id, name) => async (dispatch) => {
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
      payload: separateData(data.result, id, name),
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
