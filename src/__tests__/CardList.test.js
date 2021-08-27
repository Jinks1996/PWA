import { shallow, mount, render } from "enzyme";
import CardList from "../components/CardList";

// snapshot testing
it("expects to render CardList Component", () => {
  const mockRobots = [
    {
      id: 1,
      name: "John Snow",
      username: "John",
      email: "john@gmail.com",
    },
  ];
  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});
