import sum from "lodash/sum";
import dayjs from "dayjs";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 600 },
  { name: "Apr", value: 800 },
  { name: "May", value: 700 },
];

export default function Dashboard() {
  const numbers = [10, 20, 30, 40];

  const total = sum(numbers);
  const currentDate = dayjs().format("YYYY-MM-DD");

  return (
    <div style={{ padding: "40px" }}>
      <h1>Dashboard</h1>

      <p>Total: {total}</p>

      <p>Current date: {currentDate}</p>

      <LineChart
        width={600}
        height={300}
        data={data}
      >
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="name" />

        <YAxis />

        <Tooltip />

        <Line
          type="monotone"
          dataKey="value"
        />
      </LineChart>
    </div>
  );
}