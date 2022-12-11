import Image from "next/image";

const Projects = () => {
    const src1 = 'https://i.ibb.co/nmN07xr/screencapture-cam-bazar-web-app-2022-12-11-00-46-31.png';
    const src2 = 'https://i.ibb.co/nrMnKKP/screencapture-cam-eye-web-app-2022-12-11-00-45-30.png';
    const src3 = 'https://i.ibb.co/3fT70Qm/screencapture-course-ful-web-app-2022-12-11-00-46-00.png';
    return (
        <div className="mt-10">
            <h1 className="text-3xl font-bold">Top Projects</h1>
            <div className="flex gap-3 justify-between mt-10">
                <div className="h-[200px] overflow-hidden justify-between p-1 bg-white/10 border-4 border-white">
                    <Image loader={() => src1} src={src1} alt="project image" height={200} width={200} />
                </div>
                <div className="h-[200px] overflow-hidden justify-between p-1 bg-white/10 border-4 border-white">
                    <Image loader={() => src2} src={src2} alt="project image" height={200} width={200} />
                </div>
                <div className="h-[200px] overflow-hidden justify-between p-1 bg-white/10 border-4 border-white">
                    <Image loader={() => src3} src={src3} alt="project image" height={200} width={200} />
                </div>
            </div>
        </div>
    );
};

export default Projects;