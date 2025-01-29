import type { Metadata } from "next";

import { Undo2 } from "lucide-react";
import { redirect } from "next/navigation";

import { RecipeBadges } from "@/components/recipe/recipe-badges";
import { RecipeIngredients } from "@/components/recipe/recipe-ingredients";
import { RecipeLabel } from "@/components/recipe/recipe-label";
import { BackButton } from "@/components/ui/back-button";
import { Block } from "@/components/ui/block";
import { Heading, HeadingTitle } from "@/components/ui/heading";
import { routes } from "@/config/routes";
import { LikesDropdownMenu } from "@/features/likes/components/dropdown-menu";
import { getCurrentSession } from "@/lib/auth/session";
import { getLikeRecipe } from "@/lib/db/queries/recipe";

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;

  const { id } = params;

  const { user } = await getCurrentSession();

  if (!user) {
    return redirect(routes.signIn);
  }

  const data = await getLikeRecipe(user.id, id);

  return {
    title: data?.recipe.title ?? "Recipe not found",
  };
}

export default async function LikedRecipePage(props: PageProps) {
  const params = await props.params;

  const { id } = params;

  const { user } = await getCurrentSession();

  if (!user) {
    return redirect(routes.signIn);
  }

  const data = await getLikeRecipe(user.id, id);

  if (!data) {
    return redirect(routes.likes);
  }

  return (
    <>
      <Heading className="flex w-full items-center justify-between">
        <div className="space-y-2">
          <HeadingTitle>{data.recipe.title}</HeadingTitle>
          <RecipeBadges area={data.recipe.area.name} category={data.recipe.category.name} />
        </div>
        <LikesDropdownMenu recipe={data.recipe} deleteWithRedirect />
      </Heading>
      <Block className="flex flex-col">
        <RecipeLabel>Ingredients</RecipeLabel>
        <RecipeIngredients ingredients={data.recipe.ingredients} />
        <RecipeLabel>Instructions</RecipeLabel>
        <p>{data.recipe.instructions}</p>
        <BackButton className="mr-2 self-end">
          <span>Back</span>
          <Undo2 />
        </BackButton>
      </Block>
    </>
  );
}
