import { useState, type ChangeEvent } from "react";
import type { KnowledgeEntry } from "../types";
import { TextInput } from "./TextInput";
import { Plus } from "lucide-react";

type EntityFormProps = {
  entity?: KnowledgeEntry;
};
export const EntityForm = (props: EntityFormProps) => {
  const [knowledgeEntity, setKnowledgeEntity] = useState<Omit<KnowledgeEntry, "id">>(
    props.entity ?? {
      title: "",
      description: "",
      imageUrl: "",
    }
  );
  const onDataChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setKnowledgeEntity((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form className="grid px-4 py-6 gap-4">
      <TextInput
        type="text"
        id="title"
        name="title"
        placeholder="Title"
        value={knowledgeEntity.title}
        onChange={onDataChange}
      />
      <TextInput
        type="text"
        id="description"
        name="description"
        placeholder="Description"
        value={knowledgeEntity.description}
        onChange={onDataChange}
      />

      <button className="inline-flex w-fit items-center justify-center bg-primary hover:bg-primary-hover h-9 rounded-md px-3 bg-black/90 text-white cursor-pointer">
        <Plus className="sm:mr-2" size={18} />
        <span>Add Entry</span>
      </button>
    </form>
  );
};
