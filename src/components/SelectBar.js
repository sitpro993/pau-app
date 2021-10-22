import React, { useState } from "react";
import CheckBox from "./CheckBox";

function SelectBar(props) {
  const { prefectures } = props;

  const [classList, setClassList] = useState(["sidebar"]);

  const mouseOverHandler = () => {
    let temp = [...classList];
    temp.push("active");
    setClassList(temp);
  };

  const mouseOutHandler = () => {
    let temp = ["sidebar"];
    setClassList(temp);
  };

  return (
    <>
      <button type="button" className="button" onClick={mouseOverHandler}>
        都市を選択してください
      </button>
      <div
        className={classList.join(" ")}
        onMouseOver={mouseOverHandler}
        onMouseOut={mouseOutHandler}
      >
        {prefectures.map((prefecture) => (
          <div key={prefecture.prefCode} className="check-conatainer">
            <CheckBox prefecture={prefecture} options={[1]}></CheckBox>
          </div>
        ))}
      </div>
    </>
  );
}

export default SelectBar;
