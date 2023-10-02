import style from "./style.module.css";
import Image from "next/image";
const Card = (props) => {
  return (
    <div className={style.card}>
      <div className={style.cardImage}>
        <Image
          src={props.item.url}
          layout="fill"
          objectFit="contain"
          alt={props.item.alt}
        />
      </div>
    </div>
  );
};

export default Card;
