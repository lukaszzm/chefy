export const routes = {
  home: "/",
  signIn: "/sign-in",
  signUp: "/sign-up",
} as const satisfies Record<string, string>;
