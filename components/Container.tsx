interface IContainerProps {
  children: React.ReactNode;
}

export const Container: React.FC<IContainerProps> = (props) => {
  const { children } = props;

  return (
    <div className="w-full bg-blue flex justify-center items-center">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center m-10">
        {children}
      </div>
    </div>
  );
};
