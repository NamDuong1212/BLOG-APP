import { Router } from "express";
import postCTL from "../controllers/post.js";
import UserMDW from "../middlewares/users.js";
const postRouter = Router();

postRouter.post('/create/:userID', UserMDW.validateToken, UserMDW.isAdmin, postCTL.create)

postRouter.get('/getPost', postCTL.getPost)
postRouter.get('/getPostByID/:postID', postCTL.getPostById)

postRouter.put('/updatePost/:postID', UserMDW.validateToken, UserMDW.isAdmin, postCTL.update)


export default postRouter;
