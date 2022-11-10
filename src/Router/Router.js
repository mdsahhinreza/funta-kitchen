import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import NotFound from "../Pages/notFound/NotFound";
import Register from "../Pages/Register/Register";
import Reviews from "../Pages/Reviews/Reviews";
import AddService from "../Pages/Service/AddService";
import Services from "../Pages/Service/Services";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import PrivetRoute from "./PrivetRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "services",
        element: <Services></Services>,
      },
      {
        path: "services/:id",
        loader: ({ params }) =>
          fetch(
            `https://funta-kitchen-server.vercel.app/services/${params.id}`
          ),
        element: <ServiceDetails></ServiceDetails>,
      },
      {
        path: "add-service",
        element: (
          <PrivetRoute>
            <AddService></AddService>
          </PrivetRoute>
        ),
      },
      {
        path: "my-reviews",
        element: (
          <PrivetRoute>
            <Reviews></Reviews>
          </PrivetRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
  },
]);

export default router;
