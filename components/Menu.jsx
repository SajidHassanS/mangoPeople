"use client";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import menuData from "./data/MenuList";

const Menu = () => {
  // ─── Filter state ─────────────────────────────────
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // ─── Build category list ───────────────────────────
  const categories = useMemo(() => ["All", ...menuData.map(s => s.title)], []);

  // ─── Compute filtered data ─────────────────────────
  const filteredData = useMemo(
    () => {
      return menuData
        .filter(
          section =>
            selectedCategory === "All"
              ? true
              : section.title === selectedCategory
        )
        .map(section => ({
          ...section,
          items: section.items.filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
        }))
        .filter(section => section.items.length > 0);
    },
    [searchTerm, selectedCategory]
  );

  return (
    <div className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-5xl font-extrabold text-center text-brand-red mb-12"
        >
          Our Menu
        </motion.h1>

        {/* Filters */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-4">
          {/* Category pills */}
          <div className="flex space-x-2 overflow-x-auto">
            {categories.map(cat =>
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setSearchTerm("");
                }}
                className={`
                  whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition
                  ${selectedCategory === cat
                    ? "bg-brand-red text-white shadow-lg"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"}
                `}
              >
                {cat}
              </button>
            )}
          </div>

          {/* Search box with inline SVG */}
          <div className="relative w-full md:w-1/3">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400 dark:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35M17 10.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search items..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="
                w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700
                rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100
                placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-red transition
              "
            />
          </div>
        </div>

        {/* Menu sections */}
        {filteredData.length > 0
          ? filteredData.map(section =>
              <div key={section.title} className="mb-16">
                <motion.h2
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-3xl font-semibold text-brand-red mb-6 border-b-2 border-gray-200 dark:border-gray-700 pb-2"
                >
                  {section.title}
                </motion.h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                  {section.items.map(item =>
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6 }}
                      whileHover={{ scale: 1.03, y: -4 }}
                      className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
                    >
                      {item.image &&
                        <div className="relative h-40 w-full">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>}
                      <div className="p-4 flex flex-col flex-grow">
                        <h3 className="text-lg font-bold text-brand-yellow mb-1">
                          {item.name}
                        </h3>
                        {item.description &&
                          <p className="text-sm text-gray-500 dark:text-gray-400 flex-grow">
                            {item.description}
                          </p>}
                        <div className="mt-3">
                          <span className="inline-block bg-brand-red text-white px-3 py-1 rounded-full text-sm font-medium">
                            {item.price}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            )
          : <p className="text-center text-gray-500 dark:text-gray-400">
              No items match your filter.
            </p>}
      </div>
    </div>
  );
};

export default Menu;
