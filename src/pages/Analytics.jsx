import moment from "moment";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { name: "Mon", users: 120 },
  { name: "Tue", users: 180 },
  { name: "Wed", users: 250 },
  { name: "Thu", users: 220 },
  { name: "Fri", users: 310 },
];

export default function Analytics() {
  const generatedAt = moment().format(
    "YYYY-MM-DD HH:mm:ss"
  );

  return (
    <div style={{ padding: "40px" }}>
      <h1>Analytics</h1>

      <p>Generated at: {generatedAt}</p>

      <BarChart
        width={600}
        height={300}
        data={data}
      >
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="name" />

        <YAxis />

        <Tooltip />

        <Bar dataKey="users" />
      </BarChart>
    </div>
  );
}