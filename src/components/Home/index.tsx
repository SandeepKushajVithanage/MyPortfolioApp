import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { Element, Link } from "react-scroll";
import { Images } from "../../assets";

// interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
//   // For extending React's HTMLAttributes
//   name?: string;
// }

// const Section : HTMLAttributes<HTMLDivElement> = ()

type Props = {};

const Home = (props: Props) => {
  return (
    <Element
      name="home"
      className="w-full bg-gradient-to-b from-black via-black to-gray-800 md:h-screen"
      // style={{ height: "calc(100vh - 6rem)" }}
    >
      {/* <div className="h-20 md:block" /> */}
      <div className="max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row duration-700">
        <div className="mt-10 md:mt-0 flex w-full md:w-1/2 lg:w-2/3 flex-col justify-center h-full">
          <p className="text-white text-xl mb-4 mt-16 md:mt-0">
            Welcome to my site!
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white duration-700">
            I'm a Full Stack <br />
            Developer
          </h1>
          <p className="text-gray-500 py-4 max-w-md ">
            Hi, I'm Sandeep Kushaj Vithanage - a skilled React Native developer
            with expertise in MERN stack and .Net Core technologies. Browse my
            portfolio to see my work and get in touch to discuss potential
            opportunities.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex flex-row items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer justify-between"
            >
              Portfolio
              <span className="group-hover:rotate-[90deg] duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>{" "}
            </Link>
          </div>
        </div>
        <div className="py-16 md:py-0 md:w-1/2 lg:w-1/3 relative hover:scale-105 duration-300">
          <img
            src={Images.heroImg}
            alt="sandeep vithanage"
            className="rounded-[50%] md:rounded md:rounded-bl-[30%] mx-auto md:-mx-0 w-3/4 md:w-auto md:z-10 relative"
          />
          <img
            src={Images.heroImg}
            className="hidden md:block rounded rounded-bl-[30%] absolute w-3/4 md:w-full md:h-full bg-gray-700 -top-5 -right-5 z-0 opacity-30"
          />
        </div>
      </div>
    </Element>
  );
};

export default Home;
