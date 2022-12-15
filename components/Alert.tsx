interface IAlertProps {
  children: React.ReactNode;
  className?: string;
}

export const Alert: React.FC<IAlertProps> = (props) => {
  const { className, children } = props;
  return (
    <div className={`w-full bg-red-400 text-white p-3 rounded ${className}`}>
      <p>{children}</p>
    </div>
  );
};
