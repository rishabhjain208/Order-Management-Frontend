import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMenu } from "../api/menu";
import { addToCart, getCart } from "../api/cart";
import Navbar from "../components/layout/Navbar";
import MenuGrid from "../components/menu/MenuGrid";
import CartDrawer from "../components/cart/CartDrawer";
import Container from "../components/layout/Container";
import Toast from "../components/common/Toast";

export default function Home() {
  const navigate = useNavigate();

  const [menu, setMenu] = useState([]);
  const [cart, setCart] = useState({ items: [] });
  const [showCart, setShowCart] = useState(false);
  const [toast, setToast] = useState("");

  useEffect(() => {
    fetchMenu();
    fetchCart();
  }, []);

  const fetchMenu = async () => {
    const res = await getMenu();
    setMenu(res.data.data);
  };

  const fetchCart = async () => {
    try {
      const res = await getCart();
      setCart(res.data.data);
    } catch {
      setCart({ items: [] });
    }
  };

  const handleAddToCart = async (id) => {
    await addToCart(id);
    fetchCart();
    setToast("✅ Item added to cart");
    setTimeout(() => setToast(""), 2000);
  };

  const handleCheckout = () => {
    setShowCart(false);
    navigate("/checkout");
  };

  const cartCount = cart.items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <>
      <Navbar
        onCartClick={() => setShowCart(true)}
        cartCount={cartCount}
      />

      <Container>
        <div className="py-6">
          <MenuGrid menu={menu} onAdd={handleAddToCart} />
        </div>
      </Container>

      {showCart && (
        <CartDrawer
          cart={cart}
          onClose={() => setShowCart(false)}
          onCheckout={handleCheckout}
        />
      )}

      <Toast message={toast} />
    </>
  );
}
