import { ReactComponent as HeartFeltBg } from "../assets/svg/heartfelt.svg";
import { ReactComponent as HeartFelt1 } from "../assets/svg/heartfelt-1.svg";
import { ReactComponent as HeartFelt2 } from "../assets/svg/heartfelt-2.svg";
import { ReactComponent as HeartFelt3 } from "../assets/svg/heartfelt-3.svg";
import { ReactComponent as HeartFelt4 } from "../assets/svg/heartfelt-4.svg";
import { ReactComponent as HeartFelt5 } from "../assets/svg/heartfelt-5.svg";
import { ReactComponent as HeartFelt6 } from "../assets/svg/heartfelt-6.svg";
import { ReactComponent as HeartFelt7 } from "../assets/svg/heartfelt-7.svg";
import { ReactComponent as LocationIcon } from "../assets/svg/location.svg";
import { ReactComponent as EaseIcon } from "../assets/svg/ease.svg";
import { ReactComponent as GroupIcon } from "../assets/svg/group.svg";
import { ReactComponent as Mary } from "../assets/svg/mary.svg";
import { ReactComponent as Google } from "../assets/svg/google.svg";
import { ReactComponent as Flexible } from "../assets/svg/flexible.svg";
import { ReactComponent as Simple } from "../assets/svg/simple.svg";
import { ReactComponent as Coherent } from "../assets/svg/coherent.svg";
import { ReactComponent as SiteMapping } from "../assets/svg/heartfelt-8.svg";
import { ReactComponent as InformationArchitecture } from "../assets/svg/heartfelt-9.svg";
import { ReactComponent as LandingPage1 } from "../assets/svg/heartfelt-10.svg";
import { ReactComponent as LandingPage2 } from "../assets/svg/heartfelt-11.svg";
import { ReactComponent as LandingPage3 } from "../assets/svg/heartfelt-12.svg";
import { useEffect } from "react";

const Heartfelt = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component mounts
  }, []);
  return (
    <section>
      {/* <Header /> */}
      <main>
        <section className="pt-28">
          <div className="flex flex-col gap-10 text-center">
            <h1 className="big-text">
              Transfer funds and <br /> mobile top-ups
            </h1>
            <p className="text-[#061818] text-sm font-medium">DESIGN FOR MOBILE APP - FINTECH</p>
          </div>

          <HeartFeltBg className="w-full px-[30px] py-0 my-0 h-full object-cover mt-16 mb-6 " />
        </section>
        <section className="section">
          <p className="text-[#454545] text-base">
            {" "}
            <span className="font-semibold">Heartfelt</span> is web application designed to modernize the gift-giving experience for family and friends on special occasions. This
            is one of my freelance projects.
          </p>

          <div className="pt-20">
            <h1 className="text-[#299E9E] text-[26px] font-semibold leading-[36px] text-left">INTRODUCTION</h1>
            <dd className="introduction">
              Heartfelt is a web application designed to modernize the gift-giving experience for family and friends on special occasions. With Heartfelt, users can seamlessly
              organize group gifts for their loved ones, allowing multiple individuals to contribute towards a single, meaningful present. This helps when you're far from the
              people you care about, so distance doesn't stop you from spreading love.
            </dd>
          </div>

          <div className="md:pt-28 pt-4 flex lg:flex-row flex-col lg:gap-[178px] w-full pb-16 gap-4">
            <div>
              <h1 className="font-semibold text-base text-[#299E9E]">MY ROLE</h1>
              <dd className="text-base text-[#454545] md:pt-4">Product Designer, Research, branding, design, prototyping</dd>
            </div>
            <div>
              <h1 className="font-semibold text-base text-[#299E9E]">SCOPE</h1>
              <dd className="text-base text-[#454545] md:pt-4">1 lead Designer, 1 Product Manger, 1 Product Owner</dd>
            </div>
            <div>
              <h1 className="font-semibold text-base text-[#299E9E]">TIMELINE</h1>
              <dd className="text-base text-[#454545] md:pt-4">4 weeks</dd>
            </div>
          </div>

          <p className="font-Fraunces font-light md:text-2xl text-lg text-[#061818] ">
            Heartfelt, also a <span className="text-[#061818] font-semibold">web application</span> with the aim of digitalizing the art of group gifting and individual gifting to
            friends and family, following meticulous designs and planning.
          </p>
        </section>

        <section className="section">
          <h1 className="text-center font-medium text-xl text-[#061818]">OVERVIEW OF THE DESIGNED WEB APPLICATION</h1>
          <div className="flex flex-col md:gap-28 gap-4 mt-16">
            <div data-aos="fade-up" data-aos-duration="2000">
              <HeartFelt1 className="w-full h-full" />
              <p className="underTitle">Group Contribution to Gift Card</p>
            </div>

            <div data-aos="fade-up" data-aos-duration="2000">
              <div className="flex md:flex-row flex-col md:gap-[60px] gap-6 items-start">
                <HeartFelt2 className="h-full w-full" data-aos="fade-right" data-aos-duration="2000" />
                <HeartFelt3 className="h-full w-full" data-aos="fade-left" data-aos-duration="2000" />
              </div>
              <p className="underTitle">Adding New Gift Card</p>
            </div>

            <div data-aos="fade-up" data-aos-duration="2000">
              <HeartFelt4 className="w-full h-full" />
              <p className="underTitle">The Purchased Gift Cards</p>
            </div>

            <div data-aos="fade-up" data-aos-duration="2000">
              <HeartFelt5 className="w-full h-full" />
              <p className="underTitle">The Saved Gift Cards</p>
            </div>
            <div data-aos="fade-up" data-aos-duration="2000">
              <HeartFelt6 className="w-full h-full" />
              <p className="underTitle">User’s Account Section</p>
            </div>
            <div data-aos="fade-up" data-aos-duration="2000">
              <HeartFelt7 className="w-full h-full" />
              <p className="underTitle">App Notifications</p>
            </div>
          </div>
        </section>

        <section className="bg-[#F9F6F6] mt-8 section">
          <h1 className="font-semibold text-xl text-[#299E9E]">PROBLEM STATEMENT</h1>
          <p className="pt-8 introduction">
            Because we often send gifts to loved ones during important times, and distance can make this difficult, Heartfelt aims to bring gift-giving into the digital age, for
            both individuals and groups. <span className="font-semibold">How can we keep the traditional feel of gift-giving while using technology?</span>
          </p>

          <div className="grid md:grid-cols-2 grid-cols-1 md:mt-24 mt-8 gap-x-24 md:gap-y-16 gap-y-6 items-center">
            <div className="text-center font-Fraunces font-bold text-[#787878] text-[26px]">Breakdown of the problem...</div>
            <div>
              <h1 className="flex items-center font-bold font-Fraunces text-[26px] leading-10">
                Distance Barrier <LocationIcon />{" "}
              </h1>
              <p className="mt-7 text-base text-[#454545]">
                Addresses the challenge of distance by providing a digital platform for gifting, making it easier for people to send gifts to their loved ones regardless of
                geographic location.
              </p>
            </div>
            <div>
              <h1 className="flex items-center font-bold font-Fraunces text-[26px] leading-10">
                Ineffective Gift Selection: <EaseIcon />{" "}
              </h1>
              <p className="mt-7 text-base text-[#454545]">
                Struggling to select suitable gifts from a variety of brands simultaneously, leading to decision-making challenges and potential dissatisfaction with the chosen
                gifts.
              </p>
            </div>
            <div>
              <h1 className="flex items-center font-bold font-Fraunces text-[26px] leading-10">
                Ease of Group Gifting
                <GroupIcon />{" "}
              </h1>
              <p className="mt-7 text-base text-[#454545]">
                Heartfelt facilitates group gifting, allowing multiple individuals to contribute to a single gift, thereby fostering collective celebration among friends and family
                members.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <h1 className="font-semibold text-xl text-[#299E9E]">DEFINING TARGET AUDIENCES</h1>
          <p className="pt-8 introduction">
            Heartfelt is used by different personas across individuals and groups of people. In addition to our direct customers, even our customers' friends (end-users) fall under
            our user pool.
          </p>

          <div className="flex md:flex-row flex-col mt-16 md:gap-[60px] gap-6">
            <div className="border-[1px] border-[#E4D7D7] p-8 rounded-md" data-aos="fade-up" data-aos-duration="1500">
              <div className="flex gap-6 items-center">
                <Mary />
                <div>
                  <h1 className="font-bold text-[26px] text-[#454545] leading-7">Mary</h1>
                  <p className="font-medium text-xl">Unilag Student</p>
                </div>
              </div>

              <div className="mt-10 text-base text-[#454545]">
                <h1 className=" font-bold ">About</h1>
                <p className="font-medium ">Currently studying in the university. They represent individuals with a large network of friends.</p>
              </div>

              <div className="mt-10 text-base text-[#454545]">
                <h1 className=" font-bold ">Needs</h1>
                <p className="font-medium ">
                  Gift her loved ones on special occasions even when she's far away. She seeks a hassle-free way to show her affection without needing to be in the same location.
                </p>
              </div>
            </div>
            <div className="border-[1px] border-[#E4D7D7] p-8 rounded-md" data-aos="fade-up" data-aos-duration="1500">
              <div className="flex gap-6 items-center">
                <Google />
                <div>
                  <h1 className="font-bold text-[26px] text-[#454545] leading-7">Google</h1>
                  <p className="font-medium text-xl">Company</p>
                </div>
              </div>

              <div className="mt-10 text-base text-[#454545]">
                <h1 className=" font-bold ">About</h1>
                <p className="font-medium ">A multinational technology company with a diverse workforce spanning different regions of the world.</p>
              </div>

              <div className="mt-10 text-base text-[#454545]">
                <h1 className=" font-bold ">Needs</h1>
                <p className="font-medium ">
                  Seeks to recognize and celebrate milestones achieved by employees, as well as their special occasions. Aims to efficiently celebrate all employees, regardless of
                  their geographical location.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-[#F9F6F6]">
          <h1 className="font-semibold text-xl text-[#299E9E]">PROCESS</h1>
          <p className="pt-8 textSemiboldFraunces">We kicked off the process with a comprehensive experience review of the traditional experience of sending gift.</p>

          <div className="mt-10">
            <p className="font-medium text-base text-[#454545]">KEY TAKEAWAYS</p>
            <div className="grid md:grid-cols-2 gap-y-10 gap-x-24 text-base text-[#454545] items-start mt-8">
              <p>
                Many people desire the ability to <span className="font-semibold">collaborate with others</span> or pool resources when purchasing gifts.
              </p>
              <p>
                Some individuals may prefer to give the same gift to <span className="font-semibold">multiple recipients.</span>
              </p>
              <p>
                It's not uncommon for individuals to <span className="font-semibold">forget special occasions</span> or struggle with time zone differences.
              </p>
              <p>
                <span className="font-semibold">Coordinating gift purchases</span> can be challenging, especially when multiple people are involved in the process.
              </p>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-4">
            <h1 className="text-[26px] leading-10 font-Fraunces text-[#061818] font-bold">Design Goals</h1>
            <p className="text-base text-[#454545]">The experience review also helped us define our focus areas for the redesign..</p>

            <div className="flex md:flex-row flex-col gap-10 mt-6">
              <div data-aos="fade-up">
                <div className="bg-white px-[123px] py-[49px]">
                  <Flexible />
                </div>
                <h1 className="text-[26px] leading-10 font-Fraunces text-[#061818] font-bold pt-6">Flexible</h1>
                <p className="mt-4 text-base text-[#454545]">Heartfelt should seamlessly adapt to variable kinds of gift cards across special occasions.</p>
              </div>
              <div data-aos="fade-up">
                <div className="bg-white px-[123px] py-[49px]">
                  <Simple />
                </div>
                <h1 className="text-[26px] leading-10 font-Fraunces text-[#061818] font-bold pt-6">Simple</h1>
                <p className="mt-4 text-base text-[#454545]">Users should easily complete their goal, which is purchasing gift cards.</p>
              </div>
              <div data-aos="fade-up">
                <div className="bg-white px-[123px] py-[49px]">
                  <Coherent />
                </div>
                <h1 className="text-[26px] leading-10 font-Fraunces text-[#061818] font-bold pt-6">Coherent</h1>
                <p className="mt-4 text-base text-[#454545]">Focusing on user goals and workflows rather than silos of information.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <h1 className="font-semibold text-xl text-[#299E9E]">PROCESS</h1>
          <div className="flex md:flex-row flex-col gap-6 items-start w-full mt-6">
            <p className="textSemiboldFraunces md:w-1/2">Identifying and prioritizing user goals.</p>
            <p className="md:w-1/2 text-base text-[#454545]">
              A comprehensive list of user goals across personas were framed and stack ranked. This exercise laid the <span className="font-semibold">foundation for our MVP.</span>
               
            </p>
          </div>

          <div className="mt-16 bg-[#F9F6F6] md:py-20 md:px-16 py-6 px-4 text-[#1E7676]">
            <p className=" font-Fraunces font-semibold md:text-4xl text-2xl">An example of a Job-To-Be-Done for Heartfelt to capture user goals and needs.</p>
            <div className="flex md:flex-row flex-col md:gap-16 gap-6 md:mt-14 mt-6 w-full items-start">
              <div className="flex flex-col md:gap-6 gap-2">
                <h1 className="font-bold text-xl">ACTOR</h1>
                <p className="text-[#29A3A3] md:text-2xl text-xl">As a giver,</p>
              </div>
              <div className="flex flex-col md:gap-6 gap-2">
                <h1 className="font-bold text-xl">SITUATION</h1>
                <p className="text-[#29A3A3] md:text-2xl text-xl">When I need to send a gift card</p>
              </div>
              <div className="flex flex-col md:gap-6 gap-2">
                <h1 className="font-bold text-xl">MOTIVATION</h1>
                <p className="text-[#29A3A3] md:text-2xl text-xl">I want to view multiple brands </p>
              </div>
              <div className="flex flex-col md:gap-6 gap-2">
                <h1 className="font-bold text-xl">OUTCOME</h1>
                <p className="text-[#29A3A3] md:text-2xl text-xl">so that I can best decide.</p>
              </div>
            </div>
          </div>

          <div className="md:mt-28 mt-8" data-aos="fade-left">
            <h1 className="font-semibold text-xl text-[#299E9E]">SITE MAPPING</h1>
            <p className="textSemiboldFraunces pt-4">Sorting and organizing important content using card sorting exercises for better clarity and ease of use.</p>
            <SiteMapping className="mt-14 w-full h-full" />
          </div>

          <div className="md:mt-28 mt-8" data-aos="fade-left">
            <h1 className="font-semibold text-xl text-[#299E9E]">INFORMATION ARCHITECTURE</h1>
            <p className="textSemiboldFraunces pt-4">
              Testing the layout and hierarchy of content to ensure timely delivery of key information throughout users' journey on the site.
            </p>
            <InformationArchitecture className="mt-14 w-full h-full" />
          </div>
        </section>

        <section className="section bg-[#F1F9F9] md:py-40 py-10">
          <h1 className="text-center text-[#378181] font-bold md:text-[92px] text-3xl whitespace-nowrap">Heartfelt Website</h1>
          <div className="flex md:mt-16 mt-6">
            <LandingPage1 className="w-full h-full" />
            <div className="w-full h-full flex flex-col gap-8">
              <LandingPage2 className="w-full h-full" />
              <LandingPage3 className="w-full h-full" />
            </div>
          </div>
        </section>

        <section className="section">
          <h1 className="font-semibold text-xl text-[#299E9E]">NEXT STEPS</h1>
          <p className="textSemiboldFraunces pt-4">Given the designed MVP, the project could be further redefined using the user’s feedback</p>

          <div className="grid md:grid-cols-3 text-[#061818] md:gap-10 gap-4 md:mt-16 mt-8">
            <div className="p-7 bg-[#F9F6F6] rounded-md">
              <h1 className="text-lg font-bold">01</h1>
              <p className="text-sm ">Enhance the process of purchasing and collaborating on gift cards.</p>
            </div>
            <div className="p-7 bg-[#F9F6F6] rounded-md">
              <h1 className="text-lg font-bold">02</h1>
              <p className="text-sm ">Personalized recommendations based on user preferences and past behavior.</p>
            </div>
            <div className="p-7 bg-[#F9F6F6] rounded-md">
              <h1 className="text-lg font-bold">03</h1>
              <p className="text-sm ">Integrate social sharing features for users to share their gift-giving experiences.</p>
            </div>
          </div>
        </section>
      </main>
      {/* <Footer /> */}
    </section>
  );
};

export default Heartfelt;
