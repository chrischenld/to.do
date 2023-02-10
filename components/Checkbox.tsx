export function Checkbox({ label, id, value }) {
  return (
    <div className="flex items-center h-8 gap-2">
      <input
        type="checkbox" id={id} value={value}
        className="
          w-4
          h-4
          accent-zinc-800
          hover:accent-zinc-600
          focus:ring-2
          focus:ring-zinc-800
          checked:bg-blue-400
          cursor-pointer"
      />
      <label
        className="cursor-pointer text-zinc-300" for={id}>
        {label}
      </label>  
    </div>
    //   <input type="checkbox">
    // <div>
    //   <label>{props.children}</label>
    // </div>
  );
}
