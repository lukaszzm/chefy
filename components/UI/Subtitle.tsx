interface ISubtitleProps {
  children: React.ReactNode;
  className?: string;
}

export const Subtitle: React.FC<ISubtitleProps> = (props) => {
  const { children, className } = props;

  return (
    <h2
      className={`${className} text-left font-semibold border-b-gray-400  text-lg`}
    >
      {children}
    </h2>
  );
};
