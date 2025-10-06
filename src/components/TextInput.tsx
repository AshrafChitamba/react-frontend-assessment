import type { ChangeEvent, FC } from "react";

type TextInputProps = {
  type: "text" | "search";
  id: string;
  name: string;
  placeholder: string;
  value: string;
  onChange(event: ChangeEvent<HTMLInputElement>): void;
};

export const TextInput: FC<TextInputProps> = (props) => {
  return (
    <div>
      <input
        type={props.type}
        id={props.id}
        name={props.name}
        value={props.value}
        placeholder={props.placeholder}
        autoCapitalize="true"
        autoComplete="true"
        onChange={props.onChange}
        className="w-full border border-black/50 outline-none h-9 px-3 focus:border-black"
      />
    </div>
  );
};
