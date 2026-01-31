import { useEffect, useState } from "react";
import { getCart, checkoutCart } from "../api/cart";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const navigate = useNavigate();
  const [cart, setCart] = useState({ items: [] });
  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    const res = await getCart();
    setCart(res.data.data);
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    setLoading(true);
    const res = await checkoutCart(form);
    setLoading(false);

    navigate(`/order/${res.data.data._id}`);
  };

  const total = cart.items.reduce(
    (sum, i) => sum + i.menuItem.price * i.quantity,
    0
  );

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Delivery Form */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="font-semibold mb-4">Delivery Details</h2>

          <input
            name="name"
            placeholder="Name"
            onChange={handleChange}
            className="w-full border p-2 rounded mb-3"
          />

          <input
            name="address"
            placeholder="Address"
            onChange={handleChange}
            className="w-full border p-2 rounded mb-3"
          />

          <input
            name="phone"
            placeholder="Phone"
            onChange={handleChange}
            className="w-full border p-2 rounded mb-3"
          />

          <button
            disabled={loading}
            onClick={handleSubmit}
            className="w-full bg-orange-500 text-white py-2 rounded-lg"
          >
            {loading ? "Placing Order..." : "Place Order"}
          </button>
        </div>

        {/* Cart Summary */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="font-semibold mb-4">Order Summary</h2>

          {cart.items.map((item) => (
            <div
              key={item._id}
              className="flex justify-between mb-2"
            >
              <span>
                {item.menuItem.name} x {item.quantity}
              </span>
              <span>
                ₹{item.menuItem.price * item.quantity}
              </span>
            </div>
          ))}

          <hr className="my-3" />
          <div className="font-bold flex justify-between">
            <span>Total</span>
            <span>₹{total}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
