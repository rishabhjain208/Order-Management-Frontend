import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import { FaHome } from "react-icons/fa";

const socket = io("http://localhost:5000");

export default function OrderStatus() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState("Preparing");

  useEffect(() => {
    socket.on("orderStatusUpdate", (data) => {
      if (data.orderId === id) {
        setStatus(data.status);
      }
    });

    return () => socket.off("orderStatusUpdate");
  }, [id]);

  return (
    <div className="min-h-screen bg-gray-50 relative">
      
      {/* Home Icon - Top Left */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 bg-white p-3 rounded-full shadow hover:shadow-lg transition"
        title="Go to Home"
      >
        <FaHome className="text-xl text-gray-700" />
      </button>

      {/* Status Card */}
      <div className="h-[70vh] flex items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow text-center w-[280px]">
          <h1 className="text-2xl font-bold mb-4">
            Order Status
          </h1>

          <p className="text-lg text-orange-600 font-semibold">
            {status}
          </p>
        </div>
      </div>
    </div>
  );
}
