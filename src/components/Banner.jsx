import { FaGithub, FaTwitter } from 'react-icons/fa';
import hafizImg from '../assets/hafiz.png'
import { Link } from 'react-router-dom';


const Banner = () => {
    return (
        <div className='max-w-4xl mx-auto'>
            <div className="flex justify-between items-start pt-20">
                <div className="pt-10 space-y-4">
                    <h2 className="text-5xl font-semibold">Hafiz Al Shams</h2>
                    <h3 className="text-3xl text-gray-600 font-semibold">Full Stack Developer</h3>

                    <div className="mt-7">
                        <button className="btn btn-outline btn-primary btn-lg">Resume</button>
                    </div>
                    <div className="flex justify-start items-center gap-6 mt-10 text-4xl">
                        <Link to='https://github.com/Hafiz-Al-Shams'><FaGithub /></Link>
                        <Link to='https://x.com/shams_world625'><FaTwitter /></Link>
                    </div>
                </div>
                <div className="transition-transform duration-300 hover:scale-110 ease-in-out">
                    <img
                        src={hafizImg}
                        alt="Profile"
                        className="max-w-80 rounded-full border-4 border-blue-200 shadow-xl"
                    />
                </div>

            </div>
        </div>
    );
};

export default Banner;