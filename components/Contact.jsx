"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

export default function Contact() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-[#111] text-white py-16"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* 1. Main heading */}
        <h1 className="text-4xl md:text-5xl text-center font-lexend text-brand-red font-bold mb-12">
          Contact Us
        </h1>

        {/* 2. Grid: Contact Info | QR Code & Social Icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* --- Left column: Contact Info --- */}
          <div className="space-y-8 bg-[#1f1f1f] rounded-lg shadow-xl p-8">
            <h2 className="text-2xl font-semibold text-brand-yellow tracking-wide mb-4">
              Contact Info
            </h2>
            <p className="text-gray-200">
              If you have any questions or feedback, feel free to reach out to
              us! We’re always happy to help.
            </p>

            {/* Address */}
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-brand-yellow">
                Address
              </h3>
              <p className="text-gray-200">
                Blue Building, Shop #01, Wadi Al Safa 05, Dubai
              </p>
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-brand-yellow">Phone</h3>
              <p className="text-gray-200">04 578 6154</p>
              <p className="text-gray-200">052 868 4152</p>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-brand-yellow">Email</h3>
              <p className="text-gray-200">hello@mangopeopledubai.com</p>
            </div>
          </div>

          {/* --- Right column: QR Code + Social Icons --- */}
          <div className="grid grid-cols-1 gap-8">
            {/* QR CODE */}
            <div className="flex flex-col items-center bg-[#1f1f1f] rounded-lg shadow-xl p-8">
              <h2 className="text-2xl font-semibold text-brand-yellow mb-4">
                Scan to Chat
              </h2>
              {/* Replace '/qr-code.png' with your actual QR code path */}
              <div className="w-40 h-40 bg-white rounded-lg overflow-hidden mb-4">
                <img
                  src="/scanme.png"
                  alt="Scan Me QR Code"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-brand-red text-center  ">Scan Me</p>
            </div>

            {/* Social Media Icons */}
            <div className="bg-[#1f1f1f] rounded-lg shadow-xl p-8 text-center">
              <h2 className="text-2xl font-semibold text-brand-yellow mb-4">
                Follow Us
              </h2>
              <div className="flex justify-center space-x-6">
                <a
                  href="https://wa.me/923001234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 hover:text-green-400 transition-colors"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp size={28} />
                </a>
                <a
                  href="https://www.facebook.com/yourpage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-500 transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebookF size={28} />
                </a>
                <a
                  href="https://www.instagram.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:text-pink-400 transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram size={28} />
                </a>
                <a
                  href="https://twitter.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:text-sky-300 transition-colors"
                  aria-label="Twitter"
                >
                  <FaTwitter size={28} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Footer Bottom Bar */}
        <div className="mt-16 border-t border-gray-700 pt-6">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Mango People. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
