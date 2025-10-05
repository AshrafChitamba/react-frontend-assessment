import { createFileRoute } from "@tanstack/react-router";
import { EntryForm } from "../components";
import { useFetchEntries } from "../hooks";
import type { KnowledgeEntry } from "../types";

const EditKnowledgeEntryPage = () => {
  const { id } = Route.useSearch();

  const { data: currentEntry, isPending } =
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
      {currentEntry ? <EntryForm action="edit" entry={currentEntry} /> : null}
    </main>
  );
};

type EditEntrySearchParams = { id: string | undefined };

export const Route = createFileRoute("/edit-entry")({
  component: EditKnowledgeEntryPage,
  validateSearch: (search: Record<string, unknown>): EditEntrySearchParams => {
    return {
      id: String(search?.id),
    };
  },
});
