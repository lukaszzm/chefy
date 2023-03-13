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
      sizes="20vw"
      className="w-full h-auto max-h-[25rem] rounded-lg"
    />
  );
};
