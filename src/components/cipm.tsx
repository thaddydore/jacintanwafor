import React from 'react'
import Header from './header'
import { ReactComponent as CIPMBG } from "../assets/svg/cipmbg.svg";
import { Link } from 'react-router-dom';
import Footer from './footer';

const CIPM1 = require("../assets/png/cipm-1.png");
const CIPM2 = require("../assets/png/cipm-2.png");
const CIPM3 = require("../assets/png/cipm-3.png");

const CIPM = () => {
  return (
    <section className='overflow-x-hidden'>
        <Header />
        <main>
            <section className="pt-28 pb-40">
            <div className="flex flex-col gap-10 text-center">
            <h1 className="big-text">
            Regulatory body for  <br />HR professionals 
            </h1>
            <p className="text-[#061818] text-sm font-medium">DESIGN FOR WEB PORTAL</p>
          </div>

          <CIPMBG className="w-full px-[30px] py-0 my-0 h-full object-cover mt-16 mb-6 " />

          <section className="xl:px-[364px] md:px-32 px-8 ">
            <p className="text-[#454545] text-base">
              {" "}
              <span className="font-semibold"> CIPM Membership Portal</span> is one of my projects as a product designer in{" "}
              <span className="font-semibold"> Cyberspace,</span>  which leverages on regulating the HR professionals in Nigeria.{" "}
            
            </p>

            <div className="pt-20">
              <h1 className="text-[#11643C] text-[26px] font-semibold leading-[36px] text-left">INTRODUCTION</h1>
              <dd className="introduction">
              The Membership Portal of the Chartered Institute of Personnel Management (CIPM) serves as the regulatory body for HR professionals in Nigeria. Members gain access to valuable resources, including insights, best practices, and practical solutions tailored to address contemporary HR challenges. This platform empowers members to enhance their skills, stay informed about industry trends, and deliver value.
              </dd>
            </div>

            <div className="pt-28 flex lg:flex-row flex-col lg:gap-[70px] w-full pb-16">
              <div className="md:w-5/6">
                <h1 className="font-semibold text-base text-[#11643C]">MY ROLE</h1>
                <dd className="text-base text-[#454545] pt-4">
                Product Designer,
Research, branding, design,
prototyping
                </dd>
              </div>

             
                <div>
                  <h1 className="font-semibold text-base text-[#11643C]">SCOPE</h1>
                  <dd className="text-base text-[#454545] pt-4">1 lead Designer, 3 Product Manger, a squad of developers, a board of stakeholders.</dd>
                </div>
                <div>
                  <h1 className="font-semibold text-base text-[#11643C]">TIMELINE</h1>
                  <dd className="text-base text-[#454545] pt-4">12 weeks</dd>
                </div>
             
            </div>

            {/* <Link to={"/"} className="text-[26px] leading-[26px] text-[#11643C]">
              <span className="font-semibold">Get in touch</span> for more details
            </Link> */}
          </section>

<section className='flex gap-[56px] overflow-x-scroll md:overflow-x-hidden my-24' data-aos="fade-left">
<img src={CIPM1} alt="screenshot" className='w-full' />
<img src={CIPM2} alt="screenshot" className='w-full max-w-[895px]'/>
<img src={CIPM3} alt="screenshot" className='w-full'/>
</section>

<section className='xl:px-[364px] md:px-32 px-8'>
    <h1 className='text-[#11643C] font-semibold text-xl'>Problem Discovery</h1>
    <p className='font-Fraunces text-6xl font-semibold text-[#061818] w-[1000px] pt-4'>
    HR professionals lacked access
to essential resources for organizational development 
    </p>
</section>
          
            </section>
        </main>
        <Footer />
    </section>
  )
}

export default CIPM