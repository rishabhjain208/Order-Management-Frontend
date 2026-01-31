export default function MenuCard({ item, onAdd, image }) {
  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition">
      <img
        src={image}
        alt={item.name}
        className="h-40 w-full object-cover rounded-t-2xl"
      />

      <div className="p-4">
        <h3 className="font-semibold text-lg">{item.name}</h3>

        <p className="text-sm text-gray-500 line-clamp-2">
          {item.description || "Delicious food item"}
        </p>

        <div className="flex justify-between items-center mt-4">
          <span className="font-bold">₹{item.price}</span>

          <button
            onClick={() => onAdd(item._id)}
            className="bg-green-500 text-white px-4 py-1 rounded-lg cursor-pointer"
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}
