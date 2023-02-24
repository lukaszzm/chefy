interface ILabelProps {
  htmlFor: string;
  children: React.ReactNode;
  className?: string;
}

export const Label: React.FC<ILabelProps> = (props) => {
  const { children, className, htmlFor } = props;

  return (
    <label
      htmlFor={htmlFor}
      className={`p-2 font-semibold text-gray-700 ${className}`}
    >
      {children}
    </label>
  );
};
