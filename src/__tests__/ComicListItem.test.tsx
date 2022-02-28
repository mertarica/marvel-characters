import renderer from "react-test-renderer";
import ComicListItem from "../components/ComicListItem";
import fakeComic from "../__mock__/comic";

describe("<ComicListItem />", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<ComicListItem comic={fakeComic} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
