import { createFileRoute } from "@tanstack/react-router";

export const KnowledgeEntriesPage = () => {
  return <main>knowledge entries page</main>;
};

export const Route = createFileRoute("/")({
  component: KnowledgeEntriesPage,
});
