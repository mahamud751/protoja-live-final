import React from "react";

const Slider2 = () => {
  return (
    <>
      <div className="slider h-24 overflow-hidden mx-auto relative w-auto">
        <div className="slide-track flex w-[calc(250px*14)] animate-scrollRightToLeft">
          <div className="slide">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
              className="h-24 w-64"
              alt="slide 1"
            />
          </div>
          <div className="slide">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png"
              className="h-24 w-64"
              alt="slide 2"
            />
          </div>
          <div className="slide">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
              className="h-24 w-64"
              alt="slide 3"
            />
          </div>
          <div className="slide">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
              className="h-24 w-64"
              alt="slide 4"
            />
          </div>
          <div className="slide">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png"
              className="h-24 w-64"
              alt="slide 5"
            />
          </div>
          <div className="slide">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
              className="h-24 w-64"
              alt="slide 6"
            />
          </div>
          <div className="slide">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png"
              className="h-24 w-64"
              alt="slide 7"
            />
          </div>

          {/* Repeat for continuous scrolling */}
          <div className="slide">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
              className="h-24 w-64"
              alt="slide 8"
            />
          </div>
          <div className="slide">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png"
              className="h-24 w-64"
              alt="slide 9"
            />
          </div>
          <div className="slide">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
              className="h-24 w-64"
              alt="slide 10"
            />
          </div>
          <div className="slide">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
              className="h-24 w-64"
              alt="slide 11"
            />
          </div>
          <div className="slide">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png"
              className="h-24 w-64"
              alt="slide 12"
            />
          </div>
          <div className="slide">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
              className="h-24 w-64"
              alt="slide 13"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider2;
