import React from "react";
import { useDispatch } from "react-redux";
import { addToDataList, removeToDataList } from "../actions/prefAction";

function CheckBox(props) {
  const { prefecture, options } = props;
  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (e.target.checked) {
      dispatch(
        addToDataList(prefecture.prefCode, prefecture.prefName, options)
      );
    } else {
      dispatch(removeToDataList(prefecture.prefCode));
    }
  };

  return (
    <>
      <input
        type="checkbox"
        id={prefecture.prefCode}
        name={prefecture.prefName}
        value={prefecture.prefCode}
        onChange={handleChange}
      ></input>
      <label htmlFor={prefecture.prefCode}>{prefecture.prefName}</label>
    </>
  );
}

export default CheckBox;
