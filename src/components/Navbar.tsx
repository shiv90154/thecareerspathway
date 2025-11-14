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
            ? "bg-[#FFFFFF]/90 backdrop-blur-lg shadow-md border-b border-[#F5F5F5]"
            : "bg-[#FFFFFF] border-b border-[#F5F5F5]"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">

          {/* LOGO + TEXT */}
          <Link href="/" className="flex items-center space-x-3">
            {/* LOGO */}
            <div className="relative w-12 h-12">
              <Image
                src="/logo-removebg-preview.png"
                alt="CPS Logo"
                width={48}
                height={48}
                className="object-contain rounded-lg"
              />
            </div>

            {/* DESKTOP TEXT */}
            <div className="hidden sm:block">
              <div className="text-xl font-bold text-[#0A2342]">Career Point</div>
              <div className="text-xs text-[#1E3A5F]">Education Hub</div>
            </div>

            {/* MOBILE TEXT */}
            <div className="block sm:hidden text-left leading-tight">
              <div className="text-sm font-bold text-[#0A2342]">
               Careers Pathway Shimla
              </div>
              <div className="text-[10px] text-[#1E3A5F] -mt-0.5">
                HPAS / HAS Coaching
              </div>
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
                    ? "text-[#FFFFFF] bg-[#0A2342]"
                    : "text-[#1E3A5F] hover:text-[#0A2342] hover:bg-[#F5F5F5]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* BOTTOM NAVIGATION (MOBILE) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#FFFFFF]/95 backdrop-blur-lg border-t border-[#F5F5F5] shadow-xl">
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
                    ? "text-[#FFFFFF] bg-[#0A2342] scale-105"
                    : "text-[#1E3A5F] hover:text-[#0A2342]"
                }`}
              >
                <Icon className="text-lg mb-0.5" />
                <span className="text-[8px] font-medium">{item.name}</span>

                {isActive && (
                  <div className="absolute -top-1 w-1 h-1 bg-[#FFD600] rounded-full"></div>
                )}
              </Link>
            );
          })}

        </div>
        <div className="h-3"></div>
      </div>

      {/* SAFE AREA SPACING FOR MOBILE */}
      <div className="lg:hidden pb-20"></div>
    </>
  );
}