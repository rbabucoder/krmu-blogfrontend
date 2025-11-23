import { StrapiMedia } from "./common";


export type TOPBARITEMS =
  | {
      __component: "menu.menu-button";
      id: number;
      title: string;
      url: string;
      class: string;
      type: string;
    }
  | {
      __component: "menu.menu-links";
      id: number;
      title: string;
      url: string;
      menuclass: string;
    };

export interface TOPBARSOCIALLInks {
  id: string;
  url: string;
  socialicon: StrapiMedia;
}

export interface TOPBARResponse {
  data: {
    id: number;
    documentId: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    TopbarMenuItems: TOPBARITEMS[];
    topbarsociallinks: TOPBARSOCIALLInks[];
  };
}
// Main Menu Types
// Media Object Type (for images)
// type StrapiMedia = {
//   id: number;
//   documentId: string;
//   name: string;
//   alternativeText: string | null;
//   caption: string | null;
//   width: number;
//   height: number;
//   formats: {
//     thumbnail: {
//       name: string;
//       hash: string;
//       ext: string;
//       mime: string;
//       path: string | null;
//       width: number;
//       height: number;
//       size: number;
//       sizeInBytes: number;
//       url: string;
//     };
//     small: {
//       name: string;
//       hash: string;
//       ext: string;
//       mime: string;
//       path: string | null;
//       width: number;
//       height: number;
//       size: number;
//       sizeInBytes: number;
//       url: string;
//     };
//     medium: {
//       name: string;
//       hash: string;
//       ext: string;
//       mime: string;
//       path: string | null;
//       width: number;
//       height: number;
//       size: number;
//       sizeInBytes: number;
//       url: string;
//     };
//   };
//   hash: string;
//   ext: string;
//   mime: string;
//   size: number;
//   url: string;
//   previewUrl: string | null;
//   provider: string;
//   provider_metadata: any;
//   createdAt: string;
//   updatedAt: string;
//   publishedAt: string;
// };

// Types for Counters
type MenuCounter = {
  id: number;
  countertext: string;
  countercontent: string;
};

// Menu Button Type
type MenuButton = {
  __component: "menu.menu-button";
  id: number;
  title: string;
  url: string | null;
  class: string;
  type: string;
};

// Menu Link Type
type MenuLink = {
  __component: "menu.menu-links";
  id: number;
  title: string;
  menuclass: string;
  url: string | null;
};

// Main Menu Link Type (used inside sections)
export type MainMenuLinks = {
  id: number;
  title: string;
  menuclass: string;
  url: string | null;
};

// Menu Section Type
export type MenuSection = {
  id: number;
  documentId: string;
  heading: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  mainmenulinks: MainMenuLinks[];
};

// Menu Image Type
type MenuImage = {
  id: number;
  menuimg: StrapiMedia;
  counter: MenuCounter[];
};

// Dropdown Menu Link Type
type DropDownMenuLink = {
  __component: "menu.dropdown-menu";
  id: number;
  title: string;
  menu_sections: MenuSection[];
  menuimg: MenuImage;
};

// Main Menu Item Type
export type MainMenuItem = MenuButton | MenuLink | DropDownMenuLink;

// Response Type for Main Menu
export type MainMenuResponse = {
  data: {
    id: number;
    documentId: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    MainMenuItems: MainMenuItem[];
  };
};
