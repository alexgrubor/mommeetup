import { forumCategories } from "./ForumMenu";
import Posts from "./Posts";


interface ForumContentProps {
  category: string;
  subcategory: string;
  setSubCategory: (subcategory: string) => void;
}

const ForumContent = ({
  category,
  subcategory,
  setSubCategory,
}: ForumContentProps) => {
  const allSubCategoriesFromCategory = forumCategories.find(
    (categoryToSearch) => categoryToSearch.categoryName === category
  )?.subcategories;
  return (
    <div className="p-4 w-3/4">
      <h2 className="text-rose text-3xl font-bold my-2">Category: {category}</h2>
      <div className="flex">
        {allSubCategoriesFromCategory?.map((subcategoryFromCategory) => (
          <button
            key={subcategoryFromCategory}
            onClick={() => setSubCategory(subcategoryFromCategory)}
            className={`mr-2 ${
              subcategoryFromCategory === subcategory
                ? "text-rose"
                : "text-black"
            } font-semibold my-2 rounded bg-gray-200 p-2`}
          >
            {subcategoryFromCategory}
          </button>
        ))}
      </div>

      <div>
        <h3 className="text-rose font-semibold my-2"> Subcategory: {subcategory}</h3>
        <div className="">
          <Posts />
        </div>
      </div>
    </div>
  );
};
export default ForumContent;
