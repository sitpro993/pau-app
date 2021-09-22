import React from "react";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { randomColor } from "randomcolor";

function addData(list) {
  let color = randomColor();
  const demo = {
    labels: [
      1960, 1965, 1970, 1975, 1980, 1985, 1990, 1995, 2000, 2005, 2010, 2015,
      2020, 2025, 2030, 2035, 2040, 2045,
    ],
    datasets: [
      {
        label: "demo",
        data: [
          5039206, 5171800, 5184287, 5338206, 5575989, 5679439, 5643647,
          5692321, 5683062, 5627737, 5506419, 5381733, 5216615, 5016554,
          4791592, 4546357, 4280427, 4004973,
        ],
        borderColor: color,
        backgroundColor: color,
        yAxisID: "y",
      },
    ],
  };
  let labels = [];
  list.forEach((element) => {
    element.data.forEach((e) => {
      let color = randomColor();
      labels.push({
        label: e.label,
        data: e.dataList,
        borderColor: color,
        backgroundColor: color,
        yAxisID: "y",
      });
    });
  });
  const data = {
    labels: list.length > 0 ? list[0].years : demo.labels,
    datasets: list.length > 0 ? labels : demo.datasets,
  };
  return data;
}

function addOptions() {
  const options = {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: "Chart.js Line Chart - Multi Axis",
      },
      legend: {
        display: true,
        position: "bottom",
      },
    },
    scales: {
      x: {
        ticks: {
          maxTicksLimit: 5,
        },
        // title: {
        //   display: true,
        //   text: "",
        //   font: {
        //     size: 15,
        //   },
        // },
      },
      y: {
        type: "linear",
        display: true,
        position: "left",
      },
      y1: {
        type: "linear",
        display: true,
        position: "right",

        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };
  return options;
}

function MyChart(props) {
  const dataList = useSelector((state) => state.dataList);
  const { message, list } = dataList;
  const data = addData(list);
  console.log(data);
  const options = addOptions();

  return (
    <div>
      <Line data={data} options={options} />{" "}
    </div>
  );
}

export default MyChart;
