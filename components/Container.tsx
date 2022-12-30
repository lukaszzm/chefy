interface IContainerProps {
  children: React.ReactNode;
}

export const Container: React.FC<IContainerProps> = (props) => {
  const { children } = props;

  return (
    <div className="w-full overflow-auto bg-blue flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center m-6">
        {children}
      </div>
    </div>
  );
};
