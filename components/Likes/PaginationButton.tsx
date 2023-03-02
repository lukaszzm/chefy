import classNames from "classnames";
import { Button } from "../UI/Button";
import Link from "next/link";

interface IPaginationButtonProps {
  children: React.ReactNode;
  toPage: number;
  active?: boolean;
  disabled?: boolean;
}

export const PaginationButton: React.FC<IPaginationButtonProps> = (props) => {
  const { children, toPage, active, disabled } = props;

  const styles = classNames(
    "w-10 h-10 m-1 flex justify-center items-center rounded-lg shadow-sm hover:shadow-md",
    {
      "bg-gray-100 text-gray-900 hover:bg-gray-200": !active,
      "bg-primary text-white hover:bg-primary-hover": active,
    }
  );

  return (
    <Link
      className={classNames({ "pointer-events-none": disabled })}
      href={{
        pathname: "/likes",
        query: { page: toPage },
      }}
    >
      <Button type="none" disabled={disabled} className={styles}>
        {children}
      </Button>
    </Link>
  );
};
