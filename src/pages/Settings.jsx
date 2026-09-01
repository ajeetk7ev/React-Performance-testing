export default function Settings() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Settings</h1>

      <label>
        <input type="checkbox" />

        Enable notifications
      </label>

      <br />

      <br />

      <label>
        <input type="checkbox" />

        Enable dark mode
      </label>
    </div>
  );
}