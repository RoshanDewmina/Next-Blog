// Importing the React library to be used in this component.
import React from 'react'
// Importing the Prisma client, which is an ORM tool used to interact with the database.
import { prisma } from '@/lib/prisma'
// Importing Prisma types to be used for type checking and IntelliSense.
import { Prisma } from '@prisma/client'
// Importing the AllPosts component, which will be used to render a list of posts.
import AllPosts from './AllPosts'

// Defining the type for the props expected by this component, currently an empty object.
type Props = {}

// Declaring an asynchronous component or function named 'page'.
// In Next.js, this could be a function that gets called at build time or request time to fetch data.
const page = async (props: Props) => {

  // Defining a custom type for a Post that includes its related categories.
  // This uses Prisma's utility types for payload generation based on the model.
  type PostWithCategories = Prisma.PostGetPayload<{
    include: { categories: true }
  }>

  // Fetching all posts from the database and including their related categories.
  // This is an asynchronous operation using Prisma as the ORM.
  const posts: PostWithCategories[] = await prisma.post.findMany({
    include: {
      categories: true
    }
  })

  // Fetching all categories from the database, another asynchronous operation.
  const categories = await prisma.category.findMany();

  // Returning JSX to render the UI.
  // This includes a container div with some Tailwind CSS classes, a header for the page,
  // and the AllPosts component, passing in the fetched posts and categories as props.
  return (
    <div className='neo bg-slate-500 my-24 container'>
      <h2 className='text-4xl text-center my-6 text-white'>All Articles</h2>
      <AllPosts categories={categories} posts={posts} /></div>
  )
}

// Exporting the 'page' component so it can be used in other parts of the application.
export default page
