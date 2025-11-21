"use client";
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Linkedin, Youtube } from "lucide-react";
import Image from "next/image";
import { FaTiktok } from "react-icons/fa";

interface MenuItem {
  label: string;
  target: string;
  offset?: number;
}

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  /* ---------------------- MENU ITEMS ---------------------- */
  const menuItems: MenuItem[] = [
    { label: "Projet", target: "#project" },
    { label: "Histoire", target: "#histoire", offset: -80 },
    { label: "Signature", target: "#architecture" },
    { label: "Activités", target: "#tourisme", offset: 100 },
    { label: "Restauration", target: "#cuisine" },
  ];

  /* ---------------------- SLIDESHOW ----------------------- */
  const images = ["/bg/bg_home.webp", "/bg/firstBg.webp", "/og_image.jpg"];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  /* ---------------------- GSAP ----------------------- */
  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.from(".hero-title", { opacity: 0, y: 40, duration: 0.8 })
        .from(".hero-slogan", { opacity: 0, y: 20, duration: 0.5 }, "-=0.4")
        .from(".hero-desc", { opacity: 0, y: 20, duration: 0.5 }, "-=0.5")
        .from(".hero-menu li", { opacity: 0, y: 15, stagger: 0.1 }, "-=0.3")
        .from(".socials", { opacity: 0, y: 20, duration: 0.6 });
    },
    { scope: containerRef }
  );

  /* ---------------------- SCROLL HANDLER ----------------------- */
  const handleMenuClick = (target: string, offset: number = 0): void => {
    gsap.to(window, {
      duration: 0.5,
      scrollTo: { y: target, offsetY: offset },
    });
  };

  return (
    <section
      ref={containerRef}
      className="pb-4 max-lg:pt-20 max-lg:flex-col flex items-center justify-center"
    >
      {/* ---------------------- LEFT COLUMN ---------------------- */}
      <div className="h-full w-full md:w-1/2 flex flex-col items-center justify-start px-4 mt-6 lg:mt-12">
        <div className="relative text-center max-w-xl space-y-6">
          {/* Logo + Name */}
          <div className="flex flex-col items-center gap-3 hero-title">
            <Image src="/logo.jpg" alt="MicKam Logo" width={150} height={150} />
            <h1 className="text-4xl font-extrabold text-black leading-tight">
              MicKam <span className="text-gray-700 text-2xl">(U) Ltd</span>
            </h1>
          </div>

          {/* Red Slogan */}
          <p className="hero-slogan text-2xl font-bold text-white bg-red-600 px-6 py-2 rounded-md inline-block shadow">
            Build your World
          </p>

          {/* Corporate Description */}
          <p className="hero-desc text-lg text-gray-800 leading-relaxed">
            Delivering end-to-end building and civil works solutions for private
            developers, corporates, and public sector clients across Uganda and
            the East African region.
          </p>

          {/* Social + Other Site */}
          <div className="socials mt-10 space-y-6">
            {/* Conteneur principal responsive */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center lg:gap-6 gap-4">
              {/* CTA Button */}
              <a
                href="/contact"
                className="inline-block px-8 py-3 rounded-full bg-black text-white font-semibold shadow-md hover:bg-gray-800 hover:shadow-lg transition-all duration-200"
              >
                Get a quote
              </a>

              {/* Social Icons */}
              <div className="flex items-center justify-center gap-4 text-lg">
                <div className="p-3 rounded-full bg-gray-100 hover:bg-blue-100 transition cursor-pointer">
                  <Linkedin className="hover:text-blue-600 transition" />
                </div>

                <div className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition cursor-pointer">
                  <FaTiktok className="text-xl" />
                </div>

                <div className="p-3 rounded-full bg-gray-100 hover:bg-red-100 transition cursor-pointer">
                  <Youtube className="hover:text-red-600 transition" />
                </div>
              </div>
            </div>

            {/* Always at the bottom */}
            <div className="text-center space-y-1 pt-3">
              <div className="text-sm text-gray-600">
                Take a look at our other site
              </div>

              <a
                href="#"
                className="font-semibold text-blue-700 hover:underline cursor-pointer"
              >
                StandardProperties Ltd
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------------- IMAGE PART (UNCHANGED VISUALLY) ---------------------- */}
      <div className="relative parralelogram w-full lg:w-1/2 h-full aspect-square overflow-hidden">
        <div className="absolute inset-0 transition-opacity duration-1000 opacity-100">
          <Image
            key={currentImage}
            src={images[currentImage]}
            alt="image"
            className="object-cover min-h-svh w-full"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            loading="eager"
            placeholder="blur"
            blurDataURL="/svg/placeholder.svg"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
