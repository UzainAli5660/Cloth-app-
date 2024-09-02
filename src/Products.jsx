import React, { useState } from 'react';
import './App.css';
import Modal from './Components/Modal';
import Card from './Components/Card'
function Products() {
  const [selectedCard, setSelectedCard] = useState(null);

  const items = [
    {
      title: "Pack Of 7 Shirts",
      img: "https://plus.unsplash.com/premium_photo-1673356301535-2cc45bcc79e4?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$180",
      id: 1,
    },
    {
      title: "Oversized T-Shirt",
      img: "https://plus.unsplash.com/premium_photo-1671656349262-1e1d3e09735c?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$35",
      id: 2,
    },
    {
      title: "White T-Shirt",
      img: "https://images.unsplash.com/photo-1516442719524-a603408c90cb?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$20",
      id: 3,
    },
    {
      title: "Pack Of 3 Shirts",
      img: "https://images.unsplash.com/photo-1716951884230-84bed04544c5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fFQlMjBzaGlydHN8ZW58MHx8MHx8fDA%3D",
      price: "$100",
      id: 4,
    },
    {
        title: "Shirt for mens",
        img: "https://images.unsplash.com/photo-1602810320073-1230c46d89d4?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: "$180",
        id: 5,
      },
      {
        title: "Short for men",
        img: "https://media.istockphoto.com/id/2159179049/photo/red-bright-sports-pants-casual-style-isolated-on-a-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=0kwd90PZgZ1s-FcEEzKbOWHam9vNdSyb2rolbfyLeyg=",
        price: "$50",
        id: 6,
      },
      {
        title: "Jeans",
        img: "https://media.istockphoto.com/id/1281304280/photo/folded-blue-jeans-on-a-white-background-modern-casual-clothing-flat-lay-copy-space.webp?a=1&b=1&s=612x612&w=0&k=20&c=1odGy7gLyH82a6I65dznw4jcs4IecTKcmJEAzzMU2L8=",
        price: "$60",
        id: 7,
      },
      {
        title: "Denim Jeans",
        img: "https://media.istockphoto.com/id/186870715/photo/blue-jeans.jpg?s=1024x1024&w=is&k=20&c=8-g8jkDtNOYnC4mnkDVY0DSDpR5hpVPxlKMAAMsGUuM=",
        price: "$250",
        id: 8,
      },
  ];

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  return (
    <>
    
      <div className="container px-5 py-20 mb-10 mx-auto">
        <div className="flex flex-wrap -m-4">
          {items.map((data) => (
            <Card
              key={data.id}
              img={data.img}
              title={data.title}
              price={data.price}
              onPress={() => handleCardClick(data)}
            />
          ))}
        </div>
      </div>
      <Modal isOpen={!!selectedCard} onClose={handleCloseModal} card={selectedCard} />
    </>
  );
}

export default Products;