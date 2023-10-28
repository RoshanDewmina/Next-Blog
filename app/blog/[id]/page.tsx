import React from "react";
import { prisma } from "@/lib/prisma";

type Props = {};

const page = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const post = await prisma.post.findUnique({
    where: {
      id: Number(params.id),
    },
  });
  return (
    <div>
      {post && (
        <>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
        </>
      )}
    </div>
  );
};

export default page;
