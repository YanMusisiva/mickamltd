"use client";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import {
  Hexagon,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const menuItems = [
  { label: "Home", target: "/" },
  { label: "Projects", target: "/projects", offset: -80 },
  { label: "Company", target: "/company" },
  { label: "Careers", target: "/careers", offset: 100 },
  { label: "Testimony", target: "/testimony" },
  { label: "Contact", target: "/contact" },
];

const quickLinks = [
  { label: "About", href: "/about" },
  { label: "GSC", href: "/about" },
];

const contactInfo = [
  {
    icon: Mail,
    label: "contact@mickam.com",
    href: "mailto:contact@mickam.com",
  },
  {
    icon: Phone,
    label: "+256 700 123 456",
    href: "tel:+256700123456",
  },
  {
    icon: MapPin,
    label: "Kampala, Uganda",
    href: "https://maps.google.com?q=Kampala+Uganda",
  },
];

const socialLinks = [
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://facebook.com/ecoville",
    color: "hover:text-blue-600",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/company/ecoville",
    color: "hover:text-blue-700",
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "https://twitter.com/ecoville",
    color: "hover:text-blue-400",
  },
  {
    icon: GitHubLogoIcon,
    label: "GitHub",
    href: "https://github.com/ecoville",
    color: "hover:text-gray-700",
  },
];

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white to-neutral-50 border-t border-green-200 py-16 relative overflow-hidden">
      {/* Decorative Elements */}

      <Hexagon
        strokeWidth={1}
        className="max-lg:hidden size-32 stroke-green-200 fill-green-50 absolute z-10 bottom-20 left-5 opacity-30"
      />

      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        {/* Header Section avec Logo */}
        <div className="text-center mb-12">
          <Link
            href="/"
            className="inline-block mb-4 group hover:scale-105 transition-transform duration-300"
          >
            <div className="flex items-center justify-center gap-2">
              <Image src="/logo.jpg" alt="Écoville" width={48} height={48} />
            </div>
          </Link>
          <p className="text-fluid-xl bg-clip-text font-extrabold leading-tight text-transparent bg-black mb-2">
            Build your World
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-yellow-500 to-yellow-300 mx-auto rounded-full"></div>
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Navigation Column */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-800">Navigation</h3>
            <ul className="space-y-2">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.target}
                    className="text-gray-600 hover:text-green-700 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-green-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-800">
              Legal Terms
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-green-700 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-green-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Column */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-800">Contact</h3>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <li key={index}>
                    <Link
                      href={info.href}
                      target="_blank"
                      className="text-gray-600 hover:text-green-700 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span className="text-sm">{info.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* About Column */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-800">About</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Mickam Ltd, your trusted partner in construction and civil
              engineering, combines rigor, safety, and timely delivery to bring
              your projects to life. Together, let's build a strong and
              sustainable future in Uganda and East Africa.
            </p>
            <div className="flex gap-2 flex-wrap">
              <span className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                Durable
              </span>
              <span className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                Innovative
              </span>
              <span className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                Client-Focused
              </span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-green-300 to-transparent mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Social Links */}
          <div className="flex justify-center gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full bg-gray-100 hover:bg-green-600 text-gray-700 ${social.color} transition-all duration-300 flex items-center justify-center hover:scale-110 active:scale-95`}
                  title={social.label}
                >
                  <Icon className="w-5 h-5" />
                </Link>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Mickam Ltd. All rights reserved.</p>
            <p className="text-xs mt-1">
              Built with care for a sustainable future
            </p>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className=" bottom-10 right-8 w-12 h-12 bg-yellow-500 hover:bg-yellow-300 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 active:scale-95 z-40 md:flex absolute "
          title="Retour au haut"
        >
          ↑
        </button>
      </div>
    </footer>
  );
};
