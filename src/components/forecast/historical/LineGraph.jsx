/* import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import hours from "src/constants/hours";
import months from "src/constants/months";
import faker from "faker";

  
 
const LineGraph = ({ arrs, index }) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  console.log(arrs)
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };
  const data = {
    hours,
    datasets: [
      {
        label: months[index],
        data: arrs,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return <Line data={data} options={options} />;
};

export default LineGraph;
 */

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const LineGraph = ({ data, title, xAxis, yAxis, yValue }) => {
    
  return (
    <div className="flex flex-col mb-10">
      <h1 className="text-center ml-20 text-4xl font-semibold mb-10 ">{title}</h1>
      <LineChart
        width={800}
        height={500}
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis angle={20} dataKey={xAxis} type="category" interval={30}  style={{
            top: 20
        }} />

        <YAxis
          dataKey={yAxis}
          type="number"
          label={{
            value: yValue,
            position: "insideTop",
          }}
        />
        <Tooltip />
        <Legend align="right" verticalAlign="top" layout="inside" />
        <Line type="monotone" dataKey={yAxis} stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default LineGraph;
