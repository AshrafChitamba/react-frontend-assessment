import { useRef, useState, type ChangeEvent, type FormEvent } from "react";
import type { KnowledgeEntry } from "../types";
import { TextInput } from "./TextInput";
import { Plus, Save, Upload, Edit, Trash2 } from "lucide-react";
import { generateEntryId } from "../utils";

type EntryFormProps = {
  action: "add" | "edit";
  entry?: KnowledgeEntry;
  onSubmitForm(entry: KnowledgeEntry): void;
  isPending: boolean;
};
export const EntryForm = (props: EntryFormProps) => {
  const [knowledgeEntry, setKnowledgeEntry] = useState<KnowledgeEntry>(
    props.entry ?? {
      id: "",
      title: "",
      description: "",
      imageUrl: "",
    }
  );
  const fileInputRef = useRef<HTMLInputElement>(null);

  const onDataChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setKnowledgeEntry((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const clickFileInput = () => {
    fileInputRef.current?.click();
  };

  const removeSelectedImage = () => {
    setKnowledgeEntry((prevState) => ({
      ...prevState,
      imageUrl: null,
    }));
  };

  const handleImageSelection = async (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;

    if (!files?.length) {
      console.error("Please select an image");
      return;
    }

    const file = files[0];

    if (file.size > 4194304) {
      console.error("Image should be less than 4Mb");
    } else if (file.type.includes("svg")) {
      console.error("Svg not allowed");
    } else {
      const reader = new FileReader();
      reader.onloadend = () => {
        setKnowledgeEntry((prevState) => ({
          ...prevState,
          imageUrl: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }

    event.target.value = "";
  };

  const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const entryId = generateEntryId();

    props.onSubmitForm({ ...knowledgeEntry, id: knowledgeEntry.id || entryId });
  };

  return (
    <form
      className="grid px-4 py-6 gap-4 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2"
      onSubmit={onFormSubmit}
    >
      <TextInput
        type="text"
        id="title"
        name="title"
        placeholder="Title"
        value={knowledgeEntry.title}
        onChange={onDataChange}
      />
      <TextInput
        type="text"
        id="description"
        name="description"
        placeholder="Description"
        value={knowledgeEntry.description}
        onChange={onDataChange}
      />

      <div className="col-span-full relative">
        <input
          id="image"
          type="file"
          accept="image/*"
          className="hidden"
          ref={fileInputRef}
          onChange={handleImageSelection}
        />
        <div className="border-2 border-dashed p-3 sm:p-5 rounded-md">
          {knowledgeEntry.imageUrl ? (
            <div className="w-full h-[18rem]  lg:h-[30rem] lg:w-[30rem] relative">
              <img
                src={knowledgeEntry.imageUrl}
                alt="selected_image"
                className="w-full h-full object-cover rounded-md"
              />

              <div className="absolute top-0 left-[102%] flex flex-col gap-2">
                <button
                  type="button"
                  className="border hover:border-black/90 text-black/90 hover:text-white bg-[#f9fafb] hover:bg-black/90 flex items-center justify-center gap-1.5 p-2 cursor-pointer transition-colors focus:bg-black/90 focus:text-white focus:outline-none"
                  onClick={clickFileInput}
                >
                  <Edit size={20} />
                </button>
                <button
                  type="button"
                  className="border hover:border-red-600 text-red-600 hover:text-white bg-[#f9fafb] hover:bg-red-600 flex items-center justify-center gap-1.5 p-2 cursor-pointer transition-colors  focus:bg-red-600 focus:text-white focus:outline-none"
                  onClick={removeSelectedImage}
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          ) : (
            <label
              htmlFor="image"
              className="flex flex-col items-center justify-center w-full h-32 cursor-pointer transition-colors"
              onClick={clickFileInput}
            >
              <Upload className="mb-2 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                Click to upload an image
              </span>
            </label>
          )}
        </div>
      </div>

      <button
        data-testid="submit-entry-btn"
        className="col-span-full inline-flex w-fit items-center justify-center h-9 px-3 bg-black/90 text-white cursor-pointer"
      >
        {props.action === "add" ? (
          <>
            <Plus className="sm:mr-2" size={18} />
            <span>{props.isPending ? "Adding Entry..." : "Add Entry"}</span>
          </>
        ) : props.action === "edit" ? (
          <>
            <Save className="sm:mr-2" size={18} />
            <span>{props.isPending ? "Saving..." : "Save Changes"}</span>
          </>
        ) : null}
      </button>
    </form>
  );
};
