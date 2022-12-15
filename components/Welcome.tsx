interface IWelcomeProps {
  openModal: () => void;
}

export const Welcome: React.FC<IWelcomeProps> = (props) => {
  const { openModal } = props;
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-74px)] bg-gradient-to-b from-gray-100 via-gray-100 to-green-100">
      <h1 className="font-bold text-5xl m-1">Let&apos;s swipe!</h1>
      <p className="text-2xl m-2">To discover new lovely recipes...</p>
      <button
        onClick={openModal}
        className="inline-block w-48 py-3.5 bg-primary text-white font-medium text-l m-2 leading-tight uppercase rounded shadow-md hover:bg-primary-hover hover:shadow-lg focus:bg-primary-hover focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-hover active:shadow-lg transition duration-150 ease-in-out"
      >
        Sign up
      </button>
    </div>
  );
};
