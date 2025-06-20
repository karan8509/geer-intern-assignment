import React from "react";
import Link from "next/link";

const CategoryItem = ({ category }) => {
  return (
    <Link href={`/category/${category.href}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform cursor-pointer">
        <img
          src={category.imageUrl}
          alt={category.name}
          className="w-full h-60 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-700">{category.name}</h3>
        </div>
      </div>
    </Link>
  );
};

export default CategoryItem;
