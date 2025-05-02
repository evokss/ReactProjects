import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data, { CardItem } from '../data';

const App: React.FC = () => {
  const cards = data.map((item: CardItem) => (
    <Card key={item.id} item={item} />
  ));

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">{cards}</section>
    </div>
  );
};
  
export default App;
