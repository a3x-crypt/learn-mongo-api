import { Router } from "express";
import { getUser, updateUser } from "./user.controller";

const router = Router();

router.get("/", getUser);
router.put("/", updateUser);

export default router;
