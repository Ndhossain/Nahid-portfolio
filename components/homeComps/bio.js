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
                <p className='text-gray-500'>
                    Hi,
                    <br />
                    I am Nahid Hossain. Currently, I am a student of Bangladesh Open University. I compeleted my secondary from Dinajpur Zilla School and higher secondary from Dinajpur Govt. City Collage.
                    <br /><br />
                    I am a <strong>Frontend</strong>/<strong>Mern</strong>/<strong>Web</strong> developer. I am passionate about coding. Now, I am working on my own projects. I started coding at 2021 with HTML and CSS. After learning about HTML and CSS I started to build some projects. I worked as a Junior WordPress Developer in a company for 7-8 months. My role was developing or customizing projects as per client&apos;s requirements.  In the meantime, I continued my learning about in the depth of Web Development. I learned Bootstrap, Tailwind and some JavaScript&apos;s basic. When I started to build projects with JavaScript, I was facing too many errors in my code, and While I was solving the errors It gave me the strength to learn more. Basically, the passion for coding grew inside me from here. In the meantime because of coding a Never Give Up attitude grew inside me but I always felt that I am incompelete and I am not fit for industry level work. So, I started my journey with Programming Hero as a student and gave my full focus in learning and Alhamdulillah I successfully compeleted the first journey in time. Programming Hero teach me how to manage time effectively, how to make a plans effectively and many more things. This is all till now.
                </p>
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
