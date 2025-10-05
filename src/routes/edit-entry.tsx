import { createFileRoute } from "@tanstack/react-router";
import { EntryForm } from "../components";
import { useFetchEntries } from "../hooks";
import type { KnowledgeEntry } from "../types";

const EditKnowledgeEntryPage = () => {
  const { id } = Route.useSearch();

  const { data: currentEntity, isPending } =
    useFetchEntries<KnowledgeEntry>(id);

  if (isPending) {
    return (
      <div>
        <span>Loading Entry...</span>
      </div>
    );
  }

  return (
    <main>
      {currentEntity ? (
        <EntryForm action="edit" entity={currentEntity} />
      ) : null}
    </main>
  );
};

type EditEntitySearchParams = { id: string | undefined };

export const Route = createFileRoute("/edit-entry")({
  component: EditKnowledgeEntryPage,
  validateSearch: (search: Record<string, unknown>): EditEntitySearchParams => {
    return {
      id: String(search?.id),
    };
  },
});
