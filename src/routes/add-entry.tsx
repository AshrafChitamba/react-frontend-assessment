import { createFileRoute } from "@tanstack/react-router";
import { EntryForm, GoBackBtn } from "../components";
import { useAddEntry } from "../hooks/useAddEntry";

const AddKnowledgeEntryPage = () => {
  const addEntryMutation = useAddEntry();

  return (
    <main>
      <div className="container mx-auto px-4 py-4">
        <GoBackBtn />
      </div>
      <EntryForm action="add" mutation={addEntryMutation} />
    </main>
  );
};

export const Route = createFileRoute("/add-entry")({
  component: AddKnowledgeEntryPage,
});
