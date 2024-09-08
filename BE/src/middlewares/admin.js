// import UserModel from "../models/users.js";

// const adminMDW = {
//     checkAdmin: async(req, res, next) => {
//         try{

//             const users = await UserModel.findById(req.users.id);

//             if (users && users.role === 'admin'){
//                 next();
//             } else {
//                 return res.status(403).json({
//                     message: 'Admin permission required',
//                     status: 'Failed',
//                 });
//             }
//         } catch (error) {
//             return res.status(500).json({
//                 message: 'Server error',
//                 status: 'Failed',
//             });
//         }
//     }
// }

// export default adminMDW;