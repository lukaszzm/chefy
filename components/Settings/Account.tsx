import { UserSettingsSchema } from "../../schemas/UserSettingsSchema";
import { Alert } from "../UI/Alert";
import { Button } from "../UI/Button";
import { Label } from "../UI/Label";
import { useSettingsForm } from "../../hooks/useSettingsForm";
import { Input } from "../UI/Input";

interface IAccountProps {
  name: string;
}

export const Account: React.FC<IAccountProps> = (props) => {
  const { name } = props;
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty, isSubmitting },
    apiResponse,
    onSubmit,
  } = useSettingsForm({
    schema: UserSettingsSchema,
    defaultValues: { name: name },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="text-left m-2">
      <Label htmlFor="name">Name</Label>
      <Input
        {...register("name")}
        type="text"
        placeholder="Your name"
        error={errors.name}
      />
      {apiResponse && (
        <Alert isError={apiResponse.isError} className="mt-2">
          {apiResponse.text}
        </Alert>
      )}
      <Button
        type="primary"
        className="p-4 w-24"
        disabled={!isValid || !isDirty}
        isLoading={isSubmitting}
      >
        Save
      </Button>
    </form>
  );
};
