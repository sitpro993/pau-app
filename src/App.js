import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPrefList } from "./actions/prefAction";
import LoadingBox from "./components/LoadingBox";
import ErrorBox from "./components/ErrorBox";
import MyChart from "./components/MyChart";
import SelectBar from "./components/SelectBar";
import MessageBox from "./components/MessageBox";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPrefList());
  }, [dispatch]);
  const { loading, error, prefectures } = useSelector(
    (state) => state.prefectureList
  );

  const [options, setOptions] = useState([]);
  const setList = (options) => {
    setOptions(options);
  };

  return (
    <div className="App">
      <header>
        <h1 className="title-page">州の国勢調査</h1>
        <h3 className="subtitle-page">(1960-2045)</h3>
      </header>

      {loading ? (
        <LoadingBox></LoadingBox>
      ) : prefectures.message ? (
        <MessageBox message={prefectures}></MessageBox>
      ) : error ? (
        <ErrorBox>{error}</ErrorBox>
      ) : (
        <>
          <main>
            <div>
              <SelectBar
                prefectures={prefectures.result}
                setList={setList}
              ></SelectBar>
            </div>
            <div>
              <div className="chart">
                <MyChart options={options}></MyChart>
              </div>
            </div>
          </main>
        </>
      )}
    </div>
  );
}

export default App;
