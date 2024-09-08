import postModel from "../models/post.js";

const postCTL = {
    create: async (req, res) => {
        try {

            const { title, content, author } = req.body;

            const newPost = new postModel({
                title,
                content,
                author,
            });
            await newPost.save();

            res.status(201).json(newPost);
        } catch (error) {
            console.error(error);
            res.status(500).json({ 
                message: "Failed"
            });
        }
    },

    getPost: async (req, res) => {
        try{
            const post = await postModel.find();
            res.json(post);
        } catch (error) {
            res.status(500).json({
                message: 'Failed'
            });
        }
    },
}

export default postCTL;