import Image from "next/image";
import icon from "../../public/logo.svg";
import classNames from "classnames";

interface ILogoProps {
  className?: string;
  hideInMobile?: boolean;
}

export const Logo: React.FC<ILogoProps> = (props) => {
  const { className, hideInMobile } = props;

  const styles = classNames(`w-auto ${className}`, {
    "hidden sm:flex": hideInMobile,
    flex: !hideInMobile,
  });

  return (
    <div className={styles}>
      <Image
        src={icon}
        alt="icon"
        height={36}
        width={36}
        style={{ marginTop: "0.2rem", marginRight: "0.5rem" }}
      />
      <p className="hidden font-semibold text-4xl md:block">Chefy</p>
    </div>
  );
};
