import { memo, useEffect, useState } from "react";
import { dataTestIdentifier } from "../../utils";

interface IRadioButton {
  options?: any;
  id?: string;
  dataTestId?: string;
  value?: string | number | boolean;
  name?: string;
  valuesKey?: "label" | "id" | "object" | string;
  textKey?: string;
  label?: string | JSX.Element;
  checked?: number | boolean;
  className?: string;
  isChecked?: boolean;
  singleUse?: boolean;
  isRequired?: boolean;
  children?: any;
  registerProperty?: any;
  defaultChecked?: boolean;
  onClick?: (e?: any) => void;
  onChange?: (e?: any) => void;
  noMargin?: boolean;
  radioStyle?: "col" | "row";
  grid?: boolean;
  gridItem?: string;
  errorText?: string | any;
  disabled?: boolean;
  optionsClassName?: string;
}

const Radio = ({
  options,
  id = "",
  dataTestId,
  name,
  value,
  label,
  children,
  valuesKey = "label",
  textKey = "label",
  checked = 0,
  isChecked,
  className,
  registerProperty,
  isRequired = false,
  singleUse = false,
  radioStyle = "col",
  defaultChecked = true,
  onClick,
  onChange,
  noMargin,
  grid,
  gridItem = "2",
  errorText,
  disabled = false,
  optionsClassName,
}: IRadioButton) => {
  const [selectedValue, setSelectedValue] = useState<string | number | boolean>();

  useEffect(() => {
    if (options && valuesKey && typeof checked === "number" && checked >= 0 && checked < options?.length) {
      setSelectedValue(options[checked][valuesKey]);
    } else setSelectedValue(value);
  }, []);

  return (
    <div
      className={`  ${noMargin ? "" : "mb-3"} ${className ? className : ""}`}
      // onClick={onClick}
    >
      {singleUse ? (
        <div
          className={` relative form-check form-check-inline flex item-center w-100`}
          onClick={() => (disabled ? null : onChange && onChange({ target: { name, value } }))}
          style={{ cursor: "pointer" }}
        >
          <input
            disabled={disabled}
            key={id}
            className="w-[13px] h-[13px] mt-[2px] ml-[2px] transition-colors bg-white border rounded-full appearance-none cursor-pointer peer border-slate-500  checked:bg-primary-600 checked:border-[2px] checked:border-white checked:hover:bg-primary-700  focus:outline-none checked:ring-[2px] checked:ring-primary-600 disabled:cursor-not-allowed disabled:border-neutral-100 disabled:bg-neutral-100"
            type="radio"
            name={name}
            id={id ? id : registerProperty?.name ? registerProperty.name : ""}
            data-test-id={dataTestIdentifier(dataTestId, registerProperty?.name, name, id)}
            value={value}
            onChange={onChange}
            checked={isChecked}
            role="button"
            {...registerProperty}
          />
          {label ? (
            <label
              className={`${
                disabled ? "!cursor-not-allowed" : "cursor-pointer"
              } pl-2 mt-[2px]  font-inter text-[12px] text-text-primary peer-disabled:cursor-not-allowed peer-disabled:text-text-light leading-none`}
              htmlFor={id}
            >
              {typeof label === "string" ? label : label}

              {isRequired ? (
                <span
                  style={{
                    color: "#f5222d",
                    marginLeft: "5px",
                  }}
                >
                  *
                </span>
              ) : null}
            </label>
          ) : null}

          {children && selectedValue === value ? children : ""}
        </div>
      ) : (
        <div>
          {label ? (
            <label
              className="form-check-label text-semibold"
              style={{
                marginBottom: "12px",
                marginRight: "0px",
                fontSize: "0.813rem",
                fontWeight: 500,
              }}
            >
              {typeof label === "string" ? label : label}
              {isRequired ? (
                <span
                  style={{
                    color: "#f5222d",
                    marginLeft: "5px",
                  }}
                >
                  *
                </span>
              ) : null}
            </label>
          ) : null}
          <div
            className={`${
              grid
                ? `grid md:grid-cols-${gridItem} grid-cols-1 gap-3 justify-start items-start`
                : `md:flex flex-${radioStyle} gap-1 ${optionsClassName ? optionsClassName : ""}`
            }`}
          >
            {options?.map((item: any, index: number) => {
              return (
                <div
                  key={item?.id + String(index)}
                  className={`relative form-check form-check-inline flex item-center gap-2 md:mt-0 mt-3 ${
                    !grid && radioStyle === "col" ? "mb-2" : index !== 0 ? "" : ""
                  }
                  ${radioStyle === "col" && "grid  grid-cols-[20px,auto] items-center"}
                
                  
                  `}
                >
                  <input
                    className={`w-[14px] h-[14px] ml-2 mt-[2px] transition-colors bg-white border-[1.5px] rounded-full appearance-none ${
                      item.disable ? "!cursor-not-allowed" : "cursor-pointer"
                    } peer border-slate-500  checked:bg-primary-600 checked:border-[2px] checked:border-white checked:hover:bg-primary-700  focus:outline-none checked:ring-[1.5px] checked:ring-primary-600 disabled:cursor-not-allowed disabled:border-slate-100 disabled:bg-slate-50`}
                    type="radio"
                    name={name}
                    id={item?.id + String(index)}
                    data-test-id={dataTestIdentifier(dataTestId, registerProperty?.name, name, id)}
                    value={valuesKey === "object" ? JSON.stringify(item) : item?.[valuesKey]}
                    disabled={Boolean(item.disable)}
                    onChange={(e: any) => {
                      onChange && onChange(e);
                    }}
                    {...registerProperty}
                    defaultChecked={defaultChecked && typeof checked === "number" && checked === index}
                    style={{ cursor: "pointer" }}
                  />
                  <label
                    className={`  ${radioStyle === "col" && "pl-2"} ${
                      item.disable ? "cursor-not-allowed" : "cursor-pointer"
                    } text-sm mt-[2px] text-neutral-700 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 leading-none`}
                    htmlFor={item?.id + String(index)}
                  >
                    {`${item?.[textKey]}`}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {errorText && <h3 className="text-danger-500 text-xxs mt-5 font-inter ">{errorText}</h3>}
    </div>
  );
};

export default memo(Radio);
