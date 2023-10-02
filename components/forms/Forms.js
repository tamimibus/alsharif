import { useState } from "react";
import Dropdown from "../dropDown/DropDown";
import style from "./forms.module.css";
import { useRouter } from "next/navigation";
const Forms = () => {
  const router = useRouter();
  const [formValues, setFromValues] = useState({
    name: "",
    phoneNumber: "",
    city: "",
  });
  const onChange = (event) => {
    event.preventDefault();

    setFromValues({ ...formValues, [event.target.id]: event.target.value });
  };
  const onsubmit = (event) => {
    event.preventDefault();
    router.push("/WindowTypes");
  };

  return (
    <form className={style.form} onSubmit={onsubmit}>
      <div className={style.title}>Welcome</div>
      <div className={style.subtitle}>Let's create your account!</div>
      <div className={`${style.inputContainer} ${style.ic1}`}>
        <input
          id="name"
          className={style.input}
          type="text"
          placeholder=" "
          onChange={onChange}
          value={formValues.name}
        />
        <div className={style.cut}></div>
        <label htmlFor="name" className={style.placeholder}>
          First name
        </label>
      </div>
      <div className={`${style.inputContainer} ${style.ic2}`}>
        <input
          id="phoneNumber"
          className={style.input}
          type="text"
          placeholder=" "
          value={formValues.phoneNumber}
          onChange={onChange}
        />
        <div className={style.cut}></div>
        <label htmlFor="phoneNumber" className={style.placeholder}>
          Last name
        </label>
      </div>
      <Dropdown
        name="fruit"
        options={[
          { name: "Amman", value: "amman", defaultValue: true },
          { name: "Aqaba", value: "aqaba" },
          { name: "Irbid", value: "irbid" },
          { name: "Zarqa", value: "zarqa" },
          { name: "Ma'an", value: "maan" },
          { name: "Madaba", value: "madaba" },
          { name: "Karak", value: "karak" },
          { name: "Balqa", value: "balqa" },
          { name: "Jerash", value: "jerash" },
          { name: "Tafila", value: "tafila" },
          { name: "Mafraq", value: "mafraq" },
          { name: "Ajloun", value: "ajloun" },

          // { name: "Cherry", value: "cherry" },
          // { name: "Lemon", value: "lemon", defaultValue: true },
          // { name: "Banana", value: "banana" },
          // { name: "Strawberry", value: "strawberry" },
          // { name: "Apple", value: "apple" },
          // { name: "Apricot", value: "apricot" },
          // { name: "Mango", value: "mango" },
          // { name: "Orange", value: "orange" },
          // { name: "Grape", value: "grape" },
          // { name: "Blueberry", value: "blueberry" },
          // { name: "Tomato", value: "tomato" },
          // { name: "Kiwi", value: "kiwi" },
          // { name: "Tangerine", value: "tangerine" },
        ]}
        onChange={onChange}
        // style={{ width: "20em" }}
      />
      {/* <div className={`${style.inputContainer} ${style.ic2}`}>
        <input id="email" className={style.input} type="text" placeholder=" " />
        <div className={`${style.cut} ${style.cutShort}`}></div>
        <label htmlFor="email" className={style.placeholder}>
          Email
        </label>
      </div> */}
      <button type="text" className={style.submit} onClick={onsubmit}>
        submit
      </button>
    </form>
  );
};

export default Forms;
