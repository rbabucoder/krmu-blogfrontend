import Image from "next/image";
import NavbarMenu from "./NavbarMenu";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { X } from "lucide-react";
import { HeaderMenus } from "@/lib/types/header-menu";

type Props = {
  navbarData: HeaderMenus[];
  handleMobileMenu: () => void; // toggle function
  showMobilebar: boolean; // whether mobile menu is open
};

const Navbar = ({ navbarData, handleMobileMenu, showMobilebar }: Props) => {
  return (
    <>
      <div className="max-w-[1900px] mx-auto w-full flex py-1.5 gap-2">
        <div className="w-2/4 md:w-1/5 flex items-center justify-center">
          <Link href="/">
            <Image
              src="/KRMU-logo-univ.png"
              width={320}
              height={60}
              alt="Website Logo"
            />
          </Link>
        </div>
        <div className="w-2/4 md:w-4/5 flex items-center justify-end gap-2">
          <NavbarMenu mainMenu={navbarData} />
         
          {!showMobilebar ? (
            <GiHamburgerMenu
              onClick={handleMobileMenu}
              className="xl:hidden text-white text-3xl"
            />
          ) : (
            <X
              onClick={handleMobileMenu}
              className="xl:hidden text-white text-3xl"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
