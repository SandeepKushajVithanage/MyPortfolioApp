import React from "react";
import { Element } from "react-scroll";
import { Images } from "../../assets";

type Props = {};

const About = (props: Props) => {
  return (
    <Element
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white py-24"
    >
      <div className="max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full duration-700">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <div className="">
          <div className="py-4 md:py-0 md:w-1/3">
            <img
              src={Images.heroImage}
              alt="sandeep vithanage"
              className="rounded-2xl mx-auto md:-mx-0 w-3/4 md:w-auto md:float-left md:mr-5"
            />
          </div>
          <div className="">
            <p className="text-xl text-justify">
              I am a highly motivated and skilled React Native developer with a
              strong understanding of JavaScript and various technologies,
              including React JS, Node JS, Express JS, MongoDB, and REST APIs.
              With several years of experience in the field, I have honed my
              expertise in developing robust and user-friendly mobile
              applications using React Native.
            </p>
            <br />
            <p className="text-xl text-justify">
              As a full-stack developer, I bring a comprehensive understanding
              of the software development lifecycle and possess the ability to
              seamlessly integrate front-end and back-end components. My
              proficiency in the MERN (MongoDB, Express, React, Node.js) stack
              allows me to design and implement end-to-end solutions with
              efficiency and effectiveness. Additionally, I have also worked
              with .NET Core, expanding my toolkit to provide innovative
              solutions across different technology stacks.
            </p>
            <br />
            <p className="text-xl text-justify">
              In my career, I have consistently delivered high-quality
              applications that not only meet the functional requirements but
              also provide an exceptional user experience. I prioritize clean
              and maintainable code, ensuring scalability and ease of future
              enhancements. I am well-versed in best practices and design
              patterns, which enables me to architect reliable and efficient
              systems.
            </p>
            <br />
            <p className="text-xl text-justify">
              Staying up-to-date with the latest industry trends and
              technologies is important to me. I continuously engage in
              self-learning and professional development to enhance my skills
              and stay at the forefront of the rapidly evolving tech landscape.
              This allows me to leverage new tools and frameworks effectively,
              delivering cutting-edge solutions to my clients.
            </p>
            <br />
            <p className="text-xl text-justify">
              Passion drives my work, and I am dedicated to surpassing client
              expectations by consistently delivering exceptional results. I
              thrive in challenging environments and enjoy tackling complex
              problems. Working collaboratively with a competitive team is where
              I find inspiration, as it fosters a culture of learning and
              growth.
            </p>
            <br />
            <p className="text-xl text-justify">
              Thank you for taking the time to review my portfolio. Please feel
              free to browse my work and don't hesitate to reach out if you have
              any questions or would like to discuss potential opportunities. I
              am excited to bring my skills and enthusiasm to your projects.
            </p>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default About;
