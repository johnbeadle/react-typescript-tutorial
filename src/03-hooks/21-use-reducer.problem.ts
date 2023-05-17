import { useReducer } from "react";
import { Equal, Expect } from "../helpers/type-utils";

export interface State {
  count: number
}

export type Action = | {
    add: number
    type: "add"
  } | {
    subtract: number
    type: "subtract"
  }

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "add":
      return { count: state.count + action.add };
    case "subtract":
      return { count: state.count - action.subtract };
    default:
      throw new Error();
  }
};

const [state, dispatch] = useReducer(reducer, { count: 0 });

type tests = [Expect<Equal<typeof state.count, number>>];

dispatch({ type: "add", add: 1 });

// @ts-expect-error
dispatch({ type: "SUBTRACT", subtract: 1 });

// @ts-expect-error
dispatch({ type: "add" });

// @ts-expect-error
dispatch({ type: "subtract", subtract: "123" });
