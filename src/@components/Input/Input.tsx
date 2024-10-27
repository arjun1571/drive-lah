import React, { ChangeEvent, KeyboardEvent, MouseEvent, useEffect, useRef, useState } from "react";
import { dataTestIdentifier, generateId } from "../../utils";

type Type = "text" | "textarea" | "email" | "password" | "number" | "phone";
type Variant = "outlined" | "filled" | "none";
type BGColor = "primary" | "secondary" | "danger" | "warning";

interface IInputProps {
  label?: string | JSX.Element;
  placeholder?: string;
  onChange?: Function;
  onBlur?: Function;
  onClick?: Function;
  onFocus?: Function;
  onKeyPress?: Function;
  type?: Type;
  bgColor?: BGColor;
  variant?: Variant;
  iconLeft?: JSX.Element;
  iconRight?: JSX.Element;
  leftText?: string;
  isDisabled?: boolean;
  errorText?: string | any;
  min?: number;
  max?: number;
  maxLength?: number;
  defaultValue?: string | number;
  value?: string | number;
  registerProperty?: any;
  leftHelpText?: string | JSX.Element;
  helpText?: string | JSX.Element;
  ref?: React.Ref<HTMLInputElement>;
  id?: string;
  dataTestId?: string;
  classNames?: string;
  inputClassNames?: string;
  isRequired?: boolean;
  noMargin?: boolean;
  noPadding?: boolean;
  noBorder?: boolean;
  noTextAreaHeight?: boolean;
  pattern?: any;
  staticText?: string;
  name?: string;
}

const Input: React.FC<IInputProps> = ({
  label,
  placeholder,
  onChange,
  onBlur,
  onClick,
  onFocus,
  onKeyPress,
  type = "text",
  name,
  iconLeft,
  iconRight,
  defaultValue = "",
  value,
  min,
  max,
  maxLength,
  errorText,
  isDisabled,
  ref,
  registerProperty,
  leftHelpText,
  helpText,
  id,
  dataTestId,
  leftText,
  classNames,
  inputClassNames,
  isRequired = false,
  noMargin = false,
  noPadding = false,
  noTextAreaHeight = false,
  noBorder = false,
  pattern,
  staticText,
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>(defaultValue?.toString());

  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const handleClick = (e: MouseEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onClick && onClick(e);
  };

  const handleFocus = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setIsFocused(true);
    onFocus && onFocus(e);
  };

  const handleWheel = (e: React.WheelEvent<HTMLInputElement>) => {
    e.currentTarget.blur();
  };

  const handleBlur = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setIsFocused(false);
    onBlur && onBlur(e);
    registerProperty && registerProperty.onBlur(e);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value } = e.target;
    setInputValue(value);
    onChange && onChange(e);
    registerProperty && registerProperty.onChange(e);
  };

  const myRef: any = useRef(null);

  useEffect(() => {
    if (registerProperty?.name) {
      const inputValue = document.getElementById(registerProperty.name)?.value;
      setInputValue(inputValue);
    }
  }, [registerProperty]);

  return (
    <div
      className={`relative ${classNames ? classNames : ""} ${
        isDisabled ? "opacity-50 cursor-not-allowed pointer-events-none" : ""
      }  min-w-[200px] ${!noMargin ? "mt-5 mb-3" : ""}`}
    >
      <div className="relative">
        {label ? (
          <label
            htmlFor={id ? id : registerProperty?.name ? registerProperty.name : generateId()}
            className="block font-inter text-xs font-semibold text-neutral-500 mb-2"
          >
            {`${label}`}
            {isRequired ? <span className="ml-1 text-danger-500 font-inter text-[12px] font-semibold">*</span> : null}
          </label>
        ) : null}
        {type !== "textarea" && (
          <input
            step="any"
            type={type === "password" ? (isPasswordVisible ? "text" : "password") : type}
            id={id ? id : registerProperty?.name ? registerProperty.name : generateId()}
            data-test-id={dataTestIdentifier(dataTestId, registerProperty?.name, name, id)}
            className={`h-[42px] relative flex ${
              !noBorder ? "border" : ""
            }  font-inter font-medium text-sm text-text-primary ${
              !errorText && !isFocused && inputValue
                ? "border-success-500"
                : errorText
                ? "border-danger-500"
                : isFocused
                ? "border-primary-500"
                : "border-neutral-200"
            } outline-none ${iconLeft ? "pl-[54px]" : leftText ? "pl-[65px]" : !noPadding ? "pl-6 pr-6 py-2" : ""} ${
              inputClassNames ? inputClassNames : ""
            } rounded-lg w-full  placeholder:text-neutral-200`}
            ref={(el) => {
              myRef.current = el;
              registerProperty && registerProperty.ref(el);
            }}
            pattern={pattern}
            name={registerProperty ? registerProperty.name : name}
            min={min}
            max={max}
            key={registerProperty}
            maxLength={maxLength}
            placeholder={`${placeholder}`}
            defaultValue={defaultValue && defaultValue}
            value={value && value}
            onClick={(e: MouseEvent<HTMLInputElement>) => handleClick(e)}
            onFocus={(e: ChangeEvent<HTMLInputElement>) => handleFocus(e)}
            onBlur={(e: ChangeEvent<HTMLInputElement>) => handleBlur(e)}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
            onKeyPress={(e: KeyboardEvent<HTMLTextAreaElement>) => onKeyPress && onKeyPress(e)}
            onWheel={handleWheel}
          />
        )}

        {staticText && (
          <span
            className={`absolute inset-y-0 top-6 right-0 flex items-center pr-5 text-sm  ${
              isFocused ? "text-text-primary" : " text-[#B9BDC7]"
            }  text-[14px] font-medium font-inter`}
          >
            {staticText}
          </span>
        )}

        {iconLeft && <div className="absolute left-8 top-8 mt-[0px]  ">{iconLeft}</div>}

        {leftText && (
          <div className="absolute left-6 top-8 mt-[1px]  ">
            <p className="text-neutral-600">{leftText}</p>
          </div>
        )}

        {type === "textarea" && (
          <textarea
            id={id ? id : registerProperty?.name ? registerProperty.name : generateId()}
            data-test-id={dataTestIdentifier(dataTestId, registerProperty?.name, name, id)}
            className={`relative ${!noTextAreaHeight ? "min-h-[124px]" : ""} 
            ${!noBorder ? "border" : ""}
            ${inputClassNames ? inputClassNames : ""}
            font-inter font-medium text-sm text-text-primary ${
              !errorText && !isFocused && inputValue
                ? "border-success-500"
                : errorText
                ? "border-danger-500"
                : isFocused
                ? "border-primary-500"
                : "border-neutral-200"
            } outline-none px-6 py-2 rounded-lg w-full placeholder:text-neutral-200`}
            placeholder={`${placeholder}`}
            ref={registerProperty ? registerProperty.ref : ref}
            name={registerProperty ? registerProperty.name : name}
            defaultValue={defaultValue}
            value={value && value}
            onClick={(e: MouseEvent<HTMLTextAreaElement>) => handleClick(e)}
            onFocus={(e: ChangeEvent<HTMLTextAreaElement>) => handleFocus(e)}
            onBlur={(e: ChangeEvent<HTMLTextAreaElement>) => handleBlur(e)}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => handleChange(e)}
            onKeyPress={(e: KeyboardEvent<HTMLTextAreaElement>) => onKeyPress && onKeyPress(e)}
          ></textarea>
        )}

        {iconRight || type ? (
          <div className="flex items-center absolute right-4 top-8 cursor-pointer">
            {type === "password" ? (
              isPasswordVisible ? (
                <span onClick={togglePasswordVisibility} className="material-icons-outlined text-neutral-400">
                  visibility
                </span>
              ) : (
                <span onClick={togglePasswordVisibility} className="material-icons-outlined text-neutral-400">
                  visibility_off
                </span>
              )
            ) : (
              iconRight
            )}
          </div>
        ) : (
          ""
        )}
      </div>

      {errorText && <h3 className="text-danger-500 text-xxs absolute mt-[5px] font-inter ">{errorText}</h3>}

      {leftHelpText && helpText && (
        <div className="flex justify-between items-center mt-5">
          <div className="flex items-center gap-2">{leftHelpText && <div>{leftHelpText}</div>}</div>
          <div className="flex justify-end font-inter hover:text-primary-500 text-sm text-text-primary cursor-pointer ">
            {helpText === "string" ? <h4>{helpText}</h4> : helpText}
          </div>
        </div>
      )}
    </div>
  );
};

export default Input;
