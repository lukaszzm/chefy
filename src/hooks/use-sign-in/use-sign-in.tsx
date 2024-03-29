import { useState, useTransition } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { signIn } from "@/actions/auth/sign-in";
import { signInSchema, type SignInValues } from "@/schemas/auth/sign-in-schema";

export const useSignIn = () => {
  const [isPending, startTransition] = useTransition();
  const [credentialsError, setCredentialsError] = useState<string | null>(null);

  const form = useForm<SignInValues>({
    resolver: zodResolver(signInSchema),
    mode: "onChange",
  });

  const onSubmit = form.handleSubmit((values: SignInValues) => {
    setCredentialsError(null);

    startTransition(async () => {
      const res = await signIn(values);

      if (res.error) {
        setCredentialsError(res.error);
      }
    });
  });

  return {
    form,
    onSubmit,
    isPending,
    credentialsError,
  };
};
