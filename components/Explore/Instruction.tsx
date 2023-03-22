import classNames from "classnames";

interface IInstructionProps {
  instruction: string;
}

export const Instruction: React.FC<IInstructionProps> = (props) => {
  const { instruction } = props;

  return (
    <>
      <p className="text-left font-medium text-gray-900">Instruction</p>
      <div className="flex justify-start">
        <p className="text-gray-500 text-sm text-left p-2">{instruction}</p>
      </div>
    </>
  );
};
