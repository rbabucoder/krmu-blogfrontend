import { STRAPI_URL } from "@/app/constant";
import { TOPBARSOCIALLInks } from "@/lib/types/HeaderType";
import Image from "next/image";
import Link from "next/link";

type SOCIALLINKSPROPS = {
  sociallinks: TOPBARSOCIALLInks[];
};

const SocialIcons = ({ sociallinks }: SOCIALLINKSPROPS) => {
  return (
    <>
      <ul className="flex gap-3.5 justify-center">
        {sociallinks &&
          sociallinks.map((sociallink) => {
            return (
              <li key={sociallink.id}>
                <Link href={sociallink.url}>
                  <Image
                    src={`${STRAPI_URL}${sociallink?.socialicon?.url}`}
                    width={14}
                    height={16}
                    alt={
                      sociallink?.socialicon?.alternativeText ||
                      "topbarsocial links"
                    }
                    className="w-[14px] h-[16px]"
                  />
                </Link>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default SocialIcons;
