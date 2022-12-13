const { connectToDatabase } = require('../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
    // switch the methods
    async function getProjects(params) {
        try {
            const {db} = await connectToDatabase()
            const query = {}
            let posts = await db.collection('projects').find(query).toArray()
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
            return getProjects(req, res);
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
