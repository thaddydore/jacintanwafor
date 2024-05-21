import { Link } from 'react-router-dom'
import {ReactComponent as IdentityPassImg} from "../assets/svg/identity-pass.svg"
import CustomSwiper from '../custom/swiper/main'
import {ReactComponent as IdentityPass1} from "../assets/svg/identity-pass-1.svg"
import {ReactComponent as IdentityPass2} from "../assets/svg/identity-pass-2.svg"
import {ReactComponent as IdentityPass3} from "../assets/svg/identity-pass-3.svg"
import {ReactComponent as IdentityPass4} from "../assets/svg/identity-pass-4.svg"
import { useEffect } from 'react'

const IdentityPass = () => {
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

          <IdentityPassImg className="w-full px-[30px] py-0 my-0 h-full object-cover mt-16 mb-6"   data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000" />

         
        </section>
        <section className="xl:px-[300px] md:px-32 px-8">
            <p className="text-[#454545] text-base">
              {" "}
              At Cyberspace, I contributed to the development of the   <span className="font-semibold">CyberPay Verification Portal</span> as a product designer. This platform was designed to   <span className="font-semibold">verify user identities and gain real-time insights</span> to prevent fraud effectively.
            </p>

            <div className="pt-20">
              <h1 className="text-[#5E9825] text-[26px] font-semibold leading-[36px] text-left">INTRODUCTION</h1>
              <dd className="introduction">
              CyberPay Verification Portal is an internal project aimed to enhance security and prevent fraud by verifying user identities in real-time. This is used to validate user information and gain insights to ensure secure transactions.
              </dd>
            </div>

            <div className="pt-28 flex lg:flex-row flex-col lg:gap-[70px] w-full pb-16">
              <div className="md:w-5/6">
                <h1 className="font-semibold text-base text-[#5E9825]">MY ROLE</h1>
                <dd className="text-base text-[#454545] pt-4">
                I designed user interfaces and experiences for the CyberPay Verification Portal, focusing on security and user-friendly interactions. I worked closely with the development team, incorporating user feedback to create intuitive designs. My role ensured a seamless verification process for users while maintaining robust security measures.
                </dd>
              </div>

              <div className="flex flex-col gap-10">
                <div>
                  <h1 className="font-semibold text-base text-[#5E9825]">SCOPE</h1>
                  <dd className="text-base text-[#454545] pt-4">1 lead Designer, 1 Product Owner, 2 developers.</dd>
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
        slide1={<IdentityPass1 className="w-full h-full" />}
        slide2={<IdentityPass2 className="w-full h-full" />}
        slide3={<IdentityPass3 className="w-full h-full" />}
        slide4={<IdentityPass4 className="w-full h-full" />}
      />
    </section>

    </main>
  )
}

export default IdentityPass