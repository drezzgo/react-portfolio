import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = ({ toggleLanguage, language }) => {
  return <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="" />
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl ">
        <a 
          href="https://www.linkedin.com/in/drezzgooogle.com"
          target="_blank"
          rel="noopener"
        >
          <FaLinkedin/>
        </a>
        <a
          href="https://www.github.com/drezzgo/"
          target="_blank"
          rel="noopener">
            <FaGithub/>
        </a>
        <a
          href="https://www.instagram.com/drezzgo/"
          target="_blank"
          rel="noopener">
            <FaInstagram/>
        </a>
        <a
          href="https://x.com/drezzgo"
          target="_blank"
          rel="noopener">
            <FaSquareXTwitter/>
        </a>
    </div>
    <div className="m-8 flex items-center">
        <button
          onClick={toggleLanguage}
          className="px-4 py-2 bg-neutral-700 rounded-md text-white"
        >
          {language === "en" ? "ES" : "EN"}
        </button>
      </div>
  </nav>
}

export default Navbar