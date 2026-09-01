import dayjs from "dayjs";


export default function Reports() {
  const reports = [
    {
      id: 1,
      name: "Monthly Revenue",
      date: dayjs().subtract(1, "month").format("YYYY-MM-DD"),
    },
    {
      id: 2,
      name: "User Growth",
      date: dayjs().subtract(2, "month").format("YYYY-MM-DD"),
    },
    {
      id: 3,
      name: "Performance Report",
      date: dayjs().subtract(3, "month").format("YYYY-MM-DD"),
    },
  ];

  return (
    <div style={{ padding: "40px" }}>
      <h1>Reports</h1>

      {reports.map((report) => (
        <div key={report.id}>
          <h3>{report.name}</h3>
          <p>{report.date}</p>
        </div>
      ))}
    </div>
  );
}