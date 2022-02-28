import renderer from "react-test-renderer";
import Hero from "../components/Hero";
import fakeCharacter from "../__mock__/character";

describe("<Hero />", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Hero character={fakeCharacter} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
