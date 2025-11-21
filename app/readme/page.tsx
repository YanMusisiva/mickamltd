import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mickam (U) Ltd – Company Profile",
  description:
    "Company profile of Mickam (U) Ltd, construction & engineering solutions across Uganda and East Africa.",
};

export default function ReadmePage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="px-6 py-8">
          {/* TITLE */}
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Mickam (U) Ltd – Company Profile
          </h1>

          {/* INTRO */}
          <p className="text-gray-700 mb-6">
            Mickam (U) Ltd is a Ugandan construction and engineering company
            incorporated in 2019. We deliver end-to-end building and civil works
            solutions for private developers, corporates, and public sector
            clients across Uganda and the wider East African region.
          </p>

          <p className="text-gray-700 mb-6">
            Our approach blends rigorous project management, strong HSE
            practices, and a collaborative, client-first culture to consistently
            deliver on time, on budget, and to specification.
          </p>

          {/* VISION */}
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Vision
          </h2>
          <p className="text-gray-700 mb-6">
            To be East Africa&apos;s most trusted partner for quality, safe, and
            sustainable construction that uplifts communities and advances
            regional development.
          </p>

          {/* MISSION */}
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Mission
          </h2>

          <p className="text-gray-700 mb-4">
            To plan, build, and maintain durable infrastructure and buildings
            by:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>
              Applying best-practice engineering and uncompromising safety
              standards,
            </li>
            <li>Using skilled local teams and reliable supply chains,</li>
            <li>
              Embracing innovation and value engineering to reduce lifecycle
              costs,
            </li>
            <li>
              Communicating transparently so clients always know scope, cost,
              and timeline.
            </li>
          </ul>

          {/* CORE VALUES */}
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Core Values
          </h2>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Safety first – zero-harm culture on every site.</li>
            <li>
              Integrity – transparency, accountability, and ethical procurement.
            </li>
            <li>
              Quality – workmanship, materials, and finishes that meet or exceed
              standards.
            </li>
            <li>Reliability – disciplined schedules and cost control.</li>
            <li>Innovation – practical technology and value engineering.</li>
            <li>
              Sustainability – environmental stewardship and community impact.
            </li>
            <li>
              Client focus – collaborative delivery and clear communication.
            </li>
          </ul>

          {/* SERVICES */}
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Services
          </h2>

          {/* BUILDING CONSTRUCTION */}
          <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
            Building Construction
          </h3>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>Residential estates, villas, and apartments</li>
            <li>Commercial buildings, offices, retail, and hospitality</li>
            <li>Industrial facilities, warehouses, and workshops</li>
            <li>Turnkey Design–Build (EPC) delivery</li>
          </ul>

          {/* CIVIL & INFRASTRUCTURE */}
          <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
            Civil & Infrastructure
          </h3>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>Roads, access ways, parking & pavements</li>
            <li>Drainage, culverts, and storm-water management</li>
            <li>Retaining structures and earthworks</li>
            <li>Minor bridges and culvert crossings</li>
          </ul>

          {/* PROJECT MANAGEMENT */}
          <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
            Project & Cost Management
          </h3>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>Project planning, scheduling, and site supervision</li>
            <li>Quantity surveying, BOQs, and cost control</li>
            <li>Contract administration (FIDIC/JB) and claims support</li>
            <li>QA/QC and HSE management</li>
          </ul>

          {/* STRUCTURAL */}
          <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
            Structural & Architectural Support
          </h3>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>Structural detailing and buildability reviews</li>
            <li>Coordination of MEP trades during construction</li>
            <li>Renovations, fit-outs, and adaptive reuse</li>
            <li>Post-construction maintenance & facilities support</li>
          </ul>

          {/* PROCUREMENT */}
          <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
            Procurement & Enabling Services
          </h3>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Materials sourcing and logistics</li>
            <li>Equipment hire and site mobilization</li>
            <li>Survey & geotechnical coordination through vetted partners</li>
            <li>Regulatory approvals liaison and inspections support</li>
          </ul>

          {/* COVERAGE */}
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Geographic Coverage
          </h2>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Primary base: Uganda</li>
            <li>
              Regional operations: Kenya, Tanzania, Rwanda, South Sudan, DRC —
              with flexible mobilization to meet client needs.
            </li>
          </ul>

          {/* WHY CHOOSE US */}
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Why Clients Choose Mickam
          </h2>
          <ul className="list-disc list-inside text-gray-700 mb-10 space-y-2">
            <li>
              Proven delivery since 2019 with disciplined timelines and budgets
            </li>
            <li>Strong safety culture and compliant workmanship</li>
            <li>
              Value engineering to optimize cost without compromising quality
            </li>
            <li>Local knowledge, regional reach, and community engagement</li>
            <li>Clear reporting and a single point of accountability</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
