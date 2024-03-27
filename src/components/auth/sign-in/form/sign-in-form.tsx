"use client";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Form, FormLabel, FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useSignIn } from "@/hooks/use-sign-in";

// TODO: implement sign in logic
export const SignInForm = () => {
  const { form, apiResponse } = useSignIn();
  const {
    control,
    formState: { isValid },
  } = form;

  return (
    <Form {...form}>
      <form className="space-y-4">
        <FormField
          control={control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="example@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="********" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {apiResponse && (
          <Alert variant="destructive">
            <AlertDescription>{apiResponse.text}</AlertDescription>
          </Alert>
        )}
        <Button className="w-full" disabled={!isValid}>
          Sign In
        </Button>
      </form>
    </Form>
  );
};
