let dev = process.env.NODE_ENV !== 'production';
let { DEV_URL, PROD_URL } = process.env;

export async function loadEducation() {
    try {
        console.log(DEV_URL)
        const educationRes = await fetch(`${dev ? DEV_URL : PROD_URL}/api/education`);
        const educationData = await educationRes.json();
        return educationData;
    } catch (error) {
        console.log(error);
    }
}

export async function loadExperience() {
    try {
        const experienceRes = await fetch(`${dev ? DEV_URL : PROD_URL}/api/experience`);
        const experienceData = await experienceRes.json();
        return experienceData;
    } catch (error) {
        console.log(error);
    }
}

export async function loadProjects() {
    try {
        const projectsRes = await fetch(`${dev ? DEV_URL : PROD_URL}/api/projects`);
        const projectsData = await projectsRes.json();
        return projectsData;
    } catch (error) {
        console.log(error);
    }
}

// ${dev ? DEV_URL : PROD_URL}
// ${dev ? DEV_URL : PROD_URL}
// ${dev ? DEV_URL : PROD_URL}

