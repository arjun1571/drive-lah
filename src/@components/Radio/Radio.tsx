import React from "react";

type RadioOption = {
  label: string;
  value: string;
};

interface RadioButtonProps {
  options: RadioOption[];
  name: string;
  selectedValue: string;
  onChange: (value: string) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({ options, name, selectedValue, onChange }) => {
  return (
    <div className="space-y-2">
      {options.map((option) => (
        <label
          key={option.value}
          className="flex items-center justify-between border border-gray-300 rounded-lg p-2 cursor-pointer"
        >
          <span className="text-gray-700">{option.label}</span>
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => onChange(option.value)}
            className="ml-2"
          />
        </label>
      ))}
    </div>
  );
};

export default RadioButton;
