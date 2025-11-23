import { TOPBARITEMS } from "@/lib/types/HeaderType";
import Link from "next/link";
import React from "react";

type TopbarProps = {
  topbarmenu: TOPBARITEMS[];
};

const TopbarMenu = ({ topbarmenu }: TopbarProps) => {
  return (
    <ul className="flex gap-2.5">
      {topbarmenu?.map((item) => {
        if (item.__component === "menu.menu-button") {
          return (
            <li key={item.id}>
              {item.url ? (
                <Link
                  href={item.url}
                  className={`font-semibold text-white text-xs primary ${item.class}`}
                >
                  {item.title}
                </Link>
              ) : (
                <span className={`font-semibold text-white text-xs primary ${item.class}`}>
                  {item.title}
                </span>
              )}
            </li>
          );
        }

        if (item.__component === "menu.menu-links") {
          return (
            <li key={item.id}>
              {(item.url) ? (
                <Link
                  href={item.url}
                  className={`font-semibold text-white text-xs ${item.menuclass}`}
                >
                  {item.title}
                </Link>
              ) : (
                <span className={`font-semibold text-white text-xs ${item.menuclass}`}>
                  {item.title}
                </span>
              )}
            </li>
          );
        }

        return null;
      })}
    </ul>
  );
};

export default TopbarMenu;
