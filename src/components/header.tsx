import { Navbar } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';

interface Props {
	color?: string;
}

const Header = ({ color }: Props) => {
	const location = useLocation();
	return (
		<>
			<Navbar
				fluid
				rounded
				className={`${
					color === 'black' ? 'bg-[#141617] text-[#C2C8CB]' : 'bg-white text-[#061818]'
				} py-4 lg:px-[300px] px-6`}
			>
				<Navbar.Brand as={Link} to='/'>
					<span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
						Jacinta Chianumba
					</span>
				</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse>
					<Navbar.Link
						to='/'
						as={Link}
						className={`${location.pathname === '/' ? 'underline decoration-2 decoration-[#73A3A9]' : ''}`}
					>
						Work
					</Navbar.Link>
					<Navbar.Link
						as={Link}
						to='/about'
						className={`${location.pathname === '/about' ? 'underline decoration-2 decoration-[#73A3A9]' : ''}`}
					>
						About
					</Navbar.Link>
					<Navbar.Link
						as={Link}
						to='https://drive.google.com/file/d/14OvCGU2F2y7YWg7OsyTW-ZzZkI7k8i6X/view?usp=sharing'
						target='_blank'
						className={`${location.pathname === '/resume' ? 'underline decoration-2 decoration-[#73A3A9]' : ''}`}
					>
						Resume
					</Navbar.Link>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
};

export default Header;
