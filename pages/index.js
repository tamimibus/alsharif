import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Carousel from "../components/Carousel";
import Link from "next/link";
import Dropdown from "../components/dropDown/DropDown";
import { CustomerInformationRoute } from "../utils";

export default function Home() {
  return (
    <Layout>
      {/* <section className={utilStyles.headingMd}> */}
      <Carousel />
      {/* </section> */}
      {/* <Dropdown
        name="fruit"
        options={[
          { name: "Cherry", value: "cherry" },
          { name: "Lemon", value: "lemon", defaultValue: true },
          { name: "Banana", value: "banana" },
          { name: "Strawberry", value: "strawberry" },
          { name: "Apple", value: "apple" },
          { name: "Apricot", value: "apricot" },
          { name: "Mango", value: "mango" },
          { name: "Orange", value: "orange" },
          { name: "Grape", value: "grape" },
          { name: "Blueberry", value: "blueberry" },
          { name: "Tomato", value: "tomato" },
          { name: "Kiwi", value: "kiwi" },
          { name: "Tangerine", value: "tangerine" },
        ]}
        onChange={(e) => {
          console.log(e.target.value);
        }}
        // style={{ width: "20em" }}
      /> */}
      <div
        style={{
          fontSize: "50px",
          // padding: "50px",
          textAlign: "center",
          padding: "25px",
        }}
      >
        <Link href={CustomerInformationRoute}>
          {" "}
          Calculate the cost of windows
        </Link>
      </div>
      <div
        style={{
          fontSize: "50px",

          textAlign: "center",
          padding: "25px",
        }}
      >
        <Link href={CustomerInformationRoute}>
          {" "}
          Calculate the cost of windows
        </Link>
      </div>
      <div
        style={{
          fontSize: "50px",

          textAlign: "center",
          padding: "25px",
        }}
      >
        <Link href={CustomerInformationRoute}>
          {" "}
          Calculate the cost of windows
        </Link>
      </div>
      <div
        style={{
          fontSize: "50px",

          textAlign: "center",
          padding: "25px",
        }}
      >
        <Link href={CustomerInformationRoute}>
          {" "}
          Calculate the cost of windows
        </Link>
      </div>
    </Layout>
  );
}
