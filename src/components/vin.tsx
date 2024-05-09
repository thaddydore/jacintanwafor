import { Link } from "react-router-dom";
import { ReactComponent as VinBg } from "../assets/svg/vin.svg";
import { ReactComponent as Bullet } from "../assets/svg/bullet.svg";
import { ReactComponent as Vin1 } from "../assets/svg/vin-1.svg";
import { ReactComponent as Vin2 } from "../assets/svg/vin-2.svg";
import { ReactComponent as Vin3 } from "../assets/svg/vin-3.svg";
import { ReactComponent as Vin4 } from "../assets/svg/vin-4.svg";
import { ReactComponent as Vin5 } from "../assets/svg/vin-5.svg";
import { ReactComponent as Vin6 } from "../assets/svg/vin-6.svg";
import { ReactComponent as Vin7 } from "../assets/svg/vin-7.svg";
import { ReactComponent as Vin8 } from "../assets/svg/vin-8.svg";
import { ReactComponent as Vin9 } from "../assets/svg/vin-9.svg";
import { ReactComponent as Arrow } from "../assets/svg/arrow.svg";

const Vin = () => {
  return (
    <main className="bg-white">
      <section className="pt-28">
        <div className="flex flex-col gap-10 text-center">
          <h1 className="big-text">
            Vehicle’s history <br /> with just VIN
          </h1>
          <p className="text-[#061818] text-sm font-medium">DESIGNING FOR WEB APP - APP FEATURE</p>
        </div>

        <VinBg className="w-full px-[30px] py-0 my-0 h-full object-cover mt-16 mb-6 " data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000" />
      </section>
      <section className="xl:px-[300px] md:px-32 px-8">
        <p className="text-[#454545] text-base">
          {" "}
          <span className="font-semibold">Revealing vital information about vehicles with just VIN</span> is one of my projects as a product designer in
          <span className="font-semibold"> Flickwheel,</span>
          which leverages on technology to provide auto-mobile services.
        </p>

        <div className="pt-20">
          <h1 className="text-[#F22E5D] text-[26px] font-semibold leading-[36px] text-left">INTRODUCTION</h1>
          <dd className="introduction">
            VIN check is a web-based application that enables vehicle owners to know detailed history of any vehicle. This enhances decision making while purchasing, repairing and
            maintaining any vehicle.
            <br />
            <br />
            Vehicle Identification Number (VIN) is a 17-character sequence of numbers and letters that <span className="font-semibold">uniquely identifies a vehicle.</span> The VIN
            gives a detailed report on the <span className="font-semibold">unique features, specifications, and manufacturer of a vehicle,</span> and also tracks the usage record.
          </dd>
        </div>

        <div className="pt-28 flex md:flex-row md:gap-4 flex-col lg:gap-[70px] w-full pb-16">
          <div className="md:w-5/6 flex flex-col md:gap-10 gap-5 w-full">
            <div>
              <h1 className="font-semibold text-base text-[#F22E5D]">MY ROLE</h1>
              <dd className="text-base text-[#454545] pt-4">
                As the only product designer on this project, my responsibilities include working with stakeholders to get requirements, communicating with developers on project
                feasibility, leading the end-to-end design process, and meeting expectations.
              </dd>
            </div>
            <div>
              <h1 className="font-semibold text-base text-[#F22E5D]">MY ROLE</h1>
              <dd className="text-base text-[#454545] pt-4 flex gap-2 items-start">
                <span>
                  <Bullet />
                </span>
                <span>Improving VIN report purchases by easing payment and putting users location into consideration . </span>
              </dd>
              <dd className="text-base text-[#454545] pt-4 flex gap-2 items-start">
                <span>
                  <Bullet />
                </span>
                <span>Ensuring a snippet of the report is displayed before purchase, and the information gotten is accurate. </span>
              </dd>
              <dd className="text-base text-[#454545] pt-4 flex gap-2 items-start">
                <span>
                  <Bullet />
                </span>
                <span>Viewing and downloadable a sample VIN report of a specific vehicle. </span>
              </dd>
            </div>
          </div>

          <div className="flex flex-col gap-10 md:w-1/6 w-full">
            <div>
              <h1 className="font-semibold text-base text-[#F22E5D]">CLIENT</h1>
              <dd className="text-base text-[#454545] pt-4">
                Flickwheel <a href="www.flickwheel.com">(www.flickwheel.com)</a>
              </dd>
            </div>
            <div>
              <h1 className="font-semibold text-base text-[#F22E5D]">SCOPE</h1>
              <dd className="text-base text-[#454545] pt-4">1 Designer, 1 Product Owner, a team of developers.</dd>
            </div>
            <div>
              <h1 className="font-semibold text-base text-[#F22E5D]">TOOLS</h1>
              <dd className="text-base text-[#454545] pt-4">Figma, Google meet, Slack (Remote)</dd>
            </div>
          </div>
        </div>
      </section>

      <section className="xl:px-[200px] md:py-20 py-6 px-10 md:px-32 rounded-lg ">
        <div className="bg-[#FAFAFA] xl:px-[100px] px-10 md:pt-20 pt-10 flex flex-col md:gap-40 gap-10">
          <div>
            <h1 className="text-center text-xl font-semibold text-[#F22E5D]">1. DESIGNING ACCESS TO VIN REPORT</h1>
            <p className="introduction text-center">
              This web app redesign means vehicle owners can <span className="font-bold">access vehicle history report</span> from all countries across Nigeria and globally with
              just VIN. Before purchase, a sample report can be viewed to confirm that it meets the needs and requirements.{" "}
            </p>
            <h2 className="py-14 text-base font-medium text-center">
              OVERVIEW OF THE REDESIGNED <span className="font-semibold text-[#F22E5D]">REQUEST</span> EXPERIENCE
            </h2>

            <div className="flex md:flex-row flex-col gap-7">
              <div className="font-medium text-[#787878] text-sm" data-aos="fade-up" data-aos-duration="1500">
                <Vin1 className="w-full h-full" />
                <p className="text-center pt-4">Simplified forms across the platform</p>
              </div>
              <div className="font-medium text-[#787878] text-sm" data-aos="fade-up" data-aos-duration="1500">
                <Vin2 className="w-full h-full" />
                <p className="text-center pt-4">Including the required fields to get started</p>
              </div>
            </div>
          </div>

          <div>
            <div className="grid gap-5 md:grid-cols-3 grid-cols-1" data-aos="fade-right" data-aos-duration="2000">
              <Vin3 className="w-full h-full" data-aos="fade-right" data-aos-duration="1500"/>
              <Vin4 className="w-full h-full" data-aos="fade-right" data-aos-duration="1500"/>
              <Vin5 className="w-full h-full" data-aos="fade-right" data-aos-duration="1500"/>
            </div>
            <p className="font-medium text-[#787878] text-sm text-center pt-4">Multiple alternatives of locating the VIN in any vehicle with graphical explanation</p>
          </div>

          <div data-aos="fade-up" data-aos-duration="2000">
            <Vin6 className="w-full h-full"/>
            <p className="font-medium text-[#787878] text-sm text-center pt-4">Designing for all possible states, including incorrect VIN and for returning users</p>
          </div>

          <div>
            <div className="flex gap-2 md:flex-row flex-col items-center" data-aos="fade-right" data-aos-duration="2000">
              <Vin7 className="w-full h-full" data-aos="fade-right" data-aos-duration="1500"/>
              <div>
                 <Arrow className="md:block hidden"/> 
              </div>
            
              <Vin8 className="w-full h-full" data-aos="fade-right" data-aos-duration="1500"/>
              <div>
                 <Arrow className="md:block hidden"/> 
              </div>
              <Vin9 className="w-full h-full" data-aos="fade-right" data-aos-duration="1500"/>
            </div>
            <p className="font-medium text-[#787878] text-sm text-center pt-4">Multiple alternatives of locating the VIN in any vehicle with graphical explanation</p>
          </div>


        </div>
      </section>
    </main>
  );
};

export default Vin;
