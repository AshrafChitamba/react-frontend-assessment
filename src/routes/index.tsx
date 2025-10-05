import { createFileRoute, Link } from "@tanstack/react-router";
import { knowledgeEntries } from "../data";
import { KnowledgeEntryCard, TextInput } from "../components";
import { Plus } from "lucide-react";

export const KnowledgeEntriesPage = () => {
  const onDeleteEntry = (id: number) => {
    console.log({ id });
  };

  return (
    <main>
      <section className="container mx-auto px-4 py-4">
        <div className="flex justify-end items-center gap-2 pt-3 pb-6">
          <TextInput
            type="search"
            id="search"
            name="search"
            placeholder="Search here..."
            value=""
            onChange={(e) => {}}
          />
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
            <KnowledgeEntryCard entry={entry} onDelete={onDeleteEntry} />
          ))}
        </div>
      </section>
    </main>
  );
};

export const Route = createFileRoute("/")({
  component: KnowledgeEntriesPage,
});
