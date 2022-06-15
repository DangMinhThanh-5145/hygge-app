import CategoryProduct from "./components/CategoryProduct";
import FilterProduct from "./components/FilterProduct";
import ProductDetails from "./components/ProductDetails";
import CategoryPage from "./pages/CategoryPage";
import CheckOutPage from "./pages/CheckOutPage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/Product";
import ShoppingCart from "./pages/ShoppingCart";
import SignInPage from "./pages/SignInPage";
import Layout from "./components/Layout";

const publicRoutes = [
  {
    path: "",
    element: <Layout />,
    children: [{ path: "/login", element: <SignInPage /> }],
  },
  {
    path: "home-page",
    element: <Layout />,
    children: [{ path: "", element: <HomePage /> }],
  },
  {
    path: "product",
    element: <Layout />,
    children: [
      { path: "", element: <ProductPage /> },
      { path: ":id", element: <ProductDetails /> },
      {
        path: ":id/shopping-cart",
        element: <ShoppingCart />,
      },
      {
        path: "check-out",
        element: <CheckOutPage />,
      },
    ],
  },
  {
    path: "category",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <CategoryPage />,
        children: [
          { path: "", element: <CategoryProduct /> },
          { path: "categories", element: <FilterProduct /> },
        ],
      },
    ],
  },
];
const adminRoutes = [];

const routes = (role) => {
  switch (role) {
    case "admin": {
      return [...adminRoutes, ...publicRoutes];
    }

    default: {
      return publicRoutes;
    }
  }
};

export default routes;
