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
          <strong>Company Name:</strong> Mickam (U) Ltd
        </li>
        <li>
          <strong>Address:</strong> Kampala, Uganda (Head Office)
        </li>
        <li>
          <strong>Registration Number:</strong> To be provided
        </li>
        <li>
          <strong>Tax Identification Number (TIN):</strong> To be provided
        </li>
        <li>
          <strong>Email:</strong> contact@mickam.com
        </li>
        <li>
          <strong>Phone:</strong> +256 123 456 789
        </li>
      </ul>

      <h2 className="text-3xl font-semibold mt-8 mb-4">Terms & Conditions</h2>
      <p className="text-lg text-gray-600 mb-4">
        Our Terms & Conditions govern the relationship between Mickam (U) Ltd
        and our clients. You can review them by clicking the link below:
      </p>
      <Link href="/about/terms" className="text-green-700 underline">
        View Terms & Conditions
      </Link>

      <h2 className="text-3xl font-semibold mt-8 mb-4">Privacy Policy</h2>
      <p className="text-lg text-gray-600 mb-4">
        We respect your privacy and are committed to protecting your personal
        data. To learn more, please read our Privacy Policy:
      </p>
      <Link href="/about/privacy" className="text-green-700 underline">
        View Privacy Policy
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
        <strong>Phone:</strong> +256 123 456 789
      </p>
    </section>
  );
};

export default LegalPage;
