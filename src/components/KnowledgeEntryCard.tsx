import type { FC } from "react";
import type { KnowledgeEntry } from "../types";
import { Edit, Trash2 } from "lucide-react";
import { Link } from "@tanstack/react-router";

interface KnowledgeEntryCardProps {
  entry: KnowledgeEntry;
  onSelected: (id: string) => void;
}

export const KnowledgeEntryCard: FC<KnowledgeEntryCardProps> = ({
  entry,
  onSelected,
}) => {
  return (
    <div className="flex flex-col bg-white rounded-md border overflow-hidden">
      <div>
        {entry.imageUrl ? (
          <img
            src={entry.imageUrl}
            alt="entry_image"
            className="h-[11.25rem] w-full rounded-t-md object-cover"
          />
        ) : (
          <div className="bg-gray-200 h-[11.25rem] w-full rounded-t-md grid place-items-center select-none">
            <span className="text-4xl text-gray-300 font-extrabold">
              No Image
            </span>
          </div>
        )}
      </div>

      <div className="p-4 flex-1 flex flex-col justify-between">
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
            className="border hover:border-black/90 text-black/90 hover:text-white bg-[#f9fafb] hover:bg-black/90 flex items-center justify-center gap-1.5 px-4 py-2 cursor-pointer transition-colors focus:bg-black/90 focus:text-white focus:outline-none"
          >
            <Edit size={14} />
            <span className="text-sm">Edit</span>
          </Link>
          <button
            onClick={() => onSelected(entry.id)}
            className="border hover:border-red-600 text-red-600 hover:text-white bg-[#f9fafb] hover:bg-red-600 flex items-center justify-center gap-1.5 px-4 py-2 cursor-pointer transition-colors  focus:bg-red-600 focus:text-white focus:outline-none"
            data-testid="delete-entry-btn"
          >
            <Trash2 size={14} />
            <span className="text-sm">Delete</span>
          </button>
        </div>
      </div>
    </div>
  );
};
