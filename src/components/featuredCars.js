import React from "react";
import Img from "react-cool-img";

const featuredCars = [
  {
    id: 0,
    model: "Tesla Model 3",
    photo: {
      url: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
      alt: "",
    },
    price: "20,543",
    coin: "USD",
  },
  {
    id: 1,
    model: "Tesla Model 3",
    photo: {
      url: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
      alt: "",
    },
    price: "20,543",
    coin: "USD",
  },
  {
    id: 2,
    model: "Tesla Model 3",
    photo: {
      url: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
      alt: "",
    },
    price: "20,543",
    coin: "USD",
  },
  {
    id: 3,
    model: "Tesla Model 3",
    photo: {
      url: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
      alt: "",
    },
    price: "20,543",
    coin: "USD",
  },
];

const FeaturedCars = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto py-24" style={{ maxWidth: `1600px` }}>
        <div className="max-w-screen-xl mx-auto px-8">
          <div className="text-center">
            <h3 className="text-5xl leading-none font-bold tracking-tight text-black">
              Popular cars
            </h3>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-center justify-between px-12 mt-10">
          {featuredCars.map(({ id, model, photo, price, coin }) => (
            <div key={id}>
              <div className="h-56 rounded-lg overflow-hidden">
                <Img
                  src={photo.url}
                  className="w-full h-full object-cover"
                  style={{ backgroundColor: "#ccc" }}
                  alt={photo.alt}
                ></Img>
              </div>
              <div className="leading-5 pt-3 pb-4 text-black">
                <h4 className="font-bold tracking-wide">{model}</h4>
                <p className="font-mono text-primary font-bold tracking-wide leading-5 mt-2">
                  ${price} {coin}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCars;
