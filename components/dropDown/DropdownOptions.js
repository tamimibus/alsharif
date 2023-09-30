import style from "./dropDown.module.css";

// Opted to move the dropdown options to a different component in order to make the Dropdown component more readable
const DropdownOptions = ({
  options,
  highlightedIndex,
  selectedIndex,
  eventListeners,
}) => {
  const { onOptionHover, onOptionClick } = eventListeners;
  return (
    <>
      {options.map((el, i) => {
        return (
          <li
            key={i}
            aria-selected={i === selectedIndex}
            data-value={el.value ? el.value : el.name}
            onMouseOver={(e) => {
              onOptionHover(e);
            }}
            onClick={(e) => {
              onOptionClick(e);
            }}
            style={{ "--index": i }}
            className={`${style.option} ${
              i === highlightedIndex ? style.highlight : ""
            }`}
            role="option"
          >
            {el.name}
          </li>
        );
      })}
    </>
  );
};

export default DropdownOptions;
