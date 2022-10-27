import React from "react";
import Chart from "react-apexcharts";

const DonutChart = () => {
  return (
    <>
      <Chart
        type="donut"
        width={"100%"}
        height={200}
        series={[78, 25, 25]}
        options={{
          labels: ["Completed", "Pendind", "Cancel"],
          title: {
            text: "Order Status",
            style: { fontFamily: "san-serif", fontWeight: "500" },
          },
          legend: {
            position: "bottom",
          },
          colors: ["rgba(41,87,153,0.8)", "#b7b7b7", "rgba(229,8,28,0.7)"],

          dataLabels: {
            formatter: (val) => {
              return "";
            },
          },
        }}
      ></Chart>
    </>
  );
};

export default DonutChart;
