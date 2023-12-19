'use client'
import React,{useContext} from 'react'
import BlogCard from './BlogCard'
import { CategoryContext } from '@/context/CategoryContext'

const Blogs = ({blogs}:any) => {
  const {category}=useContext(CategoryContext);
 // console.log(category)
//console.log(blogs)
  const filteredBlogs=blogs.data.filter((blog:any)=>{
    return blog.attributes.categories.data.some((cat:any)=>
      cat.attributes.Title===category
    )
  });
  //console.log(filteredBlogs)
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
      {/* {blogs?.data?.map((blog:any)=>(<div key={blog.id}> */}
        {filteredBlogs?.map((blog:any)=>(<div key={blog.id}>
            <BlogCard blog={blog}/>
        </div>))}
       
    </div>
  )
}

export default Blogs