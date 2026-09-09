import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  updateQuantity
} from "./CartSlice";
import { Link } from "react-router-dom";

function CartItem() {

  const dispatch = useDispatch();

  const cartItems = useSelector(
    state => state.cart.items
  );

  // Calculate total amount
  const totalAmount = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  // Increase quantity
  const increaseQuantity = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1
      })
    );
  };

  // Decrease quantity
  const decreaseQuantity = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity - 1
      })
    );
  };

  // Delete item
  const deleteItem = (id) => {
    dispatch(removeItem(id));
  };

  // Checkout
  const handleCheckout = () => {
    alert("Coming Soon!");
  };

  return (
    <div>

      {/* NAVBAR */}

      <nav className="navbar">

        <div className="logo">
          Paradise Nursery
        </div>

        <div className="nav-links">

          <Link to="/">
            Home
          </Link>

          <Link to="/plants">
            Plants
          </Link>

          <Link to="/cart">
            Cart
          </Link>

        </div>

      </nav>


      {/* SHOPPING CART */}

      <div className="cart-container">

        <h1>
          Shopping Cart
        </h1>


        {cartItems.length === 0 ? (

          <div className="empty-cart">

            <h2>
              Your cart is empty
            </h2>

            <Link to="/plants">

              <button>
                Continue Shopping
              </button>

            </Link>

          </div>

        ) : (

          <>

            {/* CART ITEMS */}

            {cartItems.map(item => {

              const itemTotal =
                item.price * item.quantity;

              return (

                <div
                  className="cart-item"
                  key={item.id}
                >

                  {/* PLANT IMAGE */}

                  <img
                    src={item.image}
                    alt={item.name}
                  />


                  {/* PLANT DETAILS */}

                  <div className="cart-details">

                    <h2>
                      {item.name}
                    </h2>

                    <p>
                      Unit Price: ${item.price}
                    </p>

                    <p>
                      Total: ${itemTotal}
                    </p>

                  </div>


                  {/* QUANTITY */}

                  <div className="quantity-controls">

                    <button
                      onClick={() =>
                        decreaseQuantity(item)
                      }
                    >
                      −
                    </button>

                    <span>
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        increaseQuantity(item)
                      }
                    >
                      +
                    </button>

                  </div>


                  {/* DELETE */}

                  <button
                    className="delete-button"
                    onClick={() =>
                      deleteItem(item.id)
                    }
                  >
                    Delete
                  </button>

                </div>

              );

            })}


            {/* CART TOTAL */}

            <div className="cart-summary">

              <h2>
                Total Amount: ${totalAmount}
              </h2>


              <div className="cart-actions">

                {/* CHECKOUT */}

                <button
                  className="checkout-button"
                  onClick={handleCheckout}
                >
                  Checkout
                </button>


                {/* CONTINUE SHOPPING */}

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
