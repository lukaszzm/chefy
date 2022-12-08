interface IModalProps {
  title: string;
  children: React.ReactNode;
  closeModal: () => void;
}

export const Modal: React.FC<IModalProps> = (props) => {
  const { children, title, closeModal } = props;

  return (
    <>
      <div
        onClick={closeModal}
        className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
      />
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-8 px-10 border w-96 shadow-lg rounded-md bg-white z-20">
        <h2 className="text-center text-3xl font-semibold mb-5">{title}</h2>
        {children}
      </div>
    </>
  );
};
