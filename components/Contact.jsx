"use client";
import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-10 my-24 bg-gray-200 dark:bg-[#262626]"
      >
        <div className="container mx-auto px-6">
          <h1 className="text-4xl text-center font-lexend font-bold mb-8">
            Contact Us
          </h1>
          <div className="flex justify-center">
            <div className="w-full rounded-lg shadow-lg p-6 mb-6 bg-gray-100 dark:bg-[#171717] text-center">
              <h2 className="text-2xl font-semibold mb-4">Contact Info</h2>
              <p className=" mb-2">
                If you have any questions or feedback, feel free to reach out to
                us!
              </p>
              <div className="mb-4">
                <h3 className="font-semibold ">Address:</h3>
                <p className="">
                  Blue building,shop # 01,wadi al safa 05, Dubai
                </p>
              </div>
              <div className="mb-4">
                <h3 className="font-semibold ">Phone:</h3>
                <p className="">04 578 6154</p>
                <p className="">052 868 4152</p>
              </div>
              <div className="mb-4">
                <h3 className="font-semibold ">Email:</h3>
                <p className="">mangopeopledubai.com</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
