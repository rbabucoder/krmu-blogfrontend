"use client";
import { useEffect, useState } from "react";

import Topbar from "./Topbar";

import MobileHeader from "./MobileHeader";
import { TOPBARITEMS, TOPBARSOCIALLInks } from "@/lib/types/HeaderType";
import { HeaderMenus } from "@/lib/types/header-menu";
import Navbar from "../Navbar/Navbar";


type TOPBARPROPS = {
  topbarmenu: TOPBARITEMS[];
  topbarsociallinks: TOPBARSOCIALLInks[];
  headerMenus: HeaderMenus[];
};

const Header = ({
  topbarmenu,
  topbarsociallinks,
  headerMenus,
}: TOPBARPROPS) => {
  const [showTopbar, setShowTopbar] = useState(false);
  const [showMobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    setMobileMenu(false);
    const handler = () => {
      if (window.scrollY >= 150) setShowTopbar(true);
      if (window.scrollY < 150) setShowTopbar(false);
    };
    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  const handleMobileMenu = () => {
    setMobileMenu((prev) => !prev);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-20">
        <div
          className="px-2.5 xl:px-4"
          style={{
            background: showTopbar
              ? "#051730" // when scrolled down
              : "rgba(137, 137, 137, 0.7)", // default
          }}
        >
          {showTopbar ? (
            ""
          ) : (
            <Topbar topbarmenu={topbarmenu} sociallinks={topbarsociallinks} />
          )}
          <Navbar
            handleMobileMenu={handleMobileMenu}
            showMobilebar={showMobileMenu}
            navbarData={headerMenus}
          />
        </div>
        {showMobileMenu && (
          <MobileHeader topbarmenu={topbarmenu} navbarData={headerMenus} />
        )}
      </header>
    </>
  );
};

export default Header;
