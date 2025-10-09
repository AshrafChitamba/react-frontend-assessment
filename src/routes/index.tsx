import { createFileRoute, Link } from "@tanstack/react-router";
import { KnowledgeEntryCard, SearchInput, TextInput } from "../components";
import { Plus } from "lucide-react";
import { useDeleteEntry, useFetchEntries } from "../hooks";
import { DeleteEntryDisclaimer } from "../components/DeleteEntryDisclaimer";
import { useState } from "react";
import { EntriesSkeleton } from "../components/skeletons";

export const KnowledgeEntriesPage = () => {
  const { data, isPending, searchText, setSearchText } = useFetchEntries();
  const [openModal, setOpenModal] = useState(false);
  const [entryId, setEntryId] = useState<string | null>(null);
  const deleteEntryMutation = useDeleteEntry();

  const onSelectEntry = (id: string) => {
    setEntryId(id);
    setOpenModal(true);
  };

  const deleteEntry = () => {
    deleteEntryMutation.mutate(entryId ?? "");
    setOpenModal(false);
  };

  if (isPending) return <EntriesSkeleton />;

  return (
    <main>
      {data ? (
        <section className="container mx-auto px-4 py-4">
          <div className="flex justify-end items-center gap-2 pt-3 pb-6">
            <SearchInput value={searchText} setValue={setSearchText} />
            <Link
              to="/add-entry"
              className="flex items-center justify-center h-11 px-4 bg-black/90 hover:bg-black/80 text-white transition-colors"
              data-testid="add-entry-link"
            >
              <Plus className="sm:mr-2" size={18} />
              <span className="hidden sm:inline">Add Entry</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3">
            {data.map((entry) => (
              <KnowledgeEntryCard
                key={entry.id}
                entry={entry}
                onSelected={onSelectEntry}
              />
            ))}
          </div>

          <DeleteEntryDisclaimer
            onClose={() => setOpenModal(false)}
            opened={openModal}
            onDelete={deleteEntry}
          />
        </section>
      ) : undefined}
    </main>
  );
};

export const Route = createFileRoute("/")({
  component: KnowledgeEntriesPage,
});
