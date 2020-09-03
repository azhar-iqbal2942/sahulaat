import React from "react";
import { Link } from "react-scroll";

const Banner = () => {
  return (
    <React.Fragment>
      <section className="text-gray-700 body-font">
        <div className="container flex flex-col items-center px-5 py-12 mx-auto md:flex-row">
          <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
            <h1 className="mb-4 text-xl font-medium text-gray-900 sm:text-4xl">
              PROVIDING A RELIABLE, EFFICIENT AND COST EFFECTIVE SERVICE
              <br className="hidden lg:inline-block" />
              THAT DELIVERS GREAT VALUE FOR OUR CLIENTS.
            </h1>
            {/* <p className="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard
              tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon
              try-hard chambray.
            </p> */}
            <div className="flex justify-center">
              <Link
                to="services"
                smooth={true}
                duration={600}
                className="inline-flex px-6 py-2 text-lg text-white bg-indigo-500 border-0 rounded cursor-pointer focus:outline-none hover:bg-indigo-600"
              >
                Go to Services
              </Link>
              {/* <button className="inline-flex px-6 py-2 ml-4 text-lg text-gray-700 bg-gray-200 border-0 rounded focus:outline-none hover:bg-gray-300">
                Button
              </button> */}
            </div>
          </div>
          <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://source.unsplash.com/user/erondu/720x600"
            />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Banner;
