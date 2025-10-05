import { useState, type ChangeEvent, type FormEvent } from "react";
import type { KnowledgeEntry } from "../types";
import { TextInput } from "./TextInput";
import { Plus, Save, Upload } from "lucide-react";

type EntryFormProps = {
  action: "add" | "edit";
  entity?: KnowledgeEntry;
};
export const EntryForm = (props: EntryFormProps) => {
  const [knowledgeEntity, setKnowledgeEntity] = useState<
    Omit<KnowledgeEntry, "id">
  >(
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

  const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form className="grid px-4 py-6 gap-4 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2" onSubmit={onFormSubmit}>
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

      <div className="col-span-full relative">
        <input id="image" type="file" accept="image/*" className="hidden" />
        <label
          htmlFor="image"
          className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-muted hover:bg-muted/80 transition-colors border-border"
        >
          <Upload className="mb-2 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">
            Click to upload an image
          </span>
        </label>
      </div>

      <button className="col-span-full inline-flex w-fit items-center justify-center bg-primary hover:bg-primary-hover h-9 rounded-md px-3 bg-black/90 text-white cursor-pointer">
        {props.action === "add" ? (
          <>
            <Plus className="sm:mr-2" size={18} />
            <span>Add Entry</span>
          </>
        ) : props.action === "edit" ? (
          <>
            <Save className="sm:mr-2" size={18} />
            <span>Edit Entry</span>
          </>
        ) : null}
      </button>
    </form>
  );
};
