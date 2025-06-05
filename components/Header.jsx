"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaHome } from "react-icons/fa";
import { BiSolidFoodMenu } from "react-icons/bi";
import { MdContactMail } from "react-icons/md";
import { RiFileInfoFill } from "react-icons/ri";

import Navbar from "./Navbar";
import DarkmodeButton from "./DarkmodeButton";

function Header() {
  return (
    <div className="shadow-lg relative z-50">
      <div className="flex justify-between items-center p-3 max-w-7xl mx-auto">
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
          className="flex gap-4 items-center"
        >
          {/* Logo + Site Title */}
          {/* Place your logo file at public/logo.png */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Site Logo"
              width={120}
              height={120}
              priority
            />
          </Link>
        </motion.div>
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
          className="flex gap-4 mx-4"
        >
          <DarkmodeButton />
          <Navbar title="home" address="/" Icon={FaHome} />
          <Navbar title="about" address="#about" Icon={RiFileInfoFill} />
          <Navbar title="menu" address="#menu" Icon={BiSolidFoodMenu} />
          <Navbar title="contact" address="#contact" Icon={MdContactMail} />
        </motion.div>
      </div>
    </div>
  );
}

export default Header;
