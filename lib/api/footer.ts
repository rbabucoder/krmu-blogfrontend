import { FETCH_STRAPI_URL } from "@/app/constant";
import { FooterResponse } from "../types/footer";


export async function getFooter(): Promise<FooterResponse["data"]> {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/footer?populate[footer_comp_1][populate][heading][fields][0]=heading&populate[footer_comp_1][populate][footer_btn][fields][0]=btn_text&populate[footer_comp_1][populate][footer_btn][fields][1]=btn_link&populate[footer_comp_1][populate][footer_btn][fields][2]=btn_class&populate[footer_comp_1][populate][footer_logo][fields][0]=url&populate[footer_comp_1][populate][footer_logo][fields][1]=alternativeText&populate[footer_comp_2][populate][heading][fields][0]=heading&populate[footer_comp_2][populate][footer_menu][fields][0]=title&populate[footer_comp_2][populate][footer_menu][fields][1]=url&populate[footer_comp_3][populate][heading][fields][0]=heading&populate[footer_comp_3][populate][footer_menu][fields][0]=title&populate[footer_comp_3][populate][footer_menu][fields][1]=url&populate[footer_comp_4][populate][heading][fields][0]=heading&populate[footer_comp_4][populate][heading_2][fields][0]=heading&populate[footer_comp_4][populate][footer_list_icon][populate][icon][fields][0]=url&populate[footer_comp_4][populate][footer_list_icon][populate][icon][fields][1]=alternativeText&populate[footer_comp_4][populate][footer_social_icons][populate][footer_icon][fields][0]=url&populate[footer_comp_4][populate][footer_social_icons][populate][footer_icon][fields][1]=alternativeText`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  const json: FooterResponse = await res.json();
  return json.data;
}

// {

// populate: {
//    footer_comp_1: {
//      populate: {
//         heading: {
//           fields: ['heading']
//         },
//         footer_btn: {
//            fields: ['btn_text', 'btn_link', 'btn_class']
//         },
//         footer_logo: {
//           fields: ['url', 'alternativeText']
//         }
//      }
//    },
//    footer_comp_2: {
//      populate: {
//       heading: {
//        fields: ['heading']
//       },
//       footer_menu: {
//         fields: ['title', 'url']
//       }
//      }
//    },

//     footer_comp_3: {
//      populate: {
//       heading: {
//        fields: ['heading']
//       },
//       footer_menu: {
//         fields: ['title', 'url']
//       }
//      }
//    },
//    footer_comp_4: {
//      populate: {
//        heading: {
//        fields: ['heading']
//       },
//       heading_2: {
//        fields: ['heading']
//       },
//       footer_list_icon:{
//        populate:{
//          icon: {
//          fields: ['url', 'alternativeText']
//          }
//        }

//       },
//       footer_social_icons : {
//         populate: {
//         footer_icon: {
//           fields: ['url', 'alternativeText']
//         }
//         }
//       }
//      }
//    }
// }

// }
