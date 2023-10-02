import { screen, render, fireEvent } from "@testing-library/react";
import App from "../App";
import { Provider } from "react-redux";
import store from "../utility/store";

test("logo loaded on navbar", () => {
  render(<App />);
  const logo = screen.getByTestId("logo");
  expect(logo).toBeInTheDocument();
});

test("nav-links appearing on navbar", () => {
  render(<App />);
  const nav_Links = screen.getByTestId("nav_links");
  expect(nav_Links).toBeInTheDocument();
});

test("click of hamburgerMenu side bar renders", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
   const Hamburger_Menu=screen.getByTestId("menu")
   expect(Hamburger_Menu).toBeInTheDocument()
   fireEvent.click(Hamburger_Menu)

   const sidebar=screen.getByTestId("sidebar")

   expect(sidebar).toBeInTheDocument()



});
