import { EcovilleProjectData } from "./types/contentType";

export const ecovilleProjectData = {
  title: "How Mickam Works",
  subtitle: "Building Quality, Safety, and Trust Across East Africa",

  whyEcoville: {
    title: "Why Mickam?",
    content:
      "Since 2019, Mickam (U) Ltd has delivered reliable engineering and construction solutions across Uganda and East Africa. Our approach combines best-practice engineering, strong safety culture, transparent communication, and disciplined project management to ensure every project is delivered on time, on budget, and to specification.",
  },

  features: [
    {
      title: "Building Construction",
      description:
        "We deliver residential estates, villas, apartments, commercial buildings, offices, hospitality spaces, and industrial facilities with high-quality workmanship and durable finishes.",
      image: "/project/building.jpg",
    },
    {
      title: "Civil & Infrastructure Works",
      description:
        "Our civil engineering services include roads, pavements, drainage systems, culverts, retaining walls, earthworks, and minor bridges designed for long-term resilience.",
      image: "/project/infrastructure.jpg",
    },
    {
      title: "Project & Cost Management",
      description:
        "We provide planning, scheduling, site supervision, quantity surveying, BOQs, cost control, contract administration, and full QA/QC and HSE oversight throughout the project lifecycle.",
      image: "/project/management.jpg",
    },
    {
      title: "Procurement & Enabling Services",
      description:
        "From materials sourcing and logistics to equipment hire, survey coordination, and regulatory approvals, we provide reliable enabling services to streamline project delivery.",
      image: "/project/procurement.jpg",
    },
  ],

  whyJoin: {
    title: "Why Work With Mickam?",
    reasons: [
      {
        title: "Trusted Delivery",
        description:
          "Since 2019, we've completed projects with disciplined timelines, reliable budgeting, and a strong reputation for meeting client expectations.",
        image: "/project/trusted.jpg",
      },
      {
        title: "Safety & Quality First",
        description:
          "Our zero-harm safety culture, strict QA/QC processes, and certified materials ensure durable, compliant, and high-quality construction.",
        image: "/project/quality.jpg",
      },
      {
        title: "Transparent Communication",
        description:
          "Clients enjoy clear reporting, consistent updates, open communication, and a single point of accountability throughout their project.",
        image: "/project/communication.jpg",
      },
    ],
  },
} as EcovilleProjectData;

export default ecovilleProjectData;
