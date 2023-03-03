interface ICardProps {
  children: React.ReactNode;
}

export const Card: React.FC<ICardProps> = (props) => {
  const { children } = props;

  return (
    <div className="flex flex-col max-w-sm w-[24rem] h-[42rem] max-h-[42rem]">
      {children}
    </div>
  );
};
