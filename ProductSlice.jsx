import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./CartSlice";
import { Link } from "react-router-dom";

const plants = [
  {
    id: 1,
    name: "Snake Plant",
    price: 25,
    category: "Air Purifying",
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee"
  },
  {
    id: 2,
    name: "Peace Lily",
    price: 30,
    category: "Air Purifying",
    image: "https://images.unsplash.com/photo-1593482892290-f54927ae1bb6"
  },
  {
    id: 3,
    name: "Spider Plant",
    price: 20,
    category: "Air Purifying",
    image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333"
  },
  {
    id: 4,
    name: "Aloe Vera",
    price: 22,
    category: "Air Purifying",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09"
  },
  {
    id: 5,
    name: "Areca Palm",
    price: 35,
    category: "Air Purifying",
    image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6"
  },
  {
    id: 6,
    name: "Boston Fern",
    price: 28,
    category: "Air Purifying",
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b"
  },

  {
    id: 7,
    name: "Rose",
    price: 18,
    category: "Flowering Plants",
    image: "https://images.unsplash.com/photo-1496062031456-07b8f162a322"
  },
  {
    id: 8,
    name: "Orchid",
    price: 40,
    category: "Flowering Plants",
    image: "https://images.unsplash.com/photo-1566847438217-76e82d383f84"
  },
  {
    id: 9,
    name: "Hibiscus",
    price: 24,
    category: "Flowering Plants",
    image: "https://images.unsplash.com/photo-1597848212624-e19a2e0f1f5f"
  },
  {
    id: 10,
    name: "Jasmine",
    price: 26,
    category: "Flowering Plants",
    image: "https://images.unsplash.com/photo-1596438459194-0c04e0f2f4c7"
  },
  {
    id: 11,
    name: "Lavender",
    price: 32,
    category: "Flowering Plants",
    image: "https://images.unsplash.com/photo-1499002238440-d264edd596ec"
  },
  {
    id: 12,
    name: "Marigold",
    price: 16,
    category: "Flowering Plants",
    image: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f"
  },

  {
    id: 13,
    name: "Cactus",
    price: 15,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc"
  },
  {
    id: 14,
    name: "Echeveria",
    price: 20,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1515405295579-ba7b45403062"
  },
  {
    id: 15,
    name: "Jade Plant",
    price: 27,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1597055181300-ae627fdb4b7b"
  },
  {
    id: 16,
    name: "Haworthia",
    price: 19,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09"
  },
  {
    id: 17,
    name: "Zebra Plant",
    price: 23,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88"
  },
  {
    id: 18,
    name: "String of Pearls",
    price: 29,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1631506147830-ae7c5a7f4d0e"
  }
];

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector(state => state.cart.items);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const categories = [
    "Air Purifying",
    "Flowering Plants",
    "Succulents"
  ];

  const isInCart = (id) => {
    return cartItems.some(item => item.id === id);
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

          <Link to="/cart" className="cart-link">
            🛒 Cart
            <span className="cart-count">
              {cartCount}
            </span>
          </Link>
        </div>

      </nav>

      <div className="products-container">

        <h1>Our Plants</h1>

        <p className="intro">
          Bring nature into your home with our beautiful collection
          of indoor plants.
        </p>

        {categories.map(category => (

          <section key={category}>

            <h2>{category}</h2>

            <div className="plant-grid">

              {plants
                .filter(plant => plant.category === category)
                .map(plant => (

                  <div className="plant-card" key={plant.id}>

                    <img
                      src={plant.image}
                      alt={plant.name}
                    />

                    <div className="plant-info">

                      <h3>{plant.name}</h3>

                      <p className="price">
                        ${plant.price}
                      </p>

                      <button
                        disabled={isInCart(plant.id)}
                        onClick={() =>
                          dispatch(addToCart(plant))
                        }
                      >
                        {isInCart(plant.id)
                          ? "Added to Cart"
                          : "Add to Cart"}
                      </button>

                    </div>

                  </div>

                ))}

            </div>

          </section>

        ))}

      </div>

    </div>
  );
}

export default ProductList;

