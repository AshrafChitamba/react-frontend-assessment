import { createFileRoute } from "@tanstack/react-router";

const EditKnowledgeEntryPage = () => {
  return <main>edit knowledge entry page</main>;
};

export const Route = createFileRoute('/edit-entry')({
  component: EditKnowledgeEntryPage,
});



