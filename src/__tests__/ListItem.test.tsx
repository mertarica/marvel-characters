import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import ListItem from "../components/ListItem";
import fakeCharacter from "../__mock__/character";

describe("<ListItem />", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <ListItem character={fakeCharacter} />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
