import {
  cleanup,
  render,
  waitFor,
  scree,
  getAllByTestId,
  screen,
  fireEvent,
  findAllByTestId,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import axios from "axios";

describe("Testing Api and Points calculation", () => {
  let records;
  let response;
  beforeEach(() => {
    records = [
      { id: "1", name: "Julie Navarro", date: "12/16/2022", amount: 120 },
      { id: "2", name: "Mia Swanson", date: "1/7/2023", amount: 92.3 },
      { id: "3", name: "Hayden Robbins", date: "2/27/2023", amount: 36.95 },
      { id: "4", name: "Aurora Gross", date: "12/13/2022", amount: 55.05 },
      { id: "5", name: "Aurora Gross", date: "12/18/2022", amount: 160.15 },
      { id: "6", name: "Aurora Gross", date: "2/9/2022", amount: 93 },
    ];
    response = {
      data: records,
      status: 200,
      statusText: "OK",
      headers: {},
      config: {},
    };
    jest.mock("axios");
    axios.get = jest.fn();
    axios.get.mockResolvedValue(response);
  });
  //afterEach(cleanup);
  test("/renders App correctly", async () => {
    const { asFragment, findByText } = render(<App />);
    const customerRewards = await findByText("Customer Rewards")
    expect(customerRewards).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  test("/Api call and Points calculation works", async () => {
    const {asFragment,findByText } = render(<App />);
    const IdCustomer = await screen.findAllByTestId("customer");
    expect(IdCustomer).toHaveLength(6);

    const button = screen.getByRole("button")

    fireEvent.click(button);
    expect(button).toHaveTextContent("Display Points");
    
    const IdJulia = await screen.findByTestId("point-Julie Navarro");
    expect(IdJulia).toBeInTheDocument();
    expect(IdJulia).toHaveTextContent("Julie Navarro has obtained in December: 90 Points, and the total points is 90");

    const IdMia = await screen.findByTestId("point-Mia Swanson");
    expect(IdMia).toBeInTheDocument();
    expect(IdMia).toHaveTextContent("Mia Swanson has obtained in January: 42 Points, and the total points is 42");

    expect(async() => {
      const IdHayden = await screen.findByTestId("point-Hayden Robbins");
      IdHayden.toThrow("Unable to find an element")
    })

    const IdAurora = await screen.findByTestId("point-Aurora Gross");
    expect(IdAurora).toBeInTheDocument();
    expect(IdAurora).toHaveTextContent("Aurora Gross has obtained in February: 43 Points, December: 175 Points, and the total points is 218");

    // expect(IdHayden).not.toBeInTheDocument();
    //.toThrow("Unable to find an element")

  });

});
