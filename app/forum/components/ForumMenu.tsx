export const forumCategories = [
  {
    categoryName: "Parenting Tips and Advice",
    subcategories: [
      "Newborns and Infants",
      "Toddlers and Preschoolers",
      "School-Aged Children",
      "Teenagers",
      "Special Needs Parenting",
      "Single Parenting",
      "Blended Families",
    ],
  },
  {
    categoryName: "Work-Life Balance",
    subcategories: [
      "Balancing Career and Motherhood",
      "Time Management Strategies",
      "Flexible Work Options",
      "Career Development",
      "Business and Entrepreneurship",
    ],
  },
  {
    categoryName: "Self-Care and Wellness",
    subcategories: [
      "Mental Health and Well-being",
      "Physical Fitness and Nutrition",
      "Relaxation and Stress Relief",
      "Beauty and Fashion Tips",
      "Hobbies and Interests",
    ],
  },
  {
    categoryName: "Community and Local Meetups",
    subcategories: [
      "Local Meetup Announcements",
      "Playdate Planning",
      "Neighborhood Recommendations",
      "Babysitting Co-op",
      "Mom's Night Out",
    ],
  },
  {
    categoryName: "Relationships and Family Dynamics",
    subcategories: [
      "Marriage and Partnerships",
      "Sibling Relationships",
      "Grandparenting",
      "Coping with Family Issues",
    ],
  },
  {
    categoryName: "Education and Learning",
    subcategories: [
      "Education Resources",
      "Educational Apps and Games",
      "Extracurricular Activities",
      "Parent-Teacher Partnerships",
    ],
  },
  {
    categoryName: "Product Recommendations",
    subcategories: [
      "Baby Gear",
      "Kids' Toys and Games",
      "Household Products",
      "Book and Movie Recommendations",
    ],
  },
  {
    categoryName: "General Chit-Chat",
    subcategories: ["Off-Topic Discussions", "Jokes and Fun", "Current Events"],
  },
  {
    categoryName: "Platform Feedback and Support",
    subcategories: ["Bug Reports", "Feature Requests", "User Support"],
  },
];

interface ForumMenuProps {
  setCategory: (category: string) => void;
  category: string;
  setSubCategory: (subcategory: string) => void;
  subcategory: string;
}
const ForumMenu = ({
  setCategory,
  category,
  setSubCategory,
  subcategory,
}: ForumMenuProps) => {const handleSubCategoryClick = (
    forumCategoryName: string,
    forumSubcategory: string
  ) => {
    setCategory(forumCategoryName);
    setSubCategory(forumSubcategory);
  }
   
  return (
    <div className="p-4 w-1/4 border-x-2 border-b-2 rounded-sm border-zinc-300">
      {forumCategories.map((forumCategory) => (
        <div key={forumCategory.categoryName} className="mb-4 border-b-2 border-rose py-2">
          <button
            onClick={() => {
              setCategory(forumCategory.categoryName);
            }}
            className={`${
              forumCategory.categoryName === category
                ? "text-rose"
                : "text-black"
            } font-bold`}
          >
            {forumCategory.categoryName}
          </button>
          <ul className="">
            {forumCategory.subcategories.map((forumSubcategory) => (
              <li
                key={forumSubcategory}
                className={`pl-4 ${
                  forumSubcategory === subcategory ? "text-rose" : "text-black"
                } text-start`}
              >
                <button
                  onClick={() => {
                    handleSubCategoryClick(
                      forumCategory.categoryName,
                      forumSubcategory
                    );
                  }}
                >
                  {forumSubcategory}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
export default ForumMenu;
