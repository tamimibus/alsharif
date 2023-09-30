import { useCallback, useMemo, useReducer } from "react";
import { SelectionReducer } from "../../utils/context/userSelectionReducer";
import { DEFAULT_STATE } from "../../utils";
import { UserSelectionProvider } from "../../utils/context/userSelection.context";
import CompWindow from "./memoComponent";

const widowType = [
  {
    inputName: "type",
    name: "palseten",
    id: "pal1",
    img: "/images/force.jpeg",
    value: "pal1",
  },
  {
    inputName: "type",
    name: "royal",
    id: "rol1",
    img: "/images/force.jpeg",
    value: "rol1",
  },
];
const widowBox = [
  {
    inputName: "withBox",
    name: "with Box",
    id: "box1",
    img: "/images/force.jpeg",
    value: 1,
  },
  {
    inputName: "withBox",
    name: "without Box",
    id: "box2",
    img: "/images/force.jpeg",
    value: 0,
  },
];
const widowFrame = [
  {
    inputName: "withFrame",
    name: "with Frame",
    id: "frame1",
    img: "/images/force.jpeg",
    value: 1,
  },
  {
    inputName: "withFrame",
    name: "without Frame",
    id: "frame2",
    img: "/images/force.jpeg",
    value: 0,
  },
];
const WWW = () => {
  const [state, dispatch] = useReducer(SelectionReducer, DEFAULT_STATE);
  const handleChange = useCallback((name, newValue) => {
    dispatch({
      key: name,
      value: newValue,
    });
  }, []);
  return (
    <UserSelectionProvider value={{ state, handleChange }}>
      {useMemo(
        () => (
          <>
            <CompWindow data={widowType} stateKey="type" />
            <CompWindow data={widowFrame} stateKey="withFrame" />
            <CompWindow data={widowBox} stateKey="withBox" />
          </>
        ),
        []
      )}
    </UserSelectionProvider>
  );
};

export default WWW;
