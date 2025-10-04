import type { FC } from "react";
import type { KnowledgeEntry } from "../types";

interface KnowledgeEntryCardProps {
  entry: KnowledgeEntry;
  onEdit: (entry: KnowledgeEntry) => void;
  onDelete: (id: string) => void;
}

export const KnowledgeEntryCard: FC<KnowledgeEntryCardProps> = ({
  entry,
  onDelete,
  onEdit,
}) => {
  return (
    <div>
      <h4>{entry.title}</h4>
      <p>{entry.description}</p>

      <div className="flex item-center gap-3">
        <button onClick={() => onEdit(entry)}>edit</button>
        <button onClick={() => onDelete(entry.id)}>delete</button>
      </div>
    </div>
  );
};
