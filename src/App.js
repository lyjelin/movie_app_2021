import React from "react";
import PropTypes from "prop-types";

function Food({ name, picture, rating }) {
  return <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src ={picture} alt={name} width="20%"/>
    </div>
}

Food.proTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
}

const foodILike = [
  {
    id: 1,
    name: "Cookie",
    image: "/image/gbcookie.png",
    rating: 4.3
  }, 
  {
    id: 2,
    name: "macaroon",
    image: "/image/ydmacaroon.png",
    rating: 4.0
  },
  {
    id: 3,
    name: "pancake",
    image: "/image/jjpancake.jpeg",
    rating: 4.6
  },
  {
    id: 4,
    name: "scone",
    image: "/image/jjscone.jpeg",
    rating: 4.7
  }
]

function renderFood(dish) {
  console.log(dish);
  return <Food prop={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
}

function App() {
  return (
    <div>
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;
