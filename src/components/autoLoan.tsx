// import { ReactComponent as AutoLoanBg } from "../assets/svg/auto-loan.svg";
import { ReactComponent as AutoLoanBg } from "../assets/svg/auto-loan-compressed.svg";

const AutoLoan = () => {
  return (
    <main>
      <section className="pt-28">
        <div className="flex flex-col gap-10 text-center">
          <h1 className="big-text">
            Auto-loan for
            <br /> car repairs
          </h1>
          <p className="text-[#061818] text-sm font-medium">DESIGNING FOR MOBILE AND WEBSITE USER TESTING RESEARCH</p>
        </div>

        <AutoLoanBg className="w-full px-[30px] py-0 my-0 h-full object-cover mt-16 mb-6 " data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000" />
      </section>

      <section className="xl:px-[300px] md:px-32 px-8">
        <p className="text-[#454545] text-base">
          {" "}
          <span className="font-semibold">End to end design for vehicle repairs app</span> is one of my projects as a product designer in
          <span className="font-semibold"> Flickwheel,</span>
          which leverages on technology to provide auto-mobile services.
        </p>

        <div className="pt-20">
          <h1 className="text-[#F22E5D] text-[26px] font-semibold leading-[36px] text-left">INTRODUCTION</h1>
          <dd className="introduction">
            Auto - credit is a unique solution focused on eliminating the financial stress that comes with vehicle repairs and maintenance. This is a design-led project done
            alongside a team of lead designer and developer to ensure a smooth, stress-free experience throughout the entire process.
          </dd>
        </div>

        <div className="pt-28 flex md:flex-row md:gap-4 flex-col lg:gap-[70px] w-full pb-16">
          <div className="md:w-5/6 flex flex-col md:gap-10 gap-5 w-full">
            <div>
              <h1 className="font-semibold text-base text-[#F22E5D]">MY ROLE</h1>
              <dd className="text-base text-[#454545] pt-4">
                I actively participated in the entire design process, taking on responsibilities on product scoping, user flows, wireframes, rapid prototyping, and usability
                testing. I played a crucial role in conducting user research, and synthesising research findings to generate actionable and viable ideas.
                <br />
                <br />
                My contributions helped shape the overall design direction, ensuring a user-centric approach and delivering a highly effective and intuitive solution.
              </dd>
            </div>
          </div>

          <div className="flex flex-col gap-10 md:w-1/6 w-full">
            <div>
              <h1 className="font-semibold text-base text-[#F22E5D]">SCOPE</h1>
              <dd className="text-base text-[#454545] pt-4">1 lead Designer, Product Manger, a squad of developers.(remote)</dd>
            </div>
            <div>
              <h1 className="font-semibold text-base text-[#F22E5D]">TOOLS</h1>
              <dd className="text-base text-[#454545] pt-4">Figma, Miro, Photoshop, Google meet, Slack</dd>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AutoLoan;
