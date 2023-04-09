import React from "react";
import { Element } from "react-scroll";
import { Images } from "../../assets";

type Props = {};

const About = (props: Props) => {
  return (
    <Element
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white  py-24"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <div className="flex flex-col md:flex-row-reverse items-center justify-center">
          <div className="py-4 md:py-0 md:w-1/3">
            <img
              src={Images.profile}
              alt="sandeep vithanage"
              className="rounded-2xl mx-auto md:-mx-0 w-3/4 md:w-auto"
            />
          </div>
          <div className="md:w-2/3 md:pr-10">
            <p className="text-xl mt-8 text-justify">
              I am a highly motivated and skilled React Native developer with a
              strong understanding of JavaScript and various technologies,
              including React JS, Node JS, Express JS, MongoDB, and REST APIs. I
              specialize in building high-quality, efficient, and reliable
              applications that meet the needs of users and exceed their
              expectations.
            </p>
            <br />
            <p className="text-xl text-justify">
              As a full-stack developer, I have experience utilizing the MERN
              stack as well as .Net Core to develop innovative solutions to
              complex problems. I am constantly expanding my skillset and
              knowledge to stay current with the latest trends and technologies
              in the industry.
            </p>
            <br />
          </div>
        </div>
        <p className="text-xl text-justify">
          I am passionate about what I do and am committed to delivering
          exceptional results for my clients. I am always eager to take on new
          challenges and am excited to join a competitive team in a challenging
          environment where I can continue learning and growing as a developer.
        </p>
        <br />
        <p className="text-xl text-justify">
          Thank you for your interest in my portfolio! Please feel free to
          browse my work and contact me if you have any questions or would like
          to discuss any potential opportunities.
        </p>
      </div>
    </Element>
  );
};

export default About;
