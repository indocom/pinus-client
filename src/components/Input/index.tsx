import React from "react";

interface OwnProps {
  type: string;
  ref?: React.Ref<HTMLInputElement>;
  id?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  error?: string;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onBlur?: (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onFocus?: (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;

  // Styling overrides
  style?: string;
  border?: string;
  padding?: string;
}

const Input: React.FC<OwnProps> = ({
  type,
  ref,
  id,
  name,
  value,
  placeholder,
  error,
  onChange,
  onBlur,
  onFocus,
  style,
  border = "gray-500",
  padding = "p-3",
}) => {
  const errorColor = "red-600";

  const inputStyle = `\
    w-full ${padding} \
    rounded-lg resize-none \
    border-solid border-2 border-${error ? errorColor : border} \
    focus:ring focus:border-${error ? errorColor : "blue-600"} \
    focus:outline-none \
  `;

  const renderTextarea = () => {
    return (
      <textarea
        className={inputStyle}
        id={id}
        name={name}
        aria-label={`${name}-input`}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        rows={10}
      />
    );
  };

  const renderInput = () => {
    return (
      <input
        className={inputStyle}
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

  const renderError = () => {
    return <p className={`text-sm text-${errorColor}`}>{error}</p>;
  };

  const divStyle = `w-full flex flex-col justify-start items-start space-y-2 ${style}`;

  return (
    <div className={divStyle}>
      {type === "textarea" ? renderTextarea() : renderInput()}
      {error && renderError()}
    </div>
  );
};

export default Input;
