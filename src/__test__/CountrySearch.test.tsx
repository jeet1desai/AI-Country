import {
  render,
  screen,
  fireEvent,
  waitFor,
  cleanup,
} from "@testing-library/react";
import CountrySearch from "../pages/CountrySearch";
import countryService from "../services/country.service";
import App from "../App";

beforeEach(() => {
  render(
    <CountrySearch />
  );
});

test("should be submit button is disable initially", async () => {
  const buttonEl = screen.getByTestId("country-submit-btn");
  expect(buttonEl).toBeDisabled();
});

test("should not be submit button is disable when input is given", async () => {
  const inputEl = screen.getByTestId("search-input");
  fireEvent.change(inputEl, { target: { value: "india" } });

  const buttonEl = screen.getByTestId("country-submit-btn");
  expect(buttonEl).not.toBeDisabled();
});

test("API Call", async () => {
  cleanup();
  const countryServiceMock = jest.spyOn(countryService, "getAllListByName");
  const { getByTestId } = render(<App />);
  const inputEl = getByTestId("search-input");
  fireEvent.change(inputEl, { target: { value: "india" } });

  const buttonEl = getByTestId("country-submit-btn");
  fireEvent.click(buttonEl);

  await waitFor(async () => {
    expect(countryServiceMock).toHaveBeenLastCalledWith("india");
  });
});
