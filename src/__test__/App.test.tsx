import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import App from "../App";

beforeEach(() => {
  render(<App />);
});

test("should render the App", async () => {
  const headerText = screen.getByText(/Country Weather/i);
  expect(headerText).toBeInTheDocument();
});

test("should match the snapshot", async () => {
  const domTree = renderer.create(<App />).toJSON();
  expect(domTree).toMatchSnapshot();
});
