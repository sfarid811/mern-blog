import express from 'express';

import { getPosts, createPost, getSinglePost, updatePost} from '../controllers/posts.js';

const router = express.Router();
router.get('/', getPosts);
router.post('/create', createPost);
router.get("/:id", getSinglePost);
router.patch("/:id", updatePost);

export default router;