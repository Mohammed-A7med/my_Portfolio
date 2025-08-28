import personalImg from "../../assets/personal img.jpeg";
import DownloadIcon from "../Ui-icons/DownloadIcon";
import SocialLinksGroup from "./SocialLinksGroup";

export default function Home() {
  return (
    <section
      id="home"
      className="text-white flex flex-col md:flex-row min-h-screen justify-center items-center pt-20 md:pt-0"
    >
      {/* --------------- Left Section: Intro Text & Buttons --------------- */}
      <div className="w-full flex justify-center md:w-7/12 ">
        <div className="px-4">
          <h4 className="text-lg">Hello,</h4>
          <h1 className="my-2 text-2xl md:text-4xl font-bold">
            I’m{" "}
            <span className="bg-gradient-to-r from-[#5f93e7] to-blue-400 bg-clip-text text-transparent">
              Mohamed Ahmed
            </span>
          </h1>
          <h2 className="text-lg md:text-2xl">Front End web Developer</h2>
          <p className="mt-4 max-w-lg leading-relaxed text-gray-300">
            I specialize in building fast, responsive, and user-friendly web
            applications using React, TypeScript, Redux, and modern UI
            libraries. I’m passionate about turning ideas into seamless digital
            experiences.
          </p>

          {/* ---------- Call-to-Action Buttons ---------- */}
          <div className="mt-8 flex gap-4 justify-center md:justify-start">
            <a
              className="flex items-center gap-2 bg-white rounded-full text-[#162d71] py-2 px-6 font-semibold hover:bg-[#5f93e7] hover:text-white transition"
              href="/cv.pdf"
              download="Mohamed_Ahmed_Frontend_Developer_Resume"
            >
              <DownloadIcon />
              Download CV
            </a>
            <a
              className="bg-transparent rounded-full border border-white py-2 px-6 font-semibold hover:bg-[#5f93e7] hover:border-[#5f93e7] transition"
              href="#contact"
            >
              Contact Me
            </a>
          </div>

          {/* ---------- Social Links ---------- */}
          <SocialLinksGroup />
        </div>
      </div>

      {/* --------------- Right Section: Profile Image --------------- */}
      <div className="w-full md:w-5/12 flex justify-center mt-8 md:mt-0">
        <img
          className="rounded-full w-[85%] md:w-[60%] border-4 border-white "
          src={personalImg}
          alt="Portrait of Mohamed Ahmed"
        />
      </div>
    </section>
  );
}
