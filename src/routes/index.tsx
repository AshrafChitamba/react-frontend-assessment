import { createFileRoute, Link } from "@tanstack/react-router";
import { GoBackBtn, KnowledgeEntryCard, TextInput } from "../components";
import { Plus } from "lucide-react";
import { useFetchEntries } from "../hooks";

export const KnowledgeEntriesPage = () => {
  const { data, isPending } = useFetchEntries();

  const onDeleteEntry = (id: string) => {
    console.log({ id });
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
          <div className="flex items-center justify-between pt-3 pb-6">
            <GoBackBtn />

            <div className="flex justify-end items-center gap-2">
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
                className="flex items-center justify-center bg-primary hover:bg-primary-hover h-9 rounded-md px-3 bg-blue-600 text-white"
              >
                <Plus className="sm:mr-2" size={18} />
                <span className="hidden sm:inline">Add Entry</span>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {data.map((entry) => (
              <KnowledgeEntryCard
                key={entry.id}
                entry={entry}
                onDelete={onDeleteEntry}
              />
            ))}
          </div>
        </section>
      ) : undefined}
    </main>
  );
};

export const Route = createFileRoute("/")({
  component: KnowledgeEntriesPage,
});
