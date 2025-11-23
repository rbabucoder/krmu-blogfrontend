import Image from "next/image";

type Props = {
  imgUrl: string;
  AuthName: string;
  AuthDesg: string;
  AuthAbout: string;
};

const AuthorHero = ({ imgUrl, AuthName, AuthDesg, AuthAbout }: Props) => {
  return (
    <>
      <div className="bg-[url(/auth-bg.jpg)] bg-cover bg-no-repeat bg-center pt-[144.188px] pb-[15px] px-[15px] sm:pb-[18px] sm:px-[22px] flex flex-col sm:flex-row text-center sm:text-left gap-5 items-center">
        <div className="w-24 h-24">
          <div className="w-full h-full rounded-full overflow-hidden">
            <Image
              src={imgUrl}
              width={96}
              height={96}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div>
          <div>
            <h3 className="text-base text-white mt-1.5 mb-[5px] font-semibold flex items-center gap-1">
              {AuthName}{" "}
              <Image
                src="/blogs/verified.svg"
                width={19}
                height={18}
                alt="verified icon"
                className="objec-cover"
              />
            </h3>
            <p className="text-white text-sm leading-[21.12px]">{AuthDesg}</p>
          </div>
        </div>
      </div>
      <div className="p-4">
        <strong>About</strong>
        <p className="text-sm leading-[21.12px]">{AuthAbout}</p>
      </div>
    </>
  );
};

export default AuthorHero;
