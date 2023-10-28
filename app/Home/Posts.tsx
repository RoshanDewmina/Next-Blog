import { FunctionComponent } from "react";
import { PrismaClient } from "@prisma/client";
import PostCard from "./PostCard";

const prisma = new PrismaClient();

interface PostsProps {}

const Posts: FunctionComponent<PostsProps> = async (props: PostsProps) => {

  const posts = await prisma.post.findMany();

  const bgColors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-yellow-500",
    "bg-indigo-500",
    "bg-purple-500",
    "bg-pink-500",
  ];

  return (
    <>
      <div>
        <h2 className="text-4xl text-center mt-6">Trending</h2>
        <div className="grid grid-cols-3 gap-4">
          {posts.map((post, index) => (
            <PostCard key={post.id} post={post} className={bgColors[index]} />
          ))} 
        </div>
      </div>
    </>
  );
};

export default Posts;
