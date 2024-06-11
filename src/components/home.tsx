import { ReactComponent as Star } from '../assets/svg/star.svg';
import { ReactComponent as Star2 } from '../assets/svg/star-2.svg';
import { ReactComponent as Spiral } from '../assets/svg/spiral.svg';
import { ReactComponent as Ace } from '../assets/svg/ace.svg';
import { ReactComponent as Uniquely } from '../assets/svg/uniquely.svg';
import { ReactComponent as CurvedArrow } from '../assets/svg/curved-arrow.svg';
import { ReactComponent as Github } from '../assets/svg/github.svg';
import { ReactComponent as LinkedIn } from '../assets/svg/linked-in.svg';
import { ReactComponent as Twitter } from '../assets/svg/twitter.svg';
import { ReactComponent as Mail } from '../assets/svg/mail.svg';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import Header from './header';

const FlickWheel = require('../assets/png/flick-wheel.png');
const VehicleRepairs = require('../assets/png/vehicle-repairs.png');
const CIPM = require('../assets/png/cipm.png');
const QuantumZenith = require('../assets/png/quantum-zenith.png');
const Parkway = require('../assets/png/parkway.png');
const HeartFelt = require('../assets/png/heart-felt.png');
const Mandates = require('../assets/png/Mandates.png');
const IdentityPass = require('../assets/png/identity-pass.png');
const MealManager = require('../assets/png/meal-manager.png');
const Payments = require('../assets/png/payment.png');

const Home = () => {
	const [color, setColor] = useState('#061818');
	const [pageBackgroundColor, setPageBackgroundColor] = useState('white');

	useEffect(() => {
		window.scrollTo(0, 0); // Scroll to the top when the component mounts
	}, []);

	const targetRef = useRef(null);

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY || document.documentElement.scrollTop;
			const halfwayPoint = document.documentElement.scrollHeight / 2;

			if (scrollPosition >= halfwayPoint) {
				setPageBackgroundColor('#141617'); // New background color for the entire page
				setColor('white'); // New color for the entire page
			} else {
				setPageBackgroundColor('white');
				setColor('#141617'); // New color for the entire page
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<section className='font-Inter page' style={{ backgroundColor: pageBackgroundColor, color: color }}>
			<Header />
			<main className='w-full'>
				<section className='section'>
					<div className='relative max-w-[790px]'>
						<Ace className='absolute -z-10 top-[83%] left-[-5%] md:block hidden' />
						<Uniquely className='absolute z-10 top-[25%] md:left-[94%]  md:block hidden' />
						<Spiral className='absolute top-[-2%] md:left-[65%] -z-10 md:block hidden' />
						<Star className='absolute z-10 left-[-4%] md:block hidden' />
						<div className='text-start'>
							<p className='md:text-[60px] text-3xl md:leading-[86px] relative md:max-w-[781px] text-start'>
								Hello! I love designing <span className='font-bold'>digital products</span> that solve{' '}
								<span className='font-bold'>user problems</span> while meeting{' '}
								<span className='font-bold'>business goals. </span>
							</p>
						</div>
					</div>
					<p className='md:pt-10 pt-5 md:text-xl text-sm text-[#454545]'>
						Currently a Product Designer in Cyberspace, Lagos Nigeria{' '}
					</p>
				</section>

				<section className='section flex flex-col md:gap-24 gap-6' data-aos='fade-up'>
					<div className=' flex md:flex-row flex-col md:gap-10 gap-4 items-center'>
						<Link to={'/vin'} data-aos='fade-up-right' className='hover:animate-pulse hover:skew-x-2 w-full'>
							<img src={FlickWheel} alt='flick-wheel' className='w-full h-full' />
							<h1 className='text-lg font-semibold text-[#061818]' style={{ color: color }}>
								Vehicle’s history with just VIN
							</h1>
							<p className='text-[#454545] text-base'>Flickwheel / 2023</p>
						</Link>
						<Link to={'/auto-loan'} className='w-full' data-aos='fade-up-left'>
							<img src={VehicleRepairs} alt='vehicle-repairs' className='w-full h-full' />
							<h1 className='text-lg font-semibold text-[#061818]' style={{ color: color }}>
								Auto-loan for car repairs
							</h1>
							<p className='text-[#454545] text-base'>Flickwheel / 2022</p>
						</Link>
					</div>

					<div data-aos='fade-right'>
						<Link to={'/cipm'} className='w-full'>
							<img src={CIPM} alt='cipm' className='w-full h-full' />
							<h1 className='text-lg font-semibold text-[#061818]' style={{ color: color }}>
								Regulatory body for HR professionals
							</h1>
							<p className='text-[#454545] text-base'>CIPM Nigeria / 2023</p>
						</Link>
					</div>

					<div className='flex md:flex-row flex-col md:gap-10 gap-4 w-full'>
						<Link to={'/quantum-zenith'} data-aos='fade-up-right' className='w-full'>
							<img src={QuantumZenith} alt='quantum-zenith' className='w-full h-full' />
							<h1 className='text-lg font-semibold text-[#061818]' style={{ color: color }}>
								Make Investments
							</h1>
							<p className='text-[#454545] text-base'>Zenith Bank / 2022</p>
						</Link>
						<Link to={'/parkway'} className='w-full'>
							<img src={Parkway} alt='parkway' data-aos='fade-up-left' className='w-full h-full' />
							<h1 className='text-lg font-semibold text-[#061818]' style={{ color: color }}>
								Transfer funds and mobile top-ups
							</h1>
							<p className='text-[#454545] text-base'>Parkway Microfinance Bank / 2023</p>
						</Link>
					</div>

					<div data-aos='fade-left'>
						<Link to={'/heartfelt'} className='w-full'>
							<img src={HeartFelt} alt='heart-felt' className='w-full h-full' />
							<h1 className='text-lg font-semibold text-[#061818]' style={{ color: color }}>
								Purchase and send gift cards
							</h1>
							<p className='text-[#454545] text-base'>Heartfelt / 2022</p>
						</Link>
					</div>
				</section>

				<section className='section color-change-div'>
					<div className='relative  max-w-[437px] lg:ms-20' ref={targetRef}>
						<CurvedArrow className='absolute z-10 top-[54%] left-[90%] md:block hidden' />
						{/* <Spiral className="absolute bottom-[10%] left-[62%] z-10" /> */}
						<Star2 className='absolute z-10 top-[3%] left-[-6%] md:block hidden' />
						<div>
							<p className=' md:text-[64px] md:leading-[80px] relative  text-4xl'>
								Spotlight from the <span className='font-bold'>Archives</span>
							</p>
						</div>
					</div>
				</section>

				<section className='section bg-[#141617] grid md:grid-cols-2 gap-[50px]' ref={targetRef}>
					<div data-aos='fade-right'>
						<Link to={'/cyberpay/merchant'}>
							<img src={Mandates} alt='mandates' />
							<h1 className='text-lg font-semibold text-[#FFFFFF]'>Payment gateway for business</h1>
							<p className='text-[#787878] text-base'>CyberPay / 2021</p>
						</Link>
					</div>
					<div data-aos='fade-left'>
						<Link to={'/cyberpay/identity-pass'} className=''>
							<img src={IdentityPass} alt='identity-pass' />
							<h1 className='text-lg font-semibold text-[#FFFFFF]'>Verify user’s identity</h1>
							<p className='text-[#787878] text-base'>CyberPay / 2023</p>
						</Link>
					</div>

					<div data-aos='fade-right'>
						<Link to={'/cyberpay/meal-manager'}>
							<img src={MealManager} alt='flick-wheel' />
							<h1 className='text-lg font-semibold text-[#FFFFFF]'>Tracking meal orders of staff</h1>
							<p className='text-[#787878] text-base'>CyberPay / 2021</p>
						</Link>
					</div>

					<div data-aos='fade-left'>
						<Link to={'/cyberpay/settlement-automation'} className=''>
							<img src={Payments} alt='vehicle-repairs' />
							<h1 className='text-lg font-semibold text-[#FFFFFF]'>Handling Payment for merchants</h1>
							<p className='text-[#787878] text-base'>CyberPay / 2022</p>
						</Link>
					</div>
				</section>

				{/* <section className="bg-[#141617] flex flex-col justify-center items-center pt-[197px] pb-24  h-full">
          <h1 className="text-white md:text-[114px] md:leading-[110px] font-bold relative text-[75px] leading-16">
            A little <br />
            <span className="text-[#E76295] underline decoration-8">about</span> me{" "}
          </h1>
          <div className="relative">
            <Chisom className="hover:scale-100 hover:translate-x-2 hover:-translate-y-2   md:transform-none" />
          </div>
        </section> */}
				<section className='section bg-[#141617] '>
					<div className='text-center flex justify-center text-sm text-[#E6E6E6] md:gap-6 gap-2'>
						<Link to={'/'}>Home</Link>
						<Link to={'/'}>Work</Link>
						<Link to={'/about'}>About</Link>
						<Link
							to='https://drive.google.com/file/d/14OvCGU2F2y7YWg7OsyTW-ZzZkI7k8i6X/view?usp=sharing'
							target='_blank'
						>
							Resume
						</Link>
					</div>

					<div className='md:mt-10 mt-5 flex text-center justify-center md:gap-4 gap-2'>
						<Link to={'https://github.com/Jessie-jay'} target='_blank'>
							{' '}
							<Github />
						</Link>
						<Link to={'https://www.linkedin.com/in/jacintachianumba'} target='_blank'>
							{' '}
							<LinkedIn />
						</Link>
						<Link to={'https://x.com/JacintaChianum1'} target='_blank'>
							{' '}
							<Twitter />
						</Link>
						<Link to={'mailto:jacintachianumba@gmail.com'} target='_blank'>
							{' '}
							<Mail />
						</Link>
					</div>

					<hr className='mt-10 text-[#4D4D4D4D] border-[#4D4D4D4D] border' />

					<div className='flex justify-between items-center font-medium text-xs text-[#787878] mt-7 md:flex-row flex-col'>
						<p>Thanks for visiting</p>
						<p>
							Designed by{' '}
							<Link
								to={'https://www.linkedin.com/in/jacintachianumba'}
								target='_blank'
								className='text-xs text-[#787878] font-bold'
							>
								Jacinta
							</Link>
							, built by{' '}
							<Link
								to='https://github.com/OwoeyeMoyosore'
								target='_blank'
								className='text-xs text-[#787878] font-bold'
							>
								Owoeye Moyosore
							</Link>
						</p>
					</div>
				</section>
			</main>
			{/* <Footer /> */}
		</section>
	);
};

export default Home;
