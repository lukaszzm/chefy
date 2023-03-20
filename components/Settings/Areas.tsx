import { IArea } from "@/interfaces/Area.interface";
import { isItemChosen } from "@/utils/isItemChosen";
import { useSettingsForm } from "@/hooks/useSettingsForm";
import { Checkbox } from "@/ui/Checkbox";
import { Alert } from "@/ui/Alert";
import { Button } from "@/ui/Button";
import { Label } from "@/ui/Label";

interface IAreasProps {
  allAreas: IArea[];
  checkedByDefaultAreas: IArea[];
}

export const Areas: React.FC<IAreasProps> = (props) => {
  const { allAreas, checkedByDefaultAreas } = props;
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty, isSubmitting },
    apiResponse,
    onSubmit,
  } = useSettingsForm({});

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="text-left m-2">
      <Label htmlFor="Category">Areas</Label>
      <ul className="flex flex-wrap">
        {allAreas.map((el) => (
          <Checkbox
            {...register("prefferedAreas")}
            key={el.id}
            id={el.id}
            text={el.name}
            isCheckedByDefault={isItemChosen(el, checkedByDefaultAreas)}
          />
        ))}
      </ul>
      {apiResponse && isDirty && (
        <Alert isError={apiResponse.isError} className="mt-2">
          {apiResponse.text}
        </Alert>
      )}
      <Button
        type="primary"
        className="p-4 w-24"
        disabled={!isDirty}
        isLoading={isSubmitting}
      >
        Save
      </Button>
    </form>
  );
};
