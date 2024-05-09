import { ReactComponent as QuantumZenith1 } from "../assets/svg/quantum-zenith-1.svg";
import { Link } from "react-router-dom";
import Footer from "./footer";
import { useEffect } from "react";

const QuantumZenith = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component mounts
  }, []);
  return (
    <section>
      {/* <Header /> */}
      <main>
        <section className="pt-28 pb-40">
          <div className="flex flex-col gap-10 text-center">
            <h1 className="big-text">
              Make Investments <br /> for Zenith bank
            </h1>
            <p className="text-[#061818] text-sm font-medium">DESIGNING FOR ADMIN PORTAL AND MOBILE APP (NDA)</p>
          </div>

          <QuantumZenith1 className="w-full px-[30px] py-0 my-0 h-full object-cover mt-16 mb-6 " />

          <section className="xl:px-[300px] md:px-32 px-8">
            <p className="text-[#454545] text-base">
              {" "}
              <span className="font-semibold">Mobile design enhancement for zenith bank</span> is one of my projects as a product designer in{" "}
              <span className="font-semibold"> Cyberspace,</span> which leverages on technology to provide investment services.{" "}
            </p>

            <div className="pt-20">
              <h1 className="text-[#5E9825] text-[26px] font-semibold leading-[36px] text-left">INTRODUCTION</h1>
              <dd className="introduction">
                Quantum Zenith is a premier offering from Zenith Bank, dedicated to tracking, managing, and enhancing investments. The focus is achieving returns above inflation
                rates through strategic investments in fixed-grade income securities.
              </dd>
            </div>

            <div className="pt-28 flex lg:flex-row flex-col lg:gap-[70px] w-full pb-16">
              <div className="md:w-5/6">
                <h1 className="font-semibold text-base text-[#5E9825]">MY ROLE</h1>
                <dd className="text-base text-[#454545] pt-4">
                  I ensured that the user experience is intuitive, seamless, and visually appealing. I focus on crafting user interfaces that are easy to navigate, understand, and
                  interact with, making the investment management process effortless for our users. From designing the layout and flow of the platform to creating visually engaging
                  elements, my aim is to enhance user satisfaction and drive engagement with the product.
                </dd>
              </div>

              <div className="flex flex-col gap-10">
                <div>
                  <h1 className="font-semibold text-base text-[#5E9825]">SCOPE</h1>
                  <dd className="text-base text-[#454545] pt-4">1 lead Designer, a squad of developers.</dd>
                </div>
                <div>
                  <h1 className="font-semibold text-base text-[#5E9825]">TOOLS</h1>
                  <dd className="text-base text-[#454545] pt-4">Figma, Miro, </dd>
                </div>
              </div>
            </div>

            <Link to={"/"} className="text-[26px] leading-[26px] text-[#5E9825]">
              <span className="font-semibold">Get in touch</span> for more details
            </Link>
          </section>
        </section>
      </main>
      {/* <Footer /> */}
    </section>
  );
};

export default QuantumZenith;
