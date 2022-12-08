export const Welcome = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-74px)]">
      <h1 className="font-bold text-5xl m-1">Let&apos;s swipe!</h1>
      <p className="text-2xl m-2">To discover new lovely recipes...</p>
      <button className="inline-block w-48 py-3.5 bg-blue-600 text-white font-medium text-l m-2 leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
        Sign up
      </button>
    </div>
  );
};
