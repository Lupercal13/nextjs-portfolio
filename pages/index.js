import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import {AiFillMail} from 'react-icons/ai'
import Image from "next/image";
import Avatar from "../public/me_avatar_transparent.png";
import css from "../public/css.png";
import git from "../public/git.png";
import html from "../public/html.png";
import JavaScript from "../public/javascript.png";
import react from "../public/react.png";
import python from "../public/python.png";
import { useState } from "react";

export default function Home() {
  const year = new Date().getFullYear();
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Harrison Payne Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl dark:text-gray-300">Harrison Payne</h1>
            <ul className="flex items-center ">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl dark:text-white"
                />
              </li>
              <li>
                <a
                  href="#"
                  className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 ">
            <h2 className="text-5xl py-2 text-teal-600 font-medium  md:text-6xl">
              Harrison Payne
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-gray-300">
              Front-end Web Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl md:max-w-xl mx-auto dark:text-gray-300">
              User focused{" "}
              <span className="text-teal-600 font-bold">
                Front-End Developer
              </span>
              . Creating the best possible{" "}
              <span className="text-teal-600 font-semibold">UI/UX</span>{" "}
              possible using industry standard practices.
              <br />
              {/* Get in <a href="mailto: hpayne13.test@gmail.com" className="text-teal-600 font-bold ">contact</a>  with me! */}
              <div className="bg-gradient-to-r from-cyan-500 to-teal-500 text-gray-100 rounded-xl cursor-pointer w-60 mx-auto mt-8 hover:scale-[102%]">
                <a
                  href="mailto: hpayne13.test@gmail.com"
                  className="tracking-wide"
                >
                  {" "}
                  Get in contact with me.
                </a>
              </div>
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillTwitterCircle className="hover:text-teal-600 cursor-pointer hover:scale-110" />
            <AiFillLinkedin className="hover:text-teal-600 cursor-pointer hover:scale-110" />
            <AiFillYoutube className="hover:text-teal-600 cursor-pointer hover:scale-110" />
          </div>
          <div className=" overflow-hidden relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mx-auto md:h-96 md:w-96">
            <Image src={Avatar} fill />
          </div>
        </section>
        {/* second page */}
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-teal-500">About Me</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300">
              I am a self-taught developer with experience in creating scalable
              deployment ready applications using a variety of different tools
              and frameworks in order to meet customer requirments and garunteed
              satisfaction.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300">
              Having lived in Japan for the last 8 years I have learned to
              always be ready for anything and adapt to new situations quickly.
              My time abroad allowed me to develop my time-management skills as
              well as work with a variety of clients where communication is key,
              even in different languages.
            </p>
          </div>
          <div>
            <h1 className="text-teal-500 text-3xl mt-10 ">Tools I Use</h1>
          </div>
          <div className="lg:flex gap-10 lg:flex-wrap  ">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white mb-10 basis-1/3 flex-1 hover:scale-[101%]">
              <Image src={html} className="w-[15%] mx-auto" />
              <h3 className="text-xl tracking-wide font-md pt-4 pb-2">HTML5</h3>
              <p className="py-2 tracking-wide">
                Using industy standard practices to create beautiful web apps
                using the latest in HTML5. Allowing for not only easily scalable
                apps but also{" "}
                <span className="text-teal-600 font-semibold">
                  excellent accessability
                </span>{" "}
                in my apps for all users.
              </p>
              {/* <h4 className="py-4 text-teal-600">Tools I use</h4>
              <p className="text-gray-800 py-1">HTML</p>
              <p className="text-gray-800 py-1">Tailwind CSS</p>
              <p className="text-gray-800 py-1">REACT JS</p> */}
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white  basis-1/3 flex-1 hover:scale-[101%]">
              <Image src={css} className="w-[15%] mx-auto" />
              <h3 className="text-xl tracking-wide font-md pt-4 pb-2">CSS</h3>
              <p className="py-2 tracking-wide">
                By using the latest in CSS standards and practices I am able to
                create web apps that are not only pleasing to the users eye, but
                also mobile friendly. <br />
                <br /> By using the{" "}
                <span className="text-teal-600 font-semibold">
                  Tailwind CSS
                </span>{" "}
                framework I am able to create beautiful web apps much quicker
                than standard CSS.
              </p>
              {/* <h4 className="py-4 text-teal-600">Tools I use</h4>
              <p className="text-gray-800 py-1">HTML</p>
              <p className="text-gray-800 py-1">Tailwind CSS</p>
              <p className="text-gray-800 py-1">REACT JS</p> */}
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white  basis-1/3 flex-1 hover:scale-[101%]">
              <Image src={JavaScript} className="w-[15%] mx-auto" />
              <h3 className="text-xl tracking-wide font-md pt-4 pb-2">
                JavaScript
              </h3>
              <p className="py-2 tracking-wide">
                Ability to add functionality to my web apps using{" "}
                <span className="text-teal-600 font-semibold">
                  ES6 standards
                </span>{" "}
                within JavaScript I am able to manipulate the DOM in order to
                bring a stunning experience to my users.
              </p>
              {/* <h4 className="py-4 text-teal-600">Tools I use</h4>
              <p className="text-gray-800 py-1">HTML</p>
              <p className="text-gray-800 py-1">Tailwind CSS</p>
              <p className="text-gray-800 py-1">REACT JS</p> */}
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white  basis-1/3 flex-1 hover:scale-[101%]">
              <Image src={react} className="w-[15%] mx-auto" />
              <h3 className="text-xl tracking-wide font-md pt-4 pb-2">React</h3>
              <p className="py-2 tracking-wide">
                By using{" "}
                <span className="text-teal-600 font-semibold">
                  React, NextJs, and Vite
                </span>{" "}
                I am able to create highly scalable apps by building reusable
                compoenents that can easily be implemented into a wide variety
                of web apps. Allowing for quicker development and collaboration
                with other developers to create the best possible product for
                the user and client.
              </p>
              {/* <h4 className="py-4 text-teal-600">Tools I use</h4>
              <p className="text-gray-800 py-1">HTML</p>
              <p className="text-gray-800 py-1">Tailwind CSS</p>
              <p className="text-gray-800 py-1">REACT JS</p> */}
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white  basis-1/3 flex-1 hover:scale-[101%]">
              <Image src={python} className="w-[15%] mx-auto" />
              <h3 className="text-xl tracking-wide font-md pt-4 pb-2">
                Python
              </h3>
              <p className="py-2 tracking-wide">
                Python gives me the knowledge to create not only strictly
                front-end web applications. By using python I am able to
                implement a back-end into my applications to allow for even
                further usability by the use of{" "}
                <span className="text-teal-600 font-semibold">
                  Django and Flask
                </span>
              </p>
              {/* <h4 className="py-4 text-teal-600">Tools I use</h4>
              <p className="text-gray-800 py-1">HTML</p>
              <p className="text-gray-800 py-1">Tailwind CSS</p>
              <p className="text-gray-800 py-1">REACT JS</p> */}
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white  basis-1/3 flex-1 hover:scale-[101%]">
              <Image src={git} className="w-[15%] mx-auto" />
              <h3 className="text-xl tracking-wide font-md pt-4 pb-2">
                Git and Github
              </h3>
              <p className="py-2 tracking-wide">
                Version control is a must when working on deployment ready
                projects. Using the version control platforms git and github
                allow for easy{" "}
                <span className="text-teal-600 font-semibold">
                  collaboration with fellow developers
                </span>
                . By committing frequently the code remains readable and easy to
                understand no matter who is contributing, even in legacy
                versions.
              </p>
              {/* <h4 className="py-4 text-teal-600">Tools I use</h4>
              <p className="text-gray-800 py-1">HTML</p>
              <p className="text-gray-800 py-1">Tailwind CSS</p>
              <p className="text-gray-800 py-1">REACT JS</p> */}
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-teal-500">Portfolio</h3>
            <p className="text-xl py-2 leading-8 tracking-wide text-gray-800 dark:text-gray-300">
              Check out some of my projects below.
            </p>
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
              <div className="basis-1/3 flex-1 mx-auto">
                <img
                  src="https://via.placeholder.com/400"
                  className="rounded-lg object-cover mx-auto"
                />
              </div>
              <div className="basis-1/3 flex-1 mx-auto">
                <img
                  src="https://via.placeholder.com/400"
                  className="rounded-lg object-cover mx-auto"
                />
              </div>
              <div className="basis-1/3 flex-1 mx-auto">
                <img
                  src="https://via.placeholder.com/400"
                  className="rounded-lg object-cover mx-auto"
                />
              </div>
              <div className="basis-1/3 flex-1 mx-auto">
                <img
                  src="https://via.placeholder.com/400"
                  className="rounded-lg object-cover mx-auto"
                />
              </div>

            </div>
          </div>
        </section>
      </main>
      <footer className="text-white bg-teal-600 px-2 lg:px-10 dark:text-gray-300 dark:bg-gray-800 ">
        <div className="flex justify-between">
          <div>
           <a href="mailto:hpayne13.test@gmail.com" className="hover:text-teal-600 hover:scale-[101%] cursor-pointer flex gap-2 items-center text-sm"><AiFillMail size={18} />hpayne13.test@gmail.com</a>
            <p className="text-sm"> &#169; {year} </p>
          </div>
          <div className="flex gap-4 mt-2">
            <AiFillLinkedin
              size={30}
              className="hover:text-teal-600 hover:scale-105 cursor-pointer"
            />
            <AiFillTwitterCircle
              size={30}
              className="hover:text-teal-600 hover:scale-105 cursor-pointer"
            />
            <AiFillYoutube
              size={30}
              className="hover:text-teal-600 hover:scale-105 cursor-pointer"
            />
          </div>
        </div>
      </footer>
    </div>
  );
}
