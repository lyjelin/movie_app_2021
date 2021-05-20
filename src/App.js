import React from "react";

function Food({ name, pic }) {
  return <div>
      <h1>I like {name}</h1>
      <img src ={pic} alt={name}/>
    </div>
}

const foodILike = [
  {
    name: "Cookie",
    image: 
      "/image/gbcookie.png"
  }, 
  {
    name: "macaroon",
    image: "/image/ydmacaroon.png"
  },
  {
    name: "pancake",
    image: "/image/jjpancake.jpeg"
  },
  {
    name: "scone",
    image: "/image/jjscone.jpeg"
  }
]


function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food name={dish.name} pic={dish.image} />
      ))}
    </div>
  );
}

export default App;
