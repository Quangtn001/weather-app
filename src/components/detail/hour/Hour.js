import React, { useEffect } from "react";
import { Chart } from "chart.js";
import { timeFormat } from "../../../plugins/Format";

function Hour({ weatherData }) {
  useEffect(() => {
    var config = {
      type: "line",
      data: {
        labels: weatherData.hourly.map((item) => timeFormat(item.dt)),
        datasets: [
          {
            label: "Temp",
            fill: false,
            backgroundColor: "#3182ce",
            borderColor: "#3182ce",
            data: weatherData.hourly.map((item) => item.temp),
          },
          {
            label: "Feels like",
            fill: false,
            backgroundColor: "#ed64a6",
            borderColor: "#ed64a6",
            data: weatherData.hourly.map((item) => item.feels_like),
          },
        ],
      },
    };
    var ctx = document.getElementById("line-chart").getContext("2d");
    window.myLine = new Chart(ctx, config);
  }, [weatherData]);
  return (
    <>
      <div className="bg-white p-2 mt-2 rounded-3">
        <canvas id="line-chart"></canvas>
      </div>
    </>
  );
}

export default Hour;


