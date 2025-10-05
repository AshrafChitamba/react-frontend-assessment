import { createFileRoute } from "@tanstack/react-router";
import { EntryForm } from "../components";
import { useAddEntry } from "../hooks/useAddEntry";

const AddKnowledgeEntryPage = () => {
  const addEntryMutation = useAddEntry();

  return (
    <main>
      <EntryForm
        action="add"
        onSubmitForm={addEntryMutation.mutate}
        isPending={addEntryMutation.isPending}
      />
    </main>
  );
};

export const Route = createFileRoute("/add-entry")({
  component: AddKnowledgeEntryPage,
});
