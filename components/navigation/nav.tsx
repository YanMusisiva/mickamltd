"use client";
import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { HoverLinkEffect } from "../micro-components/HoverLinkEffect";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Image from "next/image";

const menuItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/company", label: "Company" },
  { href: "/careers", label: "Careers" },
  { href: "/testimony", label: "Testimony" },
  { href: "/contact", label: "Contact" },
];

export const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const desktopNavRef = useRef<HTMLDivElement>(null);
  const menuOverlayRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<HTMLLIElement[]>([]);
  const logoRef = useRef<HTMLDivElement>(null);

  const currentPath = usePathname();

  // Desktop navbar scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Desktop navbar animation on mount
  useGSAP(() => {
    if (desktopNavRef.current) {
      gsap.fromTo(
        desktopNavRef.current,
        { opacity: 0, y: -40 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
      );
    }
  }, []);

  // Mobile menu GSAP setup
  useGSAP(() => {
    if (menuOverlayRef.current) {
      gsap.set(menuOverlayRef.current, { yPercent: -100, display: "none" });
      gsap.set(menuItemsRef.current, { y: 50, opacity: 0 });
    }
  }, []);

  const { contextSafe } = useGSAP({ scope: menuOverlayRef.current! });

  const toggleMenu = contextSafe(() => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      gsap.to(menuOverlayRef.current, {
        yPercent: 0,
        display: "flex",
        duration: 0.5,
        ease: "power3.inOut",
      });
      gsap.to(menuItemsRef.current, {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        delay: 0.2,
        duration: 0.4,
        ease: "power2.out",
      });
    } else {
      gsap.to(menuItemsRef.current, {
        y: 50,
        opacity: 0,
        stagger: 0.05,
        duration: 0.3,
        ease: "power2.in",
      });
      gsap.to(menuOverlayRef.current, {
        yPercent: -100,
        duration: 0.5,
        delay: 0.2,
        ease: "power3.inOut",
      });
    }
  });

  return (
    <header className="relative z-50">
      {/* Desktop Navbar with transparency + shrink + animation */}
      <div
        ref={desktopNavRef}
        className={`hidden lg:flex fixed top-0 left-0 w-full z-[200] px-8 items-center justify-between transition-all duration-300 border-b
          ${
            scrolled
              ? "bg-white shadow-md py-3"
              : "bg-white/20 backdrop-blur-lg py-6"
          }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo.jpg"
            alt="logo"
            className="text-green-600"
            width={28}
            height={28}
          />

          <div className="text-2xl font-extrabold text-black leading-tight">
            MicKam <span className="text-gray-700 text-2xl">(U) Ltd</span>
          </div>
        </div>

        {/* Desktop Links */}
        <nav className="flex gap-8 text-lg font-semibold">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                `relative group hover:text-black transition-all ${
                  currentPath === item.href && "text-black"
                }`
              )}
            >
              <span
                className={cn(
                  `absolute -bottom-1 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full ${
                    currentPath === item.href && "w-full"
                  }`
                )}
              />
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Toggle Button */}
      <button
        onClick={toggleMenu}
        className="lg:hidden fixed w-24 top-4 right-4 z-[101] px-4 py-2 text-white font-bold bg-black hover:bg-gray-800 rounded-full hover:scale-105 active:scale-95 transition-all border-none"
      >
        {isOpen ? "Close" : "Menu"}
      </button>

      {/* Mobile Menu Overlay */}
      <nav
        ref={menuOverlayRef}
        className="fixed md:hidden hidden inset-0 z-[100] bg-white min-h-svh w-full justify-center items-center"
      >
        <div
          ref={logoRef}
          className="container flex max-lg:flex-col gap-10 justify-between max-w-6xl"
        >
          <div className="relative">
            <div className="fill-white opacity-20 absolute top-0 right-0 -z-10">
              <Image
                src="/logo.jpg"
                alt="MicKam Logo"
                width={400}
                height={400}
              />
            </div>
            <h1 className="text-4xl font-extrabold text-black leading-tight">
              MicKam <span className="text-gray-700 text-2xl">(U) Ltd</span>
            </h1>
            <p className="text-fluid-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-t from-yellow-300 to-red-400">
              Build your World
            </p>
          </div>
          <ul className="space-y-6">
            {menuItems.map((item, index) => (
              <li
                key={item.href}
                ref={(el) => {
                  if (el) menuItemsRef.current[index] = el;
                }}
                className="text-4xl md:text-6xl font-bold"
              >
                <Link
                  href={item.href}
                  onClick={toggleMenu}
                  className="hover:text-black transition-colors relative group pb-2 flex items-center gap-2 w-fit"
                >
                  <HoverLinkEffect />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};
