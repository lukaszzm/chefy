import { Tag } from "../UI/Tag";

interface ICategoryProps {
  category: string;
  area: string;
  noTitle?: boolean;
}

export const Category: React.FC<ICategoryProps> = (props) => {
  const { category, area, noTitle } = props;

  return (
    <>
      {!noTitle && (
        <h3 className="text-left font-semibold text-gray-900">Category</h3>
      )}
      <div className="flex justify-start">
        <Tag color="blue">{category}</Tag>
        <Tag color="orange">{area}</Tag>
      </div>
    </>
  );
};
