import { forumCategories } from "../components/ForumMenu";

// Fake responses
const fakeResponses = [
  {
    author: "User1",
    date: "October 29, 2023",
    content: "Great ideas! I love one-pot pasta dishes. They're so convenient.",
  },
  {
    author: "User2",
    date: "October 30, 2023",
    content:
      "Sheet pan dinners are a lifesaver for busy weekdays. Thanks for sharing!",
  },
  {
    author: "User3",
    date: "October 31, 2023",
    content:
      "I'm a fan of slow cooker recipes. They make dinner preparation a breeze.",
  },
  {
    author: "User4",
    date: "November 1, 2023",
    content:
      "I also like making stir-fry for a quick and delicious dinner. What are your thoughts on it?",
  },
];

const page = () => {
  return (
    <div className="flex">
      <div className="p-4 w-1/4 border-x-2 border-b-2 rounded-sm border-zinc-300">
        {forumCategories.map((category, index) => (
          <div key={index} className="mb-4 border-b-2 border-rose py-2">
            <h2 className="text-rose font-semibold">{category.categoryName}</h2>
            {category.subcategories.map((subCategory, index) => (
              <div className="font-medium" key={index}>
                <h3>{subCategory}</h3>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="w-3/4">
        <div className="flex flex-col border-2 my-3 rounded-md p-4 shadow-md shadow-lavender ">
          <div className="flex gap-2 items-center justify-between ">
            <div className="flex gap-2 items-center">
              <div className="rounded-full bg-slate-400 h-8 w-8 flex justify-center items-center">
                A
              </div>
              <h2>{"Quick and Easy Dinner Ideas for Busy Parents"}</h2>
            </div>
          </div>

          <p className="text-gray-600 text-sm">
            Posted by {"FoodieMom"} on {"October 28, 2023"}
          </p>
          <p>
            {
              "I know how challenging it can be to prepare dinner after a long day. Here are some quick and easy dinner ideas that have saved me time: one-pot pasta dishes, sheet pan dinners, and slow cooker recipes. What are your favorite go-to dinners?"
            }
          </p>

          <div className="mt-4">
            {fakeResponses.map((response, index) => (
              <div
                key={index}
                className="border-2 border-gray-300 rounded-md p-2 mb-2"
              >
                <div className="flex gap-3 items-center">
                  <div className="rounded-full bg-slate-400 h-8 w-8 flex justify-center items-center">
                    U
                  </div>
                  <p className="text-rose font-semibold">{response.author}</p>
                </div>

                <p className="text-gray-600 text-sm">
                  Posted on {response.date}
                </p>
                <p>{response.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
