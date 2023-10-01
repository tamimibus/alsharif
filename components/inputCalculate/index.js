import { useEffect, useRef, useState } from "react";
import Layout from "../layout";
import style from "./style.module.css";
import InputField from "../inputField";
import { useRouter } from "next/router";

const InputCalculate = () => {
  const [area, setArea] = useState("");
  const [totalCost, setTotalCost] = useState({ cost: 0, area: 0 });
  const router = useRouter();
  const newArray = useRef([]);
  //pal1:withFrame:{withBox}
  const priceSchema = {
    pal1: { 0: { 0: 60, 1: 65 }, 1: { 0: 70, 1: 75 } },
    rol1: { 0: { 0: 80, 1: 85 }, 1: { 0: 90, 1: 95 } },
  };
  const data = router.query;

  useEffect(() => {
    if (newArray.current.length >= data.windowNo) return;
    Array?.from({ length: +data.windowNo }, (_, index) => {
      newArray.current = [
        ...newArray?.current,
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
    Object?.values(area)?.forEach?.((item) => {
      if ((item.width / 100) * (item.height / 100) < 0.75)
        totoalarea = totoalarea + 0.75;
      else totoalarea = totoalarea + (item.width / 100) * (item.height / 100);
    });
    const cost =
      totoalarea *
      priceSchema?.[data?.type]?.[data?.withFrame]?.[data?.withBox];
    setTotalCost({ cost, area: totoalarea });
  };

  const finalCost = (
    <div
      style={{
        background: "white",
        width: "100%",
        padding: "25px",
        textAlign: "center",
      }}
    >
      <p style={{ color: "black" }}>Cost: {totalCost.cost} JOD</p>

      <p style={{ color: "black", paddingBlock: "20px" }}>
        Total Area: {totalCost.area} m
      </p>
      <p style={{ color: "black" }}>please add 35 JOD per Motor</p>
    </div>
  );
  return (
    <Layout className={style.container}>
      {newArray?.current?.map?.((item, index) => {
        return (
          <div className={style.conversions} key={item.id}>
            <span>{index + 1} - </span>
            <InputField
              type="number"
              id={item.name}
              className={style.numbers}
              name="width"
              placeholder="width (cm)"
              onChange={onChange}
              value={area[item.name]?.width || ""}
            />

            <InputField
              type="number"
              id={item.name}
              className={style.numbers}
              name="height"
              placeholder=" height (cm)"
              onChange={onChange}
              value={area[item.name]?.height || ""}
            />
          </div>
        );
      })}
      {totalCost.cost ? finalCost : null}
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
