// import _ from "lodash";
import sum from 'lodash/sum'
// import moment from "moment";
import moment from "moment";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const data = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 600 },
  { name: "Apr", value: 800 },
];

export default function HeavyDashboard() {
  const numbers = [1, 2, 3, 4, 5];

  const total = sum(numbers);
  const currentDate = moment().format("YYYY-MM-DD");

  return (
    <div>
      <h1>Dashboard</h1>

      <p>Total: {total}</p>
      <p>Date: {currentDate}</p>

      <LineChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="value" />
      </LineChart>
    </div>
  );
}