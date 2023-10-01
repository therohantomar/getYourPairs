import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Container from "./components/Container";
import Home from "./components/Home";
import About from "./components/About";
import Cart from "./components/Cart";
import store from "./utility/store";
import { Provider } from "react-redux";
import Success from "./components/Success";
import Cancel from "./components/Cancel";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Signin from "./components/Signin";

const BrowserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Container />,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {path:"contact",
       element:<Contact />},
      {
        path: "cart",
        element: <Cart />,
      },{path:"signin",element:<Signin/>},{
        path:"success",
        element:<Success/>
      },{
        path:"cancel",
        element:<Cancel/>
      }
    ],
  },
]);

function App() {
  return (
    <div className="h-screen w-full">
    <Provider store={store} >
      <RouterProvider router={BrowserRouter} />
      </Provider>
    </div>
  );
}

export default App;
