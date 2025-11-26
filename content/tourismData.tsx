import { MapPin, Binoculars, Bike, Wifi, Leaf } from "lucide-react";
import { EcovilleTourismData } from "./types/contentType";

export const tourismData: EcovilleTourismData = {
  title: "Explore Our Mickam Projects",
  content:
    "Discover the innovative construction projects of Mickam (U) Ltd across Uganda and East Africa. Whether you are a potential client, investor, or simply interested in sustainable engineering, our projects showcase quality, safety, and advanced engineering solutions.",

  features: [
    {
      title: "Residential Estates & Villas",
      description:
        "Modern residential estates and villas delivered with high-quality finishes and sustainable design.",
      image: "/tourism/residential-estates.webp",
      icon: (
        <div className="border rounded-3xl p-4 w-fit mx-auto">
          <MapPin strokeOpacity={0.8} size={40} className="text-white" />
        </div>
      ),
      cta: {
        buttonText: "Contact Us",
        href: "/contact",
        price: "N/A",
        desc: "Contact us for residential project inquiries",
      },
      video: "/tourism/residential-estates.mp4",
    },
    {
      title: "Commercial & Office Buildings",
      description:
        "High-standard office spaces, retail, and hospitality buildings designed for efficiency and aesthetics.",
      image: "/tourism/commercial-buildings.webp",
      icon: (
        <div className="border rounded-3xl p-4 w-fit mx-auto">
          <Binoculars strokeOpacity={0.8} size={40} className="text-white" />
        </div>
      ),
      cta: {
        buttonText: "Contact Us",
        href: "/contact",
        price: "N/A",
        desc: "Get in touch for commercial building projects",
      },
      video: "/tourism/commercial-buildings.mp4",
    },
    {
      title: "Civil & Infrastructure Works",
      description:
        "Roads, drainage systems, pavements, retaining structures, and minor bridges built with durability and safety in mind.",
      image: "/tourism/civil-infrastructure.webp",
      icon: (
        <div className="border rounded-3xl p-4 w-fit mx-auto">
          <Bike strokeOpacity={0.8} size={40} className="text-white" />
        </div>
      ),
      cta: {
        buttonText: "Contact Us",
        href: "/contact",
        price: "N/A",
        desc: "Get in touch for civil and infrastructure projects",
      },
      video: "/tourism/civil-infrastructure.mp4",
    },
    {
      title: "Turnkey EPC Projects",
      description:
        "End-to-end Design-Build projects where we handle engineering, procurement, and construction under one contract.",
      image: "/tourism/epc-projects.webp",
      icon: (
        <div className="border rounded-3xl p-4 w-fit mx-auto">
          <Wifi strokeOpacity={0.8} size={40} className="text-white" />
        </div>
      ),
      cta: {
        buttonText: "Contact Us",
        href: "/contact",
        price: "N/A",
        desc: "Contact us for turnkey EPC project details",
      },
      video: "/tourism/epc-projects.mp4",
    },
    {
      title: "Structural & Architectural Support",
      description:
        "Coordination of MEP trades, structural detailing, renovations, and adaptive reuse for sustainable buildings.",
      image: "/tourism/structural-support.webp",
      icon: (
        <div className="border rounded-3xl p-4 w-fit mx-auto">
          <Leaf strokeOpacity={0.8} size={40} className="text-white" />
        </div>
      ),
      cta: {
        buttonText: "Contact Us",
        href: "/contact",
        price: "N/A",
        desc: "Get in touch for structural and architectural support",
      },
      video: "/tourism/structural-support.mp4",
    },
    {
      title: "Project & Cost Management",
      description:
        "Professional planning, scheduling, cost control, and QA/QC management to ensure projects meet deadlines and budgets.",
      image: "/tourism/project-management.webp",
      icon: (
        <div className="border rounded-3xl p-4 w-fit mx-auto">
          <MapPin strokeOpacity={0.8} size={40} className="text-white" />
        </div>
      ),
      cta: {
        buttonText: "Contact Us",
        href: "/contact",
        price: "N/A",
        desc: "Get in touch for project management services",
      },
      video: "/tourism/project-management.mp4",
    },
    {
      title: "Regional Projects",
      description:
        "Our operations span Uganda and East Africa, showcasing projects in Kenya, Tanzania, Rwanda, South Sudan, and the DRC.",
      image: "/tourism/regional-projects.webp",
      icon: (
        <div className="border rounded-3xl p-4 w-fit mx-auto">
          <Binoculars strokeOpacity={0.8} size={40} className="text-white" />
        </div>
      ),
      cta: {
        buttonText: "Contact Us",
        href: "/contact",
        price: "N/A",
        desc: "Contact us for regional project details",
      },
      video: "/tourism/regional-projects.mp4",
    },
  ],
};

export default tourismData;
