import React from "react";
import { Element } from "react-scroll";
import { Images } from "../../assets";

type Props = {};

const expirences = [
  {
    id: 1,
    organization: {
      name: "Pelican Cube",
      logo: null,
      location: "Sri Jayawardenepura Kotte, Western Province, Sri Lanka",
    },
    duration: "1 yr 4 mos",
    occupations: [
      {
        id: 1,
        title: "Software Engineer - React Native",
        employmentPeriod: "Jan 2023 - Apr 2023",
        employmentType: "Contract",
        workLocation: "Remote",
        description:
          "Working on mobile application development focused on cross-platform iOS and Android applications with React Native.",
        keyResponsibilities: [
          "Develop and maintain applications using React Native.",
          "Collaborate with cross-functional teams to define, design, and ship new features.",
          "Ensure the performance, quality, and responsiveness of applications.",
          "Fix bugs and identify and correct bottlenecks.",
          "Maintain code quality and organization.",
          "Participate in code reviews.",
          "Stay up-to-date with the latest best practices and technologies in mobile development.",
        ],
        skills: [
          "React Native",
          "Git",
          "Redux JS",
          "Representational State Transfer (REST)",
          "Microsoft Visual Studio Code",
          "Postman API",
          "Firebase",
          "JavaScript",
          "JSON",
        ],
      },
      {
        id: 2,
        title: "Associate Software Engineer - React Native",
        employmentPeriod: "Jul 2022 - Dec 2022",
        employmentType: "Contract",
        workLocation: "Hybrid",
        description:
          "This position involves working on mobile application development focused on cross-platform iOS and Android applications using React Native.",
        keyResponsibilities: [
          "Collaborate with the development team to build cross-platform iOS and Android applications using React Native.",
          "Contribute to the design and implementation of new features and enhancements.",
          "Conduct code reviews and provide constructive feedback to peers.",
          "Debug and resolve issues and bugs in the mobile applications.",
          "Collaborate with the QA team to ensure the quality and performance of the applications.",
          "Stay updated with the latest trends and advancements in React Native development.",
          "Assist in maintaining code quality, organization, and documentation.",
        ],
        skills: [
          "React Native",
          "Git",
          "Redux JS",
          "Representational State Transfer (REST)",
          "Microsoft Visual Studio Code",
          "Postman API",
          "Firebase",
          "JavaScript",
          "JSON",
        ],
      },
      {
        id: 3,
        title: "Intern Software Engineer - React Native",
        employmentPeriod: "Jan 2022 - Jun 2022",
        employmentType: "Contract",
        workLocation: "Hybrid",
        description:
          "This internship position involves assisting in the development and maintenance of applications using React Native.",
        keyResponsibilities: [
          "Assist in the development and maintenance of applications using React Native.",
          "Learn about and assist with the collaboration with cross-functional teams to define, design, and ship new features.",
          "Participate in the testing and debugging of applications.",
          "Help maintain code quality and organization.",
          "Assist with the identification and correction of bugs and bottlenecks.",
          "Participate in code reviews and learn about team standards and guidelines.",
          "Keep up-to-date with the latest best practices and technologies in mobile development.",
        ],
        skills: [
          "Node JS",
          "React Native",
          "Git",
          "Redux JS",
          "MongoDB",
          "Representational State Transfer (REST)",
          "Express JS",
          "Microsoft Visual Studio Code",
          "Postman API",
          "Firebase",
          "JavaScript",
          "Java",
          "JSON",
          "AJAX",
          "Problem Solving",
        ],
      },
    ],
  },
];

const Experience = (props: Props) => {
  return (
    <Element
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full py-24"
    >
      <div className="max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl mx-auto p-4 flex flex-col justify-center w-full h-full text-white duration-700">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>
        <div className="max-w-4xl">
          {expirences.map((experience) => (
            <div key={experience.id} className="">
              <div className="flex">
                <div>
                  <img
                    className="rounded-md w-20"
                    src={Images.pelicanCube}
                    alt=""
                  />
                </div>
                <div className="flex flex-col items-start ml-4 w-full">
                  <p className="font-bold text-xl">
                    {experience.organization.name}
                  </p>
                  <p className="text-lg">{experience.duration}</p>
                  <p className="text-gray-500">
                    {experience.organization.location}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4 mt-4">
                {experience.occupations.map((occupation) => (
                  <div key={occupation.id} className="flex">
                    <div className="flex flex-col items-center gap-7 w-20">
                      <div className="w-2 h-2 rounded-full bg-gray-500 mt-3" />
                      <div className="w-[1px] bg-gray-500 h-full rounded-full" />
                    </div>
                    <div className="ml-4 w-full pb-2">
                      <p className="font-bold text-lg">{occupation.title}</p>
                      <p className="text-lg">{occupation.employmentType}</p>
                      <p className="text-gray-500">
                        {occupation.employmentPeriod}
                      </p>
                      <p className="text-gray-500">{occupation.workLocation}</p>
                      <p>{occupation.description}</p>
                      <p className="font-bold">Key responsibilities</p>
                      <ul>
                        {occupation.keyResponsibilities.map((resp) => (
                          <li key={resp} className="text-sm">
                            - {resp}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {occupation.skills.map((skill) => (
                          <div
                            key={skill}
                            className="bg-gray-500 rounded-full p-1 px-3"
                          >
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
};

export default Experience;
