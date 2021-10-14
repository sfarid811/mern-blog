import express from 'express';
import mongoose from 'mongoose';

import PostMessage from '../models/postMessage.js';

const router = express.Router();

export const getPosts = async (req,res) => {

    const allPosts = await PostMessage.find();

    try {
      res.status(200).json(allPosts);
    }
    catch (error) {
      res.status(400).json({ 
        message : 'Something went wrong !'
      });
    }
}

export const getSinglePost = async (req, res) => {
  try {
    const { id} = req.params;
    const post = await PostMessage.findById(id);
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({
      // message: "Oups ! The post that you requested was not found",
      message: "Oups ! The post that you are searching for was not found",
    });
  }
};

export const createPost = async (req, res) => {
   const {title, subtitle, author} = req.body;
    const newPost = new PostMessage({title, subtitle, author});
    try {
      await newPost.save();
      res.status(201).json(newPost);
    } catch (error) {
      res.status(409).json({
        message: error.message,
      });
    }
  };



  export const updatePost = async (req, res) => {
    const { id} = req.params;
    const post = req.body;
    try {
      const updatedPost = await PostMessage.findByIdAndUpdate(id, post, { new: true });
      res.status(200).json(updatedPost);
    } catch (error) {
      res.status(409).json({
        message: error.message,
      });
    }
  };
export default router;