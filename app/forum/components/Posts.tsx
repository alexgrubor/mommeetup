import { BiChat } from "react-icons/bi";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
import UserCreated from "@/components/UserCreated";
import { format } from "date-fns";


interface PostsProps {
  subcategory: string;
}
interface Post {
  title: string;
  content: string;
  createdAt: string;
  creatorId: string;
}
const Posts = ({ subcategory }: PostsProps) => {
  const [posts, setPosts] = useState([] as Post[]);
  useEffect(() => {
    const getPosts = async () => {
      const { data } = await axios.get(`/api/posts/${subcategory}`);
      setPosts(data.posts);
    };
    getPosts();
  }, [subcategory]);
  return (
    <Link href={"/forum/post"} className="cursor-pointer">
      {
        posts.length === 0 && (
          <div className="flex flex-col border-2 my-3 rounded-md p-4 shadow-md shadow-lavender ">
            <div className="flex gap-2 items-center justify-between ">
              <div className="flex gap-2 items-center">
                <h2>There are no posts yet</h2>
              </div>
            </div>
          </div>
        )
      }
      {posts.map((post, index) => (
        <div
          key={index}
          className="flex flex-col border-2 my-3 rounded-md p-4 shadow-md shadow-lavender "
        >
          <div className="flex gap-2 items-center justify-between ">
            <div className="flex gap-2 items-center">
            
              <h2>{post.title}</h2>
            </div>

            <p className="flex justify-center items-center">
              {Math.floor(Math.random() * 10) + 1} <BiChat />
            </p>
          </div>

          <p className="text-gray-600 text-sm">
            <UserCreated id={post.creatorId} /> on {
              format(new Date(post.createdAt), "MMMM dd, yyyy")
            }
          </p>
          <p className="text-gray-600">{post.content}</p>
        </div>
      ))}
    </Link>
  );
};
export default Posts;
