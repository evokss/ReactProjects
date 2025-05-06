import React from "react";
import { CardItem } from "../../data";

interface CardProps {
  item: CardItem;
}

const Card:React.FC<CardProps> = ({item}) => {
  let badgeText: string | undefined;
  if (item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (item.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={`./${item.coverImg}`} className="card--image" alt={item.title} />
      <div className="card--stats">
        <img src="./star.png" className="card--star" alt="star rating" />
        <span>&nbsp;{item.stats.rating}</span>
        <span className="gray">
          &nbsp;({item.stats.reviewCount})&nbsp;•&nbsp;
        </span>
        <span className="gray">{item.location}</span>
      </div>
      <p className="card--title">{item.title}</p>
      <p className="card--price">
        <span className="bold">From ${item.price}</span> / person
      </p>
    </div>
  );
}

export default Card;
