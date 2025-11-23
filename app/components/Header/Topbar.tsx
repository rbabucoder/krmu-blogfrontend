import React from "react";
import TopbarMenu from "../Navbar/TopbarMenu";
import SocialIcons from "./SocialIcons";
import { TOPBARITEMS, TOPBARSOCIALLInks } from "@/lib/types/HeaderType";

type TopbarProps = {
  topbarmenu: TOPBARITEMS[];
  sociallinks: TOPBARSOCIALLInks[];
};

const Topbar = ({ topbarmenu, sociallinks }: TopbarProps) => {
  return (
    <>
      <div
        className="max-w-[1850px] mx-auto w-full py-1.5 flex items-center justify-center lg:justify-end gap-4"
        style={{ borderBottom: "1px solid rgba(156,156,156,.41)" }}
      >
        <div className="hidden md:block">
          <TopbarMenu topbarmenu={topbarmenu} />
        </div>
        <SocialIcons sociallinks={sociallinks} />
      </div>
    </>
  );
};

export default Topbar;
