import Image from "next/image";

interface IResonsiveImageProps {
  src: string;
  alt: string;
}

export const ResponsiveImage: React.FC<IResonsiveImageProps> = (props) => {
  const { src, alt } = props;

  return (
    <div className="relative w-72 m-auto h-72 sm:h-[17rem] border bg-gray-200 border-gray-400 rounded-md">
      <Image alt={alt} src={src} fill className="object-cover rounded-md" />
    </div>
  );
};
