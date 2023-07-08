import React from "react";
import { Element } from "react-scroll";
import { Images } from "../../assets";

type Props = {};

const portfolios = [
  {
    id: 1,
    src: Images.avanicaSignIn,
  },
];

const Protfolio = (props: Props) => {
  return (
    <Element
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white py-24"
    >
      <div className="max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full duration-700">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Protfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 duration-700">
          {portfolios.map(({ id, src }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg duration-700"
            >
              <img
                className="rounded-md duration-200 hover:scale-105"
                src={src}
                alt=""
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
};

export default Protfolio;
