import { StrapiMedia } from "./common";


export interface FooterResponse {
  data: FooterData;
  meta: Record<string, unknown>;
}

export interface FooterData {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  footer_comp_1: FooterComp1;
  footer_comp_2: FooterComp2;
  footer_comp_3: FooterComp3;
  footer_comp_4: FooterComp4;
}

export interface FooterComp1 {
  id: number;
  footer_desc: string;
  heading: FooterHeading;
  footer_btn: FooterButton;
  footer_logo: StrapiMedia;
}

export interface FooterComp2 {
  id: number;
  heading: FooterHeading;
  footer_menu: FooterMenu[];
}

export interface FooterComp3 {
  id: number;
  heading: FooterHeading;
  footer_menu: FooterMenu[];
}

export interface FooterComp4 {
  id: number;
  heading: FooterHeading;
  heading_2: FooterHeading;
  footer_list_icon: FooterListIcon[];
  footer_social_icons: FooterSocialIcon[];
}

export interface FooterHeading {
  id: number;
  heading: string;
}

export interface FooterButton {
  id: number;
  btn_text: string;
  btn_link: string;
  btn_class: string | null;
}

export interface FooterMenu {
  id: number;
  title: string;
  url: string;
}

export interface FooterListIcon {
  id: number;
  footer_info: string;
  icon: StrapiMedia;
}

export interface FooterSocialIcon {
  id: number;
  footer_url: string;
  footer_icon: StrapiMedia;
}
