import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import { HiLightBulb } from 'react-icons/hi';
import { MdDarkMode } from 'react-icons/md';

const ThemeChanger = () => {
    const [mounted, setMounted] = useState(false);
    const { systemTheme, theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, [])

    if (!mounted) {
        return <></>
    }

    return (
        <div className='duration-300 h-[24px]'>
            {
                theme === 'dark' ? (
                    <button
                        type='button'
                        onClick={() => setTheme('light')}
                    >
                        <HiLightBulb size={24} />
                    </button>
                ) : (
                    <button
                        type='button'
                        onClick={() => setTheme('dark')}
                    >
                        <MdDarkMode size={24} />
                    </button>
                )
            }
        </div>
    );
};

export default ThemeChanger;