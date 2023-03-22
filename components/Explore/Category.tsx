import { Tag } from "@/ui/Tag";

interface ICategoryProps {
  category: string;
  area: string;
  hideLabel: boolean;
}

export const Category: React.FC<ICategoryProps> = (props) => {
  const { category, area, hideLabel } = props;

  return (
    <>
      {!!!hideLabel && (
        <p className="text-left font-medium text-gray-900">Category</p>
      )}
      <div className="flex justify-start">
        <Tag color="blue">{category}</Tag>
        <Tag color="orange">{area}</Tag>
      </div>
    </>
  );
};
