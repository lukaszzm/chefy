import Image from "next/image";

interface IImageContainerProps {
  src: string;
  alt: string;
}

export const ImageContainer: React.FC<IImageContainerProps> = (props) => {
  const { src, alt } = props;

  return (
    <div className="relative w-full h-72">
      <Image
        src={src}
        fill
        priority
        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        alt={alt}
        className="rounded-md shadow-sm border border-gray-200 self-center"
      />
    </div>
  );
};
