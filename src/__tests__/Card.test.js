import { shallow, mount, render } from "enzyme";
import Card from "../components/Card";

// snapshot testing
it("expects to render Card Component", () => {
  expect(shallow(<Card />)).toMatchSnapshot();
});
