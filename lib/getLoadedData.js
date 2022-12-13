// let dev = process.env.NODE_ENV !== 'production';
// let { DEV_URL, PROD_URL } = process.env;

export async function loadEducation() {
    try {
        const educationRes = await fetch(`http://localhost:3000/api/education`);
        const educationData = await educationRes.json();
        return educationData;
    } catch (error) {
        console.log(error);
    }
}

export async function loadExperience() {
    try {
        const experienceRes = await fetch(`http://localhost:3000/api/experience`);
        const experienceData = await experienceRes.json();
        return experienceData;
    } catch (error) {
        console.log(error);
    }
}

export async function loadProjects() {
    try {
        const projectsRes = await fetch(`http://localhost:3000/api/projects`);
        const projectsData = await projectsRes.json();
        return projectsData;
    } catch (error) {
        console.log(error);
    }
}
// ${dev ? DEV_URL : PROD_URL}
// ${dev ? DEV_URL : PROD_URL}
// ${dev ? DEV_URL : PROD_URL}