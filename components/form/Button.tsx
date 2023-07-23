import React from 'react';

interface ButtonProps {
  label: string;
  className: string;
}

const Button= ({ label, className }: ButtonProps) => {
  return (
    <button type="submit" className={`btn btn-primary ${className}`}>
      {label}
    </button>
  );
};

export default Button;
