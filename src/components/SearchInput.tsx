import type { FC } from "react";

type TextInputProps = {  
  value: string;
  setValue(newValue: string): void;
};

export const SearchInput: FC<TextInputProps> = (props) => {
  return (
    <div>
      <input
        type="search"
        id="search"
        name="search"
        value={props.value}
        placeholder="Search here..."
        autoCapitalize="true"
        autoComplete="true"
        onChange={(event) => props.setValue(event.target.value)}
        className="w-full border border-black/50 outline-none h-11 px-3 focus:border-black"
      />
    </div>
  );
};