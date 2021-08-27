import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from "../constants";
import * as reducers from "../reducers";

describe("Search Robots", () => {
  it("Should return the initial state for search reducer", () => {
    expect(reducers.searchRobots(undefined, {})).toEqual({
      searchField: "",
    });
  });

  it("Should return new state for search reducer", () => {
    expect(
      reducers.searchRobots(undefined, {
        type: CHANGE_SEARCHFIELD,
        payload: "search",
      })
    ).toEqual({
      searchField: "search",
    });
  });
});

describe("REQUEST_ROBOTS type for requestRobots reducer", () => {
  it("Should return initial state for requestRobots reducer", () => {
    expect(reducers.requestRobots(undefined, {})).toEqual({
      robots: [],
      isPending: false,
    });
  });

  it("Should return new state for REQUEST_ROBOTS_PENDING type", () => {
    expect(
      reducers.requestRobots(undefined, { type: REQUEST_ROBOTS_PENDING })
    ).toEqual({
      robots: [],
      isPending: true,
    });
  });

  it("Should return new state for REQUEST_ROBOTS_SUCCESS type", () => {
    expect(
      reducers.requestRobots(undefined, {
        type: REQUEST_ROBOTS_SUCCESS,
        payload: [
          {
            id: 1,
            name: "John Snow",
            username: "John",
            email: "john@gmail.com",
          },
        ],
      })
    ).toEqual({
      robots: [
        {
          id: 1,
          name: "John Snow",
          username: "John",
          email: "john@gmail.com",
        },
      ],
      isPending: false,
    });
  });

  it("Should return new state for requestRobots REQUEST_ROBOTS_FAILED type", () => {
    expect(
      reducers.requestRobots(undefined, {
        type: REQUEST_ROBOTS_FAILED,
        payload: "Incorrect data format",
      })
    ).toEqual({
      error: "Incorrect data format",
      robots: [],
      isPending: false,
    });
  });
});
