import classNames from "classnames";

interface IInstructionProps {
  instruction: string;
  shortVersion?: boolean;
}

export const Instruction: React.FC<IInstructionProps> = (props) => {
  const { instruction, shortVersion } = props;

  const textStyles = classNames("text-gray-500 text-sm text-left p-2", {
    "whitespace-nowrap overflow-hidden text-ellipsis": shortVersion,
  });

  return (
    <>
      <h3 className="text-left font-semibold text-gray-900">Instruction</h3>
      <div className="flex justify-start">
        <p className={textStyles}>{instruction}</p>
      </div>
    </>
  );
};
