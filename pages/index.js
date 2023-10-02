import Carousel from "../components/Carousel";
import Card from "../components/cardGallary";
import Layout from "../components/layout";
import style from "../components/cardGallary/style.module.css";
export default function Home() {
  const imagesSlider = [
    { id: 1, url: "/images/testing5.jpeg", alt: "image 5" },
    { id: 2, url: "/images/testing6.jpeg", alt: "image 6" },
    { id: 3, url: "/images/testing7.jpeg", alt: "image 6" },
  ];
  return (
    <Layout>
      <Carousel />
      <p style={{ fontSize: "40px", textAlign: "center", color: "white" }}>
        Our Gallary
      </p>
      <div className={style.containerCard}>
        {imagesSlider.map((image) => (
          <Card item={image} key={image.id} />
        ))}

        {/* <Card />
        <Card /> */}
      </div>
    </Layout>
  );
}
