import MenuCard from "./MenuCard";
import { getMenuImage } from "../../utils/menuImages";

export default function MenuGrid({ menu, onAdd }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {menu.map((item) => (
        <MenuCard
          key={item._id}
          item={item}
          image={getMenuImage(item.name)}
          onAdd={onAdd}
        />
      ))}
    </div>
  );
}
