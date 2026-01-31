export default function CartItem({ item }) {
  return (
    <div className="flex justify-between items-center border-b pb-2">
      <div>
        <p className="font-medium">{item.menuItem.name}</p>
        <p className="text-sm text-gray-500">
          ₹{item.menuItem.price} × {item.quantity}
        </p>
      </div>

      <p className="font-semibold">
        ₹{item.menuItem.price * item.quantity}
      </p>
    </div>
  );
}
