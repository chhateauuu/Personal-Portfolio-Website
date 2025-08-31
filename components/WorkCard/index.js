import React from "react";
import { useTheme } from "next-themes";

const WorkCard = ({ img, name, description, onClick, languages, githubUrl }) => {
  const { theme } = useTheme();

  return (
    <div
      className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link transition-all duration-300"
      onClick={onClick}
    >
      <div
        className={`relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-32 mob:h-40 ${
          theme === "dark" 
            ? "bg-slate-800 shadow-lg hover:shadow-xl" 
            : "bg-white shadow-lg hover:shadow-xl"
        }`}
      >
        <img
          alt={name}
          className="h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300"
          src={img}
        ></img>
        
        {/* Language Tags - Floating and not affected by theme */}
        {languages && languages.length > 0 && (
          <div className="absolute top-2 left-2 flex flex-wrap gap-1 max-w-[60%]">
            {languages.map((language, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs font-medium bg-white/90 text-gray-800 rounded-md shadow-sm backdrop-blur-sm"
              >
                {language}
              </span>
            ))}
          </div>
        )}
        
        {/* GitHub Link - Always at top right */}
        {githubUrl && (
          <div className="absolute top-2 right-2 z-10">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="w-8 h-8 bg-white/90 text-gray-800 rounded-full shadow-sm backdrop-blur-sm hover:bg-white transition-all duration-200 flex items-center justify-center"
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        )}
      </div>
      
      <div className="mt-4">
        <h1 className={`text-xl font-medium ${
          theme === "dark" ? "text-white" : "text-gray-900"
        }`}>
          {name ? name : "Project Name"}
        </h1>
        <p className={`text-sm opacity-70 mt-2 ${
          theme === "dark" ? "text-gray-300" : "text-gray-600"
        }`}>
          {description ? description : "Description"}
        </p>
      </div>
    </div>
  );
};

export default WorkCard;
