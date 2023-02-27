interface IContainerProps {
  children: React.ReactNode;
}

export const Container: React.FC<IContainerProps> = (props) => {
  const { children } = props;

  return (
    <div className="w-full h-full ml-64 p-10 flex justify-center items-center">
      <div className="bg-gray-50 p-6 rounded-lg shadow-lg text-center flex flex-col max-w-md w-5/6">
        {children}
      </div>
    </div>
  );
};
