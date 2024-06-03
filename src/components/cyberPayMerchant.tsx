import Header from "./header";
import Footer from "./footer";
// import { ReactComponent as CyberPayMerchantBg } from "../assets/svg/cyberpay-merchant-1.svg";
// import { ReactComponent as CyberPayMerchant1 } from "../assets/svg/cyberpay-merchant-2.svg";
// import { ReactComponent as CyberPayMerchant2 } from "../assets/svg/cyberpay-merchant-3.svg";
// import { ReactComponent as CyberPayMerchant3 } from "../assets/svg/cyberpay-merchant-4.svg";
// import { ReactComponent as CyberPayMerchant4 } from "../assets/svg/cyberpay-merchant-5.svg";
import { ReactComponent as CyberPayMerchantBg } from "../assets/svg/cyberpay-merchant-1-compressed.svg";
import { ReactComponent as CyberPayMerchant1 } from "../assets/svg/cyberpay-merchant-2-compressed.svg";
import { ReactComponent as CyberPayMerchant2 } from "../assets/svg/cyberpay-merchant-3-compressed.svg";
import { ReactComponent as CyberPayMerchant3 } from "../assets/svg/cyberpay-merchant-4-compressed.svg";
import { ReactComponent as CyberPayMerchant4 } from "../assets/svg/cyberpay-merchant-5-compressed.svg";
import { Link } from "react-router-dom";
import CustomSwiper from "../custom/swiper/main";
import { useEffect } from "react";

const CyberPayMerchant = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component mounts
  }, []);
  return (
    <section className="bg-black">
      <Header color="black" />
      <main className="bg-black">
        <section className="pt-28">
          <div className="flex flex-col gap-10 text-center">
            <h1 className="white-big-text ">
              Payment Gateway <br /> for Merchants{" "}
            </h1>
            <p className="text-[#C2C8CB] text-sm font-medium">DESIGNING FOR CYBERPAY(NDA)</p>
          </div>

          <CyberPayMerchantBg
            className="w-full px-[30px] py-0 my-0 h-full object-cover mt-16 mb-6 rounded-sm"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          />
        </section>

        <section className="screen300">
          <p className="text-[#C2C8CB] text-base">
            {" "}
            Creating the admin interface for CyberPay was one of my projects at Cyberspace. This platform helps merchants process payments{" "}
            <span className="font-semibold">and collections easily on their platform.</span>{" "}
          </p>

          <div className="pt-20">
            <h1 className="text-[#DEE1E3] text-[26px] font-semibold leading-[36px] text-left">INTRODUCTION</h1>
            <dd className="white-introduction ">
              CyberPay offers a smart, convenient, and highly secure process of receiving payments from your customers all over the world. Merchants can easily receive payments
              through bank accounts, USSD, QR Code, eWallet etc.
            </dd>
          </div>

          <div className="pt-28 flex lg:flex-row flex-col lg:gap-[70px] w-full pb-16">
            <div className="md:w-5/6">
              <h1 className="font-semibold text-base text-[#DEE1E3]">MY ROLE</h1>
              <dd className="text-base text-[#C2C8CB] pt-4">
                I prioritized creating an intuitive, seamless, and visually appealing user experience. My focus was on designing user interfaces that were easy to navigate,
                understand, and interact with, streamlining the payment process for our merchants. Whether it was refining the platform's layout and flow or designing visually
                captivating elements, my aim remained to elevate user satisfaction and boost engagement with the product.
              </dd>
            </div>

            <div className="flex flex-col gap-10">
              <div>
                <h1 className="font-semibold text-base text-[#DEE1E3]">SCOPE</h1>
                <dd className="text-base text-[#C2C8CB] pt-4">1 lead Designer, 1 product owner, a squad of developers.</dd>
              </div>
              <div>
                <h1 className="font-semibold text-base text-[#DEE1E3]">TOOLS</h1>
                <dd className="text-base text-[#C2C8CB] pt-4">Figma, Miro, </dd>
              </div>
            </div>
          </div>

          <Link to={"/"} className="text-[26px] leading-[26px] text-[#DEE1E3]">
            <span className="font-semibold">Get in touch</span> for more details
          </Link>
        </section>

        <section className="section">
      
          <CustomSwiper
            slide1={<CyberPayMerchant1 className="w-full h-full" />}
            slide2={<CyberPayMerchant2 className="w-full h-full" />}
            slide3={<CyberPayMerchant3 className="w-full h-full" />}
            slide4={<CyberPayMerchant4 className="w-full h-full" />}
          />
        </section>
      </main>
      <Footer />
    </section>
  );
};

export default CyberPayMerchant;
