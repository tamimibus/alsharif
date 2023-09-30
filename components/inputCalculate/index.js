import { useEffect, useRef, useState } from "react";
import Layout from "../layout";
import style from "./style.module.css";
import InputField from "../inputField";
import { useRouter } from "next/router";

const InputCalculate = () => {
  const total = useRef([]);
  const [area, setArea] = useState("");
  const router = useRouter();
  const newArray = useRef([]);
  //pal1:withFrame:{withBox}
  const priceSchema = {
    pal1: { 0: { 0: 1, 1: 2 }, 1: { 0: 3, 1: 4 } },
    rol1: { 0: { 0: 5, 1: 6 }, 1: { 0: 7, 1: 8 } },
  };
  const data = router.query;
  console.log("checking==>datadata", data);
  console.log(
    "checking==>datadatapriceSchema",
    priceSchema?.[data?.type]?.[data?.withFrame]?.[data?.withBox]
  );
  useEffect(() => {
    Array.from({ length: +data.windowNo }, (_, index) => {
      newArray.current = [
        ...newArray.current,
        { id: index + 1, name: `s${index + 1}` },
      ];
    });
    setArea({});
  }, [data.windowNo]);

  const onChange = (e) => {
    setArea((prev) => {
      return {
        ...prev,
        [e.target.id]: {
          ...prev[e.target.id],
          [e.target.name]: e.target.value,
        },
      };
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    let totoalarea = 0;
    let fullValues = Object?.values(area)?.map?.((item) => {
      console.log("checking==>fullValues", item);
      if ((item.width / 100) * (item.height / 100) < 0.75)
        totoalarea = totoalarea + 0.75;
      else totoalarea = totoalarea + (item.width / 100) * (item.height / 100);
    });
    console.log("checking==>totoalarea", totoalarea);
  };
  // console.log("checking==>area", area);
  // console.log("checking==>object", Object.keys(area), Object.values(area));

  return (
    <Layout className={style.container}>
      {/* <div>total area: {areaTotal}</div>
      <div>total cost: {areaCost}</div> */}
      {newArray.current.map((item) => {
        return (
          <div className={style.conversions} key={item.id}>
            <InputField
              type="number"
              id={item.name}
              className={style.numbers}
              name="width"
              placeholder="please enter the width"
              onChange={onChange}
              value={area[item.name]?.width || ""}
            />

            <label>width (cm) * height (cm)</label>
            <InputField
              type="number"
              id={item.name}
              className={style.numbers}
              name="height"
              placeholder="please enter the height"
              onChange={onChange}
              value={area[item.name]?.height || ""}
            />
            <label>output</label>
          </div>
        );
      })}
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
        onClick={onSubmit}
      >
        submit
      </button>
    </Layout>
  );
};

export default InputCalculate;
