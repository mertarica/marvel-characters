import { render, screen } from "@testing-library/react";
import renderer from 'react-test-renderer';
import Header from "../components/Header";

describe("<Header />", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders without crashing", () => {
    render(<Header />);
    expect(screen.getByTestId("header")).toBeInTheDocument();
  });

  it("renders logo", () => {
    render(<Header />);
    const imgElement = screen.getByAltText(/logo/i);
    expect(imgElement).toBeInTheDocument();
  });
});
