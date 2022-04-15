import React from "react";
import { TestimonialItem } from "./";

const testimonials = [
  {
    id: 0,
    area: "left",
    quote:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas sed tempus urna et pharetra pharetra."',
    author: {
      name: "Bernard Lane",
      position: "Head of Ocado Technology, Barcelona",
      photo:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 1,
    area: "right",
    quote:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas sed tempus urna et pharetra pharetra."',
    author: {
      name: "Bernard Lane",
      position: "Head of Ocado Technology, Barcelona",
      photo:
        "https://images.unsplash.com/photo-1554384645-13eab165c24b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

const Testimonials = () => {
  return (
    <section className="relative bg-white">
      <div
        className="absolute bottom-0 left-0"
        style={{
          background: `linear-gradient(90deg, #fff 22px, transparent 1%) center, linear-gradient(#fff 22px, transparent 1%) center, #cbd5e0`,
          backgroundSize: `25px 25px`,
          height: `15rem`,
          width: `35rem`,
        }}
      ></div>
      <div
        className="absolute top-0 right-0"
        style={{
          background: `linear-gradient(90deg, #fff 22px, transparent 1%) center, linear-gradient(#fff 22px, transparent 1%) center, #cbd5e0`,
          backgroundSize: `25px 25px`,
          height: `15rem`,
          width: `35rem`,
        }}
      ></div>
      <div className="relative container mx-auto pt-12 pb-20">
        <div className="py-12">
          <div className="max-w-screen-xl mx-auto px-8">
            <div className="text-center">
              <h3 className="text-5xl leading-none font-bold tracking-tight text-black">
                What our costumers have to say
              </h3>
            </div>
          </div>
          <div
            className="grid gap-16 mt-16 max-w-screen-xl mx-auto px-8 grid-cols-1 lg:grid-cols-2"
          >
            {testimonials
              .slice(0, 2)
              .map(({ id, area, quote, author: { name, position, photo } }) => {
                /* display only the first two testimonials */
                return (
                  <TestimonialItem
                    key={id}
                    area={area}
                    quote={quote}
                    author={{
                      name,
                      position,
                      photo,
                    }}
                  ></TestimonialItem>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
