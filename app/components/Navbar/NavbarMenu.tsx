import { STRAPI_URL } from "@/app/constant";
import { HeaderMenus } from "@/lib/types/header-menu";
import Image from "next/image";
import Link from "next/link";

type Props = {
  mainMenu: HeaderMenus[];
};

const NavbarMenu = ({ mainMenu }: Props) => {
  const academicMenu = mainMenu.find(
    (component) => component.__component === "temp-menus.academic-menu"
  );

  const programmesLinks = mainMenu.find(
    (component) => component.title === "Programmes"
  );
  const careersLinks = mainMenu.find(
    (component) => component.title === "Careers"
  );
  const applyNowButton = mainMenu.find(
    (component) => component.__component === "menu.menu-button"
  );

  const admissionMenu = mainMenu.find(
    (component) => component.__component === "temp-menus.admissions"
  );

  const placementMenu = mainMenu.find(
    (component) => component.__component === "temp-menus.placement-menu"
  );
  const researchMenu = mainMenu.find(
    (component) => component.__component === "temp-menus.research-menu"
  );

  const lifeatkrmuMenu = mainMenu.find(
    (component) => component.__component === "temp-menus.life-at-krmu"
  );

  const aboutusMenu = mainMenu.find(
    (component) => component.__component === "temp-menus.about-us-menu"
  );

  return (
    <>
      <div className="hidden xl:block">
        <ul className="flex items-center gap-2.5">
          {academicMenu && (
            <li className="relative krm-sub-menu-has-children">
              <Link
                className="font-semibold text-xs xl:text-[15px] text-white flex items-center gap-2.5 min-h-[64px]"
                href="/"
              >
                <span>{academicMenu?.title}</span>
                <Image
                  alt="white chevron"
                  width={11}
                  height={11}
                  src="/white-down-chevron.svg"
                />
              </Link>
              <div className="absolute flex right-0 translate-x-[50%] min-w-[1000px] w-full krmsubmenu-container krmsubmenu-1">
                <div className="rounded-l-sm bg-white w-3/5 pt-[30px] px-[30px] pb-[15px] flex">
                  <div className="pr-[30px] border-r border-[#d9dada]">
                    <h5 className="text-lg text-[#051630] my-2.5 font-semibold">
                      {academicMenu?.academicmenu?.heading}
                    </h5>
                    <ul>
                      {academicMenu?.academicmenu?.menulinks.map((menu) => {
                        return (
                          <li
                            key={menu?.id}
                            className={`text-[13px] capitalize pb-[7px] hover:text-blue-700 ${
                              menu?.menuclass || ""
                            }`}
                          >
                            <Link href={`${menu?.url || "#"}`}>
                              {menu?.title}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="ml-[15px] px-[30px]">
                    <h5 className="text-lg text-[#051630] my-2.5 font-semibold">
                      {academicMenu?.discovermenu?.heading}
                    </h5>
                    <ul>
                      {academicMenu?.discovermenu?.menulinks.map((menu) => {
                        return (
                          <li
                            key={menu?.id}
                            className={`text-[13px] capitalize pb-[7px] hover:text-blue-700 ${menu?.menuclass}`}
                          >
                            <Link href={`${menu?.url || "#"}`}>
                              {menu?.title}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
                <div
                  className="w-2/5 px-[30px] bg-cover bg-center bg-no-repeat relative krmsubmenu-img-container flex items-end rounded-r-[10px]
               overflow-hidden"
                  style={{
                    backgroundImage: `url(${STRAPI_URL}${academicMenu?.backgroundimage?.url})`,
                  }}
                >
                  <div className="flex flex-col z-10 text-white w-full">
                    {academicMenu?.acadcounter?.map((counter) => {
                      return (
                        <span
                          key={counter?.id}
                          className="text-center p-5 inline-flex gap-2.5 items-center justify-center font-semibold leading-[1] z-40"
                        >
                          <span className="text-[40px]">
                            {counter?.countertext}
                          </span>
                          <span className="text-2xl">
                            {counter?.countercontent}
                          </span>
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </li>
          )}

          {programmesLinks &&
            programmesLinks.__component === "menu.menu-links" && (
              <li className="relative">
                <Link
                  className={`font-semibold text-xs xl:text-[15px] text-white flex items-center gap-2.5 min-h-[64px] ${
                    programmesLinks?.menuclass || ""
                  }`}
                  href={programmesLinks.url}
                >
                  <span>{programmesLinks.title}</span>
                </Link>
              </li>
            )}

          {admissionMenu && (
            <li className="relative krm-sub-menu-has-children">
              <Link
                className="font-semibold text-xs xl:text-[15px] text-white flex items-center gap-2.5 min-h-[64px]"
                href={admissionMenu?.backgroundimage?.url}
              >
                <span>{admissionMenu?.title}</span>
                <Image
                  alt="white chevron"
                  width={11}
                  height={11}
                  src="/white-down-chevron.svg"
                />
              </Link>
              <div className="absolute flex right-0 translate-x-[50%] min-w-[1000px] w-full krmsubmenu-container krmsubmenu-2">
                <div className="rounded-l-sm bg-white w-3/5 pt-[30px] px-[30px] pb-[15px] flex">
                  <div className="pr-[30px] border-r border-[#d9dada]">
                    <h5 className="text-lg text-[#051630] my-2.5 font-semibold">
                      {admissionMenu?.enrollnow?.heading}
                    </h5>
                    <ul className="mb-5">
                      {admissionMenu?.enrollnow?.menulinks.map((menu) => {
                        return (
                          <li
                            key={menu?.id}
                            className="text-[13px] capitalize pb-[7px] hover:text-blue-700"
                          >
                            <Link href={menu?.url || "#"}>{menu?.title}</Link>
                          </li>
                        );
                      })}
                    </ul>
                    <h5 className="text-lg text-[#051630] my-2.5 font-semibold">
                      {admissionMenu?.scholarships?.heading}
                    </h5>
                    <ul className="mb-5">
                      {admissionMenu?.scholarships?.menulinks.map((menu) => {
                        return (
                          <li
                            key={menu?.id}
                            className="text-[13px] capitalize pb-[7px] hover:text-blue-700"
                          >
                            <Link href={menu?.url || "#"}>{menu?.title}</Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="ml-[15px] px-[30px]">
                    <h5 className="text-lg text-[#051630] my-2.5 font-semibold">
                      {admissionMenu?.visitus?.heading}
                    </h5>
                    <ul>
                      {admissionMenu?.visitus?.menulinks.map((menu) => {
                        return (
                          <li
                            key={menu?.id}
                            className={`text-[13px] capitalize pb-[7px] hover:text-blue-700 ${
                              menu?.menuclass || ""
                            }`}
                          >
                            <Link href={menu?.url || "#"}>{menu?.title}</Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
                <div
                  className="w-2/5 px-[30px]  bg-cover bg-center bg-no-repeat relative krmsubmenu-img-container flex items-end rounded-r-[10px] overflow-hidden"
                  style={{
                    backgroundImage: `url(${STRAPI_URL}${admissionMenu?.backgroundimage?.url})`,
                  }}
                >
                  <div className="text-center text-white z-50 font-semibold text-lg my-8">
                    <p>{admissionMenu?.backgroundimagetext}</p>
                  </div>
                </div>
              </div>
            </li>
          )}
          {placementMenu && (
            <li className="relative krm-sub-menu-has-children">
              <Link
                className="font-semibold text-xs xl:text-[15px] text-white flex items-center gap-2.5 min-h-[64px]"
                href="/"
              >
                <span>{placementMenu?.title}</span>
                <Image
                  alt="white chevron"
                  width={11}
                  height={11}
                  src="/white-down-chevron.svg"
                />
              </Link>
              <div className="absolute flex right-0 translate-x-[50%] min-w-[1000px] w-full krmsubmenu-container krmsubmenu-2">
                <div className="rounded-l-sm bg-white w-1/2 pt-[30px] px-[30px] pb-[15px] flex">
                  <div className="pr-[30px]">
                    <h5 className="text-lg text-[#051630] my-2.5 font-semibold">
                      {placementMenu?.placement?.heading}
                    </h5>
                    <ul className="mb-5">
                      {placementMenu?.placement?.menulinks.map((menu) => {
                        return (
                          <li
                            key={menu?.id}
                            className="text-[13px] capitalize pb-[7px] hover:text-blue-700"
                          >
                            <Link href={menu?.url || "#"}>{menu?.title}</Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
                <div
                  className="w-1/2 px-[30px] bg-cover bg-center bg-no-repeat relative krmsubmenu-img-container flex items-end rounded-r-[10px]
               overflow-hidden"
                  style={{
                    backgroundImage: `url(${STRAPI_URL}${placementMenu?.backgroundimage?.url})`,
                  }}
                >
                  <div className="w-full z-50 flex justify-around items-center">
                    {placementMenu?.placementcounter.map((counter) => {
                      return (
                        <span
                          key={counter?.id}
                          className="text-white flex flex-col text-center mb-5"
                        >
                          <span className="text-[30px] font-semibold">
                            {counter?.countertext}
                          </span>
                          <span className="">{counter?.countercontent}</span>
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </li>
          )}
          {researchMenu && (
            <li className="relative krm-sub-menu-has-children">
              <Link
                className="font-semibold text-xs xl:text-[15px] text-white flex items-center gap-2.5 min-h-[64px]"
                href="/"
              >
                <span>{researchMenu?.title}</span>
                <Image
                  alt="white chevron"
                  width={11}
                  height={11}
                  src="/white-down-chevron.svg"
                />
              </Link>
              <div className="absolute flex right-0 translate-x-[20%] min-w-[1000px] w-full krmsubmenu-container krmsubmenu-2">
                <div className="w-1/2 px-[30px] bg-[url(/menu-4.webp)] bg-cover bg-center bg-no-repeat relative krmsubmenu-img-container flex items-end rounded-l-[10px] overflow-hidden">
                  <div className="grid grid-cols-2 w-full z-50">
                    {researchMenu?.researchcounter?.map((counter) => {
                      return (
                        <span
                          key={counter?.id}
                          className="p-5 text-base font-medium flex flex-col text-center mb-5 text-white"
                        >
                          <span className="text-[30px] font-semibold">
                            {counter?.countertext}
                          </span>
                          <span>{counter?.countercontent}</span>
                        </span>
                      );
                    })}
                  </div>
                </div>
                <div className="rounded-r-[10px] bg-white w-1/2 pt-[30px] px-[30px] pb-[15px] flex justify-center items-center">
                  <div className="pr-[30px] min-h-[]">
                    <h5 className="text-lg text-[#051630] my-2.5 font-semibold">
                      {researchMenu?.research?.heading}
                    </h5>
                    <ul className="mb-5">
                      {researchMenu?.research?.menulinks.map((menu) => {
                        return (
                          <li
                            key={menu?.id}
                            className={`text-[13px] capitalize pb-[7px] hover:text-blue-700 ${menu.menuclass}`}
                          >
                            <Link href={menu?.url || "#"}>{menu?.title}</Link>
                          </li>
                        );
                      })}

                      {/* <li className="text-[13px] capitalize pb-[7px] hover:text-blue-700 relative">
                        <Link href="">Ph.D. programmes</Link>
                        <span className="absolute -right-6 left-auto -top-0.5 blink-effect">
                          <Link
                            href="https://krmangalam.edu.in/pdfs/1r-ph-d-admission-advertisement-details-e-2025-26.pdf"
                            className="submenu_submenu_link"
                            target="_blank"
                            download
                          >
                            Calls For Ph.D. Admission
                          </Link>
                        </span>
                      </li>
                      <li className="text-[13px] capitalize pb-[7px] hover:text-blue-700">
                        <Link href="">Research And Innovation</Link>
                      </li>
                      <li className="text-[13px] capitalize pb-[7px] hover:text-blue-700">
                        <Link href="">Research Centre</Link>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          )}

          {lifeatkrmuMenu && (
            <li className="relative krm-sub-menu-has-children">
              <Link
                className="font-semibold text-xs xl:text-[15px] text-white flex items-center gap-2.5 min-h-[64px]"
                href="/"
              >
                <span>{lifeatkrmuMenu?.title}</span>
                <Image
                  alt="white chevron"
                  width={11}
                  height={11}
                  src="/white-down-chevron.svg"
                />
              </Link>
              <div className="absolute flex right-0 translate-x-[20%] min-w-[1000px] w-full krmsubmenu-container krmsubmenu-2">
                <div
                  className="w-2/5 px-[30px] bg-[url(/menu-5.webp)] bg-cover bg-center bg-no-repeat relative krmsubmenu-img-container flex items-end rounded-l-[10px] 
                overflow-hidden"
                  style={{
                    backgroundImage: `url(${STRAPI_URL}${lifeatkrmuMenu?.backgroundimage?.url})`,
                  }}
                >
                  <div className="text-center text-white font-semibold text-lg my-[30px] z-50">
                    <p>{lifeatkrmuMenu?.backgroundimagetext}</p>
                  </div>
                </div>
                <div className="rounded-r-[10px] bg-white w-3/5 pt-[30px] px-[30px] pb-[15px] flex">
                  <div className="p-[30px] w-full">
                    <h5 className="text-lg text-[#051630] my-2.5 font-semibold">
                      {lifeatkrmuMenu?.lfeatkrmu2?.heading}
                    </h5>
                    <div className="flex">
                      <div className="w-1/2">
                        <ul className="mb-5">
                          {lifeatkrmuMenu?.lifeatkrmu1?.menulinks.map(
                            (menu) => {
                              return (
                                <li
                                  key={menu?.id}
                                  className={`text-[13px] capitalize pb-[7px] hover:text-blue-700 ${menu.menuclass}`}
                                >
                                  <Link href={menu?.url}>{menu?.title}</Link>
                                </li>
                              );
                            }
                          )}
                        </ul>
                      </div>
                      <div className="w-1/2">
                        <ul className="mb-5">
                          {lifeatkrmuMenu?.lfeatkrmu2?.menulinks.map((menu) => {
                            return (
                              <li
                                key={menu?.id}
                                className={`text-[13px] capitalize pb-[7px] hover:text-blue-700 ${menu.menuclass}`}
                              >
                                <Link href={menu?.url}>{menu?.title}</Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          )}
          {aboutusMenu && (
            <li className="relative krm-sub-menu-has-children">
              <Link
                className="font-semibold text-xs xl:text-[15px] text-white flex items-center gap-2.5 min-h-[64px]"
                href="/"
              >
                <span>{aboutusMenu?.title}</span>
                <Image
                  alt="white chevron"
                  width={11}
                  height={11}
                  src="/white-down-chevron.svg"
                />
              </Link>
              <div className="absolute flex right-0 min-w-[1000px] w-full krmsubmenu-container krmsubmenu-1">
                <div
                  className="w-1/2 px-[30px] bg-[url(/menu-6.webp)] bg-cover bg-center bg-no-repeat relative krmsubmenu-img-container flex items-end rounded-l-[10px] 
                overflow-hidden"
                  style={{
                    backgroundImage: `url(${STRAPI_URL}${aboutusMenu?.backgroundimage?.url})`,
                  }}
                >
                  <div className="flex flex-col justify-center z-50 w-full text-white">
                    {aboutusMenu?.aboutuscounter.map((counter) => {
                      return (
                        <span
                          key={counter?.id}
                          className="inline-flex gap-2.5 items-center justify-center font-semibold relative py-5 text-center"
                        >
                          <span className="text-[40px]">
                            {counter?.countertext}
                          </span>
                          <span className="text-base">
                            {counter?.countercontent}
                          </span>
                        </span>
                      );
                    })}
                  </div>
                </div>
                <div className="rounded-r-sm bg-white w-1/2 p-[30px] flex">
                  <div className="pr-[30px] border-r border-[#d9dada]">
                    <h5 className="text-lg text-[#051630] my-2.5 font-semibold">
                      {aboutusMenu?.overview?.heading}
                    </h5>
                    <ul>
                      {aboutusMenu?.overview?.menulinks.map((menu) => {
                        return (
                          <li
                            key={menu?.id}
                            className={`text-[13px] capitalize pb-[7px] hover:text-blue-700 ${menu.menuclass}`}
                          >
                            <Link href={menu?.url}>{menu?.title}</Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="ml-[15px] px-[30px]">
                    <h5 className="text-lg text-[#051630] my-2.5 font-semibold">
                      {aboutusMenu?.administration?.heading}
                    </h5>
                    <ul>
                      {aboutusMenu?.administration?.menulinks.map((menu) => {
                        return (
                          <li
                            key={menu?.id}
                            className={`text-[13px] capitalize pb-[7px] hover:text-blue-700 ${menu.menuclass}`}
                          >
                            <Link href={menu?.url}>{menu?.title}</Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          )}

          {careersLinks && careersLinks.__component === "menu.menu-links" && (
            <li className="relative">
              <Link
                className={`font-semibold text-xs xl:text-[15px] text-white flex items-center gap-2.5 min-h-[64px] ${careersLinks?.menuclass}`}
                href={careersLinks.url}
              >
                <span>{careersLinks.title}</span>
              </Link>
            </li>
          )}

          {applyNowButton &&
            applyNowButton.__component === "menu.menu-button" && (
              <li>
                <Link
                  href={applyNowButton?.url || "#"}
                  className={`bg-[#cb000d] py-2 px-[22px]  text-xs font-semibold text-white rounded-[5px] ${
                    applyNowButton?.class || ""
                  }`}
                >
                  {applyNowButton?.title}
                </Link>
              </li>
            )}
        </ul>
      </div>
      {applyNowButton && applyNowButton.__component === "menu.menu-button" && (
        <Link
          href={applyNowButton?.url || "#"}
          className={`bg-[#cb000d] py-2 px-[22px] inline-block text-xs font-semibold text-white rounded-[5px] xl:hidden ${
            applyNowButton?.class || ""
          }`}
        >
          {applyNowButton?.title}
        </Link>
      )}
    </>
  );
};

export default NavbarMenu;
