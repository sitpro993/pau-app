import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPrefList } from "./actions/prefAction";
import CheckBox from "./components/CheckBox";
import MyChart from "./components/MyChart";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPrefList());
  }, [dispatch]);
  const { loading, error, prefectures } = useSelector(
    (state) => state.prefectureList
  );

  return (
    <div className="App">
      <header>This is header</header>
      <main className="row">
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          <>
            <div className="col-1-3">
              {prefectures.result.map((prefecture) => (
                <div key={prefecture.prefCode} className="check-conatainer">
                  <CheckBox prefecture={prefecture}></CheckBox>
                </div>
              ))}
            </div>
            <div className="col-2-3">
              <div className="chart">
                <MyChart></MyChart>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default App;
