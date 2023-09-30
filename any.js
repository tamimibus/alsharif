import CardWithImage from "../../components/cardWithImage";
import Layout from "../../components/layout";
import React, { useState, useCallback, memo } from "react";
import { useRef } from "react";

const WindowTypeMemo = memo(({ onChange, windowSelections }) => {

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
  return (
    <CardWithImage
      data={widowType}
      title="please select type of window"
      onChange={(e) => onChange(e)}
      windowSelections={windowSelections}
    />
  );
});

const WindowBoxMemo = memo(({ onChange, windowSelections }) => {
  
  const widowBox = [
    {
      inputName: "withBox",
      name: "with Box",
      id: "box1",
      img: "/images/force.jpeg",
      value: "true",
    },
    {
      inputName: "withBox",
      name: "without Box",
      id: "box2",
      img: "/images/force.jpeg",
      value: "false",
    },
  ];
  return (
    <CardWithImage
      data={widowBox}
      title="please select with/out Box"
      onChange={onChange}
      windowSelections={windowSelections}
    />
  );
});

const WindowFrameMemo = memo(({ onChange, windowSelections }) => {

  const widowFrame = [
    {
      inputName: "withFrame",
      name: "with Frame",
      id: "frame1",
      img: "/images/force.jpeg",
      value: "true",
    },
    {
      inputName: "withFrame",
      name: "without Frame",
      id: "frame2",
      img: "/images/force.jpeg",
      value: "false",
    },
  ];
  return (
    <CardWithImage
      data={widowFrame}
      title="please select with/out Box"
      onChange={onChange}
      windowSelections={windowSelections}
    />
  );
});
const WindowTypes = () => {
  // const [windowSelections, setWindowSelections] = useState({
  //   type: "pal1",
  //   withBox: "false",
  //   withFrame: "false",
  // });
  const windowSelections = useRef({
    type: "pal1",
    withBox: "false",
    withFrame: "false",
  });
  const handleChange = useCallback(
    (e) => {
  
      windowSelections.current.[e.target.name]=e.target.value
      // setWindowSelections({
      //   ...windowSelections,
      //   [e.target.name]: `${e.target.value}`,
      // });
      // (prev) => {return{...prev, prev[e.target.name] : e.target.value}}
      // );
    },
    [
      windowSelections.type,
      windowSelections.withBox,
      windowSelections.withFrame,
    ]
  );
  console.log("checking==>windowSelectionswindowSelections", windowSelections);
  return (
    <Layout>
      <WindowTypeMemo
        onChange={handleChange}
        windowSelections={windowSelections}
      />
      <WindowBoxMemo
        onChange={handleChange}
        windowSelections={windowSelections}
      />
      <WindowFrameMemo
        onChange={handleChange}
        windowSelections={windowSelections}
      />

      <button
        type="text"
        // className={style.submit}
        style={{
          // .submit {
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
          width: "100%",
          // }
        }}
        onClick={() => {}}
      >
        submit
      </button>
    </Layout>
  );
};

export default WindowTypes;
