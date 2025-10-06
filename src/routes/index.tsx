import { createFileRoute, Link } from "@tanstack/react-router";
import { KnowledgeEntryCard, TextInput } from "../components";
import { Plus } from "lucide-react";
import { useDeleteEntry, useFetchEntries } from "../hooks";
import { DeleteEntryDisclaimer } from "../components/DeleteEntryDisclaimer";
import { useState } from "react";

export const KnowledgeEntriesPage = () => {
  const { data, isPending } = useFetchEntries();
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

  if (isPending) {
    return (
      <div>
        <span>Loading Entries...</span>
      </div>
    );
  }

  return (
    <main>
      {data ? (
        <section className="container mx-auto px-4 py-4">
          <div className="flex justify-end items-center gap-2 pt-3 pb-6">
            <TextInput
              type="search"
              id="search"
              name="search"
              placeholder="Search here..."
              value=""
              onChange={(e) => {
                console.log(e);
              }}
            />
            <Link
              to="/add-entry"
              className="flex items-center justify-center bg-primary hover:bg-primary-hover h-9 px-3 bg-blue-600 text-white"
              data-testid="add-entry-btn"
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
