import { createFileRoute } from "@tanstack/react-router";
import { knowledgeEntries } from "../data";
import { KnowledgeEntryCard } from "../components/KnowledgeEntryCard";

export const KnowledgeEntriesPage = () => {
  return (
    <main>
      <section className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {knowledgeEntries.map((entry) => (
            <KnowledgeEntryCard
              entry={entry}
              onDelete={() => {}}
              onEdit={() => {}}
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
