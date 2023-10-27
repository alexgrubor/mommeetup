'use client'
import ForumContent from "./components/ForumContent"
import ForumMenu from "./components/ForumMenu"
import { forumCategories } from "./components/ForumMenu"
import {useState} from 'react'
const ForumPage = () => {
const [category, setCategory] = useState(forumCategories[0].categoryName)
const [subcategory, setSubCategory] = useState(forumCategories[0].subcategories[0])
  return (
    <div className="flex my-2">
        <ForumMenu setCategory={setCategory} category={category}
        setSubCategory={setSubCategory} subcategory={subcategory}
        />
        <ForumContent category={category} subcategory={subcategory} setSubCategory={setSubCategory}/>

    </div>
  )
}
export default ForumPage;