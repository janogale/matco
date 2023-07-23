import React, { ChangeEvent } from 'react';
import { Select } from 'flowbite-react';

interface SelectInputProps {
  label: string;
  name: string;
  value: string;
  className?: string;
  labelClassName?: string;
  options: { value: string; label: string }[];
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const SelectInput = ({ label, name, value, options, className, labelClassName, onChange }: SelectInputProps) => {
  return (
    <div className={`mb-4 ${className}`}>
      {/* <label htmlFor={name} className={`${labelClassName}`}>
        {label}
      </label> */}
      <Select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
    </div>
  );
};

export default SelectInput;
