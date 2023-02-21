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
        <div className="rounded-lg bg-blue-600 text-white border border-blue-600 p-1 text-sm m-1 flex items-center justify-center">
          {category}
        </div>
        <div className="rounded-lg bg-orange-600 text-white border border-orange-600 p-1 text-sm m-1 flex items-center justify-center">
          {area}
        </div>
      </div>
    </>
  );
};
