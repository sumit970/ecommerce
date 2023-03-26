import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCartContext } from "./context/cart_context";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Order = () => {
    const { cart, clearCart, total_price, shipping_fee } = useCartContext();
 
  return (
    <div className="flex flex-col items-center justify-center h-[400px] bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <FontAwesomeIcon
          icon={faCheckCircle}
          size="4x"
          className="text-green-500 mb-4"
        />
        <h1 className="text-2xl font-bold mb-4">Thank you for your order!</h1>
        <p className="text-gray-700 leading-loose">
          Your order has been placed successfully. We have sent a confirmation
          email to your email address. Please check your inbox for further
          details.
        </p>
        <NavLink to="/products">
          <button  onClick={clearCart} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-6">
            Continue Shopping
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Order;
