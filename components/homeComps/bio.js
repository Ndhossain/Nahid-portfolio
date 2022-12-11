import { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BiCurrentLocation } from 'react-icons/bi';
import { BsWhatsapp } from 'react-icons/bs';
import Education from './education';
import Experience from './experience';

const Bio = ({educations, experiences}) => {
    const [isEducation, setIsEducation] = useState(true);

    return (
        <div className='mt-20'>
            <h1 className='text-3xl font-bold'>Bio</h1>
            <div className="gap-5 mt-3">
                <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum doloremque quos nam iusto similique tenetur accusamus ducimus enim harum nostrum corporis explicabo cumque reiciendis laborum reprehenderit voluptates architecto inventore veniam, placeat ut corrupti soluta distinctio. Quia tempora laboriosam beatae accusamus labore vitae deserunt.<br /><br />Nobis minima a libero sapiente vel facere maxime numquam autem praesentium, ex odio sequi, saepe, placeat nemo ducimus cumque! Dolorum harum cum magni aliquam? Similique laborum esse veritatis necessitatibus officiis quisquam dolorem sit ipsam, nam quaerat delectus deserunt minima soluta consectetur porro velit iste consequuntur pariatur! Eum vitae corrupti aliquid excepturi adipisci veniam architecto soluta tenetur pariatur modi repudiandae illum ad quo numquam itaque dolores, similique reprehenderit nulla perferendis? Esse ipsam magnam molestiae ab earum deserunt dicta quam necessitatibus repudiandae fugiat ullam dignissimos illum eaque libero, sed quos repellendus ducimus eveniet expedita natus, impedit temporibus vero vitae! Doloribus id facere nisi culpa hic nulla aut, rem consequatur obcaecati dolorem autem numquam, reprehenderit fugit sit provident molestiae vel? Numquam totam earum, itaque doloribus ipsum iure obcaecati vitae dolore nihil dolores veritatis ab nulla quia suscipit voluptas molestiae id esse fugit nobis optio ipsam reprehenderit maxime. A, quos incidunt doloribus et, recusandae earum distinctio obcaecati sit eius molestiae magnam!</p>
                <p className="flex gap-2 items-center mt-10 text-lg font-bold">
                    <BiCurrentLocation />Dinajpur, Bangladesh
                </p>
                <p className="flex gap-2 items-center mt-3 text-lg font-bold">
                    <BsWhatsapp />+88 01724394004
                </p>
                <p className="flex gap-2 items-center mt-3 text-lg font-bold">
                    <AiOutlineMail />2001.nahidhossain@gmail.com
                </p>
            </div>
            <div className='flex mt-10 justify-center'>
                <button onClick={() => setIsEducation(true)} className='px-3 py-1 border border-gray-900 dark:border-white dark:hover:bg-white hover:bg-gray-900 dark:hover:text-gray-900 hover:text-white font-bold'>Education</button>
                <button onClick={() => setIsEducation(false)} className='px-3 py-1 border border-gray-900 dark:border-white dark:hover:bg-white hover:bg-gray-900 dark:hover:text-gray-900 hover:text-white font-bold'>Experience</button>
            </div>
            {
                isEducation ? <Education educations={educations} /> : <Experience experiences={experiences} />
            }
        </div>
    );
};

export default Bio;
