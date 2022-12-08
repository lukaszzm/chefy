interface IModalProps {
  title: string;
  children: React.ReactNode;
}

export const Modal: React.FC<IModalProps> = (props) => {
  const { children, title } = props;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="relative top-32 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <h2 className="text-center text-3xl font-semibold m-5">{title}</h2>
        {children}
      </div>
    </div>
  );
};
