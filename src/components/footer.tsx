"use client";

import Link from "next/link";
import Image from "next/image";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState({ type: "", text: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setPopupMessage({
          type: "success",
          text: "Message sent successfully!",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setPopupMessage({
          type: "error",
          text: "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      setPopupMessage({
        type: "error",
        text: "An error occurred. Please try again.",
      });
    }
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <footer className="bg-gray-900 text-white py-16 px-8 mt-24 relative z-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Left side content */}
          <div className="md:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Brand Section */}
            <div className="space-y-6">
              <Link href="/" className="flex items-center gap-3 group">
                <Image
                  src="/logo.webp"
                  alt="Bristo HQ"
                  width={40}
                  height={40}
                  className="rounded-full transition-transform group-hover:scale-110"
                />
                <span className="text-2xl font-bold text-[#5865F2] group-hover:text-white transition-colors">
                  Bristo HQ
                </span>
              </Link>
              <p className="text-gray-400 leading-relaxed">
                Empowering businesses through innovative AI solutions and
                digital transformation. Building tomorrow&apos;s technology
                today.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="font-bold text-xl">Quick Links</h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/services"
                    className="text-gray-400 hover:text-[#5865F2] transition-colors flex items-center gap-2"
                  >
                    <span className="h-1 w-4 bg-[#5865F2] rounded-full opacity-0 transition-opacity hover:opacity-100" />
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/work"
                    className="text-gray-400 hover:text-[#5865F2] transition-colors flex items-center gap-2"
                  >
                    <span className="h-1 w-4 bg-[#5865F2] rounded-full opacity-0 transition-opacity hover:opacity-100" />
                    Work
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-400 hover:text-[#5865F2] transition-colors flex items-center gap-2"
                  >
                    <span className="h-1 w-4 bg-[#5865F2] rounded-full opacity-0 transition-opacity hover:opacity-100" />
                    About
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="font-bold text-xl">Contact</h3>
              <ul className="space-y-4">
                <li className="text-gray-400 hover:text-[#5865F2] transition-colors cursor-pointer">
                  contact@bristohq.com
                </li>
                <li className="text-gray-400 hover:text-[#5865F2] transition-colors cursor-pointer">
                  +91 9876543210
                </li>
                <li className="text-gray-400">#123, India</li>
              </ul>
            </div>
          </div>

          {/* Contact Form - Right Side */}
          <div className="space-y-6 md:col-span-5 relative">
            <h3 className="font-bold text-xl">Get in Touch</h3>
            {showPopup && (
              <div
                className={`p-4 rounded-lg shadow-lg transition-all duration-300 ${
                  popupMessage.type === "success" ? "bg-green-500" : "bg-red-500"
                }`}
              >
                <p className="text-white">{popupMessage.text}</p>
              </div>
            )}
            <form
              onSubmit={handleSubmit}
              className="space-y-4 backdrop-blur-sm"
            >
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#5865F2] transition-colors"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#5865F2] transition-colors"
                  required
                />
              </div>
              <textarea
                name="message"
                placeholder="Message"
                rows={2}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#5865F2] transition-colors"
                required
              />
              <Button
                type="submit"
                className="w-full bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-lg py-2"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 text-center">
          <div className="flex justify-center gap-6 mb-6">
            <Link
              href="#"
              className="text-gray-400 hover:text-[#5865F2] transition-colors"
            >
              <FaTwitter className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-[#5865F2] transition-colors"
            >
              <FaLinkedin className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-[#5865F2] transition-colors"
            >
              <FaGithub className="w-5 h-5" />
            </Link>
          </div>
          <p className="text-gray-400 hover:text-[#5865F2] transition-colors">
            &copy; {new Date().getFullYear()} Bristo HQ. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
