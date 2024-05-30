import { ReactComponent as Chisom2 } from "../assets/svg/chisom-2.svg";
import CustomSwiper from "../custom/swiper/main";
import { ReactComponent as Dash } from "../assets/svg/dash.svg";
import { useEffect } from "react";

const experiences = [
  {
    role: "Product Designer - Cyberspace",
    duration: "Mar 2022 - Present | Full -time | Lagos, Nigeria",
  },
  {
    role: "Product Design Lead - Flickwheel",
    duration: "Jan 2021 - Feb 2022 | Full -time | Lagos, Nigeria",
  },
  {
    role: "UX Designer - CareerNub",
    duration: "Feb 2021 - Mar 2021 | Volunteer | New Delhi, India",
  },
  {
    role: "UI / UX Designer - Bytecode",
    duration: "Feb 2020 - Mar 2021 | Contract | Lagos, Nigeria",
  },
];
const Resume = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component mounts
  }, []);
  return (
    <main>
      <section className="section flex md:flex-row flex-col md:gap-20 gap-8">
        <div className="md:w-1/2">
          <Chisom2 className="w-full h-full" />
        </div>
        <div className="md:w-1/2">
          <h1 className="font-Fraunces text-4xl font-semibold text-[#061818]">Experience</h1>
          <div className="md:mt-10 mt-5 flex flex-col md:gap-10 gap-6 w-full">
            {experiences?.map((item, index) => (
              <div key={index}>
                <h2 className="font-medium md:text-2xl text-lg text-[#061818]">{item.role}</h2>
                <dd className="text-base text-[#828282] pt-2">{item.duration}</dd>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F9F6F6] py-10 md:px-32">
        <h1 className="text-center text-[#454545] font-semibold text-xl">TESTIMONIALS</h1>
        <CustomSwiper
          fourSlides={false}
          pagination={true}
          slide1={
            <div className="bg-[#F9F6F6] h-full">
              <div className="pb-10 md:pb-10">
                <dd className="font-semibold text-[#061818] md:text-[42px] text-2xl md:leading-[52px] md:px-20 px-8">
                  I collaborated with Jacinta on a project where her role was a Product Designer. Her speed, creativity, and attention to detail greatly contributed to the
                  project's success. I highly recommend her and look forward to working together on future projects.
                </dd>
                <p className="flex justify-center items-center gap-4 my-4">
                  <Dash />
                  Joseph Burutu, Co-founder Crowd
                </p>
              </div>
            </div>
          }
          slide2={
            <div className="bg-[#F9F6F6] h-full">
              <div className="pb-10 md:pb-10">
                <dd className="font-semibold text-[#061818] md:text-[42px] text-2xl md:leading-[52px] md:px-20 px-8">
                  Jacinta is a team player who is always ready to learn and contributes her best to achieve her goals. Attentive to details and is passionate about creating
                  interactive and usable interfaces. During her internship, she designed creative and innovative product designs.
                </dd>
                <p className="flex justify-center items-center gap-4 my-4">
                  <Dash />
                  Shivi Sharma, Lead Fraud Analytics Varo Bank
                </p>
              </div>
            </div>
          }
          className="md:mt-16 mt-4"
        />
      </section>

      <section className="section">
        <h1 className="introduction font-bold">My Story</h1>
        <dd className="pt-4 font-medium md:text-xl text-lg text-[#454545]">
          I'm currently a Product Designer at Cyberspace, an IT company dedicated to leveraging technology for network and software solutions across Nigeria and beyond.
          <br />
          <br />
          My journey began in 2015 when I delved into front-end web development at NIIT, Abuja. Around 2020, I found my passion for design and decided to pivot.
          <br />
          <br />
          I enrolled for several design cohorts, and I started crafting websites and brand identities for local businesses, refining my skills with each project. Since then, I've
          been on a continuous journey of skill development, collaborating with amazing individuals on innovative ventures.
          <br />
          <br />
          In my role as a Product Designer, I've had the privilege of working across diverse industries, including web, mobile, B2C, B2B, automobile, Fin-tech, and Education
          sectors.
          <br />
          <br />
          Outside of design, I find joy in mentoring aspiring designers and providing career guidance to those in need.
        </dd>
      </section>
    </main>
  );
};

export default Resume;
