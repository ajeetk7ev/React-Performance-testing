import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    react(),

    visualizer({
      filename: "dist/stats.html",
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
  ],

//   build: {
//     rolldownOptions: {
//       output: {
//         // codeSplitting: {
//         //   groups: [
//         //     {
//         //       name: "vendor",
//         //       test: /node_modules/,
//         //     },
//         //   ],
//         // },

//         // codeSplitting: {
//         //   groups: [
//         //     {
//         //       name: "react-vendor",
//         //       test: /node_modules[\\/]react(?:-dom)?[\\/]/,
//         //       priority: 30,
//         //     },

//         //     {
//         //       name: "vendor",
//         //       test: /node_modules[\\/]/,
//         //       priority: 10,
//         //     },
//         //   ],
//         // },
// //         codeSplitting: {
// //   groups: [
// //     {
// //       name: "react-vendor",
// //       test: /node_modules[\\/]react(?:-dom)?[\\/]/,
// //       priority: 30,
// //     },

// //     {
// //       name: "chart-vendor",
// //       test: /node_modules[\\/](recharts|d3-[^\\/]+)[\\/]/,
// //       priority: 20,
// //     },

// //     {
// //       name: "vendor",
// //       test: /node_modules[\\/]/,
// //       priority: 10,
// //     },
// //   ],
// // },
//       },
//     },
//   },
});
