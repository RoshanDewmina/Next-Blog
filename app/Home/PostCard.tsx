import { FunctionComponent } from "react";
import type { Post } from "@prisma/client";
import Link from "next/link";

interface PostCardProps {
  post: Post;
  className?: string;
}

const PostCard: FunctionComponent<PostCardProps> = ({
  post,
  className,
}: PostCardProps) => {
  return (
    <>
      <Link href={`/blog/${post.id}`}
        className={`${className} px-4 py-2 sm:px-6 sm:py-4 mt-3 border-2 rounded shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)]`}
      >
        <h3 className="text-2xl mb-3">{post.title}</h3>
        <p>{post.content}</p>
      </Link>
    </>
  );
};

export default PostCard;
