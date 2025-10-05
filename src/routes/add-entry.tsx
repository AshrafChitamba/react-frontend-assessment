import { createFileRoute } from "@tanstack/react-router";
import { EntityForm } from "../components/EntityForm";

const AddKnowledgeEntryPage = () => {
  return (
    <main>
      <EntityForm action="add"  />
    </main>
  );
};

export const Route = createFileRoute("/add-entry")({
  component: AddKnowledgeEntryPage,
});
