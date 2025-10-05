import { createFileRoute } from "@tanstack/react-router";
import { EntryForm } from "../components";

const AddKnowledgeEntryPage = () => {
  return (
    <main>
      <EntryForm action="add"  />
    </main>
  );
};

export const Route = createFileRoute("/add-entry")({
  component: AddKnowledgeEntryPage,
});
