import { FaCartPlus } from "react-icons/fa";

export default function Navbar({ onCartClick, cartCount }) {
  return (
    <div className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-orange-600">
          RaftLabs Foodify 🍕
        </h1>

        <button
          onClick={onCartClick}
          className="relative bg-orange-500 text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <FaCartPlus size={18} />
          Cart

          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-2 py-0.5 rounded-full">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </div>
  );
}
