"use client";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import menuData from "./data/MenuList";

const WHATSAPP_NUMBER = "9710528684152"; // ← replace with your business number, no “+” or dashes

const Menu = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = useMemo(
    () => ["All", ...menuData.map((s) => s.title)],
    []
  );

  const filteredData = useMemo(() => {
    return menuData
      .filter((section) =>
        selectedCategory === "All" ? true : section.title === selectedCategory
      )
      .map((section) => ({
        ...section,
        items: section.items.filter((item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase())
        ),
      }))
      .filter((section) => section.items.length > 0);
  }, [searchTerm, selectedCategory]);

  return (
    <div className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
          <div className="flex flex-wrap sm:flex-nowrap gap-2 overflow-x-auto px-4 py-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setSearchTerm("");
                }}
                className={`
        flex-shrink-0 whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition
        ${
          selectedCategory === cat
            ? "bg-brand-red text-white shadow-lg"
            : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
        }
      `}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-1/3">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              {/* magnifier icon */}
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
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-red transition"
            />
          </div>
        </div>

        {/* Menu sections */}
        {filteredData.length > 0 ? (
          filteredData.map((section) => (
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
                {section.items.map((item) => {
                  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                    `Hi, I’d like to order: ${item.name}`
                  )}`;
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6 }}
                      whileHover={{ scale: 1.03, y: -4 }}
                      className="relative group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
                    >
                      {item.image && (
                        <div className="relative h-40 w-full">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      <div className="p-4 flex flex-col flex-grow">
                        <h3 className="text-lg font-bold text-brand-yellow mb-1">
                          {item.name}
                        </h3>
                        {item.description && (
                          <p className="text-sm text-gray-500 dark:text-gray-400 flex-grow">
                            {item.description}
                          </p>
                        )}
                        <div className="mt-3 flex items-center justify-between">
                          <span className="inline-block bg-brand-red text-white px-3 py-1 rounded-full text-sm font-medium">
                            AED {item.price}
                          </span>
                          {/* WhatsApp button */}
                          <a
                            href={waLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-green-500 rounded-full hover:bg-green-600 transition"
                            title={`Order ${item.name} via WhatsApp`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-white"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="currentColor"
                                d="M20.52 3.48a11.9 11.9 0 00-16.8 0A11.88 11.88 0 002 12c0 2.08.54 4.12 1.56 5.92L2 22l4.28-1.4A11.88 11.88 0 0012 24a11.88 11.88 0 008.52-20.52zm-8.5 19.5a9.54 9.54 0 01-4.84-1.37l-.35-.21-2.54.83.85-2.48-.23-.38A9.5 9.5 0 1121.5 12a9.47 9.47 0 01-1.48 5.43 9.48 9.48 0 01-7.9 5.05zm5.35-7.35l-.76-.22a1.13 1.13 0 00-1.07.27l-.48.47a8.05 8.05 0 01-3.7-3.71l.48-.47a1.13 1.13 0 00.27-1.07l-.22-.76a1.13 1.13 0 00-1.07-.76h-1.1a1.13 1.13 0 00-1.12 1.12 7.22 7.22 0 007.22 7.22 1.13 1.13 0 001.12-1.12v-1.1a1.13 1.13 0 00-.76-1.07z"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-400">
            No items match your filter.
          </p>
        )}
      </div>
    </div>
  );
};

export default Menu;
