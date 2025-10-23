import { useState } from "react";

const ProjectFilters =({ categories, onFilter }) =>{
  const [active, setActive] = useState("All");

  const handleClick = (cat) => {
    setActive(cat);
    onFilter(cat);
  };

  return (
    <div className="flex justify-center gap-4 flex-wrap mt-10 mb-8">
      {[ ...categories].map((cat, idx) => (
        <button
          key={idx}
          onClick={() => handleClick(cat)}
          className={`px-4 py-2 rounded-full font-semibold transition-all ${
            active === cat
              ? "bg-pink-600 text-white"
              : "bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-200 hover:bg-pink-600 hover:text-white"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}


export default ProjectFilters