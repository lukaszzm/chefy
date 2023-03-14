import classNames from "classnames";
import { useRouter } from "next/router";

interface IContainerProps {
  children: React.ReactNode;
}

export const Container: React.FC<IContainerProps> = (props) => {
  const { children } = props;
  const router = useRouter();

  const innerContainerStyles = classNames(
    "bg-gray-50 p-6 sm:pb-6 rounded-lg shadow-lg text-center flex flex-col w-full h-[calc(100vh-4rem)] sm:max-w-md sm:min-h-[44rem]",
    {
      "md:max-w-5xl": router.pathname === "/settings",
    }
  );

  return (
    <div className="w-full h-full sm:ml-40 sm:m-8 md:ml-72 sm:mb-8  flex justify-center items-center">
      <div className={innerContainerStyles}>{children}</div>
    </div>
  );
};
