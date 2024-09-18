// rrd imports
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Layouts
import MainLayout from "./layouts/MainLayout";

// Pages
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Plan from "./pages/plan/Plan";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "plan",
          element: <Plan />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
