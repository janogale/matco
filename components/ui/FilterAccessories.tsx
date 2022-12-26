import { Dropdown } from "flowbite-react";

export const FilterAccessories = ({ options = [] }) => {
  return (
    <Dropdown label="Filter">
      {options.map((option) => (
        <Dropdown.Item key={option}>{option}</Dropdown.Item>
      ))}
    </Dropdown>
  );
};


