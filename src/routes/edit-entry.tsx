import { createFileRoute } from "@tanstack/react-router";
import { EntityForm } from "../components/EntityForm";
import { knowledgeEntries } from "../data";

const EditKnowledgeEntryPage = () => {
  const { id } = Route.useSearch();

  const currentEntity = knowledgeEntries.find((entity) => entity.id === id);

  return (
    <main>
      <EntityForm action="edit" entity={currentEntity} />
    </main>
  );
};

type EditEntitySearchParams = { id: number | undefined };

export const Route = createFileRoute("/edit-entry")({
  component: EditKnowledgeEntryPage,
  validateSearch: (search: Record<string, unknown>): EditEntitySearchParams => {
    return {
      id: Number(search?.id),
    };
  },
});
