
import React, { ChangeEvent } from 'react';
import { TextInput } from 'flowbite-react';

interface TextInputProps {
    label: string;
    name: string;
    type?: string;
    placeholder: string;
    className?: string;
    labelClassName?: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  }
  
const Input = ({ label, name, value, onChange, placeholder, className, type, labelClassName, ...rest }: TextInputProps) => {
  return (
    <div className="mb-4">
      {/* <label htmlFor={name} className={`${labelClassName}`}>
        {label}
      </label> */}
      <TextInput
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={className}
        {...rest}
      />
    </div>
  );
};

export default Input;
