import { Link } from "react-router-dom";

const moreWorks = [
  {
    name: "Flickwheel / 2023",
    details: "Vehicle’s history with just VIN",
    link: "",
  },
  {
    name: "Flickwheel / 2022",
    details: "Auto - loan for vehicle repairs",
    link: "",
  },
  {
    name: "Zenith Bank / 2022",
    details: "Make Investments",
    link: "/quantum-zenith",
  },
  {
    name: "Parkway Microfinance Bank / 2023",
    details: "Transfer funds and mobile top-ups ",
    link: "",
  },
];
const Footer = () => {
  return (
    <section className="bg-[#121212] py-40 xl:px-[364px] md:px-32 px-8">
      <p className="text-[23px] leading-[28px] text-[#454545]">more works</p>

      {moreWorks?.map((item, index) => (
        <div key={index} className="pt-10" data-aos='fade-up'>
          <Link to={`${item.link}`} className="text-[#919191] text-[20px] leading-[28px] font-bold">
            {item?.name}
          </Link>
   
          <p className="text-white font-Fraunces text-[26px] leading-[40px] pt-4 pb-6">{item?.details}</p>
          <hr className="border-[1px] border-[#454545] w-full" />
        </div>
      ))}

      <div className="pt-32" data-aos='fade-up'>
      <p className="text-[23px] leading-[28px] text-[#454545] pb-[54px]">more works</p>
      <Link to={'/'} className="text-[#919191] text-[20px] leading-[28px] font-bold ">
      CyberPay 2022
          </Link>
   
          <p className="text-white font-Fraunces text-[26px] leading-[40px] pt-4 pb-6">CyberPay Merchant</p>
          <hr className="border-[1px] border-[#454545] w-full" />
      </div>
    </section>
  );
};

export default Footer;
