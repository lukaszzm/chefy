interface IAlertProps {
  children: React.ReactNode;
  className?: string;
}

export const Alert: React.FC<IAlertProps> = (props) => {
  const { className, children } = props;
  return (
    <div
      className={`w-11/12 m-auto bg-red-400 text-white p-3 rounded text-sm ${className}`}
    >
      <p>{children}</p>
    </div>
  );
};
