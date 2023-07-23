import React, { ChangeEvent } from 'react';
import { Checkbox } from 'flowbite-react';

interface CheckboxInputProps {
  label: string;
  name: string;
  checked: boolean;
  className?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CheckboxInput = ({ label, name, checked, className, onChange }: CheckboxInputProps) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className={`inline-flex items-center ${className}`}>
        <Checkbox
          id={name}
          name={name}
          checked={checked}
          onChange={onChange}
          className={className}
        />
        <span className="ml-2">{label}</span>
      </label>
    </div>
  );
};

export default CheckboxInput;
