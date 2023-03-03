import Image from "next/image";

interface IImageContainerProps {
  src: string;
  alt: string;
}

export const ImageContainer: React.FC<IImageContainerProps> = (props) => {
  const { src, alt } = props;

  return (
    <div className="relative w-full h-60">
      <Image
        src={src}
        fill
        sizes="20rem"
        priority
        alt={alt}
        className="rounded-md shadow-sm border border-gray-200 self-center"
      />
    </div>
  );
};
