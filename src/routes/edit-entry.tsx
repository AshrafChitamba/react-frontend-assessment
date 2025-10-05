import { createFileRoute } from "@tanstack/react-router";
import { EntryForm } from "../components";

const EditKnowledgeEntryPage = () => {
  const { id } = Route.useSearch();

  const currentEntity: any = {}

  return (
    <main>
      <EntryForm action="edit" entity={currentEntity} />
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
