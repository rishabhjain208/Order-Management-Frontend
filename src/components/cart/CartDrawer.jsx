import CartItem from "./CartItem";

export default function CartDrawer({ cart, onCheckout, onClose }) {
  const total = cart?.items?.reduce(
    (sum, item) =>
      sum + item.menuItem.price * item.quantity,
    0
  );

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-end z-50">
      <div className="bg-white w-full sm:w-96 h-full p-4 flex flex-col">
        <div className="flex justify-between mb-4">
          <h2 className="text-lg font-semibold">Your Cart</h2>
          <button onClick={onClose}>✖</button>
        </div>

        {cart?.items?.length === 0 ? (
          <p className="text-gray-500">Your cart is empty</p>
        ) : (
          <div className="space-y-3 flex-1 overflow-y-auto">
            {cart.items.map((item) => (
              <CartItem key={item._id} item={item} />
            ))}
          </div>
        )}

        {cart?.items?.length > 0 && (
          <>
            <div className="mt-4 font-semibold flex justify-between">
              <span>Total</span>
              <span>₹{total}</span>
            </div>

            <button
              onClick={onCheckout}
              className="mt-4 w-full bg-green-500 text-white py-2 rounded-lg"
            >
              Place Order
            </button>
          </>
        )}
      </div>
    </div>
  );
}
