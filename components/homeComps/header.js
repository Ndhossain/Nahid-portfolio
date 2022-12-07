import Image from "next/image";
import { BiCurrentLocation } from 'react-icons/bi';
import { HiDocumentText } from 'react-icons/hi';
import myImage from '/assets/herosec1.jpg';

const Header = () => {
    return (
        <div className="mt-10 flex justify-between">
            <div>
                <h1 className="text-2xl font-bold">Nahid Hossain</h1>
                <div className="flex gap-5 mt-3">
                    <p className="text-sm text-gray-500 dark:text-gray-400 flex gap-2 items-center">
                        <BiCurrentLocation />Dinajpur, Bangladesh
                    </p>
                </div>
                <div className="mt-3">
                    <p className="text-gray-900 dark:text-white flex gap-2 items-center hover:underline text-lg">
                        <HiDocumentText />Resume
                    </p>
                </div>
            </div>
            <div>
                <Image className="rounded-full mx-auto" src={myImage} height={180} width={180} alt="Nahid" />
            </div>
        </div>
    );
};

export default Header;