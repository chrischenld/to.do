import Check from "../public/icons/Check.svg";
import Cross from "../public/icons/Cross.svg";
import Plus from "../public/icons/Plus.svg";

const icons = {
  Check,
  Cross,
  Plus,
};

export function Icon({ name, size, color, className }) {
  const IconVariant = icons[name];
  return <IconVariant className={`${size} ${color} ${className}`} />;
}
