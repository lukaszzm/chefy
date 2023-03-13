import { LoadingSpinner } from "./LoadingSpinner";

export const LoadingScreen = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-black">
      <LoadingSpinner />
      <span className="sr-only">Loading...</span>
    </div>
  );
};
