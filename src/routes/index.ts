import { Router } from "express";
import * as PageController from "../controllers/pageController";
import * as searchController from "../controllers/searchController"

const router = Router();

router.get('/', PageController.home);
router.get('/dogs', PageController.dogs);
router.get('/cats', PageController.cats);
router.get('/', PageController.fishes);
router.get('/', searchController.search);

export default router;