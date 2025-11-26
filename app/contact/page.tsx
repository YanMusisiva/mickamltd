"use client";

import React from "react";

import Link from "next/link";
import { Mail, Phone, Linkedin, MapPin, Clock } from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const ContactPage: React.FC = () => {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h3 className="text-fluid-2xl lg:text-fluid-4xl 3xl:text-fluid-5xl container leading-none font-bold mb-6">
          Contact Mickam (U) Ltd
        </h3>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Do you have questions about our construction projects or want to
          collaborate with us? Our team is ready to assist you.
        </p>
      </div>

      {/* Map Section */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold mb-6">Our Location</h3>
        <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.763775752538!2d32.59380927396618!3d0.2995969640533679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbd6bc1e4d1a7%3A0x83a48281f9f7836a!2sTirupati%20Mazima%20Mall!5e0!3m2!1sfr!2sus!4v1763544124316!5m2!1sfr!2sus"
            width="100%"
            height="100%"
            loading="lazy"
            className="rounded-2xl border-0"
          ></iframe>
          <Link
            href="https://maps.app.goo.gl/kd5kKtLwB8QuRdcD6"
            target="_blank"
            className="absolute bottom-4 right-4 bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-full shadow-lg transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            <MapPin className="w-4 h-4" /> View on Google Maps
          </Link>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {/* Contact Info Cards */}
        <div className="space-y-6">
          {/* Email Card */}
          <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-green-100">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">Email</h3>
            </div>
            <p className="text-gray-600 mb-4">Send us your questions</p>
            <Link
              href="mailto:info@mickam.ug"
              className="text-green-700 font-semibold hover:text-green-600 transition-colors"
            >
              info@mickam.co
            </Link>
          </div>

          {/* Phone Card */}
          <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-blue-100">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">Phone</h3>
            </div>
            <p className="text-gray-600 mb-4">Call us directly</p>
            <Link
              href="tel:+256752277320"
              className="text-blue-700 font-semibold hover:text-blue-600 transition-colors text-lg"
            >
              +256 752277320
            </Link>
          </div>

          {/* Hours Card */}
          <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-purple-100">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">Working Hours</h3>
            </div>
            <div className="space-y-2 text-sm text-gray-600">
              <p>
                <span className="font-semibold">Mon - Fri:</span> 8:00 AM - 5:00
                PM
              </p>
              <p>
                <span className="font-semibold">Sat:</span> 9:00 AM - 1:00 PM
              </p>
              <p>
                <span className="font-semibold">Sun:</span> Closed
              </p>
            </div>
          </div>
        </div>

        {/* Social Links Section */}
        <div className="md:col-span-2 bg-white p-8 rounded-xl shadow-md border border-gray-200">
          <h3 className="text-2xl font-bold mb-6 text-center">Follow Us</h3>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Link
              href="https://www.youtube.com/@mickamultd"
              className="group flex flex-col items-center justify-center gap-3 p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-105 border border-blue-100"
            >
              <FaYoutube className="w-8 h-8 text-red-600 group-hover:scale-110 transition-transform" />
              <span className="font-semibold text-gray-800">Youtube</span>
            </Link>

            <Link
              href="https://www.tiktok.com/@mickamultd?_r=1&_t=ZM-91h6L06g7hr"
              target="_blank"
              className="group flex flex-col items-center justify-center gap-3 p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-105 border border-blue-100"
            >
              <FaTiktok className="w-8 h-8 text-red-950 group-hover:scale-110 transition-transform" />
              <span className="font-semibold text-gray-800">TikTok</span>
            </Link>

            <Link
              href="https://www.linkedin.com/in/michael-kamate-8129ab1a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              className="group flex flex-col items-center justify-center gap-3 p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-105 border border-blue-100"
            >
              <Linkedin className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform" />
              <span className="font-semibold text-gray-800">LinkedIn</span>
            </Link>
            {/* Instagram */}
            <Link
              href="https://www.instagram.com/mickam_u_ltd?igsh=YmMxbWtjNTd5MDlz"
              target="_blank"
              className="group flex flex-col items-center justify-center gap-3 p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-105 border border-blue-100"
            >
              <FaInstagram className="w-8 h-8 text-pink-500 group-hover:scale-110 transition-transform" />
              <span className="font-semibold text-gray-800">Instagram</span>
            </Link>

            {/* X (Twitter) */}
            <Link
              href="https://x.com/ElectricMk?t=as-0ycYU-IAsOWXp9H6roQ&s=09"
              target="_blank"
              className="group flex flex-col items-center justify-center gap-3 p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-105 border border-blue-100"
            >
              <FaTwitter className="w-8 h-8 text-blue-500 group-hover:scale-110 transition-transform" />
              <span className="font-semibold text-gray-800">X</span>
            </Link>

            {/* Facebook */}
            <Link
              href="https://www.facebook.com/Mk.E.ug"
              target="_blank"
              className="group flex flex-col items-center justify-center gap-3 p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-105 border border-blue-100"
            >
              <FaFacebook className="w-8 h-8 text-blue-700 group-hover:scale-110 transition-transform" />
              <span className="font-semibold text-gray-800">Facebook</span>
            </Link>
          </div>
        </div>
      </div>

      <Link
        href="https://wa.me/256752277320"
        target="_blank"
        className="
    fixed bottom-8 right-8 z-50
    group flex flex-col items-center justify-center gap-2
    p-4 bg-gradient-to-br from-green-500 to-gray-400
    rounded-xl shadow-lg hover:shadow-xl
    transition-all hover:scale-105 border border-green-200
  "
      >
        <Phone className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
        <span className="font-semibold text-gray-800 text-sm">WhatsApp</span>
      </Link>
    </section>
  );
};

export default ContactPage;
