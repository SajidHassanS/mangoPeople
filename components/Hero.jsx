"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <>
      <div
        className="min-h-screen flex justify-evenly items-center mx-auto
        bg-gradient-to-r from-blue-300 to-cyan-200 dark:bg-gradient-to-r dark:from-gray-900 dark:to-black overflow-hidden sm:py-20"
      >
        <div className="container py-6">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 place-items-center min-h-[600px] mx-5">
            {/* LEFT TEXT */}
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="space-y-7 lg:col-span-2 text-dark order-2 sm:order-1 ml-3 text-center sm:text-center md:text-center lg:text-left xl:text-left"
            >
              <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-lexend font-bold">
                {/* Wrap this entire phrase in brand‐yellow */}
                <span className="text-brand-yellow">
                  Fresh, Delicious &amp; Healthy Foods
                </span>
                {/* Keep a space before “Delivery” */}
                <span className="font-cursive text-brand-red">
                  {" "}
                  Delivery
                </span>{" "}
                in {/* “Dubai” in brand‐red as well */}
                <span className="text-brand-red">Dubai</span>
              </h1>

              <p className="font-lexend text-base text-foreground/80">
                Delicious Foods Delivered to Your Door. <br /> Starts From{" "}
                <span className=" text-brand-red">AED 3</span>
              </p>

              <Link
                href="#"
                className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-brand-red rounded-xl group"
              >
                <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#8d1b1b] rounded group-hover:-mr-4 group-hover:-mt-4">
                  <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                </span>
                <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-[#8d1b1b] rounded-xl group-hover:mb-12 group-hover:translate-x-0"></span>
                <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                  Order Now
                </span>
              </Link>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="order-1 sm:order-1 flex justify-center md:justify-center w-full lg:justify-end xl:justify-end p-5"
            >
              <Image
                src="/images/bannerimage.png"
                alt="hero image"
                width={500}
                height={200}
                className="w-[300px] sm:w-[320px] md:w-[360px] lg:w-auto xl:w-auto h-auto"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* 2nd Part (unchanged) */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="overflow-hidden"
      >
        <h1 className="text-5xl md:text-6xl text-center font-lexend text-brand-red m-6 p-2 font-bold">
          Healthy and Tasty
        </h1>
        <div className="flex justify-evenly items-center flex-wrap">
          <div className="flex max-w-7xl text-wrap justify-evenly items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.9,
                ease: [0.65, 0, 0.35, 1],
              }}
              viewport={{ once: false }}
            >
              <Image
                src="/capsicum.png"
                width={500}
                height={500}
                alt="image"
                className="p-2 drop-shadow-xl w-[1400px] sm:w-auto md:w-auto lg:w-auto xl:w-auto"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 1 }}
              transition={{
                duration: 0.9,
                ease: [0.65, 0, 0.35, 1],
              }}
              viewport={{ once: true }}
            >
              <p className="p-6 text-justify">
                We hand-select crisp bell peppers, ripe tomatoes, and seasonal
                produce to bring you vibrant flavors and nutrients in every
                bite. Our dishes showcase these fresh ingredients—lightly
                roasted or sautéed—to retain their natural sweetness and crunch.
                You’ll taste the difference of high-quality produce, prepared
                simply yet thoughtfully, so each meal feels both wholesome and
                indulgent.
              </p>
            </motion.div>
          </div>

          <div className="flex max-w-7xl text-wrap justify-evenly items-center">
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 1 }}
              transition={{
                duration: 0.9,
                ease: [0.65, 0, 0.35, 1],
              }}
              viewport={{ once: true }}
            >
              <p className="p-6 text-justify">
                Every recipe balances bold spices with gentle aromatics,
                ensuring satisfying depth without overwhelming heaviness. Our
                chefs layer flavors—think toasted cumin, fresh herbs, and a hint
                of citrus—to enhance the natural character of each ingredient.
                The result is a menu that excites the palate while remaining
                light and nourishing, ideal for anyone seeking taste and
                well-being in equal measure.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.9,
                ease: [0.65, 0, 0.35, 1],
              }}
              viewport={{ once: false }}
            >
              <Image
                src="/greencapsicum.png"
                width={500}
                height={500}
                alt="image"
                className="p-2 drop-shadow-xl w-[1400px] sm:w-auto md:w-auto lg:w-auto xl:w-auto"
              />
            </motion.div>
          </div>
          <div className="flex max-w-7xl text-wrap justify-evenly items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.9,
                ease: [0.65, 0, 0.35, 1],
              }}
              viewport={{ once: false }}
            >
              <Image
                src="/leaf.png"
                width={500}
                height={500}
                alt="image"
                className="p-2 drop-shadow-xl w-[1400px] sm:w-auto md:w-auto lg:w-auto xl:w-auto"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 1 }}
              transition={{
                duration: 0.9,
                ease: [0.65, 0, 0.35, 1],
              }}
              viewport={{ once: true }}
            >
              <p className="p-6 text-justify">
                We partner with local farmers and growers to source leafy greens
                and herbs at peak freshness, minimizing food miles and
                supporting sustainable practices. From garden-fresh spinach and
                basil to aromatic cilantro and mint, our ingredients are chosen
                for quality and environmental responsibility. Each dish
                highlights these vibrant greens—whether in salads, garnishes, or
                infusions—so you enjoy meals that nourish your body and respect
                the planet.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Hero;
