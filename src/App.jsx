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
// import { lazy, Suspense, useState } from "react";

// const HeavyDashboard = lazy(
//   () => import("./components/HeavyDashboard")
// );

// function App() {
//   const [showDashboard, setShowDashboard] = useState(false);

//   return (
//     <div>
//       <h1>React Performance</h1>

//       <button onClick={() => setShowDashboard(true)}>
//         Open Dashboard
//       </button>

//       {showDashboard && (
//         <Suspense fallback={<p>Loading dashboard...</p>}>
//           <HeavyDashboard />
//         </Suspense>
//       )}
//     </div>
//   );
// }

// export default App;

//we implement route-level code splitting.

import { lazy, Suspense } from "react";

import {
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Loader from "./components/Loader";

const Home = lazy(() => import("./pages/Home"));

const Dashboard = lazy(
  () => import("./pages/Dashboard")
);

const Analytics = lazy(
  () => import("./pages/Analytics")
);

const Reports = lazy(
  () => import("./pages/Reports")
);

const Settings = lazy(
  () => import("./pages/Settings")
);

export default function App() {
  return (
    <>
      <Navbar />

      <Suspense fallback={<Loader />}>
        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          <Route
            path="/analytics"
            element={<Analytics />}
          />

          <Route
            path="/reports"
            element={<Reports />}
          />

          <Route
            path="/settings"
            element={<Settings />}
          />

        </Routes>
      </Suspense>
    </>
  );
}