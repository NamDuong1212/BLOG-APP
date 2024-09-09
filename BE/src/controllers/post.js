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

    getPostById: async (req, res) => {
        try {
            const { postID } = req.params;
            const post = await postModel.findById(postID);
            if (!post) return res.status(404).json({ message: 'Post not found' });
            res.json(post);
          } catch (error) {
            res.status(500).json({ message: 'Failed to fetch post' });
          }
    },

    update: async (req, res) => {
        const { title, content, author } = req.body;
            try {
                const updatedPost = await Post.findByIdAndUpdate(req.params.id,
                    { title, content, author },
                    { new: true }
                );
                
                if (!updatedPost) 
                    return res.status(404).json({ 
                        message: 'Post not found' 
                    });
                    
                res.json(updatedPost);
                } catch (error) {
                    res.status(500).json({ 
                        message: 'Failed to update post' 
                    });
                }
    }
}

export default postCTL;