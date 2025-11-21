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
        buttonText: "View Project",
        href: "/projects/residential",
        price: "N/A",
        desc: "Explore our residential construction solutions",
      },
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
        buttonText: "View Project",
        href: "/projects/commercial",
        price: "N/A",
        desc: "Discover our commercial and office building projects",
      },
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
        buttonText: "View Project",
        href: "/projects/infrastructure",
        price: "N/A",
        desc: "See how we deliver reliable civil engineering solutions",
      },
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
        buttonText: "View Project",
        href: "/projects/epc",
        price: "N/A",
        desc: "Explore our turnkey EPC solutions",
      },
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
        buttonText: "View Project",
        href: "/projects/structural",
        price: "N/A",
        desc: "Learn about our structural and architectural expertise",
      },
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
        buttonText: "Learn More",
        href: "/services/project-management",
        price: "N/A",
        desc: "See how we manage projects efficiently",
      },
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
        buttonText: "Discover",
        href: "/projects/regional",
        price: "N/A",
        desc: "Explore our regional project portfolio",
      },
    },
  ],
};

export default tourismData;
