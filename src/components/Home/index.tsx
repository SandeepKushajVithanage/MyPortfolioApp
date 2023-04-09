import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
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
      className="md:h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row-reverse">
        <div className="flex md:w-2/3 flex-col justify-center h-full md:pl-10 md:items-end">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mt-8 md:mt-0 md:text-right">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md md:text-right">
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
              className="group text-white w-fit px-6 py-3 my-2 flex flex-row-reverse items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              <span className="group-hover:rotate-[270deg] md:group-hover:rotate-[-90deg] rotate-180 md:rotate-0 duration-300">
                <MdOutlineKeyboardArrowLeft size={25} className="ml-1" />
              </span>{" "}
              Portfolio
            </Link>
          </div>
        </div>
        <div className="py-16 md:py-0 md:w-1/3">
          <img
            src={Images.heroImage}
            alt="sandeep vithanage"
            className="rounded-2xl mx-auto md:-mx-0 w-3/4 md:w-auto"
          />
        </div>
      </div>
    </Element>
  );
};

export default Home;
