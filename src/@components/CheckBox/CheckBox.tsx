import React from "react";

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange, disabled }) => {
  const handleCheckboxChange = () => {
    if (disabled) return;
    onChange(!checked);
  };

  return (
    <label
      onClick={handleCheckboxChange}
      className={`flex items-center border border-gray-300 rounded-md p-3 cursor-pointer ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {/* Left Label */}
      <span className="text-gray-700 flex-1">{label}</span>

      {/* Right Circular Checkbox */}
      <div
        className={`w-5 h-5 flex items-center justify-center rounded-full border border-gray-600 p-2  ${
          disabled ? "cursor-not-allowed" : "cursor-pointer"
        }`}
      >
        {checked && <div className=" p-1.5 rounded-full bg-blue-500"></div>}
      </div>
    </label>
  );
};

export default Checkbox;
