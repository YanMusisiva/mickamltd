import { EcovilleCulinaryData } from "./types/contentType";

export const ecovilleCulinaryData: EcovilleCulinaryData = {
  title: "Discover Mickam Projects in Videos",
  content:
    "Explore the projects and services of Mickam (U) Ltd through short videos, showcasing our expertise in construction, civil engineering, and sustainable building solutions across Uganda and East Africa.",
  highlightedRestaurant: {
    title: "Featured Project: Residential Estates",
    description:
      "Our flagship residential estates demonstrate Mickam’s commitment to quality, safety, and sustainable construction, combining modern design with efficient project management.",
    image: "/thumbnails/residential-estates.webp", // thumbnail image
    video: "/videos/residential-estates.mp4", // video file
  },
  articles: [
    {
      title: "Commercial & Office Buildings",
      description:
        "High-quality office spaces, retail, and hospitality projects delivered with attention to detail, safety, and on-time completion.",
      image: "/thumbnails/commercial-buildings.webp",
      video: "/videos/commercial-buildings.mp4",
    },
    {
      title: "Civil & Infrastructure Works",
      description:
        "Roads, drainage, pavements, and minor bridges executed with durability and precision, meeting international standards.",
      image: "/thumbnails/civil-infrastructure.webp",
      video: "/videos/civil-infrastructure.mp4",
    },
    {
      title: "Turnkey EPC Projects",
      description:
        "End-to-end Design-Build projects covering engineering, procurement, and construction under a single contract.",
      image: "/thumbnails/epc-projects.webp",
      video: "/videos/epc-projects.mp4",
    },
    {
      title: "Structural & Architectural Support",
      description:
        "Providing structural detailing, MEP coordination, renovations, and adaptive reuse solutions for complex construction projects.",
      image: "/thumbnails/structural-support.webp",
      video: "/videos/structural-support.mp4",
    },
    {
      title: "Project & Cost Management",
      description:
        "Comprehensive project planning, scheduling, cost control, and quality assurance to ensure successful delivery.",
      image: "/thumbnails/project-management.webp",
      video: "/videos/project-management.mp4",
    },
    {
      title: "Regional Projects Across East Africa",
      description:
        "Delivering projects in Uganda, Kenya, Tanzania, Rwanda, South Sudan, and the DRC, leveraging local expertise and regional experience.",
      image: "/thumbnails/regional-projects.webp",
      video: "/videos/regional-projects.mp4",
    },
  ],
};

export default ecovilleCulinaryData;
