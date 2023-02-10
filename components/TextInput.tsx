export function TextInput({ value, onChange, placeholder, className }) {
  return (
    <input
      type="type"
      value={value}
      onChange={onChange}
      autoFocus
      placeholder={placeholder}
      className={`h-8
        text-sm
        bg-zinc-800
        text-zinc-200
        border-solid
        border-2
        border-zinc-800
        rounded-sm
        hover:border-zinc-800
        focus:outline-none
        focus:ring-2
        ring-zinc-800
        align-baseline
        placeholder:text-zinc-500
        ${className}
        `}
    ></input>
  );
}
