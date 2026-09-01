
import dayjs from "dayjs";

//import html2canvas from "html2canvas"; Bad way
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

  const total = numbers.reduce(
  (acc, number) => acc + number,
  0
);
  const currentDate = dayjs().format("YYYY-MM-DD");

  //Bad way
  //   const handleExport = async () => {
  //   const canvas = await html2canvas(
  //     document.getElementById("dashboard")
  //   );

  //   const image = canvas.toDataURL("image/png");

  //   console.log(image);
  // };
  //Dynamic import version
  const handleExport = async () => {
    const { default: html2canvas } = await import("html2canvas");

    const canvas = await html2canvas(document.getElementById("dashboard"));

    const image = canvas.toDataURL("image/png");

    console.log(image);
  };

  return (
    <div id="dashboard" style={{ padding: "40px" }}>
      <h1>Dashboard</h1>
      <button onClick={handleExport}>Export Dashboard</button>
      <p>Total: {total}</p>

      <p>Current date: {currentDate}</p>

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
