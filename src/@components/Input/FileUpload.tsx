import React from "react";

interface FileUploadProps {
  label?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  noMargin?: boolean;
}

const FileUpload: React.FC<FileUploadProps> = ({ label, onChange, noMargin }) => {
  return (
    <label
      className={`${
        noMargin ? "" : "mt-2"
      } border border-gray-300 py-14 rounded cursor-pointer text-center text-gray-500 hover:border-blue-500 transition-all duration-200 w-3/4`}
      style={{ display: "inline-block" }}
    >
      <span className="text-sky-600 font-semibold text-lg underline">{label}</span>
      <input type="file" onChange={onChange} className="hidden" />
    </label>
  );
};

export default FileUpload;
