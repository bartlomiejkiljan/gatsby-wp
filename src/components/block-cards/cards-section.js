import React from "react"

const CardsSection = ({ items }) => (
  <div className="cards-section">
    { items.map((card, i) => {
      const { desc, title } = card.attributes;

      return (
        <div className="wp-block-custom-card" key={`card-${i}`}>
          <div className="card__item">
            <h3 className="card__title">{title}</h3>
            <p className="card__desc">{desc}</p>
          </div>
        </div>
      )
      })
    }
  </div>
);

export default CardsSection;