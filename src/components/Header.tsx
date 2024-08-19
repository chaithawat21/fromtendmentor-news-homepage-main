import logo from "../assets/images/logo.svg"
import hamburger from "../assets/images/icon-menu.svg"
import close from "../assets/images/icon-menu-close.svg"
import { useState } from "react"
const Header = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const toggleMenu = (): void => {
    setIsOpen(!isOpen)
  }

  const hover = "hover:text-SoftRed cursor-pointer"

  return (
    <header className={`bg-OffWhite flex flex-row justify-between items-center mt-24 mb-16 mx-24 sm:mt-8 sm:mx-8 sm:relative sm:z-0 md:mx-8 `}>
      <img src={logo} alt="logo" />

      <nav className="menubar sm:hidden">
        <ul className="flex flex-row gap-8 text-DarkGrayishBlue">
          <li className={hover}>Home</li>
          <li className={hover}>New</li>
          <li className={hover}>Popular</li>
          <li className={hover}>Trending</li>
          <li className={hover}>Categories</li>
        </ul>
      </nav>

      <nav className="hambuerger hidden sm:inline-block">
        <img src={hamburger} alt="hamburger" onClick={toggleMenu} />
        {isOpen && (
          <div
            className="fixed inset-0 bg-DarkGrayishBlue opacity-50 z-20"
            onClick={toggleMenu}
          ></div>
        )}
        
        <ul className={`${isOpen ? "flex" : "hidden"} flex-col gap-8 text-DarkGrayishBlue text-[1.5rem] bg-gray-50 absolute top-[-2rem] right-[-2rem] z-30  w-[80%] h-screen pl-[2rem] pt-[10rem]`}>
        <img className="absolute pt-[2rem] ] top-0 right-[1rem] z-40 w-10" src={close} alt="close" onClick={toggleMenu} />
          <li className={hover}>Home</li>
          <li className={hover}>New</li>
          <li className={hover}>Popular</li>
          <li className={hover}>Trending</li>
          <li className={hover}>Categories</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header