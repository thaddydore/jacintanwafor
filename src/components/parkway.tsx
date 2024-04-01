import { Link } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";
import { ReactComponent as FintechImg } from "../assets/svg/fintech.svg";

const ParkWay1 = require("../assets/png/parkway-1.png");
const ParkWay2 = require("../assets/png/parkway-2.png");
const ParkWay3 = require("../assets/png/parkway-3.png");
const ParkWay4 = require("../assets/png/parkway-4.png");

const ParkWay = () => {
  return (
    <section>
      <Header />
      <main>
        <section className="pt-28 pb-40">
          <div className="flex flex-col gap-10 text-center">
            <h1 className="big-text">
              Transfer funds and <br /> mobile top-ups
            </h1>
            <p className="text-[#061818] text-sm font-medium">DESIGN FOR MOBILE APP - FINTECH</p>
          </div>

          <FintechImg className="w-full px-[30px] py-0 my-0 h-full object-cover mt-16 mb-6 " />

          <section className="xl:px-[364px] md:px-32 px-8 ">
            <p className="text-[#454545] text-base">
              {" "}
              <span className="font-semibold">Financial app for Parkway Microfinance Bank</span> is one of my projects as a product designer in{" "}
              <span className="font-semibold"> Cyberspace,</span> which leverages on providing financial services.{" "}
            </p>

            <div className="pt-20">
              <h1 className="text-[#5E9825] text-[26px] font-semibold leading-[36px] text-left">INTRODUCTION</h1>
              <dd className="introduction">
                Parkway is a financial app designed to simplify everyday transactions for users. With this app, individuals can conveniently purchase airtime and data, pay bills,
                and make funds transfers seamlessly. Offering a one-stop solution for financial needs, Parkway empowers users to manage their finances efficiently, saving time and
                effort.
              </dd>
            </div>

            <div className="pt-28 flex lg:flex-row flex-col lg:gap-[70px] w-full pb-16">
              <div className="md:w-5/6">
                <h1 className="font-semibold text-base text-[#5E9825]">MY ROLE</h1>
                <dd className="text-base text-[#454545] pt-4">
                  I ensured an intuitive and delightful user experience across all aspects of the app. This includes designing user interfaces that are visually appealing, easy to
                  navigate, and function seamlessly. I focus on understanding user needs and behaviors to create interfaces that facilitate efficient interactions.
                  <br className="pb-2" />I collaborate closely with product managers, developers, and other stakeholders to translate business requirements into engaging design
                  solutions that enhance the overall usability and satisfaction of the Parkway app.
                </dd>
              </div>

              <div className="flex flex-col gap-10">
                <div>
                  <h1 className="font-semibold text-base text-[#5E9825]">SCOPE</h1>
                  <dd className="text-base text-[#454545] pt-4">1 lead Designer, Product Manager, a squad of developers(remote)</dd>
                </div>
                <div>
                  <h1 className="font-semibold text-base text-[#5E9825]">TOOLS</h1>
                  <dd className="text-base text-[#454545] pt-4">Figma, FigJam, Teams</dd>
                </div>
              </div>
            </div>

            <Link to={"/"} className="text-[26px] leading-[26px] text-[#5E9825]">
              <span className="font-semibold">Get in touch</span> for more details
            </Link>
          </section>

          <section className="xl:px-[364px] md:px-32 px-8 md:mt-56 mt-8">
            <div className="flex md:flex-row flex-col md:gap-20 gap-8 justify-center" >
              <img src={ParkWay1} className="max-w-[445px] h-full" alt="phone" data-aos="flip-left"/>
              <img src={ParkWay2} className="max-w-[445px]" alt="phone" data-aos="flip-right"/>
            </div>

            <div className="flex md:flex-row flex-col md:gap-20 gap-8 justify-center mt-20 w-full" >
              <div data-aos="flip-left" className="flex flex-col items-center">
                <img src={ParkWay3} className="object-fit object-center w-full max-w-[262px]" alt="phone" />
                <p className="mt-6 text-base text-[#454545] text-start font-medium md:w-[449px]">
               <span className="text-[#5E9825] font-semibold">Fund Transfers</span>  allows users to securely and conveniently <b>transfer money</b>, between accounts. With just a few taps, users can easily send money to friends, family, or businesses, allowing for <b>seamless financial transactions</b> within the app, and enhancing the overall <b>user experience</b>.
                </p>
              </div>
              <div data-aos="flip-left" className="flex flex-col items-center">
                <img src={ParkWay4} className="object-fit object-center w-full max-w-[262px]" alt="phone" />
                <p className="mt-6 text-base text-[#454545] text-start font-medium md:w-[449px]">
                <span className="text-[#5E9825] font-semibold">Mobile Top-up</span> empowers users to conveniently recharge their mobile phones while streamlining the process, providing a <b>seamless and efficient way</b> to manage mobile services.
                </p>
              </div>
            
            </div>
          </section>
        </section>
      </main>
      <Footer />
    </section>
  );
};

export default ParkWay;
