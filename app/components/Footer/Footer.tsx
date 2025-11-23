import { STRAPI_URL } from "@/app/constant";
import { getFooter } from "@/lib/api/footer";
import { getPageAssets } from "@/lib/api/global-setting";

import Image from "next/image";
import Link from "next/link";

const Footer = async () => {
  const footerData = await getFooter();
  const footerAssets = await getPageAssets();

  const { js_in_footer } = footerAssets;

  const footerComp1 = footerData?.footer_comp_1;
  const footerComp2 = footerData?.footer_comp_2;
  const footerComp3 = footerData?.footer_comp_3;
  const footerComp4 = footerData?.footer_comp_4;

  return (
    <>
      <section className="px-5 py-12 xl:p-[50px] bg-[#051630]">
        <div className="grid grid-cols-1 md:grid-cols-2  xl:flex">
          <div className="w-full  xl:w-1/4 xl:mx-7">
            {footerComp1 && (
              <div>
                <h6 className="text-2xl font-bold pb-5 border-b border-white w-1/2 text-white mt-2.5 mb-[15px]">
                  {footerComp1?.heading?.heading}
                </h6>
                <Image
                  src={`${STRAPI_URL}${footerComp1?.footer_logo?.url}`}
                  alt={footerComp1?.footer_logo?.alternativeText || ""}
                  width={180}
                  height={180}
                />
                <p className="text-white my-4 font-light">
                  {footerComp1?.footer_desc}
                </p>
                {footerComp1?.footer_btn?.btn_link && (
                  <Link
                    href={footerComp1?.footer_btn?.btn_link || "#"}
                    className={`text-white bg-[#cb000d] py-[5px] px-5 hover:bg-[#034272] rounded font-semibold ${
                      footerComp1?.footer_btn?.btn_class || ""
                    }`}
                  >
                    {footerComp1?.footer_btn?.btn_text || ""}
                  </Link>
                )}
              </div>
            )}
          </div>
          <div className="w-full  xl:w-1/4 break-all">
            <div className="xl:mx-7 break-all">
              {footerComp2 && (
                <>
                  <h6 className="text-2xl font-bold pb-5 border-b border-white w-1/2 text-white mt-5 md:mt-2.5 mb-[15px]">
                    {footerComp2?.heading?.heading}
                  </h6>
                  <ul className="text-white mb-5">
                    {footerComp2?.footer_menu?.map((comp2) => {
                      return (
                        <li
                          key={comp2?.id}
                          className="border-b border-[rgba(254,254,254,.27)] pb-1.5"
                        >
                          <Link
                            href={comp2?.url || "#"}
                            className="leading-[27.2px] text-base flex items-baseline justify-between"
                          >
                            {comp2?.title}
                            <Image
                              src="/white-arrow.svg"
                              width={19}
                              height={27}
                              alt="White arrow"
                            />
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </>
              )}
            </div>
          </div>
          <div className="w-full  xl:w-1/4">
            <div className="xl:mx-7">
              {footerComp3 && (
                <>
                  <h6 className="text-2xl font-bold pb-5 border-b border-white w-1/2 text-white mt-2.5 mb-[15px]">
                    {footerComp3?.heading?.heading}
                  </h6>
                  <ul className="text-white mb-5">
                    {footerComp3?.footer_menu?.map((comp3) => {
                      return (
                        <li
                          key={comp3?.id}
                          className="border-b border-[rgba(254,254,254,.27)] pb-1.5"
                        >
                          <Link
                            href={comp3?.url || "#"}
                            className="leading-[27.2px] text-base flex items-baseline justify-between"
                          >
                            {comp3?.title}
                            <Image
                              src="/white-arrow.svg"
                              width={19}
                              height={27}
                              alt="White arrow"
                            />
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </>
              )}
            </div>
          </div>
          <div className="w-full  xl:w-1/4">
            <div className="xl:mx-7 break-all">
              {footerComp4 && (
                <>
                  <h6 className="text-2xl font-bold pb-5 w-1/2 border-b border-white  text-white mt-2.5 mb-[15px]">
                    {footerComp4?.heading?.heading}
                  </h6>
                  <ul className="text-white">
                    {footerComp4?.footer_list_icon?.map((comp4) => {
                      return (
                        <li key={comp4?.id} className="flex gap-3 mb-2.5">
                          <Image
                            src={`${STRAPI_URL}${comp4?.icon?.url}`}
                            alt="Location"
                            width={20}
                            height={20}
                          />{" "}
                          <span className="text-white">
                            <div
                              dangerouslySetInnerHTML={{
                                __html: comp4?.footer_info,
                              }}
                            />
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                  <h6 className="text-2xl font-bold pb-5 border-b border-white w-1/2 text-white mt-2.5 mb-[15px]">
                    {footerComp4?.heading_2?.heading}
                  </h6>
                  <div className="flex">
                    {footerComp4?.footer_social_icons?.map((comp4) => {
                      return (
                        <Link
                          key={comp4?.id}
                          href={comp4?.footer_url || "#"}
                          className="w-[34px] h-[34px] p-2 bg-white flex items-center justify-center rounded-full m-1.5"
                        >
                          <Image
                            src={`${STRAPI_URL}${comp4?.footer_icon?.url}`}
                            width={40}
                            height={40}
                            alt={comp4?.footer_icon?.alternativeText || ""}
                          />
                        </Link>
                      );
                    })}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
      {js_in_footer && (
        <script dangerouslySetInnerHTML={{ __html: js_in_footer }} />
      )}
    </>
  );
};

export default Footer;
