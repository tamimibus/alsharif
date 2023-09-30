import CardWithImage from "../../components/cardWithImage";
import Layout from "../../components/layout";
import React, {
  useState,
  useCallback,
  memo,
  useReducer,
  useContext,
  useMemo,
} from "react";
import { useRef } from "react";
import CompWindow from "./memoComponent";
import { DEFAULT_STATE } from "../../utils";
import { SelectionReducer } from "../../utils/context/userSelectionReducer";
import {
  UserSelection,
  UserSelectionProvider,
  useUserSelection,
} from "../../utils/context/userSelection.context";
import { useRouter } from "next/router";
import Calculate from "../Calculate";
import InputField from "../../components/inputField";
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

const WindowTypes = () => {
  const [state, dispatch] = useReducer(SelectionReducer, DEFAULT_STATE);
  const router = useRouter();
  const [windowNo, setWindowNo] = useState(null);
  const handleChange = useCallback((name, newValue) => {
    dispatch({
      key: name,
      value: newValue,
    });
  }, []);

  // const handleChange = (name, newValue) => {
  //   console.log("checking==>handleChange", name);
  //   dispatch({
  //     key: name,
  //     value: newValue,
  //   });
  // };
  const onChange = (e) => {
    setWindowNo(Number(e.target.value));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    router.push({
      pathname: "/Calculate",
      query: { ...state, windowNo },
    });
  };
  return (
    <Layout>
      <form onSubmit={onSubmit}>
        <UserSelectionProvider value={{ state, handleChange }}>
          <InputField
            type={"number"}
            // id={}

            name={"windowNo"}
            placeholder={"please enter the window number"}
            onChange={onChange}
            value={windowNo}
            max="20"
            min="1"
            required={true}
          />
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

        <button
          type="text"
          style={{
            margin: "auto",
            backgroundColor: "#08d",
            borderRadius: "12px",
            border: "0",
            boxSizing: "border-box",
            color: "#eee",
            cursor: " pointer",
            fontSize: "18px",
            height: "50px",
            marginTop: "38px",
            outline: "0",
            textAlign: "center",
            width: "50%",
            display: "block",
            // }
          }}
          // onClick={onSubmit}
        >
          submit
        </button>
      </form>
    </Layout>
  );
};

export default React.memo(WindowTypes);
