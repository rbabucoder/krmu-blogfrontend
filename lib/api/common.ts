import { FETCH_STRAPI_URL } from "@/app/constant";

import { MainMenuResponse, TOPBARResponse } from "../types/HeaderType";
import { HeaderMenuResponse } from "../types/header-menu";
import { GlobalResponse } from "../types/global";

// http://localhost:1337/api/topbar-menu?populate[TopbarMenuItems]=true&populate[topbarsociallinks][populate][socialicon]=true&populate[topbarsociallinks][fields][0]=url

export async function getTopbarData(): Promise<TOPBARResponse["data"]> {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/topbar-menu?populate[TopbarMenuItems]=true&populate[topbarsociallinks][populate][socialicon]=true&populate[topbarsociallinks][fields][0]=url`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  if (!res.ok) throw new Error("Failed to fetch Topbar Data");

  const json: TOPBARResponse = await res.json();
  return json.data;
}

export async function getMainMenu() {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/main-menu?populate[MainMenuItems][on][menu.dropdown-menu][fields][0]=title&populate[MainMenuItems][on][menu.dropdown-menu][populate][menu_sections][populate]=*&populate[MainMenuItems][on][menu.dropdown-menu][populate][menuimg][populate]=*&populate[MainMenuItems][on][menu.menu-button][populate]=*&populate[MainMenuItems][on][menu.menu-links][populate]=*`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  if (!res.ok) throw new Error("Failed to fetch Topbar Data");

  const json: MainMenuResponse = await res.json();
  return json.data;
}

export async function getHeaderMenu(): Promise<HeaderMenuResponse["data"]> {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/header-menu-temp?populate[headermenus][on][temp-menus.academic-menu][fields][0]=title&populate[headermenus][on][temp-menus.academic-menu][populate][backgroundimage][populate]=*&populate[headermenus][on][temp-menus.academic-menu][populate][academicmenu][populate]=*&populate[headermenus][on][temp-menus.academic-menu][populate][discovermenu][populate]=*&populate[headermenus][on][temp-menus.academic-menu][populate][acadcounter][populate]=*&populate[headermenus][on][menu.menu-links][populate]=*&populate[headermenus][on][menu.menu-button][populate]=*&populate[headermenus][on][temp-menus.admissions][fields][0]=title&populate[headermenus][on][temp-menus.admissions][fields][1]=backgroundimagetext&populate[headermenus][on][temp-menus.admissions][populate][backgroundimage][populate]=*&populate[headermenus][on][temp-menus.admissions][populate][enrollnow][populate]=*&populate[headermenus][on][temp-menus.admissions][populate][scholarships][populate]=*&populate[headermenus][on][temp-menus.admissions][populate][visitus][populate]=*&populate[headermenus][on][temp-menus.placement-menu][fields][0]=title&populate[headermenus][on][temp-menus.placement-menu][populate][backgroundimage][populate]=*&populate[headermenus][on][temp-menus.placement-menu][populate][placementcounter][populate]=*&populate[headermenus][on][temp-menus.placement-menu][populate][placement][populate]=*&populate[headermenus][on][temp-menus.research-menu][fields][0]=title&populate[headermenus][on][temp-menus.research-menu][populate][backgroundimage][populate]=*&populate[headermenus][on][temp-menus.research-menu][populate][researchcounter][populate]=*&populate[headermenus][on][temp-menus.research-menu][populate][research][populate]=*&populate[headermenus][on][temp-menus.life-at-krmu][fields][0]=title&populate[headermenus][on][temp-menus.life-at-krmu][fields][1]=backgroundimagetext&populate[headermenus][on][temp-menus.life-at-krmu][populate][backgroundimage][populate]=*&populate[headermenus][on][temp-menus.life-at-krmu][populate][lifeatkrmu1][populate]=*&populate[headermenus][on][temp-menus.life-at-krmu][populate][lfeatkrmu2][populate]=*&populate[headermenus][on][temp-menus.about-us-menu][fields][0]=title&populate[headermenus][on][temp-menus.about-us-menu][populate][backgroundimage][populate]=*&populate[headermenus][on][temp-menus.about-us-menu][populate][aboutuscounter][populate]=*&populate[headermenus][on][temp-menus.about-us-menu][populate][overview][populate]=*&populate[headermenus][on][temp-menus.about-us-menu][populate][administration][populate]=*`,
    {
      next: {
        revalidate: 20,
      },
    }
  );
  if (!res.ok) throw new Error("Failed to fetch Topbar Data");

  const json: HeaderMenuResponse = await res.json();
  return json.data;
}

// {
//   populate: {
//     headermenus: {
//       on: {
//         'temp-menus.academic-menu': {
//           fields: ['title'],
//           populate: {
//             backgroundimage: { populate: '*' },
//             academicmenu: { populate: '*' },
//             discovermenu: { populate: '*' },
//             acadcounter: { populate: '*' }
//           }
//         },
//         'menu.menu-links': {
//           populate: '*'
//         },
//         'temp-menus.admissions': {
//           fields: ['title', 'backgroundimagetext'],
//           populate: {
//             backgroundimage: { populate: '*' },
//             enrollnow: { populate: '*' },
//             scholarships: { populate: '*' },
//             visitus: { populate: '*' }
//           }
//         },
//         'temp-menus.placement-menu': {
//           fields: ['title'],
//           populate: {
//             backgroundimage: { populate: '*' },
//             placementcounter: { populate: '*' },
//             placement: { populate: '*' }
//           }
//         },
//         'temp-menus.research-menu' : {
//            fields:['title'],
//            populate: {
//            backgroundimage: {populate: '*'},
//            researchcounter : {
//             populate: '*'
//            },
//            research: {
//            populate: '*'
//            }
//            }
//         },
//         'temp-menus.life-at-krmu' : {
//             fields: ['title', 'backgroundimagetext'],
//             populate: {
//               backgroundimage: { populate: '*' },
//               lifeatkrmu1: {populate: '*'},
//               lfeatkrmu2: {populate: '*'}
//             }
//         },
//         'temp-menus.about-us-menu' : {
//           fields: ['title'],
//           populate: {
//             backgroundimage: { populate: '*' },
//             aboutuscounter : { populate: '*' },
//             overview: { populate: '*' },
//             administration:  { populate: '*' }
//           }
//         }
//       }
//     }
//   }
// }

export async function getMetaInfo(): Promise<GlobalResponse["data"]> {
  const res = await fetch(`${FETCH_STRAPI_URL}/api/global?populate=*`, {
    next: {
      revalidate: 60,
    },
  });
  if (!res.ok) throw new Error("Failed to fetch Meta info Data");

  const json: GlobalResponse = await res.json();
  return json.data;
}

// common seo api function

///////////////////////////////
