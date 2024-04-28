import Image from "next/image"
import Link from "next/link"
import { MdMenu } from "react-icons/md"
import Drawer from "../Drawer/Drawer"

export default function Header() {
  return (
    <div
      className="
        bg-primary 
        dark:bg-primaryDark 
        flex 
        w-screen 
        h-32 
      "
    >
      <Drawer />

      <div
        className="
          px-8
          flex 
          mx-auto 
          w-full
          max-w-[1280px]
          justify-between
          flex-row
          sm:flex-col
          md:flex-row
          sm:py-6
          md:py-0
          items-center
        "
      >
        <Image
          src="/logo-white.png"
          alt="logo devchella"
          width={200}
          height={200}
          className="flex h-10 w-auto"
          quality={100}
        />

        <nav className="hidden sm:flex">
          <ul
            className="
              flex 
              flex-row 
              gap-8 
              h-full 
              items-center
              text-white
              font-bold
            "
          >
            <Link href="">
              <li>A experiência</li>
            </Link>

            <Link href="">
              <li>Mapa de setores</li>
            </Link>

            <Link href="">
              <li>Informações</li>
            </Link>

            <Link href="">
              <li>Ingresso</li>
            </Link>
          </ul>
        </nav>

        <label
          htmlFor="navbar-drawer"
          className="sm:hidden text-white text-3xl"
        >
          <MdMenu />
        </label>
      </div>
    </div>
  )
}
