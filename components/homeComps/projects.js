import Image from "next/image";

const Projects = ({projects}) => {
    const {result, success} = projects
    return (
        <div className="mt-10">
            <h1 className="text-3xl font-bold">Top Projects</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-between mt-5 gap-2">
                    {
                        result.map((project) => (
                            <div key={project._id} className="basis-1/3 dark:bg-white/10 bg-gray-900/10 border-1 border-white p-2 rounded-lg">
                                <div className="h-[200px] overflow-hidden justify-between p-1">
                                    <Image loader={() => project.img} src={project.img} alt="project image" height={200} width={600} className="mx-auto" />
                                </div>
                                <div className="flex flex-col justify-between mt-3 h-[150px]">
                                    <h1 className="text-xl font-bold">{project.projectName}</h1>
                                    <div className="mt-2 flex justify-between">
                                        <button className="px-3 py-1 border border-sky-600 text-sky-600 font-bold" onClick={() => openInNewTab(project.url)}>View Demo</button>
                                        <button className="px-3 py-1 border border-sky-600 text-sky-600 font-bold" onClick={() => openInNewTab(project.url)}>Details</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
            </div>
        </div>
    );
};

export default Projects;