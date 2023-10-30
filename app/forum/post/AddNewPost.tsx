import { useState } from "react";
import { BiMessageAltAdd } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import axios from "axios";

interface AddNewPostProps {
  subcategory: string;
}
const AddNewPost = ({ subcategory }: AddNewPostProps) => {
  const [isAddedClicked, setISAddedClicked] = useState(false);
  const createNewPost = async (e: any) => {
    e.preventDefault();
    const title = e.target.title.value;
    const content = e.target.content.value;
    const { data } = await axios.post("/api/posts", {
      title,
      content,
      subcategory,
    });
    console.log(data);
  };
  return (
    <div>
      <button onClick={() => setISAddedClicked(!isAddedClicked)}>
        {isAddedClicked ? (
          <IoMdClose size={30} />
        ) : (
          <BiMessageAltAdd size={30} />
        )}
      </button>
      {isAddedClicked && (
        <div className="absolute top-10 right-0 bg-white p-4 rounded-xl border-2 w-80">
          <h2 className="text-center font-bold text-lg mb-5">
            Create a new post
          </h2>
          <form onSubmit={createNewPost}>
            <div className="mb-4">
              <label htmlFor="title" className="block">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="p-2 border w-full border-gray-300 rounded-md focus:outline-none focus:border-rose"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="content" className="block">
                Content
              </label>
              <textarea
                id="content"
                name="content"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-rose"
              ></textarea>
            </div>
            <button className="bg-rose text-white py-2 px-4 rounded-md">
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
export default AddNewPost;
