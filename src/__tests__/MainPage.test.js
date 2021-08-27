import { shallow, mount, render } from "enzyme";
import MainPage from "../components/MainPage";

let wrapper;

beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 1,
        name: "John Snow",
        username: "John",
        email: "john@gmail.com",
      },
    ],
    searchField: "John",
    isPending: false,
  };

  wrapper = shallow(<MainPage {...mockProps} />);
});

// snapshot testing
it("expects to render Main Page Component", () => {
  expect(wrapper).toMatchSnapshot();
});

it("Should filter robots correctly", () => {
  expect(wrapper.instance().filteredRobots()).toEqual([
    {
      id: 1,
      name: "John Snow",
      username: "John",
      email: "john@gmail.com",
    },
  ]);
});
