import type { FC } from "react";
import type { KnowledgeEntry } from "../types";
import { Edit, Trash2 } from "lucide-react";

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
    <div className="border space-y-3 py-8 px-7 rounded-xl bg-white">
      <h4 className="text-lg font-bold">{entry.title}</h4>
      <p className="text-[#627084] text-sm">{entry.description}</p>

      <div className="grid grid-cols-2 item-center gap-3 mt-5">
        <button
          onClick={() => onEdit(entry)}
          className="border hover:border-blue-600 text-blue-600 hover:text-white bg-[#f9fafb] hover:bg-blue-600/85 flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl cursor-pointer transition-colors"
        >
          <Edit size={14} />
          <span className="hidden sm:inline text-sm">Edit</span>
        </button>
        <button
          onClick={() => onDelete(entry.id)}
          className="border hover:border-red-600 text-red-600 hover:text-white bg-[#f9fafb] hover:bg-red-600/85 flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl cursor-pointer transition-colors"
        >
          <Trash2 size={14} />
          <span className="hidden sm:inline text-sm">Delete</span>
        </button>
      </div>
    </div>
  );
};
