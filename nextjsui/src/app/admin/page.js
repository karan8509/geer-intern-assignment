"use client";
import React, { useState } from "react";
import ProductForm from "../component/ProductForm";
import PrductList from "../component/PrductList";

const tabs = [
  { id: "creates", label: "Create" },
  { id: "products", label: "Products" },
];

const Page = () => {
  const [active, setActive] = useState("creates");

  return (
    <div className="admin-container min-h-screen px-6 py-10">
      <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-[#f3e0c7] via-[#ddb089] to-[#c4986e] bg-clip-text text-transparent mb-8">
        Admin Dashboard
      </h1>

      {/* Tabs Navigation */}
      <div className="tabs mb-6 flex justify-center space-x-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-4 py-2 rounded font-semibold border transition duration-300
              ${
                active === tab.id
                  ? "bg-gradient-to-r from-[#f3e0c7] via-[#ddb089] to-[#c4986e] bg-clip-text text-transparent border-[#c4986e]"
                  : "bg-white text-gray-700 border-gray-300 hover:border-[#ddb089] hover:text-[#c4986e]"
              }`}
            onClick={() => setActive(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="tab-content w-full max-w-5xl mx-auto bg-white p-6 rounded-lg ">
        {active === "creates" && <ProductForm />}
        {active === "products" && <PrductList />}
      </div>
    </div>
  );
};

export default Page;
