import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Container from "./components/Container";
import Home from "./components/Home";
import About from "./components/About";
import Cart from "./components/Cart";
import store from "./utility/store";
import { Provider } from "react-redux";


const BrowserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Container />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "cart",
        element: <Cart />,
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
