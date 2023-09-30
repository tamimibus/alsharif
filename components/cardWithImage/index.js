import Image from "next/image";
import style from "./style.module.css";
import Switcher from "../switcher/Switcher";
import React from "react";
const CardWithImage = ({ data, title, onChange, windowSelections }) => {
  return (
    <>
      <p className={style.title}>{title}</p>
      <div className={style.container}>
        {data.map((item) => {
          return (
            // <div>

            <div className={style.cards} key={item.id}>
              <div className={style.card}>
                <Image
                  src={item.img}
                  // layout="fill"
                  width={200}
                  height={200}
                  objectFit="cover"
                  alt={"image.alt"}
                />

                <div className={style.cardBody}>
                  <h2>{item.name}</h2>
                  <Switcher
                    id={item.id}
                    onChange={onChange}
                    inputName={item.inputName}
                    value={item.value}
                    windowSelections={windowSelections}
                  />
                </div>
              </div>
            </div>
            // </div>
          );
        })}
      </div>
    </>
  );
};

export default React.memo(CardWithImage);
