interface IContainerProps {
  children: React.ReactNode;
}

export const Container: React.FC<IContainerProps> = (props) => {
  const { children } = props;

  return (
    <div className="w-full h-full sm:ml-40 md:ml-72 m-8 mb-24 sm:mb-8  flex justify-center items-center">
      <div className="bg-gray-50 p-6 rounded-lg shadow-lg text-center flex flex-col">
        {children}
      </div>
    </div>
  );
};
