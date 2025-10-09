import { useRef, type ChangeEvent } from "react";
import type { KnowledgeEntry } from "../types";
import { TextInput } from "./TextInput";
import { Plus, Save, Upload, Edit, Trash2 } from "lucide-react";
import { generateEntryId } from "../utils";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import type { UseMutationResult } from "@tanstack/react-query";

const entrySchema = z.object({
  title: z.string().nonempty("Title is required").min(10, "Title is too short"),
  description: z
    .string()
    .nonempty("Description is required")
    .min(6, "Description is too short"),
  imageUrl: z
    .string()
    .regex(/^data:image\/[a-zA-Z]+;base64,/, "Invalid image format")
    .nullable(),
});
type EntrySchemaType = z.infer<typeof entrySchema>;

type EntryFormProps = {
  action: "add" | "edit";
  entry?: KnowledgeEntry;
  mutation: UseMutationResult<void, unknown, KnowledgeEntry, unknown>;
};
export const EntryForm = (props: EntryFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
    setError,
    clearErrors,
  } = useForm<EntrySchemaType>({
    resolver: zodResolver(entrySchema),
    defaultValues: props.entry
      ? {
          title: props.entry.title,
          description: props.entry.description,
          imageUrl: props.entry.imageUrl,
        }
      : {
          title: "",
          description: "",
          imageUrl: null,
        },
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  const clickFileInput = () => {
    fileInputRef.current?.click();
  };

  const removeSelectedImage = () => {
    setValue("imageUrl", null);
  };

  const handleImageSelection = async (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;

    if (!files?.length) {
      setError("imageUrl", { message: "Please select an image" });
      return;
    }

    const file = files[0];

    if (file.size > 4194304) {
      setError("imageUrl", { message: "Image should be less than 4Mb" });
    } else if (file.type.includes("svg")) {
      setError("imageUrl", { message: "Svg not allowed" });
    } else {
      const reader = new FileReader();
      reader.onloadend = () => {
        setValue("imageUrl", reader.result as string);
      };
      reader.readAsDataURL(file);
      clearErrors("imageUrl");
    }

    event.target.value = "";
  };

  if (props.mutation.isSuccess) reset();

  const onFormSubmit = async (data: EntrySchemaType) => {
    const entryId = generateEntryId();

    props.mutation.mutate({ ...data, id: props.entry?.id || entryId });
  };

  return (
    <form
      className="grid px-4 py-6 gap-4 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2"
      onSubmit={handleSubmit(onFormSubmit)}
    >
      <TextInput
        type="text"
        id="title"
        placeholder="Enter title..."
        label="Title"
        registerProps={register("title")}
        error={errors.title}
        disabled={props.mutation.isPending}
      />
      <TextInput
        type="text"
        id="description"
        placeholder="Enter description..."
        label="Description"
        registerProps={register("description")}
        error={errors.description}
        disabled={props.mutation.isPending}
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
        <div
          className={clsx(
            "border-2 border-dashed p-3 sm:p-5 rounded-md",
            errors.imageUrl && "border-red-600"
          )}
        >
          {!!watch("imageUrl") ? (
            <div className="w-full h-[18rem]  lg:h-[30rem] lg:w-[30rem] relative">
              <img
                src={watch("imageUrl")!}
                alt="selected_image"
                className="w-full h-full object-cover rounded-md"
              />

              <div className="bg-white py-3 px-2 absolute -top-2 sm:-top-4 -right-2 sm:-right-4 lg:top-0 lg:-right-16 flex flex-col gap-2 rounded-md shadow-md">
                <button
                  type="button"
                  className="border hover:border-black/90 text-black/90 hover:text-white bg-[#f9fafb] hover:bg-black/90 flex items-center justify-center gap-1.5 p-2 cursor-pointer transition-colors focus:bg-black/90 focus:text-white focus:outline-none"
                  onClick={clickFileInput}
                >
                  <Edit size={18} />
                </button>
                <button
                  type="button"
                  className="border hover:border-red-600 text-red-600 hover:text-white bg-[#f9fafb] hover:bg-red-600 flex items-center justify-center gap-1.5 p-2 cursor-pointer transition-colors  focus:bg-red-600 focus:text-white focus:outline-none"
                  onClick={removeSelectedImage}
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ) : (
            <label
              className="flex flex-col items-center justify-center w-full h-32 cursor-pointer transition-colors"
              onClick={clickFileInput}
            >
              <Upload className="mb-2" />
              <span className="text-sm">Click to upload an image</span>
            </label>
          )}
        </div>

        {errors.imageUrl && (
          <p className="mt-1 text-xs text-red-600 tracking-wider">
            {errors.imageUrl.message ?? ""}
          </p>
        )}
      </div>

      <button
        data-testid="submit-entry-btn"
        className="col-span-full inline-flex w-fit items-center justify-center h-11 px-4 bg-black/90 hover:bg-black/80 text-white cursor-pointer transition-colors"
      >
        {props.action === "add" ? (
          <>
            <Plus className="sm:mr-2" size={18} />
            <span>
              {props.mutation.isPending ? "Adding Entry..." : "Add Entry"}
            </span>
          </>
        ) : props.action === "edit" ? (
          <>
            <Save className="sm:mr-2" size={18} />
            <span>
              {props.mutation.isPending ? "Saving..." : "Save Changes"}
            </span>
          </>
        ) : null}
      </button>
    </form>
  );
};
