import { useState, useEffect } from "react";
import styles from "./select.module.css";

type SelectOptions = {
  label: string;
  value: string | number;
};

type SelectProps = {
  options: SelectOptions[];
  value?: SelectOptions;
  onChange: (value: SelectOptions | undefined) => void;
};

function Select({ value, onChange, options }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hightlightedIndex, setHighlightedIndex] = useState(0);

  useEffect(() => {
    if (isOpen) setHighlightedIndex(0);
  }, [isOpen]);

  const toggleOptions = () => setIsOpen((prev) => !prev);

  const selectOption = (option: SelectOptions) => {
    if (option !== value) onChange(option);
  };

  const isOptionSelected = (option: SelectOptions) => {
    console.log(option === value);
    return option === value;
  };

  const clearOptions = () => {
    onChange(undefined);
  };

  return (
    <div
      onBlur={toggleOptions}
      onClick={toggleOptions}
      tabIndex={0}
      className={styles.container}
    >
      <span className={styles.value}>{value?.label}</span>
      <button
        onClick={(e) => {
          e.stopPropagation();
          clearOptions();
        }}
        className={styles["clear-btn"]}
      >
        &times;
      </button>
      <div className={styles.divider}></div>
      <div className={styles.caret}></div>
      <ul className={`${styles.options} ${isOpen ? styles.show : ""}`}>
        {options.map((option, index) => (
          <li
            onMouseEnter={() => setHighlightedIndex(index)}
            onClick={(e) => {
              e.stopPropagation();
              selectOption(option);
              setIsOpen(false);
            }}
            key={option.value}
            className={`${styles.option} 
              ${isOptionSelected(option) ? styles.selected : ""}
                ${index === hightlightedIndex ? styles.highlighted : ""}
              `}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Select;
