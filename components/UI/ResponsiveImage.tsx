import Image from "next/image";

interface IResonsiveImageProps {
  src: string;
  alt: string;
}

export const ResponsiveImage: React.FC<IResonsiveImageProps> = (props) => {
  const { src, alt } = props;

  return (
    <Image
      alt={alt}
      src={src}
      width={700}
      height={475}
      sizes="24rem"
      className="w-2/3 rounded-lg sm:w-full m-auto border border-gray-400 h-auto object-cover"
    />
  );
};
