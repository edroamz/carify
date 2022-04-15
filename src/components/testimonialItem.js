import React from "react";

const TestimonialItem = ({
  area,
  quote,
  author: { name, position, photo },
}) => (
  <div
    className="col-span-1 lg:col-span-2"
    style={{
      marginLeft: `${area === "right" ? "auto" : "unset"}`,
      maxWidth: "600px",
    }}
  >
    <p className="quote relative mt-3 text-xl leading-7 text-gray-700 italic font-serif tracking-normal z-10">
      {quote}
    </p>
    <div className="inline-flex items-center mt-8">
      <div className="flex-shrink-0 h-10 w-10">
        <img className="h-10 w-10 rounded-full" src={photo} alt="" />
      </div>
      <div className="ml-4">
        <div className=" leading-5 font-medium text-black text-left mb-1">
          {name}
        </div>
        <div className=" leading-5 font-medium text-left text-primary">
          {position}
        </div>
      </div>
    </div>
  </div>
);

export default TestimonialItem;
