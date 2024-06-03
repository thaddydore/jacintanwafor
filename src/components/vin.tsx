import { Link } from "react-router-dom";
import { ReactComponent as VinBg } from "../assets/svg/vin-compressed.svg";
import { ReactComponent as Bullet } from "../assets/svg/bullet.svg";
import { ReactComponent as Vin1 } from "../assets/svg/vin-1-compressed.svg";
import { ReactComponent as Vin2 } from "../assets/svg/vin-2-compressed.svg";
import { ReactComponent as Vin3 } from "../assets/svg/vin-3-compressed.svg";
import { ReactComponent as Vin4 } from "../assets/svg/vin-4-compressed.svg";
import { ReactComponent as Vin5 } from "../assets/svg/vin-5.svg";
import { ReactComponent as Vin6 } from "../assets/svg/vin-6-compressed.svg";
import { ReactComponent as Vin7 } from "../assets/svg/vin-7-compressed.svg";
import { ReactComponent as Vin8 } from "../assets/svg/vin-8.svg";
import { ReactComponent as Vin9 } from "../assets/svg/vin-9.svg";
import { ReactComponent as Vin10 } from "../assets/svg/vin-10-compressed.svg";
import { ReactComponent as Vin11 } from "../assets/svg/vin-11.svg";
import { ReactComponent as Vin12 } from "../assets/svg/vin-12.svg";
import { ReactComponent as Vin13 } from "../assets/svg/vin-13.svg";
import { ReactComponent as Vin14 } from "../assets/svg/vin-14.svg";
import { ReactComponent as Vin15 } from "../assets/svg/vin-15.svg";
import { ReactComponent as Vin16 } from "../assets/svg/vin-16.svg";
import { ReactComponent as Vin17 } from "../assets/svg/vin-17.svg";
import { ReactComponent as Vin18 } from "../assets/svg/vin-18-compressed.svg";
import { ReactComponent as Vin19 } from "../assets/svg/vin-19-compressed.svg";
import { ReactComponent as Vin20 } from "../assets/svg/vin-20-compressed.svg";
import { ReactComponent as Vin21 } from "../assets/svg/vin-21-compressed.svg";
import { ReactComponent as Vin22 } from "../assets/svg/vin-22.svg";
import { ReactComponent as Vin23 } from "../assets/svg/vin-23-compressed.svg";
import { ReactComponent as Vin24 } from "../assets/svg/vin-24-compressed.svg";
import { ReactComponent as Vin25 } from "../assets/svg/vin-25-compressed.svg";
import { ReactComponent as Vin26 } from "../assets/svg/vin-26-compressed.svg";
import { ReactComponent as Vin27 } from "../assets/svg/vin-27-compressed.svg";
import { ReactComponent as Vin28 } from "../assets/svg/vin-28-compressed.svg";
import { ReactComponent as Vin29 } from "../assets/svg/vin-29-compressed.svg";
import { ReactComponent as Vin30 } from "../assets/svg/vin-30-compressed.svg";
import { ReactComponent as Arrow } from "../assets/svg/arrow.svg";
import { ReactComponent as PinkBullet } from "../assets/svg/pink-bullet.svg";
import { ReactComponent as BulbIcon } from "../assets/svg/bulb.svg";
import { ReactComponent as CardIcon } from "../assets/svg/card.svg";
import { ReactComponent as FoodIcon } from "../assets/svg/food.svg";
import { useEffect } from "react";

const Vin = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component mounts
  }, []);
  return (
    <main className="bg-white">
      <section className="md:pt-28 pt-10">
        <div className="flex flex-col gap-10 text-center">
          <h1 className="big-text">
            Vehicle’s history <br /> with just VIN
          </h1>
          <p className="text-[#061818] text-sm font-medium">DESIGNING FOR WEB APP - APP FEATURE</p>
        </div>

        <VinBg className="w-full px-[30px] py-0 my-0 h-full object-cover mt-16 mb-6 " data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000" />
      </section>
      <section className="screen300">
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
              <h1 className="font-semibold text-base text-[#F22E5D]">OUTCOME</h1>
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
        <div className="bg-[#FAFAFA] xl:px-[100px] md:px-10 px-4 md:pt-20 pt-10 flex flex-col md:gap-40 gap-10">
          <div>
            <h1 className="text-center text-xl font-semibold text-[#F22E5D]">1. DESIGNING ACCESS TO VIN REPORT</h1>
            <p className="introduction md:text-center">
              This web app redesign means vehicle owners can <span className="font-bold">access vehicle history report</span> from all countries across Nigeria and globally with
              just VIN. Before purchase, a sample report can be viewed to confirm that it meets the needs and requirements.{" "}
            </p>
            <h2 className="py-14 text-base font-medium text-center">
              OVERVIEW OF THE REDESIGNED <span className="font-semibold text-[#F22E5D]">REQUEST</span> EXPERIENCE
            </h2>

            <div className="flex md:flex-row flex-col gap-7">
              <div className="font-medium text-[#787878] text-sm flex md:flex-col flex-col-reverse gap-4" data-aos="fade-up" data-aos-duration="1500">
                <Vin1 className="w-full h-full" />
                <p className="text-center">Simplified forms across the platform</p>
              </div>
              <div className="font-medium text-[#787878] text-sm flex md:flex-col flex-col-reverse gap-4" data-aos="fade-up" data-aos-duration="1500">
                <Vin2 className="w-full h-full" />
                <p className="text-center">Including the required fields to get started</p>
              </div>
            </div>
          </div>

          <div className="flex md:flex-col flex-col-reverse gap-4">
            <div className="grid gap-5 md:grid-cols-3 grid-cols-1" data-aos="fade-right" data-aos-duration="2000">
              <Vin3 className="w-full h-full" data-aos="fade-right" data-aos-duration="1500" />
              <Vin4 className="w-full h-full" data-aos="fade-right" data-aos-duration="1500" />
              <Vin5 className="w-full h-full" data-aos="fade-right" data-aos-duration="1500" />
            </div>
            <p className="font-medium text-[#787878] text-sm text-center">Multiple alternatives of locating the VIN in any vehicle with graphical explanation</p>
          </div>

          <div data-aos="fade-up" data-aos-duration="2000" className="flex md:flex-col flex-col-reverse gap-4">
            <Vin6 className="w-full h-full" />
            <p className="font-medium text-[#787878] text-sm text-center">Designing for all possible states, including incorrect VIN and for returning users</p>
          </div>

          <div className="flex md:flex-col flex-col-reverse gap-4">
            <div className="flex gap-2 md:flex-row flex-col items-center" data-aos="fade-right" data-aos-duration="2000">
              <Vin7 className="w-full h-full" data-aos="fade-right" data-aos-duration="1500" />
              <div>
                <Arrow className="md:block hidden" />
              </div>

              <Vin8 className="w-full h-full" data-aos="fade-right" data-aos-duration="1500" />
              <div>
                <Arrow className="md:block hidden" />
              </div>
              <Vin9 className="w-full h-full" data-aos="fade-right" data-aos-duration="1500" />
            </div>
            <p className="font-medium text-[#787878] text-sm text-center">What VIN report contains is clearly listed</p>
          </div>

          <div>
            <h2 className="py-14 text-base font-medium text-center">
              OVERVIEW OF THE REDESIGNED <span className="font-semibold text-[#F22E5D]">PAYMENT</span> EXPERIENCE
            </h2>

            <div data-aos="fade-up" data-aos-duration="2000">
              <Vin10 className="w-full h-full" />
              <p className="font-medium text-[#787878] text-sm text-center pt-4">
                User-desired information are made more accessible and payment channel depends on user’s location
              </p>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-duration="2000">
            <Vin11 className="w-full h-full" />
            <div className="flex md:flex-col flex-col-reverse gap-4 md:mt-16 mt-8">
              <div className="grid gap-11 md:grid-cols-3 grid-cols-1" data-aos="fade-right" data-aos-duration="2000">
                <Vin12 className="w-full h-full" data-aos="fade-right" data-aos-duration="1500" />
                <Vin13 className="w-full h-full" data-aos="fade-right" data-aos-duration="1500" />
                <Vin14 className="w-full h-full" data-aos="fade-right" data-aos-duration="1500" />
              </div>
              <p className="font-medium text-[#787878] text-sm text-center">Designing all possible plans states and interractions</p>
            </div>
          </div>

          <div>
            <h2 className="py-14 text-base font-medium text-center">
              DISPLAYING THE <span className="font-semibold text-[#F22E5D]">SAMPLE REPORT</span> OF ANY VEHICLE
            </h2>

            <div data-aos="fade-up" data-aos-duration="2000">
              <Vin15 className="w-full h-full" />
              <p className="font-medium text-[#787878] text-sm text-center pt-4">A summary of what the sample report contains</p>
            </div>
          </div>

          <div>
            <div data-aos="fade-up" data-aos-duration="2000">
              <Vin16 className="w-full h-full" />
              <p className="font-medium text-[#787878] text-sm text-center pt-4">Total distance covered and detects when the odometer is manipulated</p>
            </div>
          </div>

          <div>
            <div data-aos="fade-up" data-aos-duration="2000">
              <Vin17 className="w-full h-full" />
              <p className="font-medium text-[#787878] text-sm text-center pt-4 pb-20">Estimated market value and its breakdown </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <h1 className="text-center text-xl font-semibold text-[#F22E5D]">DEFINING A PRODUCT FEATURE</h1>
        <div className="md:mt-12 mt-6">
          <h2 className="text-xl font-semibold text-[#F22E5D]">The diverse users of VIN Check</h2>
          <p className="introduction font-bold max-w-[720px]">Crafting the problem statements for our different levels of end-users and their journeys</p>
          <p className="textMediumBase">
            Based on our initial user research, the <i>VIN Check</i> feature would most likely be used by vehicle owners and auto-technicians to gather information about a certain
            vehicle. We therefore not only had to consider only the direct users (vehicle owners), but also our users’s technicians (auto - technicians) as our end - users, with
            separate problem statement and challenges.
          </p>
        </div>
        <div className="flex md:flex-row flex-col my-16 md:gap-[70px] gap-8 ">
          <div className="flex flex-col gap-10 items-center justify-center w-full">
            <Vin18 className="w-full" />
            <div className="bg-[#FAFAFA] rounded-md md:p-10 p-6">
              <p className="text-base font-medium text-[#454545]">
                <span className="text-[#F22E5D] font-semibold">Vehicle Owners</span> are facing difficulties getting{" "}
                <span className="font-bold">insights into vehicle’s history, </span>decisions in <span className="font-bold">maintenance planning,</span> assessing{" "}
                <span className="font-bold">resale value,</span> getting <span className="font-bold">safety information, </span>avoiding{" "}
                <span className="font-bold">fraud, and</span> getting support from <span className="font-bold">insurance and warranty claims.</span>
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-10 items-center justify-center w-full">
            <Vin19 className="w-full" />
            <div className="bg-[#FAFAFA] rounded-md md:p-10 p-6">
              <p className="text-base font-medium text-[#454545]">
                <span className="text-[#F22E5D] font-semibold"> Auto - technicians</span> needs vehicle report as it assists with
                <span className="font-bold"> diagnostics, </span>ensuring <span className="font-bold">parts compatibility,</span> obtaining
                <span className="font-bold">safety and recall information,</span> verifying <span className="font-bold">vehicle history, </span> and for{" "}
                <span className="font-bold"> effective customer communication.</span>
              </p>
            </div>
          </div>
        </div>

        <p className="text-base text-[#454545]">Consequently, this gives rise to two distinct yet interrelated goals that we must take into account during our ideation phase.</p>

        <div className="bg-[#FAFAFA] md:py-10 md:px-14 p-6 md:mt-16 mt-8">
          <p className="border-l border-[#454545] ps-7 introductionwithoutpadding font-semibold text-[#454545]">
            {" "}
            <span className="text-[#F22E5D]">VIN Check</span> empower vehicle owners to know the hidden history of any vehicle from manufacturing to date, and make informed
            decisions about their vehicle's maintenance, repairs, and resale value?
          </p>
        </div>

        <div className="bg-[#FAFAFA] md:py-10 md:px-14 p-6 md:mt-16 mt-8">
          <p className="border-l border-[#454545] ps-7 introductionwithoutpadding font-semibold text-[#454545]">
            {" "}
            <span className="text-[#F22E5D]">VIN Check</span> provide an accurate detailed information for auto technician to find, maintain, and repair their customers vehicles?
          </p>
        </div>
      </section>

      <section className="section">
        <div className="md:mt-12 mt-6">
          <h2 className="text-xl font-semibold text-[#F22E5D]">Defining and prioritising solutions</h2>
          <p className="introduction font-bold max-w-[605px]">Exploring user roles within personas to further define the scope of our MVP.</p>
          <p className="textMediumBase">
            Moving into a team brainstorming session, we grouped and prioritised users needs in order of importance. We formed the project goals and transformed our goals into
            specific user tasks, enabling our engineering team to anticipate potential technical limitations associated with each proposed solution.
            <br /> <br />
            Moreover, this exercise facilitated the product team's brainstorming process by providing tangible design concepts as we progress into the ideation phase.
          </p>
        </div>

        <div className="my-16 bg-[#4182E5] md:py-20 md:px-14 px-6 py-10 text-white">
          <h1 className="text-center font-semibold md:text-3xl text-lg">
            Examples of Records that the <span className="font-extrabold">VIN check</span> will contain that meets user needs
          </h1>
          <div className="grid grid-cols-4 md:mt-16 mt-8 md:gap-20 gap-5">
            <div>
              <h1 className="flex items-center md:text-base text-xs font-bold">
                <span>
                  <PinkBullet />
                </span>{" "}
                Actor
              </h1>
              <p className="md:pt-4 pt-2 md:text-base text-xs">As a vehicle owner,</p>
            </div>
            <div>
              <h1 className="flex items-center md:text-base text-xs font-bold">
                <span>
                  <PinkBullet />
                </span>{" "}
                Situation
              </h1>
              <p className="md:pt-4 pt-2 md:text-base text-xs">When I need to purchase a new and good vehicle</p>
            </div>
            <div>
              <h1 className="flex items-center md:text-base text-xs font-bold">
                <span>
                  <PinkBullet />
                </span>{" "}
                Motivation
              </h1>
              <p className="md:pt-4 pt-2 md:text-base text-xs">I want to legally own multiple vehicles for my business</p>
            </div>
            <div>
              <h1 className="flex items-center md:text-base text-xs font-bold">
                <span>
                  <PinkBullet />
                </span>{" "}
                Outcome
              </h1>
              <p className="md:pt-4 pt-2 md:text-base text-xs">so I can avoid stolen and manipulated vehicles</p>
            </div>
          </div>

          <div className="grid grid-cols-4 md:mt-10 mt-6 md:gap-20 gap-5">
            <div>
              <p className="md:pt-4 pt-2 md:text-base text-xs">As an auto - technician</p>
            </div>
            <div>
              <p className="md:pt-4 pt-2 md:text-base text-xs">When I need to maintain and repair my customer’s vehicle</p>
            </div>
            <div>
              <p className="md:pt-4 pt-2 md:text-base text-xs">To easily repair vehicles with compatible parts and low cost. </p>
            </div>
            <div>
              <p className="md:pt-4 pt-2 md:text-base text-xs">So I make informed decisions in repairs and maintenance.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FAFAFA] section">
        <div className="">
          <h2 className="text-xl font-semibold text-[#F22E5D]">Designing for a reliable VIN check feature</h2>
          <p className="introduction font-bold max-w-[605px]">Maintaining ease of use and feasibility through careful consideration of integration.</p>
          <p className="textMediumBase">
            Through the ideation phase, we placed high importance on accurate and comprehensive information, covering a wide range of vehicle makes, models, and years. Considering
            the pricing rate and managing online transactions globally.
            <br /> <br />
            We partnered with ClearVin so we have the ability to customise the VIN report unique to our brand. There are some key design considerations that were made to ensure
            that the interface is easily interpreted by both vehicle owners and auto-technicians. We valued our potential users and created ways on protecting their data.
          </p>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 md:mt-24 mt-8 gap-x-24 md:gap-y-16 gap-y-6 items-center">
          <div className="text-center font-Fraunces font-bold text-[#787878] text-[26px]">Some of our key solution goals are....</div>
          <div>
            <h1 className="flex items-center font-bold font-Fraunces text-[26px] leading-10">
              Accurate Information <BulbIcon />{" "}
            </h1>
            <p className="mt-7 text-base text-[#454545]">
              Ensuring we have access to reliable and up-to-date databases, allowing for through checks of vehicle’s history to get relevant information.
            </p>
          </div>
          <div>
            <h1 className="flex items-center font-bold font-Fraunces text-[26px] leading-10">
              Global Transactions <CardIcon />{" "}
            </h1>
            <p className="mt-7 text-base text-[#454545]">
              Enabling foreign transactions, and placing a good balance between necessary functionalities and affordability by using per-check fees or subscription plans.
            </p>
          </div>
          <div>
            <h1 className="flex items-center font-bold font-Fraunces text-[26px] leading-10">
              Compatibility and Ease of use
              <FoodIcon />{" "}
            </h1>
            <p className="mt-7 text-base text-[#454545]">
              Considered whether the VIN Check solution can seamlessly integrate with our existing software. We chose a user - friendly interface to allow for easy interpretation.
            </p>
          </div>
        </div>

        <div className="font-medium text-[#787878] text-sm flex md:flex-col flex-col gap-4 mt-4" data-aos="fade-up" data-aos-duration="1500">
          <Vin20 className="w-full h-full" />
          <p className="text-center introductionwithoutpadding">
            Having considered the user's requirements and potential solutions, we proceeded to develop hypotheses that will enable us to evaluate the effectiveness of our proposed
            outcomes.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="md:mt-12 mt-6">
          <h2 className="text-xl font-semibold text-[#F22E5D]">Analysing user flows into organised and structured approach </h2>
          <p className="introduction font-bold max-w-[605px]">A product flow for both end-users, with an enhanced end-to-end experience. </p>
          <p className="textMediumBase">
            To ensure that Trophie is able to provide a full, seamless, and robust experience, we had to identify and solutionise the touch-points where Trophie could empower our
            users to complete their goals, which was greatly assisted through our user jobs. This covers all the way from managers first getting informed about the new Sponsorship
            feature, to sponsors receiving their 'thank-you' receipt after their purchase.
          </p>
        </div>

        <div className="md:my-16 my-8">
          <Vin21 className="w-full h-full" />
        </div>

        <p className="text-base text-[#454545]">
          With the active participation of our lead engineer during the mapping process, we efficiently improved our product architecture, resulting in a more streamlined user
          experience with fewer steps.
          <br /> <br />
          Here is a closer look of the user flows for both end-users
        </p>

        <div className="md:mt-16 mt-8">
          <Vin22 className="w-full h-full" />
        </div>
      </section>

      <section className="section bg-[#FAFAFA]">
        <h1 className="text-center text-xl font-semibold text-[#F22E5D]">FINAL OUTCOME</h1>
        <div className="md:mt-12 mt-6">
          <p className="introduction text-center">
            {" "}
            A reliable, efficient, and accessible platform that empowers users, such as <span className="font-bold">auto technicians and vehicle owners, </span>to make informed
            decisions about their vehicles, <span className="font-bold">by assessing the condition, safety, and value of a vehicle effectively</span>.
          </p>
          <p className="textMediumBase">
            Based on our initial user research, the <i>VIN Check</i> feature would most likely be used by vehicle owners and auto-technicians to gather information about a certain
            vehicle. We therefore not only had to consider only the direct users (vehicle owners), but also our users’s technicians (auto - technicians) as our end - users, with
            separate problem statement and challenges.
          </p>
        </div>

        <div className="md:my-16 my-8">
          <h1 className="text-center text-xl font-semibold text-[#F22E5D]">FINAL OUTCOME</h1>
          <div className="flex gap-10 items-start mt-10">
            <div className="w-1/2">
              <Vin23 className="w-full h-full" />
            </div>
            <div className="w-1/2 flex gap-10">
              <Vin24 className="w-full h-full" />
              <Vin25 className="w-full h-full" />
            </div>
          </div>
        </div>

        <div className="bg-[#F2F2F2] md:px-[150px] px-10 pt-11 pb-20">
          <h1 className="text-center text-xl font-semibold text-[#F22E5D]">CHECKOUT</h1>
          <div className="border-2 border-dashed border-[#4183E5] flex items-start py-8 md:px-14 px-5 w-full md:gap-10 gap-4 mt-10">
            <div>
              <Vin26 className="w-full h-full" />
              <p className="md:text-base text-xs text-[#454545]"> Here is checkout screen designed for the mobile app.</p>
            </div>

            <div>
              <Vin27 className="w-full h-full" />

              <p className="md:text-base text-xs text-[#454545]">
                {" "}
                The summary on the left displays information about the vehicle's history, while the cost is displayed on the right for easy reference.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="md:mt-12 mt-6">
          <h2 className="text-xl font-semibold text-[#F22E5D]">IMPACT </h2>
          <p className="introduction font-bold max-w-[605px]">Enabling a direct connection between vehicle’s history and their owners.</p>
          <p className="textMediumBase">
            This direct connection empowers vehicle owners and auto technicians with valuable insights into their vehicle's past, providing them with the necessary information to
            make informed decisions and deliver efficient services.
          </p>
        </div>

        <div className="md:mt-16 mt-8 grid md:grid-cols-3 grid-cols-1 gap-6 items-start">
          <div className="h-full">
            <Vin28 className="w-full" />
            <div className="border-l-8 border-[#F2F2F2] ps-5 md:mt-9 mt-4">
              <h1 className="text-[#454545] font-bold md:text-2xl text-lg">01</h1>

              <p className="text-base text-[#454545] ">
                VIN Check now offers increased global accessibility, allowing users from around the world to easily request and access the service.
              </p>
            </div>
          </div>
          <div className="h-full">
            <Vin29 className="w-full" />
            <div className="border-l-8 border-[#F2F2F2] ps-5 md:mt-9 mt-4">
              <h1 className="text-[#454545] font-bold md:text-2xl text-lg">02</h1>

              <p className="text-base text-[#454545] ">
              VIN check has gained popularity among vehicle owners and auto technicians due to its transparent nature. As a result, more users are now utilising VIN check services.
              </p>
            </div>
          </div>
          <div className="h-full">
            <Vin30 className="w-full" />
            <div className="border-l-8 border-[#F2F2F2] ps-5 md:mt-9 mt-4">
              <h1 className="text-[#454545] font-bold md:text-2xl text-lg">03</h1>

              <p className="text-base text-[#454545] ">
              The user flow in the web app served as a benchmark for improving the VIN Check feature in the mobile app, ensuring consistency and seamless usability across both platforms.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Vin;
