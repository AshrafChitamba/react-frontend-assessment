import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { knowledgeEntries } from "../data";
import { KnowledgeEntryCard } from "../components";
import { Plus } from "lucide-react";

export const KnowledgeEntriesPage = () => {
  const navigate = useNavigate();
  const onEditEntry = (id: string) => {
    navigate({ to: "/edit-entry", search: { id: new URLSearchParams(id) } });
  };
  const onDeleteEntry = (id: string) => {
    console.log({ id });
  };
  return (
    <main>
      <section className="container mx-auto px-4 py-4">
        <div className="flex justify-end items-center gap-2 pt-3 pb-6">
          <div>
            <input
              type="text"
              className="border border-black/50 outline-none rounded h-9 px-3 focus:border-blue-500"
              placeholder="Search"
            />
          </div>
          <Link
            to="/add-entry"
            className="flex items-center justify-center bg-primary hover:bg-primary-hover h-9 rounded-md px-3 bg-blue-600 text-white"
          >
            <Plus className="sm:mr-2" size={18} />
            <span className="hidden sm:inline">Add Entry</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {knowledgeEntries.map((entry) => (
            <KnowledgeEntryCard
              entry={entry}
              onDelete={onDeleteEntry}
              onEdit={onEditEntry}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export const Route = createFileRoute("/")({
  component: KnowledgeEntriesPage,
});
