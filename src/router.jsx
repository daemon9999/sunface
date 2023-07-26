import { createBrowserRouter } from "react-router-dom";
import MainLayout from "src/pages/MainLayout";
import Home from "src/pages/Home";
import Optimization from "src/pages/Optimization";
import Products from "src/pages/Products";
import Forecast from "src/pages/Forecast";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home/>,
      },
      {
        path: 'optimization',
        element: <Optimization/>
      },
      {
        path: 'products',
        element: <Products/>
      },
      {
        path: 'forecast',
        element: <Forecast/>
      }
    ],
  },
]);

export default router