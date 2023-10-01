import style from "./style.module.css";

const InputField = ({
  index,
  type,
  id,
  name,
  placeholder,
  onChange,
  value = "",
  ...rest
}) => {
  return (
    <>
      {index ? <h2>{index}- </h2> : null}
      <input
        type={type}
        id={id}
        className={style.numbers}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        {...rest}
      />
    </>
  );
};

export default InputField;
