export function CheckboxLabelWrap({ label, id, name }) {
  return (
    <label className="h-8 flex items-center gap-2 over:bg-zinc-700">
      <input
        className="h-4 w-4 rounded accent-zinc-800
          "
        type="checkbox"
        id={id}
        value={id}
        name={name}
      />
      {label}
    </label>
    //   <input type="checkbox">
    // <div>
    //   <label>{props.children}</label>
    // </div>
  );
}
