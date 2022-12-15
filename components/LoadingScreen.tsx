export const LoadingScreen = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-black">
      <div className="border-t-transparent border-solid animate-spin rounded-full border-indigo-600 border-4 h-8 w-8"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};
