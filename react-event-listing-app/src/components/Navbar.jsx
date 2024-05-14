import { NavLink } from 'react-router-dom';
import logo from '../assets/images/meetmap.png';

const Navbar = () => {
    const linkClass = ({ isActive }) =>
        isActive
            ? 'bg-[#FAEBD7] text-black hover:bg-[#FFD700] hover:text-black rounded-md px-3 py-2'
            : 'text-white hover:[#FFD700] hover:text-black rounded-md px-3 py-2';

    return (
        <nav className='bg-[#EA7E5D] border-b border-[#FFD700]'>
            <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
                <div className='flex h-20 items-center justify-between'>
                    <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-start'>
                        <NavLink className='flex flex-shrink-0 items-center mr-4' to='/'>
                            <img className='h-10 w-auto' src={logo} alt='React Jobs' />
                            <span className='hidden md:block text-white text-2xl font-bold ml-2'>
                                MeetMap
                            </span>
                        </NavLink>
                        <div className='md:ml-auto'>
                            <div className='flex space-x-2'>
                                <NavLink to='/' className={linkClass}>
                                    Home
                                </NavLink>
                                <NavLink to='/events' className={linkClass}>
                                    Events
                                </NavLink>
                                <NavLink to='/add-event' className={linkClass}>
                                    Add Event
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;