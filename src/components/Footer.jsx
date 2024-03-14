import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="p-4 bg-white shadow md:items-center md:text-center md:p-6 dark:bg-gray-800">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2024{" "}
        <Link to="/" className="hover:underline">
          SeeFlix
        </Link>
        . All Rights Reserved.
      </span>
    </footer>
  );
};
