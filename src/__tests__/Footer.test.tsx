import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import Footer from "../components/Footer";

describe("<Footer />", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders without crash", () => {
    render(<Footer />);
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });

  it("renders correct year", () => {
    render(<Footer />);
    expect(screen.getByTestId("footer")).toHaveTextContent(
      String(new Date().getFullYear())
    );
  });
});
