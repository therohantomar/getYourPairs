import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import App from "../App";
import { Provider } from "react-redux";
import store from "../utility/store";

test("onClick of Add to basket product should be added to cart",async () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );



    //  add_btn = screen.getAllByTestId("add_btn");
    // eslint-disable-next-line testing-library/no-wait-for-side-effects
    



  const cartCard_parent = screen.getByTestId("cartCard");
  expect(cartCard_parent.childNodes.length).toBe(null);
});
