import React, { ChangeEvent } from 'react';
import { Textarea } from 'flowbite-react';

interface TextAreaInputProps {
  label: string;
  name: string;
  placeholder: string;
  value: string;
  className?: string;
  labelClassName?: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
}

const TextAreaInput = ({ label, name, value, onChange, placeholder, className, labelClassName, rows = 4, ...rest }: TextAreaInputProps) => {
  return (
    <div className="mb-4">
      {/* <label htmlFor={name} className={`${labelClassName}`}>
        {label}
      </label> */}
      <Textarea
        id={name}
        name={name}
        placeholder={placeholder}
        className={className}
        value={value}
        onChange={onChange}
        rows={rows}
        {...rest}
      />
    </div>
  );
};

export default TextAreaInput;
