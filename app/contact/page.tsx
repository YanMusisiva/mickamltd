"use client";

import React, { useState } from "react";

import Link from "next/link";
import {
  Mail,
  Phone,
  Facebook,
  Linkedin,
  MapPin,
  Clock,
  Send,
} from "lucide-react";

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/send-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-fluid-4xl font-bold mb-4">
          Contact Mickam (U) Ltd
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Do you have questions about our construction projects or want to
          collaborate with us? Our team is ready to assist you.
        </p>
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
              info@mickam.ug
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
              href="tel:+256701234567"
              className="text-blue-700 font-semibold hover:text-blue-600 transition-colors text-lg"
            >
              +256 701 234 567
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

        {/* Contact Form */}
        <div className="md:col-span-2 bg-white p-8 rounded-xl shadow-md border border-gray-200">
          <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Subject *
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                placeholder="What is your question?"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
                placeholder="Describe your message in detail..."
                required
              />
            </div>

            {submitStatus === "success" && (
              <div className="p-4 bg-green-100 border border-green-400 text-green-800 rounded-lg">
                ✓ Your message has been sent successfully!
              </div>
            )}
            {submitStatus === "error" && (
              <div className="p-4 bg-red-100 border border-red-400 text-red-800 rounded-lg">
                ✗ An error occurred. Please try again.
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-600 hover:bg-green-500 disabled:bg-gray-400 text-white font-semibold py-3 rounded-lg transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              {loading ? (
                "Sending..."
              ) : (
                <>
                  Send Message <Send className="h-4 w-4" />
                </>
              )}
            </button>
          </form>
        </div>
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

      {/* Social Links Section */}
      <div>
        <h3 className="text-2xl font-bold mb-6 text-center">Follow Us</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link
            href="https://wa.me/256701234567"
            target="_blank"
            className="group flex flex-col items-center justify-center gap-3 p-6 bg-gradient-to-br from-green-50 to-white rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-105 border border-green-100"
          >
            <Phone className="w-8 h-8 text-green-600 group-hover:scale-110 transition-transform" />
            <span className="font-semibold text-gray-800">WhatsApp</span>
          </Link>

          <Link
            href="mailto:info@mickam.ug"
            className="group flex flex-col items-center justify-center gap-3 p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-105 border border-blue-100"
          >
            <Mail className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform" />
            <span className="font-semibold text-gray-800">Email</span>
          </Link>

          <Link
            href="https://www.facebook.com/mickam.ug"
            target="_blank"
            className="group flex flex-col items-center justify-center gap-3 p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-105 border border-blue-100"
          >
            <Facebook className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform" />
            <span className="font-semibold text-gray-800">Facebook</span>
          </Link>

          <Link
            href="https://www.linkedin.com/company/mickam-uganda"
            target="_blank"
            className="group flex flex-col items-center justify-center gap-3 p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-105 border border-blue-100"
          >
            <Linkedin className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform" />
            <span className="font-semibold text-gray-800">LinkedIn</span>
          </Link>
        </div>
      </div>
      <div className="relative">
        <a
          href="https://wa.me/256752277320"
          target="_blank"
          className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-xl hover:bg-green-600 transition-all flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            fill="currentColor"
            viewBox="0 0 448 512"
          >
            <path d="M380.9 97.1C339 55.1 283.2 32 224.1 32 100.3 32 0 132.3 0 256c0 45 11.7 88.7 33.9 127.1L0 480l100.1-32.9C137.8 465.3 180.2 480 224 480h.1c123.8 0 224.1-100.3 224.1-224 0-59.1-23.1-114.9-67.3-158.9zM224.1 438.4h-.1c-38.5 0-76.2-10.5-108.9-30.4l-7.8-4.6-59.5 19.5 19.6-58.1-5-8.3C42.7 320.4 32 288.9 32 256c0-106 86.1-192.1 192.1-192.1 51.3 0 99.6 20 136 56.4 36.4 36.4 56 84.7 56 136 0 106-86.1 182.1-192 182.1zm101.3-138.2c-5.5-2.7-32.8-16.2-37.8-18-5.1-1.8-8.8-2.7-12.4 2.7s-14.3 18-17.6 21.6-6.5 4-12 1.3c-32.6-16.3-54-46.2-61.5-64.3-1.7-4 0-6.1 1.7-8.4 3.3-4 6.1-6.6 9.1-10.2 3-3.5 4-6.1 6.1-10.1 2-4 .9-7.6-.4-10.3-1.3-2.7-12.4-29.8-17-40.8-4.5-11-9.1-9.3-12.4-9.5-3.3-.2-7.1-.2-10.9-.2s-10.3 1.5-15.6 7.6c-5.3 6.1-20.4 20-20.4 48.9 0 28.9 20.9 56.8 23.8 60.8 2.9 4 41.3 63.1 100.1 88.5 14 6.1 24.9 9.7 33.4 12.4 14 4.5 26.8 3.9 36.9 2.4 11.3-1.7 32.8-13.4 37.5-26.3 4.7-12.9 4.7-24 3.3-26.3-1.3-2.3-5-3.6-10.5-6.3z" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default ContactPage;
