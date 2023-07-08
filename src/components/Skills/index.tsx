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
  {
    id: 2,
    src: Images.css,
    title: "CSS3",
    style: "shadow-blue-500",
  },
  {
    id: 3,
    src: Images.javascript,
    title: "JavaScript",
    style: "shadow-yellow-500",
  },
  {
    id: 4,
    src: Images.react,
    title: "ReactJS",
    style: "shadow-sky-400",
  },
  {
    id: 5,
    src: Images.tailwind,
    title: "Tailwind",
    style: "shadow-orange-500",
  },
  {
    id: 6,
    src: Images.nextjs,
    title: "NextJS",
    style: "shadow-white",
  },
  {
    id: 7,
    src: Images.graphql,
    title: "GraphQL",
    style: "shadow-pink-400",
  },
  {
    id: 8,
    src: Images.github,
    title: "GitHub",
    style: "shadow-gray-400",
  },
];

const Skills = (props: Props) => {
  return (
    <Element
      name="skills"
      className="bg-gradient-to-b from-black to-gray-800 w-full py-24"
    >
      <div className="max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl mx-auto p-4 flex flex-col justify-center w-full h-full text-white duration-700">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={
                "shadow-md hover:scale-105 duration-500 py-2 rounded-lg " +
                style
              }
            >
              <img className="w-20 mx-auto" src={src} alt="" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
};

export default Skills;
