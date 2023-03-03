interface ICardProps {
  children: React.ReactNode;
}

export const Card: React.FC<ICardProps> = (props) => {
  const { children } = props;

  return (
    <div className="w-sm max-w-sm h-[42rem] max-h-[42rem]">{children}</div>
  );
};
