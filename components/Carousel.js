import Image from "next/image";
import style from "./carousel.module.css";
import Link from "next/link";
import Router from "next/router";
import { useState } from "react";

const Carousel = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  function plusSlides(n) {
    if (slideIndex + n > imagesSlider.length || slideIndex + n < 1) {
      setSlideIndex(1);
    } else {
      setSlideIndex((preState) => preState + n);
    }
    // setSlideIndex((preState) =>
    //   (preState + n)||() > imagesSlider.length ? 1 : preState + n
    // );
  }

  const imagesSlider = [
    { id: 1, url: "/images/testing4.jpeg", alt: "image three" },
    { id: 2, url: "/images/testing5.jpeg", alt: "image three" },
    { id: 3, url: "/images/testing6.jpeg", alt: "image three" },
    { id: 4, url: "/images/testing7.jpeg", alt: "image three" },
    { id: 5, url: "/images/testing8.jpeg", alt: "image three" },
    { id: 6, url: "/images/testing9.jpeg", alt: "image three" },
    { id: 7, url: "/images/testing10.jpeg", alt: "image three" },
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
              src={slideIndex == image.id ? image.url : "/images/testing4.jpeg"}
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
  /* /// */
}
{
  /* <div className={style.slider}>
      <div className={style.slides}>
        {imagesSlider.map((image) => {
          return (
            <div key={image.id} className={style.carouselItem}>
              <Image
                src={image.url}
                layout="fill"
                objectFit="cover"
                alt={image.alt}
              />
            </div>
          );
        })}
      </div>
      <div className={style.overlay}></div>
    </div> */
}
