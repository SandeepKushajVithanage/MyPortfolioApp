import React from "react";
import { Element } from "react-scroll";
import { Images } from "../../assets";

type Props = {};

const techs = [
  {
    id: 1,
    src: Images.html,
    title: "HTML5",
    style: "shadow-orange-500",
  },
];

const Testimonials = (props: Props) => {
  return (
    <Element
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full py-24"
    >
      <div className="max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl mx-auto p-4 flex flex-col justify-center w-full h-full text-white duration-700">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Testimonial
          </p>
          <p className="py-6">What People Say,</p>
        </div>
      </div>
    </Element>
  );
};

export default Testimonials;
