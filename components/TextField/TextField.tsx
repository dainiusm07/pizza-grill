import clsx from "clsx";
import React from "react";

export type TextFieldProps = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  "onChange" | "value"
> & {
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  multiline?: boolean;
  lines?: number;
};

const TextField: React.FC<TextFieldProps> = ({
  label,
  value,
  onChange,
  className,
  multiline,
  lines = 5,
  required,
  placeholder,
  type,
}) => {
  const InputElement = multiline ? "textarea" : "input";

  const handleInput = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <div className={clsx("flex flex-col", className)}>
      {Boolean(label) && (
        <label className="font-semibold text-lg mb-1 ml-1">{label}</label>
      )}
      <InputElement
        value={value}
        onChange={handleInput}
        placeholder={placeholder}
        type={type}
        rows={lines}
        required={required}
        className="flex-1 border border-black px-3 py-2 text-black outline-none transition-all rounded-md"
      />
    </div>
  );
};

export default TextField;
