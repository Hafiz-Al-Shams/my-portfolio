import { FaGithub, FaTwitter } from 'react-icons/fa';
import hafizImg from '../assets/hafiz.png'
import { Link } from 'react-router-dom';


const Banner = () => {
    return (
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24'> {/* Increased max-width for large screens & added padding for smaller screens */}
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start pt-10 md:pt-20"> {/* Stack layout on mobile, side-by-side on tablets/desktops */}
                <div className="pt-6 md:pt-10 space-y-4 text-center md:text-left"> {/* Center align for small screens, left align for larger */}
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium">Hafiz Al Shams</h2> {/* Scaled font sizes for better responsiveness */}
                    <h3 className="text-xl sm:text-2xl md:text-3xl text-gray-600 font-semibold">Frontend Developer</h3> {/* Adjusted text sizes */}

                    <div className="mt-5 sm:mt-7">

                        <a
                            href="https://drive.google.com/file/d/18Alhhb5l_mZaltfeOsO8Jisd2FYd52j8/view?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className=""
                        >
                            <button className="btn btn-outline btn-primary btn-md md:btn-lg">Resume</button> {/* Adjusted button size for mobile */}
                        </a>


                    </div>
                    <div className="flex justify-center md:justify-start items-center gap-4 sm:gap-6 mt-8 sm:mt-10 text-3xl sm:text-4xl"> {/* Centered icons on mobile */}
                        <Link to='https://github.com/Hafiz-Al-Shams'><FaGithub /></Link>
                        <Link to='https://x.com/shams_world625'><FaTwitter /></Link>
                    </div>
                </div>
                <div className="mt-10 md:mt-0 transition-transform duration-300 hover:scale-110 ease-in-out"> {/* Added margin for spacing on small screens */}
                    <img
                        src={hafizImg}
                        alt="Profile"
                        className="w-40 sm:w-56 md:w-72 lg:w-80 rounded-full border-4 border-gray-200 shadow-xl"

                    // Responsive image scaling
                    />
                </div>
            </div>
            <h3 className='text-2xl sm:text-4xl md:text-5xl font-semibold mt-12 sm:mt-16 text-center md:text-left'>{`I code tomorrow's Web, today`}</h3> {/* Responsive heading size and alignment */}
        </div>

    );
};

export default Banner;