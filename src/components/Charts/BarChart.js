import React from "react";
import Chart from "react-apexcharts";

const BarChart = () => {
  return (
    <>
      <Chart
        type="bar"
        width={"100%"}
        height={"100%"}
        series={[
          {
            name: "danish",
            data: [15, 25, 30, 12, 18, 40, 24, 28, 40],
          },
        ]}
        options={{
          colors: ["#007fff"],
          xaxis: {
            categories: [
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
            ],
          },
          yaxis: {
            labels: {
              formatter: (val) => {
                return `${val}K`;
              },
            },
          },

          dataLabels: {
            formatter: (val) => {
              return "";
            },
          },

          stroke: {
            width: 1,
            colors: ["#fff"],
          },
        }}
      ></Chart>
    </>
  );
};

export default BarChart;
