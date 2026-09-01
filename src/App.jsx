// import HeavyDashboard from "./components/HeavyDashboard";

// function App() {
//   return (
//     <>
//       <h1>React Performance</h1>

//       <HeavyDashboard />
//     </>
//   );
// }

// export default App;



// import { lazy, Suspense } from "react";

// const HeavyDashboard = lazy(
//   () => import("./components/HeavyDashboard")
// );

// function App() {
//   return (
//     <>
//       <h1>React Performance</h1>

//       <Suspense fallback={<p>Loading dashboard...</p>}>
//         <HeavyDashboard />
//       </Suspense>
//     </>
//   );
// }

// export default App;


//Load the dashboard on demand
import { lazy, Suspense, useState } from "react";

const HeavyDashboard = lazy(
  () => import("./components/HeavyDashboard")
);

function App() {
  const [showDashboard, setShowDashboard] = useState(false);

  return (
    <div>
      <h1>React Performance</h1>

      <button onClick={() => setShowDashboard(true)}>
        Open Dashboard
      </button>

      {showDashboard && (
        <Suspense fallback={<p>Loading dashboard...</p>}>
          <HeavyDashboard />
        </Suspense>
      )}
    </div>
  );
}

export default App;