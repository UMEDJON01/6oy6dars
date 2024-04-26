import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";

import About from "./pages/About";

import Contact from "./pages/Contact";
import Product1 from "./pages/Product1";

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
          path: `/about`,
          element: <About />,
        },
        {
          path: `/contact`,
          element: <Contact />,
        },
        {
          path: "/product/id",
          element: <Product1 />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}
export default App;
