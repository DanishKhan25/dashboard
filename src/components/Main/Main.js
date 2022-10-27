import React from "react";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import PieChartIcon from "@mui/icons-material/PieChart";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import ProfileCard from "../commen/ProfileCard";
import BarChart from "./../Charts/BarChart";
import Card from "./../commen/Card";
import "./main.css";
import Table from "./Table";
import AreaChart from "../Charts/AreaChart";
import DonutChart from "./../Charts/DonutChart";
import TopProducts from "./../commen/TopProducts";

const Main = () => {
  const salesData = [
    {
      id: 1,
      title: "Revenue",
      value: 21456,
      change: +2.8,
      content: <PieChartIcon />,
    },
    {
      id: 2,
      title: "orders",
      value: 5643,
      change: -0.8,
      content: <LocalMallIcon />,
    },
    {
      id: 3,
      title: "customers",
      value: 45254,
      change: -1.8,
      content: <PeopleAltOutlinedIcon />,
    },
  ];
  const OverviewData = [
    { title: "This Month", value: "$85,256" },
    { title: "Orders", value: "5,654" },
    { title: "Sales", value: "16,273" },
    { title: "Order Value", value: "12.03%" },
    { title: "Customers", value: "21,456" },
    { title: "Income", value: "$35,623" },
    { title: "Expenses", value: "$12,248" },
  ];
  const TopProductsData = [
    { id: 1, title: "polo T-shirt", value: "$ 25.4", total: "4.1" },
    { id: 2, title: "Sheos", value: "$ 24.2 ", total: "3.59 " },
    { id: 3, title: "Red color cap", value: "$ 23.5", total: "3.02" },
    { id: 4, title: "Pocket T-shirt", value: "$ 20.1", total: "2.84" },
  ];
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-9">
            <div className="flex">
              {salesData.map((item) => (
                <Card
                  key={item.id}
                  title={item.title}
                  value={item.value}
                  logo={item.content}
                  change={item.change}
                />
              ))}
            </div>

            <div className="card">
              <h6 className="card-title">Overview</h6>

              <div className="flex ">
                <div className="card-body over-grid">
                  {OverviewData.map((item) => (
                    <Table value={item.value} title={item.title} />
                  ))}
                </div>

                <div className="chart">
                  <BarChart />
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="card mb-3 mt-3">
                <div className="Chart">
                  <AreaChart />
                </div>
              </div>
              <div className="card mb-3 mt-3">
                <div className="Chart">
                  <DonutChart />
                </div>
              </div>
              <div className="card mb-3 mt-3 t-product">
                <div className="card-title title">Top Products</div>
                <div className="flex-col  ">
                  {TopProductsData.map((item) => (
                    <TopProducts
                      id={item.id}
                      title={item.title}
                      value={item.value}
                      total={item.value}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <ProfileCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
