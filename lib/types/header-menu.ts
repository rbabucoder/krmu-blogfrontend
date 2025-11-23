import { StrapiMedia } from "./common";

export interface MenuLink {
  id: number;
  title: string;
  menuclass: string | null;
  url: string;
}

export interface MenuGroup {
  id: number;
  heading: string;
  menulinks: MenuLink[];
}

export interface HeaderMenuCounter {
  id: number;
  countertext: string;
  countercontent: string;
}

/**
 * Academic style menu
 */
export interface AcademicMenu {
  __component: "temp-menus.academic-menu";
  id: number;
  title: string;
  backgroundimage: StrapiMedia;
  academicmenu: MenuGroup;
  discovermenu: MenuGroup;
  acadcounter: HeaderMenuCounter[];
}

/**
 * Simple link style menu
 */
export interface SimpleMenuLink {
  __component: "menu.menu-links";
  id: number;
  title: string;
  menuclass: string | null;
  url: string;
}
export interface SimpleMenuButton {
  __component: "menu.menu-button";
  id: number;
  title: string;
  url: string;
  class: string;
  type: string;
}

export interface AdmissionMenu {
  __component: "temp-menus.admissions";
  id: number;
  title: string;
  backgroundimage: StrapiMedia;
  backgroundimagetext: string;
  enrollnow: MenuGroup;
  scholarships: MenuGroup;
  visitus: MenuGroup;
}

export interface PlacementMenu {
  __component: "temp-menus.placement-menu";
  id: number;
  title: string;
  backgroundimage: StrapiMedia;
  placementcounter: HeaderMenuCounter[];
  placement: MenuGroup;
}

export interface ResearchMenu {
  __component: "temp-menus.research-menu";
  id: number;
  title: string;
  backgroundimage: StrapiMedia;
  researchcounter: HeaderMenuCounter[];
  research: MenuGroup;
}

export interface LifeAtKRMUMenu {
  __component: "temp-menus.life-at-krmu";
  id: number;
  title: string;
  backgroundimage: StrapiMedia;
  backgroundimagetext: string;
  lifeatkrmu1: MenuGroup;
  lfeatkrmu2: MenuGroup;
}

export interface AboutUsMenu {
  __component: "temp-menus.about-us-menu";
  id: number;
  title: string;
  backgroundimage: StrapiMedia;
  aboutuscounter: HeaderMenuCounter[];
  overview: MenuGroup;
  administration: MenuGroup;
}

/**
 * Union of all possible header menu types
 */

export type HeaderMenus =
  | AcademicMenu
  | SimpleMenuLink
  | AdmissionMenu
  | PlacementMenu
  | ResearchMenu
  | LifeAtKRMUMenu
  | AboutUsMenu
  | SimpleMenuButton;

export interface HeaderMenuResponse {
  data: {
    id: number;
    documentId: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    headermenus: HeaderMenus[];
  };
}
