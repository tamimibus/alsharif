import Image from "next/image";
import { useState } from "react";
import style from "./carousel.module.css";

const Carousel = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  function plusSlides(n) {
    if (slideIndex + n > imagesSlider.length || slideIndex + n < 1) {
      setSlideIndex(1);
    } else {
      setSlideIndex((preState) => preState + n);
    }
  }

  const imagesSlider = [
    { id: 1, url: "/images/seven.png", alt: "image 5" },
    { id: 2, url: "/images/six.png", alt: "image 6" },
    { id: 3, url: "/images/nine.png", alt: "image 6" },
  ];

  return (
    <div className={style.slideShowContainer}>
      {imagesSlider.map((image) => {
        return (
          <div
            className={`${slideIndex !== image.id && style.mySlides} ${
              style.fade
            }`}
            key={image.id}
            id={image.id}
          >
            {/* <div className="numbertext">1 / 3</div> */}
            <Image
              src={slideIndex == image.id && image.url}
              layout="fill"
              objectFit="cover"
              alt={image.alt}
            />
            {/* <div className="text">Caption Text</div> */}
          </div>
        );
      })}
      <div className={style.overlay}></div>

      <button className={style.prev} onClick={() => plusSlides(-1)}>
        ❮
      </button>
      <button className={style.next} onClick={() => plusSlides(1)}>
        ❯
      </button>
    </div>
  );
};
export default Carousel;
{
}
