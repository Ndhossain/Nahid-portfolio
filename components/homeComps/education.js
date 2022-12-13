import { motion } from "framer-motion";
import Image from "next/image";

const Education = ({educations}) => {
    const {result, success} = educations;
    return (
        <div>
            {
                result?.map((data) => (
                    <motion.div
                        className="flex sm:flex-row flex-col p-4 mt-5 border border-gray-900 dark:border-white gap-3 items-center hover:shadow-xl dark:shadow-white/10" key={data._id}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: .2 }}
                    >
                        <div>
                            <Image loader={() => data.img} height={80} width={80} src={data.img} alt="picture of institution" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold">{data.institute}</h3>
                            <p className="text-gray-500">Board: {data.District}</p>
                            <p className="text-gray-500">Year: {data.Starting} - {data.Passing}</p>
                        </div>
                    </motion.div>
                ))
            }
        </div>
    );
};

export default Education;
