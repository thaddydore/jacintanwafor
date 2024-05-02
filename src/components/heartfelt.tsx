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

const Heartfelt = () => {
  return (
    <section>
      {/* <Header /> */}
      <main>
        <section className="pt-28 pb-40">
          <div className="flex flex-col gap-10 text-center">
            <h1 className="big-text">
              Transfer funds and <br /> mobile top-ups
            </h1>
            <p className="text-[#061818] text-sm font-medium">DESIGN FOR MOBILE APP - FINTECH</p>
          </div>

          <HeartFeltBg className="w-full px-[30px] py-0 my-0 h-full object-cover mt-16 mb-6 " />

          <section className="xl:px-[300px] md:px-32 px-8 ">
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

            <div className="pt-28 flex lg:flex-row flex-col lg:gap-[178px] w-full pb-16">
              <div>
                <h1 className="font-semibold text-base text-[#299E9E]">MY ROLE</h1>
                <dd className="text-base text-[#454545] pt-4">Product Designer, Research, branding, design, prototyping</dd>
              </div>
              <div>
                <h1 className="font-semibold text-base text-[#299E9E]">SCOPE</h1>
                <dd className="text-base text-[#454545] pt-4">1 lead Designer, 1 Product Manger, 1 Product Owner</dd>
              </div>
              <div>
                <h1 className="font-semibold text-base text-[#299E9E]">TIMELINE</h1>
                <dd className="text-base text-[#454545] pt-4">4 weeks</dd>
              </div>
            </div>

            <p className="font-Fraunces font-light text-2xl text-[#061818] ">
              Heartfelt, also a <span className="text-[#061818] font-semibold">web application</span> with the aim of digitalizing the art of group gifting and individual gifting
              to friends and family, following meticulous designs and planning.
            </p>
          </section>

          <section className="section">
            <h1 className="text-center font-medium text-xl text-[#061818]">OVERVIEW OF THE DESIGNED WEB APPLICATION</h1>
            <div className="flex flex-col md:gap-28 gap-4 mt-16">
              <div data-aos="fade-up" data-aos-duration="2000">
                <HeartFelt1 className="w-full h-full" />
                <p className="text-xl text-[#454545] text-center pt-4">Group Contribution to Gift Card</p>
              </div>

              <div data-aos="fade-up" data-aos-duration="2000">
                <div className="flex md:flex-row flex-col md:gap-[60px] gap-6 items-start">
                  <HeartFelt2 className="h-full" data-aos="fade-right" data-aos-duration="2000" />
                  <HeartFelt3 className="h-full" data-aos="fade-left" data-aos-duration="2000" />
                </div>
                <p className="text-xl text-[#454545] text-center pt-4">Adding New Gift Card</p>
              </div>

              <div data-aos="fade-up" data-aos-duration="2000">
                <HeartFelt4 className="w-full h-full" />
                <p className="text-xl text-[#454545] text-center pt-4">The Purchased Gift Cards</p>
              </div>

              <div data-aos="fade-up" data-aos-duration="2000">
                <HeartFelt5 className="w-full h-full" />
                <p className="text-xl text-[#454545] text-center pt-4">The Saved Gift Cards</p>
              </div>
              <div data-aos="fade-up" data-aos-duration="2000">
                <HeartFelt6 className="w-full h-full" />
                <p className="text-xl text-[#454545] text-center pt-4">User’s Account Section</p>
              </div>
              <div data-aos="fade-up" data-aos-duration="2000">
                <HeartFelt7 className="w-full h-full" />
                <p className="text-xl text-[#454545] text-center pt-4">App Notifications</p>
              </div>
            </div>
          </section>

          <section className="bg-[#F9F6F6] py-24 mt-8 section">
            <h1 className="font-semibold text-xl text-[#299E9E]">PROBLEM STATEMENT</h1>
            <p className="pt-8 font-Fraunces text-[26px] leading-[52px] text-[#061818]">
              Because we often send gifts to loved ones during important times, and distance can make this difficult, Heartfelt aims to bring gift-giving into the digital age, for
              both individuals and groups. <span className="font-semibold">How can we keep the traditional feel of gift-giving while using technology?</span>
            </p> 

            <div className="grid md:grid-cols-2 grid-cols-1 mt-24 gap-x-24 gap-y-16 items-center">
<div className="text-center font-Fraunces font-bold text-[#787878] text-[26px]">
Breakdown of the problem...
</div>
<div>
    <h1 className="flex items-center font-bold font-Fraunces text-[26px] leading-10">Distance Barrier <LocationIcon /> </h1>
    <p className="mt-7 text-base text-[#454545]">
    Addresses the challenge of distance by providing a digital platform for gifting, making it easier for people to send gifts to their loved ones regardless of geographic location.
    </p>
</div>
<div>
    <h1 className="flex items-center font-bold font-Fraunces text-[26px] leading-10">Ineffective Gift Selection: <EaseIcon /> </h1>
    <p className="mt-7 text-base text-[#454545]">
    Struggling to select suitable gifts from a variety of brands simultaneously, leading to decision-making challenges and potential dissatisfaction with the chosen gifts.
    </p>
</div>
<div>
    <h1 className="flex items-center font-bold font-Fraunces text-[26px] leading-10">Ease of Group Gifting<GroupIcon /> </h1>
    <p className="mt-7 text-base text-[#454545]">
    Heartfelt facilitates group gifting, allowing multiple individuals to contribute to a single gift, thereby fostering collective celebration among friends and family members.
    </p>
</div>
            </div>
          </section>
        </section>
      </main>
      {/* <Footer /> */}
    </section>
  );
};

export default Heartfelt;
