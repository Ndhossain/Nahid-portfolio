import Head from "next/head";
import Bio from "../../components/homeComps/bio";

const About = ({educationData, experienceData}) => {
    return (
        <div>
            <Head>
                <title>About - Nahid Hossain</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/boy.png" />
            </Head>
            <Bio 
                educations={educationData} 
                experiences={experienceData} 
            />
        </div>
    );
};

export default About;

export async function getStaticProps() {
    let dev = process.env.NODE_ENV !== 'production';
    let { DEV_URL, PROD_URL } = process.env;
    // try {
        const educationRes = await fetch(`${dev ? DEV_URL : PROD_URL}/api/education`);
        const educationCon = await educationRes.json();
        const educationData = JSON.stringify(educationCon)
        const experienceRes = await fetch(`${dev ? DEV_URL : PROD_URL}/api/experience`);
        const experienceCon = await experienceRes.json();
        const experienceData = JSON.stringify(experienceRes)
        return {
            props: {
                educationData,
                experienceData,
            },
        }
    // } catch (error) {
    //     console.log(error);
    //     return error
    // }
}
