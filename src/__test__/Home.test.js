import { screen, render, waitFor} from "@testing-library/react";
import App from "../App";
import { Provider } from "react-redux";
import store from "../utility/store";

test("cards rendering on the screen",async () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

 await  waitFor(()=>{
    const cards = screen.getByTestId("card_Parent");
    expect(cards.childNodes.length).toBe(28);
  })
 
});

test("filters rendering on screen", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const filters = screen.getByTestId("filter");
  expect(filters).toBeInTheDocument();
});
