import { apiCall } from "../api/api";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from "../constants";
import * as actions from "../actions";

const mockStore = configureStore([thunk]);

it("Should dispatch action for type CHANGE_SEARCHFIELD", () => {
  expect(actions.setSearchField("searchTerm")).toEqual({
    type: CHANGE_SEARCHFIELD,
    payload: "searchTerm",
  });
});

it("Should handles request for robots API", () => {
  const store = mockStore();
  store.dispatch(actions.requestRobots());
  const action = store.getActions();

  expect(action[0]).toEqual({ type: REQUEST_ROBOTS_PENDING });
});
