import { knowledgeEntries } from "../data";
import { KnowledgeEntryCard } from "./KnowledgeEntryCard";

export const KnowledgeEntriesSection = () => {
  return (
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
  );
};
