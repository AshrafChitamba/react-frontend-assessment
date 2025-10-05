import { createFileRoute } from "@tanstack/react-router";

const AddKnowledgeEntryPage = () => {
  return <main>add knowledge entry page</main>;
};

export const Route = createFileRoute('/add-entry')({
  component: AddKnowledgeEntryPage,
});
