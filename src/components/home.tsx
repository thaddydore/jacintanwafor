import { ReactComponent as Star } from "../assets/svg/star.svg";
import { ReactComponent as Spiral } from "../assets/svg/spiral.svg";
import { ReactComponent as Ace } from "../assets/svg/ace.svg";
import { ReactComponent as Digital } from "../assets/svg/digital.svg";
import { Link } from "react-router-dom";
import { ReactComponent as CyberPay } from "../assets/svg/cyberpay.svg";
import { useEffect, useState } from "react";
import styles from "./main.module.css"
import { ReactComponent as Chisom } from "../assets/svg/chisom.svg";
import Header from "./header";

const FlickWheel = require("../assets/png/flick-wheel.png");
const VehicleRepairs = require("../assets/png/vehicle-repairs.png");
const CIPM = require("../assets/png/cipm.png");
const QuantumZenith = require("../assets/png/quantum-zenith.png");
const Parkway = require("../assets/png/parkway.png");
const HeartFelt = require("../assets/png/heart-felt.png");
const Mandates = require("../assets/png/Mandates.png");
const IdentityPass = require("../assets/png/identity-pass.png");
const MealManager = require("../assets/png/meal-manager.png");
const Payments = require("../assets/png/payment.png");

const Home = () => {

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component mounts
  }, []);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTop = window.scrollY;
  //   //   if (scrollTop > 50) { // Change 100 to the scroll position where you want the color change to occur
  //   //     setIsScrolled(true);
  //   //   } else {
  //   //     setIsScrolled(false);
  //   //   }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  // console.log(isScrolled);
  
  
  return (
    <section className="font-Inter">
      <Header />
      <main className="w-full">
        <section className="section">
          <div className="relative">
            <Ace className="absolute -z-10 top-[90%] left-[6%]" />
            <Digital className="absolute z-10 top-[30%] left-[67%]" />
            <Spiral className="absolute top-[1%] left-[62%] -z-10" />
            <Star className="absolute z-10 top-[3%] left-[8%]" />
            <div>
              <p className="lg:px-[90px] md:text-[114px] text-[75px] leading-16 md:leading-[110px] font-bold relative">Product designer, that delight users</p>
            </div>
          </div>
        </section>

        <section className="section flex flex-col gap-24" data-aos="fade-up">
          <div className=" flex md:flex-row flex-col md:gap-[90px] gap-4 items-center">
            <Link to={"/vin"} data-aos="fade-up-right" className="hover:animate-pulse hover:skew-x-2">
              <img src={FlickWheel} alt="flick-wheel" />
              <h1 className="text-lg font-semibold text-[#061818]">Vehicle’s history with just VIN</h1>
              <p className="text-[#454545] text-base">Flickwheel / 2023</p>
            </Link>
            <Link to={"/"} className="" data-aos="fade-up-left">
              <img src={VehicleRepairs} alt="vehicle-repairs" />
              <h1 className="text-lg font-semibold text-[#061818]">Request for vehicle repairs</h1>
              <p className="text-[#454545] text-base">Flickwheel / 2022</p>
            </Link>
          </div>

          <div data-aos="fade-right">
            <Link to={"/cipm"}>
              <img src={CIPM} alt="cipm" />
              <h1 className="text-lg font-semibold text-[#061818]">Regulatory body for HR professionals</h1>
              <p className="text-[#454545] text-base">CIPM Nigeria / 2023</p>
            </Link>
          </div>

          <div className="flex md:flex-row flex-col md:gap-[90px] gap-4">
            <Link to={"/quantum-zenith"} data-aos="fade-up-right">
              <img src={QuantumZenith} alt="quantum-zenith" />
              <h1 className="text-lg font-semibold text-[#061818]">Make Investments</h1>
              <p className="text-[#454545] text-base">Zenith Bank / 2022</p>
            </Link>
            <Link to={"/parkway"} className="">
              <img src={Parkway} alt="parkway" data-aos="fade-up-left"/>
              <h1 className="text-lg font-semibold text-[#061818]">Transfer funds and mobile top-ups</h1>
              <p className="text-[#454545] text-base">Parkway Microfinance Bank / 2023</p>
            </Link>
          </div>

          <div data-aos="fade-left">
            <Link to={"/heartfelt"}>
              <img src={HeartFelt} alt="heart-felt" />
              <h1 className="text-lg font-semibold text-[#061818]">Purchase and send gift cards</h1>
              <p className="text-[#454545] text-base">Heartfelt / 2022</p>
            </Link>
          </div>
        </section>

        <section className={`section ${isScrolled ? styles.scrolled : ''}`} onScroll={() =>setIsScrolled(true)} >
          <div className="relative">
            <CyberPay className="absolute z-10 top-[54%] left-[56%]" />
            <Spiral className="absolute bottom-[10%] left-[62%] z-10" />
            <Star className="absolute z-10 top-[3%] left-[7%]" />
            <div>
              <p className="lg:px-[90px] md:text-[114px] md:leading-[110px] font-bold relative text-[75px] leading-16">
                Made for <br /> a brand
              </p>
            </div>
          </div>
        </section>

        <section className="section bg-[#141617] grid md:grid-cols-2 gap-[50px]" data-aos="fade-up">
          <div data-aos="fade-right">
   <Link to={"/cyberpay/merchant"} >
            <img src={Mandates} alt="mandates" />
            <h1 className="text-lg font-semibold text-[#FFFFFF]">Payment gateway for business</h1>
            <p className="text-[#787878] text-base">CyberPay / 2021</p>
          </Link>
          </div>
          <div data-aos="fade-left">
             <Link to={"/cyberpay/identity-pass"} className="" >
            <img src={IdentityPass} alt="identity-pass" />
            <h1 className="text-lg font-semibold text-[#FFFFFF]">Verify user’s identity</h1>
            <p className="text-[#787878] text-base">CyberPay / 2023</p>
          </Link>
          </div>
         
          <div data-aos="fade-right">
               <Link to={"/cyberpay/meal-manager"} >
            <img src={MealManager} alt="flick-wheel" />
            <h1 className="text-lg font-semibold text-[#FFFFFF]">Tracking meal orders of staff</h1>
            <p className="text-[#787878] text-base">CyberPay / 2021</p>
          </Link>
          </div>
       
          <div data-aos="fade-left">
 <Link to={"/cyberpay/settlement-automation"} className="" >
            <img src={Payments} alt="vehicle-repairs" />
            <h1 className="text-lg font-semibold text-[#FFFFFF]">Handling Payment for merchants</h1>
            <p className="text-[#787878] text-base">CyberPay / 2022</p>
          </Link>
          </div>
         
        </section>

        <section className="bg-[#141617] flex flex-col justify-center items-center pt-[197px] pb-24  h-full">
          <h1 className="text-white md:text-[114px] md:leading-[110px] font-bold relative text-[75px] leading-16">A little <br /><span className="text-[#E76295] underline decoration-8">about</span> me </h1>
          <div className="relative">
   <Chisom className="hover:scale-100 hover:translate-x-2 hover:-translate-y-2   md:transform-none"/>
          </div>
       
        </section>
      </main>
      {/* <Footer /> */}
    </section>
  );
};

export default Home;
