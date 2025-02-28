"use client";
import { useEffect } from "react";

const Card = ({ imageSrc, title, description, index, length }) => {
  useEffect(() => {
    const ScrollObserver = (element, callback) => {
      const observer = new IntersectionObserver(([entry]) => {
        callback(entry);
      });
      observer.observe(element);
    };

    const cards = document.querySelectorAll(".card");
    cards.forEach((card, i) => {
      if (i === cards.length - 1) return;

      const scaleValue = 1 - (cards.length - 1 - i) * 0.6;
      const cardInner = card.querySelector(".card__inner");

      ScrollObserver(card, (entry) => {
        const percentageY = entry.intersectionRatio;
        cardInner.style.transform = `scale(${
          scaleValue + percentageY * (1 - scaleValue)
        })`;
        cardInner.style.filter = `brightness(${1 - (1 - 0.6) * percentageY})`;
      });
    });
  }, []);

  return (
    <div
      className="card sticky top-0 pt-8"
      data-index={index}
      style={{ "--cards-count": length }}
    >
      <div className="card__inner flex flex-col md:flex-row bg-white rounded-lg shadow-lg transform transition-transform min-h-[500px]">
        <div className="card__image-container w-full md:w-2/5">
          <img
            className="card__image w-full h-full object-cover"
            src={imageSrc}
            alt=""
          />
        </div>
        <div className="card__content p-8">
          <h1 className="card__title text-4xl font-bold mb-4">{title}</h1>
          <p className="card__description text-xl">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
