import { useRouter } from "next/router";
import React, { useCallback, useMemo, useReducer, useState } from "react";
import InputField from "../../components/inputField";
import Layout from "../../components/layout";
import { DEFAULT_STATE } from "../../utils";
import { UserSelectionProvider } from "../../utils/context/userSelection.context";
import { SelectionReducer } from "../../utils/context/userSelectionReducer";
import CompWindow from "../../components/WindowTypesMemo/memoComponent";
const WindowTypes = () => {
  const widowType = [
    {
      inputName: "type",
      name: "مقطع فلسطيني",
      id: "pal1",
      img: "/images/force.jpeg",
      value: "pal1",
    },
    {
      inputName: "type",
      name: "مقطع رويال",
      id: "rol1",
      img: "/images/force.jpeg",
      value: "rol1",
    },
  ];
  const widowBox = [
    {
      inputName: "withBox",
      name: "مع صندوق",
      id: "box1",
      img: "/images/force.jpeg",
      value: 1,
    },
    {
      inputName: "withBox",
      name: "بدون صندوق",
      id: "box2",
      img: "/images/force.jpeg",
      value: 0,
    },
  ];
  const widowFrame = [
    {
      inputName: "withFrame",
      name: "مع  اطار",
      id: "frame1",
      img: "/images/force.jpeg",
      value: 1,
    },
    {
      inputName: "withFrame",
      name: " بدون اطار",
      id: "frame2",
      img: "/images/force.jpeg",
      value: 0,
    },
  ];
  const [state, dispatch] = useReducer(SelectionReducer, DEFAULT_STATE);
  const router = useRouter();
  const [windowNo, setWindowNo] = useState("");
  const handleChange = useCallback((name, newValue) => {
    dispatch({
      key: name,
      value: newValue,
    });
  }, []);

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
      <form onSubmit={onSubmit} style={{ marginInline: "2%" }}>
        <UserSelectionProvider value={{ state, handleChange }}>
          <InputField
            type={"number"}
            name={"windowNo"}
            placeholder={" عدد الشبابيك"}
            onChange={onChange}
            value={windowNo}
            max="20"
            min="1"
            required={true}
          />

          <>
            <CompWindow data={widowType} stateKey="type" />
            <CompWindow data={widowFrame} stateKey="withFrame" />
            <CompWindow data={widowBox} stateKey="withBox" />
          </>
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
