import { Router } from '../config/deps.ts';
import { findUser } from '../components/users/controllers/userController.ts'
export  const router = new Router()
    // User route
    .get("/user/:userId", findUser);
    // .delete("/user/:userId", asd)
    // .post("/user", asd)
    // .patch("/user", asd)