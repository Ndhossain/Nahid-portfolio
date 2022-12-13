const { connectToDatabase } = require('../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
    // switch the methods
    async function getExperiences(params) {
        try {
            const {db} = await connectToDatabase()
            const query = {}
            let posts = await db.collection('education').find(query).toArray()
            return res.json({
                result: JSON.parse(JSON.stringify(posts)),
                success: true,
            });
        } catch (error) {
            return res.json({
                result: new Error(error).message,
                success: false,
            });
        }
    }
    switch (req.method) {
        case 'GET': {
            return getExperiences(req, res);
        }

        // case 'POST': {
        //     return addProject(req, res);
        // }

        // case 'PUT': {
        //     return updateProject(req, res);
        // }

        // case 'DELETE': {
        //     return deleteProject(req, res);
        // }
    }
}
