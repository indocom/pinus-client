import React from "react";

interface OwnProps {
  type: string;
  ref?: React.Ref<HTMLInputElement>;
  id?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onBlur?: (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onFocus?: (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const Input: React.FC<OwnProps> = ({
  type,
  ref,
  id,
  name,
  value,
  placeholder,
  onChange,
  onBlur,
  onFocus,
}) => {
  return (
    <input
      className={`
        font-sans text-gray-900
        w-full p-3
        border-solid border-2 border-gray-500 rounded-lg
        focus:outline-none
      `}
      type={type}
      ref={ref}
      id={id}
      name={name}
      aria-label={`${name}-input`}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
    />
  );
};

export default Input;
