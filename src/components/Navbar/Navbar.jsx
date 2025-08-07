import { useState } from "react";

// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "motion/react";
import {
  fadeInVariant,
  mobileItemVariant,
  mobileListVariant,
} from "../../variants/animation";
import CloseIcon from "../Ui-icons/CloseIcon";
import MenuIcon from "../Ui-icons/MenuIcon";
import { linksArray } from "./NavLinks";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <motion.header
      initial={{ y: -50 }}
      animate={{ y: 0, transition: { duration: 0.5 } }}
      className="bg-white "
    >
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <a className="block" href="#">
          <span className="sr-only">Home</span>
          <span>Mohamed Ahmed</span>
        </a>

        <div className="flex flex-1 items-center justify-end md:justify-end">
          <nav
            aria-label="Global"
            role="navigation"
            className="hidden md:block"
          >
            <motion.ul
              variants={fadeInVariant}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-6 text-sm"
            >
              {linksArray.map((item) => (
                <li
                  key={item}
                  className="text-gray-500 transition hover:text-gray-500/75"
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setActiveLink(item)}
                    className={
                      item === activeLink ? "text-teal-600" : "text-gray-500"
                    }
                  >
                    {item}
                  </a>
                </li>
              ))}
            </motion.ul>
          </nav>

          <button
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            className="block rounded-sm bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
          >
            <span className="sr-only">Toggle menu</span>
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/*----------------- mobile screen  -----------------*/}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            aria-label="Mobile Menu"
            className="min-h-screen"
            initial="hidden"
            animate={isMenuOpen ? "visible" : "hidden"}
            exit="hidden"
          >
            <motion.ul
              variants={mobileListVariant}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center justify-center gap-6 text-sm"
            >
              {linksArray.map((item) => (
                <motion.li
                  key={item}
                  variants={mobileItemVariant}
                  className="text-gray-500 transition hover:text-gray-500/75"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <a href={`#${item.toLowerCase()}`}>{item}</a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
