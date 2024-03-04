import Header from './header'
import Footer from './footer'
import {ReactComponent as Star} from "../assets/star.svg"
import {ReactComponent as Spiral} from "../assets/spiral.svg"
import {ReactComponent as Ace} from "../assets/ace.svg"
import {ReactComponent as Digital} from "../assets/digital.svg"
import { Link } from 'react-router-dom'

const FlickWheel = require('../assets/flick-wheel.png')
const VehicleRepairs = require('../assets/vehicle-repairs.png')
const Home = () => {
  return (
    <section>
        <Header />
<main>
    <section className='section'>
<div className='relative'>


<Ace className='absolute -z-10 top-[90%] left-[6%]' />
<Digital className='absolute z-10 top-[30%] left-[67%]'/>
<Spiral className='absolute top-[1%] left-[62%] -z-10'/>
<Star className='absolute z-10 top-[3%] left-[8%]'/>
<div>
    <p className='lg:px-[90px] text-[114px] leading-[110px] font-bold relative'>Product designer,
that delight users</p>


</div>
</div>
    </section>
    <section className='section flex md:flex-row flex-col md:gap-[90px] gap-4'>
<Link to={"/"}>
    <img src={FlickWheel} alt='flick-wheel' />
    <h1 className='text-lg font-semibold text-[#061818]'>Vehicle’s history with just VIN</h1>
    <p className='text-[#454545] text-base'>Flickwheel / 2023</p>
</Link>
<Link to={"/"}>
    <img src={VehicleRepairs} alt='vehicle-repairs' />
    <h1 className='text-lg font-semibold text-[#061818]'>Request for vehicle repairs</h1>
    <p className='text-[#454545] text-base'>Flickwheel / 2022</p>
</Link>
    </section>
</main>
        <Footer />

    </section>
  )
}

export default Home