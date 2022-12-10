import Image from 'next/image';
import React from 'react';

const Experience = ({experiences}) => {
    return (
        <div>
            {
                experiences?.map((data) => (
                    <div className="flex sm:flex-row flex-col p-4 mt-5 border border-gray-900 dark:border-white gap-3 items-center hover:shadow-xl dark:shadow-white/10" key={data._id}>
                        <div>
                            <Image loader={() => data.img} height={80} width={80} src={data.img} alt="picture of institution" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold">{data.institute}</h3>
                            <p>{data.role}</p>
                            <p>{data.description}</p>
                            <p>Year: {data.Starting} - {data.Passing}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Experience;