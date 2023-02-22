import React from "react";

interface ICheckBox {
  id: string;
  text: string;
  isCheckedByDefault?: boolean;
}

export const Checkbox = React.forwardRef<HTMLInputElement, ICheckBox>(
  (props, ref) => {
    const { id, text, isCheckedByDefault, ...rest } = props;

    return (
      <li className="m-1">
        <input
          ref={ref}
          id={id}
          name={id}
          value={id}
          type="checkbox"
          defaultChecked={isCheckedByDefault}
          onClick={() => console.log(id)}
          className={`hidden peer`}
          {...rest}
        />
        <label
          htmlFor={id}
          className={`inline-flex p-1 px-2 text-gray-900 bg-gray-100 border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-400 peer-checked:text-white peer-checked:bg-blue-400 peer-checked:hover:bg-blue-500 peer-checked:hover:border-blue-500 text-center  hover:bg-gray-200 transition duration-150  ease-in-out`}
        >
          <p className="w-full text-sm font-semibold">{text}</p>
        </label>
      </li>
    );
  }
);

Checkbox.displayName = "Checkbox";
