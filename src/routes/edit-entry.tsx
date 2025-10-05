import { createFileRoute } from "@tanstack/react-router";
import { EntryForm, GoBackBtn } from "../components";
import { useFetchEntries } from "../hooks";
import type { KnowledgeEntry } from "../types";
import { useEditEntry } from "../hooks/useEditEntry";

const EditKnowledgeEntryPage = () => {
  const { id } = Route.useSearch();
  const editEntryMutation = useEditEntry()

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
      <div className="container mx-auto px-4 py-4">
        <GoBackBtn />
      </div>
      {currentEntry ? (
        <EntryForm
          action="edit"
          entry={currentEntry}
          onSubmitForm={editEntryMutation.mutate}
          isPending={editEntryMutation.isPending}
        />
      ) : null}
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
