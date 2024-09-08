import { Router } from "express";
import postCTL from "../controllers/post.js";
import UserMDW from "../middlewares/users.js";
const postRouter = Router();

postRouter.post('/create/:userID', UserMDW.validateToken, UserMDW.isAdmin, postCTL.create)
postRouter.get('/getpost', UserMDW.validateToken, postCTL.create)
export default postRouter;
