import { Plus } from "lucide-react";

export const Header = () => {
  return (
    <header className="sticky top-0 z-10 border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h1 className="text-xl font-bold">Knowledge Entries</h1>
          </div>

          <button className="flex items-center justify-center bg-primary hover:bg-primary-hover h-9 rounded-md px-3 bg-blue-600 text-white">
            <Plus className="sm:mr-2" size={18} />
            <span className="hidden sm:inline">Add Entry</span>
          </button>
        </div>
      </div>
    </header>
  );
};
