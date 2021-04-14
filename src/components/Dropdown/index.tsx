import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

type Option = {
  value: string;
  label: string;
};

interface OwnProps {
  option: Array<Option>;
  multi?: boolean;
  defaultText: string;
  handleChange?: (option: Option) => void;
}

const animatedComponents = makeAnimated();

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: "2px",
    color: state.isSelected ? "black" : "gray",
    backgroundColor: state.isSelected ? "orange" : "white",
  }),
  control: (provided) => ({
    ...provided,
    marginTop: "2%",
  }),
};

const Dropdown: React.FC<OwnProps> = ({
  option,
  defaultText,
  handleChange,
  multi = false,
}) => {
  return (
    <Select
      onChange={handleChange}
      isClearable
      autoFocus={true}
      placeholder={defaultText}
      closeMenuOnSelect={true}
      components={animatedComponents}
      isMulti={multi}
      options={option}
      styles={customStyles}
    />
  );
};

export default Dropdown;
