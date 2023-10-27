import { BiChat } from "react-icons/bi";
import Link from "next/link";

const fakePosts = [
  {
    title: "Tips for Managing Toddler Tantrums",
    author: "JohnDoe123",
    date: "October 25, 2023",
    content:
      "I've been dealing with toddler tantrums, and I wanted to share some tips that have been working for me. When your little one throws a tantrum, try to stay calm and use distractions like their favorite toy. It can be challenging, but patience is key!...",
  },
  {
    title: "Healthy Meal Ideas for Picky Eaters",
    author: "HealthyMom",
    date: "October 26, 2023",
    content:
      "I've been struggling to get my picky eater to enjoy healthy meals. One idea that has worked for me is sneaking veggies into smoothies. Also, involving them in meal planning and making it fun can help. What are your go-to strategies?...",
  },
  {
    title: "Stress-Relief Techniques for Busy Moms",
    author: "RelaxationQueen",
    date: "October 27, 2023",
    content:
      "Being a mom can be stressful. I find that taking some 'me time' each day really helps. Whether it's a short meditation, a warm bath, or a good book, finding moments to relax and recharge is essential. What's your favorite stress-relief technique?...",
  },
  {
    title: "Quick and Easy Dinner Ideas for Busy Parents",
    author: "FoodieMom",
    date: "October 28, 2023",
    content:
      "I know how challenging it can be to prepare dinner after a long day. Here are some quick and easy dinner ideas that have saved me time: one-pot pasta dishes, sheet pan dinners, and slow cooker recipes. What are your favorite go-to dinners?...",
  },
  {
    title: "DIY Craft Projects for Kids",
    author: "CraftyParent",
    date: "October 29, 2023",
    content:
      "Keeping kids entertained with creative projects is a win-win. I've compiled a list of fun DIY craft projects for kids. From making paper mache animals to creating handmade cards, there's something for every age. Share your favorite kid-friendly craft ideas!..",
  },
  {
    title: "Getting Your Teenager to Open Up: Communication Tips",
    author: "ParentingPro",
    date: "October 30, 2023",
    content:
      "As a parent of a teenager, I understand the challenges of getting them to open up and talk. One effective strategy is to create a non-judgmental, open space for conversation. Asking open-ended questions and active listening can go a long way. What communication tips work for you with your teenagers?...",
  },
];
const Posts = () => {
  return (
    <Link href={'/forum/post'} className="cursor-pointer">
      {fakePosts.map((post, index) => (
        <div
          key={index}
          className="flex flex-col border-2 my-3 rounded-md p-4 shadow-md shadow-lavender "
        >
          <div className="flex gap-2 items-center justify-between ">
            <div className="flex gap-2 items-center">
              <div className="rounded-full bg-slate-400 h-8 w-8 flex justify-center items-center">
                A
              </div>
              <h2>{post.title}</h2>
            </div>

            <p className="flex justify-center items-center">
              {Math.floor(Math.random() * 10) + 1} <BiChat />
            </p>
          </div>

          <p className="text-gray-600 text-sm">
            Posted by {post.author} on {post.date}
          </p>
          <p>{post.content}</p>
        </div>
      ))}
    </Link>
  );
};
export default Posts;
