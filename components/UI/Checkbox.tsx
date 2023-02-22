interface ICheckBox {
  id: string;
  text: string;
  isDefaultChecked: boolean;
}

export const CheckBox: React.FC<ICheckBox> = (props) => {
  const { id, text, isDefaultChecked } = props;

  return (
    <li className="m-1">
      <input
        type="checkbox"
        id={id}
        className={`hidden peer`}
        defaultChecked={isDefaultChecked}
      />

      <label
        htmlFor={id}
        className={`inline-flex p-1 px-2 text-gray-900 bg-gray-100 border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-400 peer-checked:text-white peer-checked:bg-blue-400 peer-checked:hover:bg-blue-500 peer-checked:hover:border-blue-500 text-center  hover:bg-gray-200 transition duration-150  ease-in-out`}
      >
        <p className="w-full text-sm font-semibold">{text}</p>
      </label>
    </li>
  );
};
