interface ITitleProps {
  children: React.ReactNode;
  className?: string;
}

export const Title: React.FC<ITitleProps> = (props) => {
  const { children, className } = props;

  return (
    <h1 className={`${className} font-medium text-gray-800 text-2xl m-2`}>
      {children}
    </h1>
  );
};
