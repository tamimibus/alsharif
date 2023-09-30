// import { useImmerReducer } from "use-immer";

import { useReducer } from "react";
import { DEFAULT_STATE } from "..";

// const [state, dispatch] = useReducer(SelectionReducer, DEFAULT_STATE);

export function SelectionReducer(state, action) {
  switch (action.key) {
    case "type":
      return { ...state, type: action.value };

    case "withFrame":
      return { ...state, withFrame: action.value };

    case "withBox":
      return { ...state, withBox: action.value };

    default:
      return new Error(`No reducer available for key = ${action.key}`);
  }
}
