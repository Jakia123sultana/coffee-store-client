import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {createBrowserRouter, RouterProvider} from "react-router";
import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./Components/Home.jsx";
import AddCoffee from "./Components/AddCoffee.jsx";
import UppdateCoffee from "./Components/UppdateCoffee.jsx";
import SignIn from "./Components/SignIn.jsx";
import SignUp from "./Components/SingUP.jsx";
import AuthProvider from "./contexts/AuthProvider.jsx";
import Users from "./Components/Users.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
    {
  index: true,
  loader: () =>
    fetch("https://coffee-store-server-swart-iota.vercel.app/coffees").then(res => res.json()),
  Component: Home,
}
,
 
      {
        path: "addCoffee",
        Component: AddCoffee,
      },
      {
        path: "updateCoffee/:id",
        loader: ({params}) =>
          fetch(
            `https://coffee-store-server-swart-iota.vercel.app/coffees/${params.id}`
          ),
        Component: UppdateCoffee,
      },
      {
        path: "signin",
        Component: SignIn,
      },
      {
        path: "signup",
        Component: SignUp,
      },
      {
        path: "users",
        loader: async () => {
          const res = await fetch(
            "https://coffee-store-server-swart-iota.vercel.app/users"
          );
          return await res.json(); // ✅ Make sure to return actual JSON data (array)
        },
        Component: Users,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      {" "}
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
