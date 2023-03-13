interface ICardProps {
  children: React.ReactNode;
}

export const Card: React.FC<ICardProps> = (props) => {
  const { children } = props;

  return <div>{children}</div>;
};
