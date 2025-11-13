"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import {
  HiHome,
  HiBookOpen,
  HiAcademicCap,
  HiUserGroup,
  HiClipboardList,
  HiBriefcase,
  HiDocument,
  HiMail,
} from "react-icons/hi";

// TOP NAV LINKS
const navLinks = [
  { name: "Home", path: "/", icon: HiHome },
  { name: "About Us", path: "/about" },
  { name: "Management", path: "/management" },
  { name: "Study Material", path: "/study-material", icon: HiBookOpen },
  { name: "E-Learning", path: "/e-learning", icon: HiAcademicCap },
  { name: "E-Enrollment", path: "/e-enrollment" },
  { name: "Job Alerts", path: "/job-alerts" },
  { name: "E-Books", path: "/ebooks" },
  { name: "Contact", path: "/contact" },
];

// BOTTOM NAV LINKS
const bottomNavItems = [
  { name: "Home", path: "/", icon: HiHome },
  { name: "About", path: "/about", icon: HiUserGroup },
  { name: "Mgmt", path: "/management", icon: HiClipboardList },
  { name: "Material", path: "/study-material", icon: HiBookOpen },
  { name: "Learn", path: "/e-learning", icon: HiAcademicCap },
  { name: "Enroll", path: "/e-enrollment", icon: HiDocument },
  { name: "Alerts", path: "/job-alerts", icon: HiBriefcase },
  { name: "EBooks", path: "/ebooks", icon: HiBookOpen },
  { name: "Contact", path: "/contact", icon: HiMail },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [activeBottomNav, setActiveBottomNav] = useState("Home");

  // Detect scroll for effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Set active bottom nav
  useEffect(() => {
    const matched = bottomNavItems.find(
      (item) =>
        pathname === item.path ||
        (item.path !== "/" && pathname.startsWith(item.path))
    );
    if (matched) setActiveBottomNav(matched.name);
  }, [pathname]);

  return (
    <>
      {/* TOP NAVBAR */}
      <nav
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-lg shadow-md border-b border-gray-200"
            : "bg-white border-b border-gray-200"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">

          {/* LOGO */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-12 h-12">
              <Image
                src="/logo.png"
                alt="CPS Logo"
                width={48}
                height={48}
                className="object-contain rounded-lg"
              />
            </div>
            <div className="hidden sm:block">
              <div className="text-xl font-bold text-blue-700">Career Point</div>
              <div className="text-xs text-gray-500">Education Hub</div>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  pathname === link.path
                    ? "text-blue-700 bg-blue-100"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* BOTTOM NAVIGATION (MOBILE) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-t border-gray-200 shadow-xl">
        <div className="flex justify-around items-center px-2 py-2">

          {bottomNavItems.map((item) => {
            const isActive = activeBottomNav === item.name;
            const Icon = item.icon;

            return (
              <Link
                href={item.path}
                key={item.name}
                onClick={() => setActiveBottomNav(item.name)}
                className={`relative flex flex-col items-center justify-center w-12 py-1 rounded-xl transition-all ${
                  isActive
                    ? "text-blue-700 bg-blue-50 scale-105"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                <Icon className="text-lg mb-0.5" />
                <span className="text-[8px] font-medium">{item.name}</span>

                {isActive && (
                  <div className="absolute -top-1 w-1 h-1 bg-blue-600 rounded-full"></div>
                )}
              </Link>
            );
          })}

        </div>
        <div className="h-3"></div>
      </div>

      {/* BOTTOM SPACE FOR SAFE AREA */}
      <div className="lg:hidden pb-20"></div>
    </>
  );
}
