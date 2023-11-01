import NewBlogForm from './NewBlogForm'
import { getCategories } from '@/app/actions/getCategories'

import React from 'react'

const page = async() => {
  const categories = await getCategories();
  return (
    <div className='neo mx-2 mt-4 mb-4'><NewBlogForm blogCategories={categories}/></div>
  )
}

export default page