import React from "react";
import Chart from "react-apexcharts";

const AreaChart = () => {
  return (
    <>
      <Chart
        type="area"
        width={"100%"}
        height={200}
        series={[
          { name: "Current", data: [12, 34, 56, 25, 78, 60] },
          { name: "Previous", data: [22, 43, 65, 52, 65, 15] },
        ]}
        options={{
          title: {
            text: "User Activity",
            style: { fontFamily: "san-serif", fontWeight: "500" },
          },
          colors: ["rgba(41,87,153,0.8)", "rgba(229,8,28,0.7)"],
          stroke: { width: 1, curve: "smooth" },
          dataLabels: {
            formatter: (val) => {
              return "";
            },
          },
          legend: {
            position: "top",
          },
        }}
      ></Chart>
    </>
  );
};

export default AreaChart;
