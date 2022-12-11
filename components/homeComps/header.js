import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { BsFileEarmarkPdf } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import { IoLogoFacebook } from 'react-icons/io';
import { SiGmail } from 'react-icons/si';

const Header = () => {
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return (
        <div className="mt-10">
            <div>
                <h1 className="text-3xl font-bold">Nahid Hossain</h1>
                <div className="mt-3">
                    <div  onClick={() => openInNewTab("https://drive.google.com/file/d/15C2CW15IeQNBvNyAy8junyBCvcp2EHp1/view?usp=sharing")} className="text-gray-900 dark:text-white flex gap-2 items-center hover:underline text-lg cursor-pointer font-bold">
                        <BsFileEarmarkPdf />Resume
                    </div>
                </div>
                <div className='mt-10'>
                    <p className='text-gray-500'>
                    Passionate Front-end/React developer. Love to take on challenges, explore new technologies, and build projects with them. Currently, working on my projects using the MERN stack. Good learner. Just Need proper resources and time to learn any technology. Seeking a job to use my skills and learn more about Web development.
                    </p>
                </div>
                <div className='mt-10'>
                    <p className='flex gap-2 mt-3'>
                        <span className='font-bold'>Expertise:</span> <span className='text-gray-500'>JavaScript, React.js, Axios, React router, Tailwind, Bootstrap, Firebase, Stripe, HTML, CSS.</span>
                    </p>
                    <p className='flex gap-2 mt-3'>
                        <span className='font-bold'>Comfortable:</span> <span className='text-gray-500'>React Query, Node.js, Express.js, MongoDB.</span>
                    </p>
                    <p className='flex gap-2 mt-3'>
                        <span className='font-bold'>Familiar:</span> <span className='text-gray-500'>Next.js.</span>
                    </p>
                    <p className='flex gap-2 mt-3'>
                        <span className='font-bold'>Tools:</span> <span className='text-gray-500'>Git, VsCode code editor.</span>
                    </p>
                </div>
                <div className='mt-10 flex gap-2'>
                    <div className='hover:bg-slate-900/20 dark:hover:bg-white/20 rounded-full cursor-pointer p-2'>
                        <IoLogoFacebook size={22} />
                    </div>
                    <div className='hover:bg-slate-900/20 dark:hover:bg-white/20 rounded-full cursor-pointer p-2'>
                        <AiFillLinkedin size={22} />
                    </div>
                    <div className='hover:bg-slate-900/20 dark:hover:bg-white/20 rounded-full cursor-pointer p-2'>
                        <FaGithubSquare size={22} />
                    </div>
                    <div className='hover:bg-slate-900/20 dark:hover:bg-white/20 rounded-full cursor-pointer p-2'>
                        <AiFillInstagram size={22} />
                    </div>
                    <div className='hover:bg-slate-900/20 dark:hover:bg-white/20 rounded-full cursor-pointer p-2'>
                        <SiGmail size={22} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;