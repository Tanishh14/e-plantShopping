import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity
} from "./CartSlice";
import { Link } from "react-router-dom";

function CartItem() {

  const dispatch = useDispatch();

  const cartItems = useSelector(
    state => state.cart.items
  );

  const totalAmount = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    alert("Coming Soon!");
  };

  return (
    <div>

      {/* Navbar */}
      <nav className="navbar">

        <div className="logo">
          Paradise Nursery
        </div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/plants">Plants</Link>
          <Link to="/cart">Cart</Link>
        </div>

      </nav>

      <div className="cart-container">

        <h1>Shopping Cart</h1>

        {cartItems.length === 0 ? (

          <div className="empty-cart">

            <h2>Your cart is empty</h2>

            <Link to="/plants">
              <button>
                Continue Shopping
              </button>
            </Link>

          </div>

        ) : (

          <>

            {cartItems.map(item => {

              const itemTotal =
                item.price * item.quantity;

              return (

                <div
                  className="cart-item"
                  key={item.id}
                >

                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  <div className="cart-details">

                    <h2>{item.name}</h2>

                    <p>
                      Unit Price: ${item.price}
                    </p>

                    <p>
                      Total: ${itemTotal}
                    </p>

                  </div>

                  <div className="quantity-controls">

                    <button
                      onClick={() =>
                        dispatch(
                          decreaseQuantity(item.id)
                        )
                      }
                    >
                      −
                    </button>

                    <span>
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        dispatch(
                          increaseQuantity(item.id)
                        )
                      }
                    >
                      +
                    </button>

                  </div>

                  <button
                    className="delete-button"
                    onClick={() =>
                      dispatch(
                        removeFromCart(item.id)
                      )
                    }
                  >
                    Delete
                  </button>

                </div>

              );
            })}

            <div className="cart-summary">

              <h2>
                Total Amount: ${totalAmount}
              </h2>

              <div className="cart-actions">

                <button
                  onClick={handleCheckout}
                  className="checkout-button"
                >
                  Checkout
                </button>

                <Link to="/plants">
                  <button className="continue-button">
                    Continue Shopping
                  </button>
                </Link>

              </div>

            </div>

          </>

        )}

      </div>

    </div>
  );
}

export default CartItem;

