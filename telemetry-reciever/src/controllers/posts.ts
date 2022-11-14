import { Request, Response, NextFunction } from "express";
import axios, { AxiosResponse } from "axios";

interface Post {
  userId: Number;
  id: Number;
  title: String;
  body: String;
}

// let posts: [Post] = result.data;

// adding a post
const addPost = async (req: Request, res: Response, next: NextFunction) => {
  let posts: Post = req.body;
  // add the post
  let response: AxiosResponse = await axios.post(
    `https://jsonplaceholder.typicode.com/posts`,
    posts
  );

  console.log("Body ->", req.body);
  // return response
  return res.status(200).json({
    message: response.data,
  });
};

export default { addPost };
