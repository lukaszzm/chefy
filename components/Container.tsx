interface IContainerProps {
  children: React.ReactNode;
}

export const Container: React.FC<IContainerProps> = (props) => {
  const { children } = props;

  return (
    <div className="w-full h-full flex justify-center items-center overflow-auto">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center m-6 flex flex-col max-w-sm">
        {children}
      </div>
    </div>
  );
};
