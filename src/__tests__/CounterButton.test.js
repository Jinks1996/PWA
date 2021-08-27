import { shallow } from "enzyme";
import CounterButton from "../components/CounterButton";

// snapshot testing
it("expects to render CounterButton Component", () => {
  expect(shallow(<CounterButton color="red" />)).toMatchSnapshot();
});

it("should increment the counter on click", () => {
  const wrapper = shallow(<CounterButton color="red" />);

  wrapper.find("[id='counter']").simulate("click");
  wrapper.find("[id='counter']").simulate("click");
  expect(wrapper.state()).toEqual({ count: 3 });

  wrapper.find("[id='counter']").simulate("click");
  expect(wrapper.state()).toEqual({ count: 4 });

  expect(wrapper.props().color).toEqual("red");
});
