import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/favicon.png'


const NavBar = () => {
    return (
        <div className='sticky top-0 z-10'>
            <div className="navbar shadow-sm text-neutral-content py-2.5" style={{ backgroundColor: '#2A1454' }}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 text-base-content rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><NavLink to="/">
                                Home
                            </NavLink></li>
                            <li><NavLink to="/">
                                Skills
                            </NavLink></li>
                            <li><NavLink to="/">
                                About
                            </NavLink></li>
                            <li><NavLink to="/">
                                Projects
                            </NavLink></li>
                            <li><NavLink to="/">
                                Contact Me
                            </NavLink></li>
                            <li className=''>
                                <details>
                                    <summary>Resume</summary>
                                    <ul className="bg-base-100 rounded-t-none p-2">
                                        <li><NavLink to="/">
                                            View
                                        </NavLink></li>
                                        <li><NavLink to="/">
                                            Download
                                        </NavLink></li>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </div>
                    <div className="flex justify-center items-center gap-2 pl-24">
                        <div className="">
                            <img src={logo} alt="" className='w-7' />
                        </div>
                        <Link to='/'><h5 className="text-xl font-medium">hafiz.codes</h5></Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to="/">
                            Home
                        </NavLink></li>
                        <li><NavLink to="/">
                            Skills
                        </NavLink></li>
                        <li><NavLink to="/">
                            About
                        </NavLink></li>
                        <li><NavLink to="/">
                            Projects
                        </NavLink></li>
                        <li><NavLink to="/">
                            Contact Me
                        </NavLink></li>

                        <li className='pl-7'>
                            <details>
                                <summary>Resume</summary>
                                <ul className="bg-base-100 text-base-content rounded-t-none p-2">
                                    <li><NavLink to="/">
                                        View
                                    </NavLink></li>
                                    <li><NavLink to="/">
                                        Download
                                    </NavLink></li>

                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;