import Header from './header'
import { ReactComponent as MealManagerBg } from "../assets/svg/meal-manager.svg";
import { ReactComponent as MealManager1 } from "../assets/svg/meal-manager-1.svg";
import { ReactComponent as MealManager2 } from "../assets/svg/meal-manager-2.svg";
import { ReactComponent as MealManager3 } from "../assets/svg/meal-manager-3.svg";
import { ReactComponent as MealManager4 } from "../assets/svg/meal-manager-4.svg";
import CustomSwiper from '../custom/swiper/main';
import { Link } from 'react-router-dom';
import Footer from './footer';

const MealManager = () => {
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

        <MealManagerBg
          className="w-full px-[30px] py-0 my-0 h-full object-cover mt-16 mb-6"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        />
      </section>

      <section className="xl:px-[300px] md:px-32 px-8">
        <p className="text-[#C2C8CB] text-base">
        At Cyberspace, I led the design of an innovative application aimed at addressing meal management challenges within the organization. This is called ‘Meal Manager’
        </p>

        <div className="pt-20">
          <h1 className="text-[#DEE1E3] text-[26px] font-semibold leading-[36px] text-left">INTRODUCTION</h1>
          <dd className="white-introduction ">
          Cyberspace's Meal Manager is an innovative application designed to enable staff to print meal tickets and place food orders hassle-free, eliminating the risk of unauthorized meal consumption and ensuring prompt payment to vendors.
          </dd>
        </div>

        <div className="pt-28 flex lg:flex-row flex-col lg:gap-[70px] w-full pb-16">
          <div className="md:w-5/6">
            <h1 className="font-semibold text-base text-[#DEE1E3]">MY ROLE</h1>
            <dd className="text-base text-[#C2C8CB] pt-4">
            I took charge of conceptualizing and designing user-friendly interfaces and functionalities. The goal was to create a solution that effectively addressed the unique needs and challenges of both staff members and food vendors. Through careful design decisions, I aimed to enhance user experience and streamline operational efficiency for all stakeholders involved.
            </dd>
          </div>

          <div className="flex flex-col gap-10">
            <div>
              <h1 className="font-semibold text-base text-[#DEE1E3]">SCOPE</h1>
              <dd className="text-base text-[#C2C8CB] pt-4">1 lead Designer, 1 product owner, squad of developers.</dd>
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
          slide1={<MealManager1 className="w-full h-full" />}
          slide2={<MealManager2 className="w-full h-full" />}
          slide3={<MealManager3 className="w-full h-full" />}
          slide4={<MealManager4 className="w-full h-full" />}
        />
      </section>
    </main>
    <Footer />
  </section>
  )
}

export default MealManager