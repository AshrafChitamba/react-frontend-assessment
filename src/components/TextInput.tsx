import type { FC } from "react";

type TextInputProps = {
  type: "text" | "search";
  id: string;
  name: string;
  placeholder: string;
  value: string;
  setValue(newValue: string): void;
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
        onChange={(e) => props.setValue(e.target.value)}
        className="border border-black/50 outline-none rounded h-9 px-3 focus:border-blue-500"
      />
    </div>
  );
};
