import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {ReactComponent as SettlementAutomationImg} from "../assets/svg/settlement-automation-compressed.svg"
import {ReactComponent as SettlementAutomation1} from "../assets/svg/settlement-1.svg"
import {ReactComponent as SettlementAutomation2} from "../assets/svg/settlement-2.svg"
import {ReactComponent as SettlementAutomation3} from "../assets/svg/settlement-3.svg"
import {ReactComponent as SettlementAutomation4} from "../assets/svg/settlement-4.svg"
import CustomSwiper from '../custom/swiper/main'

const SettlementAutomation = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component mounts
  }, []);
  return (
    <main>
    <section className="pt-28">
           <div className="flex flex-col gap-10 text-center">
             <h1 className="big-text">
             Verify user’s <br /> identity 
             </h1>
             <p className="text-[#061818] text-sm font-medium">DESIGNING FOR CYBERPAY(NDA)</p>
           </div>
 
           <SettlementAutomationImg className="w-full px-[30px] py-0 my-0 h-full object-cover mt-16 mb-6"   data-aos="flip-left"
             data-aos-easing="ease-out-cubic"
             data-aos-duration="1000" />
 
          
         </section>
         <section className="xl:px-[300px] md:px-32 px-8">
             <p className="text-[#454545] text-base">
               {" "}
               As a product designer at Cyberspace, I led the development of <span className="font-semibold">Automated Settlement,</span> a project focused on <span className="font-semibold">seamlessly verifying transactions and initiating settlements.</span>
               
             </p>
 
             <div className="pt-20">
               <h1 className="text-[#5E9825] text-[26px] font-semibold leading-[36px] text-left">INTRODUCTION</h1>
               <dd className="introduction">
               We addressed the crucial task of settling payments for merchants on our platform. Our goal was to simplify and automate the process, ensuring that merchants receive their funds promptly and reliably.
               </dd>
             </div>
 
             <div className="pt-28 flex lg:flex-row flex-col lg:gap-[70px] w-full pb-16">
               <div className="md:w-5/6">
                 <h1 className="font-semibold text-base text-[#5E9825]">MY ROLE</h1>
                 <dd className="text-base text-[#454545] pt-4">
                 I designed the user interface and experience to facilitate seamless transaction verification and settlement initiation. I focused on creating intuitive workflows and visually appealing interfaces to enhance user satisfaction and streamline the settlement process for merchants. Through iterative design iterations and user feedback, I refined the interface to optimize usability and efficiency, ultimately contributing to the success of the project.
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
 
           
         <section className="section">
       
       <CustomSwiper
         slide1={<SettlementAutomation1 className="w-full h-full" />}
         slide2={<SettlementAutomation2 className="w-full h-full" />}
         slide3={<SettlementAutomation3 className="w-full h-full" />}
         slide4={<SettlementAutomation4 className="w-full h-full" />}
       />
     </section>
 
     </main>
  )
}

export default SettlementAutomation