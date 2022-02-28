import React from "react";
import renderer from 'react-test-renderer';
import LoadSpinner from "../components/LoadSpinner";

describe("<LoadSpinner />", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<LoadSpinner />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
