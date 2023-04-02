import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About.page";
import Home from "./pages/Home.page";
import Layout from "./components/Layout";
import Error from "./pages/Error.page";
import Products from "./pages/Products.page";
import ProductDetail from "./pages/ProductDetail.page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        //path: "",
        index: true,
        element: <Home />,
      },
      { path: "about", element: <About /> },
      { path: "product", element: <Products /> },
      { path: "product/:productId", element: <ProductDetail /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
