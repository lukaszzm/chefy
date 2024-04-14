import { notFound } from "next/navigation";

import { getLikedRecipes } from "@/actions/recipe/get-liked-recipes";
import { LikesList } from "@/components/likes/likes-list";
import { LikesPagination } from "@/components/likes/likes-pagination";
import { Container } from "@/components/ui/container";
import { Title } from "@/components/ui/title";
import { safeNumber } from "@/utils/safe-number";

interface PageProps {
  searchParams: {
    page?: string;
  };
}

export default async function LikesPage({ searchParams: { page } }: PageProps) {
  const fixedPage = safeNumber(page);

  const { recipes, pageCount } = await getLikedRecipes(fixedPage);

  if (fixedPage > pageCount) {
    return notFound();
  }

  return (
    <Container className="space-y-4">
      <Title>Liked Recipes</Title>
      <LikesList recipes={recipes} />
      <LikesPagination lastPage={pageCount} page={fixedPage} />
    </Container>
  );
}
