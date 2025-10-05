import type { FC } from "react";
import type { KnowledgeEntry } from "../types";
import { Edit, Trash2 } from "lucide-react";
import { Link } from "@tanstack/react-router";

interface KnowledgeEntryCardProps {
  entry: KnowledgeEntry;
  onDelete: (id: number) => void;
}

export const KnowledgeEntryCard: FC<KnowledgeEntryCardProps> = ({
  entry,
  onDelete,
}) => {
  return (
    <div className="flex flex-col justify-between border py-8 px-7 rounded-xl bg-white">
      <div className="space-y-3">
        <h4 className="text-lg font-bold">{entry.title}</h4>
        <p className="text-[#627084] text-sm">{entry.description}</p>
      </div>

      <div className="grid grid-cols-2 item-center gap-3 mt-5">
        <Link
          to="/edit-entry"
          search={{
            id: entry.id,
          }}
          className="border hover:border-blue-600 text-blue-600 hover:text-white bg-[#f9fafb] hover:bg-blue-600 flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl cursor-pointer transition-colors focus:bg-blue-600/85 focus:text-white focus:outline-none"
        >
          <Edit size={14} />
          <span className="hidden sm:inline text-sm">Edit</span>
        </Link>
        <button
          onClick={() => onDelete(entry.id)}
          className="border hover:border-red-600 text-red-600 hover:text-white bg-[#f9fafb] hover:bg-red-600 flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl cursor-pointer transition-colors  focus:bg-red-600 focus:text-white focus:outline-none"
        >
          <Trash2 size={14} />
          <span className="hidden sm:inline text-sm">Delete</span>
        </button>
      </div>
    </div>
  );
};
