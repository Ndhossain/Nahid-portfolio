import Link from 'next/link';
import ThemeChanger from './ThemeChanger';

const Navbar = () => {
    return (
        <div className='border-b-[1.5px] border-gray-900 dark:border-white sticky top-0 dark:bg-gray-900 bg-white'>
            <div className='max-w-[1024px] mx-auto px-5 py-3 flex justify-between items-center'>
                <Link href='/' className='flex gap-2'>
                    <h1 className='text-xl font-bold dark:text-white'>Nahid Hossain</h1>
                </Link>
                <div className='flex gap-2 items-center'>
                    <ul className='flex gap-3 font-bold'>
                        <Link href='/'>Home</Link>
                        <Link href='about'>About</Link>
                        <Link href='projects'>Projects</Link>
                        <Link href='blogs'>Blogs</Link>
                    </ul>
                    <span className='text-2xl'>|</span>
                    <ThemeChanger />
                </div>
            </div>
        </div>
    );
};

export default Navbar;