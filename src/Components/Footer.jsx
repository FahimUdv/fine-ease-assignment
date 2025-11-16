import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import footBg from "../assets/foot-bg.png"
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
    <img src={footBg} alt="" />
      <footer className="w-full bg-[#000000] text-white px-6 md:px-28 py-16">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Contact Section */}
          <div className="max-w-md">
            <p className="text-sm tracking-wider text-gray-400">CONTACT US</p>
            <h2 className="text-3xl md:text-4xl font-semibold mt-2 leading-snug">
              Let’s Discuss With <br /> Our Experts.
            </h2>

            <button className="mt-6 bg-white text-black px-6 py-3 rounded-full flex items-center gap-2 font-medium shadow-md hover:scale-105 transition">
              Schedule a call now <span>→</span>
            </button>

            <p className="text-sm tracking-wider text-gray-400 mt-6">
              OR EMAIL US AT
            </p>

            <div className="inline-flex items-center bg-[#141823] px-4 py-2 rounded-full mt-2 border border-gray-700 cursor-pointer hover:bg-[#1a1f2a] transition">
              <span className="text-gray-300 text-sm">ask@finease.com</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-sm tracking-wider text-gray-400 mb-4">
              QUICK LINKS
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">Case Studies</li>
              <li className="hover:text-white cursor-pointer">Gallery</li>
              <li className="hover:text-white cursor-pointer">Blogs</li>
              <li className="hover:text-white cursor-pointer">About Me</li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <p className="text-sm tracking-wider text-gray-400 mb-4">
              INFORMATION
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white cursor-pointer">
                Terms of Service
              </li>
              <li className="hover:text-white cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-white cursor-pointer">
                Cookies Settings
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-16 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© FINEASE 2025. ALL RIGHTS RESERVED.</p>

          {/* Social Icons */}
          <div className="flex gap-6 mt-4 md:mt-0 text-lg">
            <FaFacebookF className="hover:text-white cursor-pointer" />
            <FaXTwitter className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaLinkedinIn className="hover:text-white cursor-pointer" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
