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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      {/* TOP NAV */}
      <nav
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-lg shadow-md"
            : "bg-white border-b border-gray-200"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2">

          {/* LOGO + TEXT */}
          <Link href="/" className="flex items-center space-x-3">

            {/* 🔥 BIGGER 80px LOGO */}
            <div className="relative w-20 h-20">
              <Image
                src="/logo-removebg-preview.png"
                alt="CPS Logo"
                fill
                className="object-contain"
              />
            </div>

            {/* DESKTOP TEXT */}
            <div className="hidden sm:block leading-tight">
              <div className="text-xl font-bold text-[#0A2342]">Career Point</div>
              <div className="text-xs text-[#1E3A5F]">Education Hub</div>
            </div>

            {/* MOBILE TEXT */}
            <div className="block sm:hidden text-left leading-tight -ml-2">
              <div className="text-base font-bold text-[#0A2342]">
                Careers Pathway Shimla
              </div>
              <div className="text-[11px] text-[#1E3A5F] -mt-0.5">
                HPAS / HAS Coaching
              </div>
            </div>
          </Link>

          {/* DESKTOP NAV LINKS */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  pathname === link.path
                    ? "text-white bg-[#0A2342]"
                    : "text-[#1E3A5F] hover:text-[#0A2342] hover:bg-gray-100"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* BOTTOM NAV (MOBILE) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-t border-gray-200 shadow-xl">
        <div className="flex justify-around items-center px-1 py-2">

          {bottomNavItems.map((item) => {
            const isActive = activeBottomNav === item.name;
            const Icon = item.icon;

            return (
              <Link
                href={item.path}
                key={item.name}
                onClick={() => setActiveBottomNav(item.name)}
                className={`relative flex flex-col items-center justify-center w-14 py-2 rounded-xl transition-all ${
                  isActive
                    ? "text-white bg-[#0A2342] scale-110 shadow-md"
                    : "text-[#1E3A5F] hover:text-[#0A2342]"
                }`}
              >
                <Icon className="text-xl mb-0.5" />
                <span className="text-[10px] font-semibold">{item.name}</span>

                {isActive && (
                  <div className="absolute -top-1 w-1 h-1 bg-[#FFD600] rounded-full"></div>
                )}
              </Link>
            );
          })}
        </div>
        <div className="h-3"></div>
      </div>

      {/* SAFE AREA BOTTOM */}
      <div className="lg:hidden pb-24"></div>
    </>
  );
}
