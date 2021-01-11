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
  style?: string;
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
}) => {
  const inputStyle = `
    text-gray-900
    w-full p-3
    border-solid border-2
    border-${error ? "red-600" : "gray-500"} rounded-md
    focus:border-${error ? "red-600" : "blue-600"} focus:outline-none
    resize-none
  `;

  return (
    <div
      className={`
        flex flex-col
        w-full
        font-sans
        justify-start items-start
        ${style}
    `}
    >
      {type === "textarea" ? (
        <textarea
          className={`${inputStyle} resize-none`}
          id={id}
          name={name}
          aria-label={`${name}-input`}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          rows={5}
        />
      ) : (
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
      )}
      {error && (
        <p
          className={`
            text-red-600 text-sm
            mt-2
          `}
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
