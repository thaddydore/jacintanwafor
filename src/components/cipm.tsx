import React, { useEffect } from "react";
import Header from "./header";
import { ReactComponent as CIPMBG } from "../assets/svg/cipmbg.svg";
import { Link } from "react-router-dom";
import Footer from "./footer";
import { ReactComponent as CIPM5 } from "../assets/svg/cipm-4.svg";
import { ReactComponent as CIPM8 } from "../assets/svg/cipm-8.svg";
import { ReactComponent as CIPM9 } from "../assets/svg/cipm-9.svg";
import { ReactComponent as CIPM10 } from "../assets/svg/cipm-10.svg";
import { ReactComponent as CIPM11 } from "../assets/svg/cipm-11.svg";
import { ReactComponent as CIPM12 } from "../assets/svg/cipm-12.svg";

const CIPM1 = require("../assets/png/cipm-1.png");
const CIPM2 = require("../assets/png/cipm-2.png");
const CIPM3 = require("../assets/png/cipm-3.png");
const CIPM4 = require("../assets/png/cipm-4.png");
const CIPM6 = require("../assets/png/cipm-5.png");
const CIPM7 = require("../assets/png/cipm-6.png");

const Users = [
  {
    image: `${CIPM4}`,
    number: "01",
    header: "Limited Access to Resources",
    description:
      " Many HR professionals may currently lack easy access to comprehensive resources tailored to their specific needs and challenges, hindering their ability to stay updated with industry trends and best practices",
  },
  {
    image: `${CIPM6}`,
    number: "02",
    header: "Fragmented Professional Development",
    description:
      "There might be a gap in centralized platforms for professional development within the HR industry, leading to a fragmented landscape where professionals struggle to find cohesive learning opportunities and networking avenues",
  },
  {
    image: `${CIPM7}`,
    number: "03",
    header: "Compliance Concerns",
    description:
      "Many  HR professionals may express concerns about staying compliant with evolving regulations and standards, highlighting the need for accessible tools and guidance to navigate complex legal frameworks effectively.",
  },
];

const CIPM = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component mounts
  }, []);
  return (
    <section className="overflow-x-hidden">
      {/* <Header /> */}
      <main>
        <section className="pt-28 pb-20">
          <div className="flex flex-col gap-10 text-center">
            <h1 className="big-text">
              Regulatory body for <br />
              HR professionals
            </h1>
            <p className="text-[#061818] text-sm font-medium">DESIGN FOR WEB PORTAL</p>
          </div>

          <CIPMBG className="w-full px-[30px] py-0 my-0 h-full object-cover mt-16 mb-6 " data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" />

          <section className="xl:px-[300px] md:px-32 px-8 ">
            <p className="text-[#454545] text-base">
              {" "}
              <span className="font-semibold"> CIPM Membership Portal</span> is one of my projects as a product designer in <span className="font-semibold"> Cyberspace,</span>{" "}
              which leverages on regulating the HR professionals in Nigeria.{" "}
            </p>

            <div className="pt-20">
              <h1 className="text-[#11643C] text-[26px] font-semibold leading-[36px] text-left">INTRODUCTION</h1>
              <dd className="introduction">
                The Membership Portal of the Chartered Institute of Personnel Management (CIPM) serves as the regulatory body for HR professionals in Nigeria. Members gain access
                to valuable resources, including insights, best practices, and practical solutions tailored to address contemporary HR challenges. This platform empowers members to
                enhance their skills, stay informed about industry trends, and deliver value.
              </dd>
            </div>

            <div className="pt-28 flex lg:flex-row flex-col lg:gap-[70px] w-full pb-16">
              <div className="md:w-5/6">
                <h1 className="greenSemiboldTextBase">MY ROLE</h1>
                <dd className="text-base text-[#454545] pt-4">Product Designer, Research, branding, design, prototyping</dd>
              </div>

              <div>
                <h1 className="greenSemiboldTextBase">SCOPE</h1>
                <dd className="text-base text-[#454545] pt-4">1 lead Designer, 3 Product Manger, a squad of developers, a board of stakeholders.</dd>
              </div>
              <div>
                <h1 className="greenSemiboldTextBase">TIMELINE</h1>
                <dd className="text-base text-[#454545] pt-4">12 weeks</dd>
              </div>
            </div>

            {/* <Link to={"/"} className="text-[26px] leading-[26px] text-[#11643C]">
              <span className="font-semibold">Get in touch</span> for more details
            </Link> */}
          </section>

          <section className="flex gap-[56px] overflow-x-scroll md:overflow-x-hidden my-24" data-aos="fade-left">
            <img src={CIPM1} alt="screenshot" className="w-full" />
            <img src={CIPM2} alt="screenshot" className="w-full max-w-[895px]" />
            <img src={CIPM3} alt="screenshot" className="w-full" />
          </section>

          <section className="xl:px-[300px] lg:px-32 px-8">
            <h1 className="greenSemiboldText">Problem Discovery</h1>
            <p className="font-Fraunces xl:text-6xl text-3xl font-semibold text-[#061818] xl:w-[1000px] pt-4">
              HR professionals lacked access to essential resources for organizational development
            </p>

            <div className="pt-28">
              <h1 className="greenSemiboldText">1. Project Requirements Scope</h1>
              <p className="md:w-[520px] boldBlack pt-4">Working with product owners focused on positioning CIPM as the regulatory HR body.</p>

              <div className="bg-[#F9F6F6] md:p-[60px] p-4 mt-16 grid md:grid-cols-2 md:gap-[60px] gap-4 text-[#061818] mb-28 rounded-md">
                <div className="bg-white ps-10 py-10 md:pe-10 rounded-md">
                  <p className="boldBlack">Business Objectives</p>
                  <ul className="mt-4 text-base" style={{ listStyleType: "disc" }}>
                    <li>Enhance platform’s usability</li>
                    <li>Increase user engagement</li>
                    <li>Improve customer retention</li>
                  </ul>
                </div>
                <div className="bg-white ps-10 py-10 md:pe-10 rounded-md">
                  <p className="boldBlack">Customer Goals</p>
                  <ul className="mt-4 text-base" style={{ listStyleType: "disc" }}>
                    <li>Simplify the process of completing tasks on the platform to save time. </li>
                    <li>Increase security in data collection.</li>
                  </ul>
                </div>
                <div className="bg-white ps-10 py-10 md:pe-10 rounded-md">
                  <p className="boldBlack">Constraints</p>
                  <ul className="mt-4 text-base" style={{ listStyleType: "disc" }}>
                    <li>Compatibility with existing systems </li>
                    <li>Restricted launch timelines</li>
                    <li>Adhere to budget constraints</li>
                  </ul>
                </div>

                <div className="bg-white ps-10 py-10 md:pe-10 rounded-md">
                  <p className="boldBlack"> Mr Responsibilities</p>
                  <ul className="mt-4 text-base" style={{ listStyleType: "disc" }}>
                    <li>Develop intuitive and user-friendly interfaces to enhance user experience. </li>
                    <li>Design reviews to gather feedback.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="section bg-[#F9F6F6] text-center">
            <p className="text-[#454545] font-semibold text-[22px] leading-7">How might we..</p>
            <p className="pt-11 text-[42px] leading-[52px] text-[#061818] font-semibold">Position CIPM to be the only body chartered to regulate the practice of HR in Nigeria?</p>
          </section>

          <section className="section">
            <h1 className="greenSemiboldText">2. Research Plan</h1>
            <p className="md:w-[581px] boldBlack pt-4"> Conducting research to validate our early assumptions helped us identify specific areas to focus on.</p>

            <CIPM5 className="mt-16 mb-10 w-full h-full" />

            <div className="grid md:grid-cols-3 text-[#061818] md:gap-10 gap-4">
              <div className="p-7 bg-[#F9F6F6] rounded-md">
                <h1 className="text-lg font-bold">01</h1>
                <p className="text-sm ">What is the HR sector’s current perception of design thinking?</p>
              </div>
              <div className="p-7 bg-[#F9F6F6] rounded-md">
                <h1 className="text-lg font-bold">02</h1>
                <p className="text-sm ">How to best communicate the business requirements to resonate best with audiences?</p>
              </div>
              <div className="p-7 bg-[#F9F6F6] rounded-md">
                <h1 className="text-lg font-bold">03</h1>
                <p className="text-sm ">What are the latest trends and standards in design thinking and industry’s regulatory compliance?</p>
              </div>
            </div>
          </section>

          <section className="section">
            <h1 className="greenSemiboldText">3. Validating with users and industry</h1>
            <p className="md:w-[581px] boldBlack pt-4">Interviews with HR professionals, managers, and business owners revealed the gap in HR.</p>

            <div className="mt-16 md:p-[60px] p-4 bg-[#F9F6F6] rounded-md">
              <div className="grid grid-cols-1 md:gap-14 gap-4">
                {Users?.map((user, index) => (
                  <div className="bg-white py-12 md:ps-[74px] ps-4 pe-4 rounded-md flex gap-[74px] items-center" key={index}>
                    {" "}
                    <img src={user?.image} alt="bag" />
                    <div>
                      <h1 className="text-lg font-bold text-[#E9DDDD]">{user?.number}</h1>
                      <p className="boldBlack pt-8">{user.header}</p>
                      <p className="blackTextBase pt-4">{user.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="section">
            <h1 className="greenSemiboldText">4. Touch points</h1>
            <p className="md:w-[581px] boldBlack pt-4">Mapping the user journey to spotlight the following features</p>

            <div className="md:mt-16 mt-8 grid grid-cols-1 md:gap-16 gap-4 ">
              <div className="flex md:flex-row flex-col-reverse items-start md:gap-14 gap-4 w-full" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
                <CIPM8 className="md:w-4/6 w-full h-full" data-aos="fade-right" />
                <div className="flex flex-col gap-6 md:w-2/6 w-full" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1500">
                  <h1 className="greenSemiboldTextBase">FEATURES</h1>
                  <p className="boldBlack">Membership for all HR professional levels</p>
                  <p className="blackTextBase">
                    Accessible to HR professionals at every career stage, this feature offers inclusivity and diversity within the community. It ensures that individuals,
                    regardless of their experience level, can benefit from the resources and opportunities available on the platform.
                  </p>
                </div>
              </div>

              <div className="flex md:flex-row flex-col items-start md:gap-14 gap-4 w-full" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
                <div className="flex flex-col gap-6 md:w-2/6 w-full" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1500">
                  <h1 className="greenSemiboldTextBase">FEATURES</h1>
                  <p className="boldBlack">Upgrade of membership levels</p>
                  <p className="blackTextBase">
                    This feature empowers users to tailor their membership to their specific needs and aspirations, ensuring that they receive personalized support and guidance as
                    they progress in their HR careers.
                  </p>
                </div>
                <CIPM9 className="md:w-4/6 w-full h-full" data-aos="fade-left" />
              </div>

              <div className="flex md:flex-row flex-col-reverse items-start md:gap-14 gap-4 w-full" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
                <CIPM10 className="md:w-4/6 w-full h-full" data-aos="fade-right" />
                <div className="flex flex-col gap-6 md:w-2/6 w-full" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1500">
                  <h1 className="greenSemiboldTextBase">FEATURES</h1>
                  <p className="boldBlack">Obtain and renew HR License</p>
                  <p className="blackTextBase">
                    Simplify the process of obtaining and renewing HR licenses with an intuitive and streamlined interface. This feature provides users with easy access to relevant
                    documentation and guides them through the necessary steps to ensure compliance with industry regulations.
                  </p>
                </div>
              </div>

              <div className="flex md:flex-row flex-col items-start md:gap-14 gap-4 w-full" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
                <div className="flex flex-col gap-6 md:w-2/6 w-full" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1500">
                  <h1 className="greenSemiboldTextBase">FEATURES</h1>
                  <p className="boldBlack">Registration of Training and Conferences</p>
                  <p className="blackTextBase">
                    Stay informed and engaged by registering for curated training sessions and conferences directly through the platform. This feature enables users to explore a
                    diverse range of topics and access exclusive events tailored to their professional development needs.
                  </p>
                </div>
                <CIPM11 className="md:w-4/6 w-full h-full" data-aos="fade-left" />
              </div>

              <div className="flex md:flex-row flex-col-reverse items-start md:gap-14 gap-4 w-full" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
                <CIPM12 className="md:w-4/6 w-full h-full" data-aos="fade-right" />
                <div className="flex flex-col gap-6 md:w-2/6 w-full" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1500">
                  <h1 className="greenSemiboldTextBase">FEATURES</h1>
                  <p className="boldBlack">Make payment seamlessly online </p>
                  <p className="blackTextBase">
                    Enjoy the convenience of online payment options for all membership-related transactions. This feature allows users to complete payments quickly and securely,
                    eliminating the need for manual processing and paperwork. With just a few clicks, users can renew their memberships, register for events, and access premium
                    content hassle-free.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="section">
            <h1 className="greenSemiboldText">5. Project Takeaways</h1>
            <p className="md:w-[581px] boldBlack pt-4"> Conducting research to validate our early assumptions helped us identify specific areas to focus on.</p>

            <div className="mt-6 bg-[#FAFAFA] md:p-16 p-4 text-base font-medium text-[#454545]">
              <p>
                I delved into the needs and preferences of HR professionals, despite the constraints outlined in the Business Requirement Document (BRD). Using these insights, I
                crafted an intuitive application that encompasses all the necessary features while aligning with the business objectives and user needs. Through multiple design
                reviews, I refined the application to deliver a more impactful and user-centric experience.
                <br />
                <br />
                This project was built upon existing design systems from the organization's brand, allowing for a seamless integration of the new application with the established
                visual identity
              </p>
            </div>
          </section>
        </section>
      </main>
      {/* <Footer /> */}
    </section>
  );
};

export default CIPM;
