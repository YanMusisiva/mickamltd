"use client";
import React from "react";
import Link from "next/link";

const LegalPage: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6">Legal Information</h1>
      <p className="text-lg text-gray-600 mb-4">
        Welcome to the legal information page of Mickam (U) Ltd. We are
        committed to maintaining full transparency and trust with our clients,
        partners, and stakeholders.
      </p>

      <h2 className="text-3xl font-semibold mt-8 mb-4">Company Details</h2>
      <ul className="list-disc list-inside mb-6">
        <li>
          <strong>Company Name:</strong> Mickam SMC Ltd
        </li>
        <li>
          <strong>Address:</strong> Tirupati MAZIMA Mall. Kampala, Uganda (Near
          the American Embassy).
        </li>

        <li>
          <strong>Tax Identification Number (TIN): 1014977761</strong>
        </li>
        <li>
          <strong>Email:</strong> contact@mickam.com
        </li>
        <li>
          <strong>Phone:</strong> +256 752277320
        </li>
      </ul>

      <h2 className="text-3xl font-semibold mt-8 mb-4">Terms & Conditions</h2>
      <p className="text-lg text-gray-600 mb-4">
        Our Terms & Conditions govern the relationship between Mickam (U) Ltd
        and our clients. You can review them by clicking the link below:
      </p>
      <Link
        href="/privacy-policy.pdf"
        download
        className="text-green-700 underline"
      >
        Download Terms & Conditions
      </Link>

      <h2 className="text-3xl font-semibold mt-8 mb-4">Privacy Policy</h2>
      <p className="text-lg text-gray-600 mb-4">
        We respect your privacy and are committed to protecting your personal
        data. To learn more, please read our Privacy Policy:
      </p>
      <Link
        href="/privacy-policy.pdf"
        download
        className="text-green-700 underline"
      >
        Download Privacy Policy
      </Link>

      <h2 className="text-3xl font-semibold mt-8 mb-4">Contact</h2>
      <p className="text-lg text-gray-600 mb-4">
        If you have any questions regarding our legal information, feel free to
        contact us:
      </p>
      <p className="text-lg text-gray-600 mb-4">
        <strong>Email:</strong> contact@mickam.com
      </p>
      <p className="text-lg text-gray-600 mb-4">
        <strong>Phone:</strong> +256 752277320
      </p>
    </section>
  );
};

export default LegalPage;
