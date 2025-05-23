import React from "react";

const slideList = [
  { id: 1, img: '/assets/slider2/one.png' },
  { id: 2, img: '/assets/slider2/two.png' },
  { id: 3, img: '/assets/slider2/three.png' },
  { id: 4, img: '/assets/slider2/four.png' },
  { id: 5, img: '/assets/slider2/five.png' },
  { id: 6, img: '/assets/slider2/six.png' },
  { id: 7, img: '/assets/slider2/seven.png' },
  { id: 8, img: '/assets/slider2/eight.png' },
];

const Slider2 = () => {
  const slides = [...slideList, ...slideList];

  return (
    <div className="overflow-hidden w-full py-6 sm:py-8 md:py-10">
      <div className="flex animate-scrollRightToLeft gap-4 sm:gap-6 w-[max-content]">
        {slides.map(({ id, img }) => (
          <div
            key={id}
            className="flex-shrink-0 rounded-xl overflow-hidden shadow-md sm:shadow-lg"
          >
            <img
              src={img}
              alt={`slide ${id}`}
              className="w-[150px] sm:w-[180px] md:w-[220px] lg:w-[260px] h-[160px] sm:h-[200px] md:h-[240px] lg:h-[300px] object-cover rounded-xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider2;
