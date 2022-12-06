import Link from 'next/link';
import React, { useState } from 'react';
import { HiLightBulb } from 'react-icons/hi';
import { MdDarkMode } from 'react-icons/md';

const Navbar = () => {
    const [lightMode, setLightMode] = useState(true);
    return (
        <div>
            <div className='max-w-[1024px] mx-auto px-5 py-3 flex justify-between items-center'>
                <Link href='/' className='flex gap-2'>
                    <h1 className='text-2xl font-bold'>Nahid Hossain</h1>
                </Link>
                <div>
                    <div>
                        {
                            !lightMode ? (
                                <button type='button'>
                                    <HiLightBulb size={24} />
                                </button>
                            ) : (
                                <button type='button'>
                                    <MdDarkMode size={24} />
                                </button>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;