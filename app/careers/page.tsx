"use client";
import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Upload } from "lucide-react";
import { cn } from "@/lib/utils";

interface JobPosting {
  id: number;
  title: string;
  department: string;
  description: string;
  requirements: string[];
  type: "Full-time" | "Part-time" | "Internship";
  location: string;
}

const jobPostings: JobPosting[] = [
  {
    id: 1,
    title: "Project Engineer",
    department: "Construction & Engineering",
    description:
      "Plan, supervise and deliver building and civil works projects across Uganda and East Africa.",
    requirements: [
      "Bachelor's in Civil Engineering",
      "2+ years project management experience",
      "Knowledge of HSE standards",
      "Strong organizational skills",
    ],
    type: "Full-time",
    location: "Kampala, Uganda",
  },
  {
    id: 2,
    title: "Site Supervisor",
    department: "Civil & Infrastructure",
    description:
      "Supervise site works, ensure safety compliance and report project progress.",
    requirements: [
      "Diploma or Degree in Civil Engineering",
      "Experience in site supervision",
      "Understanding of local construction codes",
    ],
    type: "Full-time",
    location: "Kampala, Uganda",
  },
  {
    id: 3,
    title: "Quantity Surveyor",
    department: "Project & Cost Management",
    description:
      "Prepare BOQs, manage cost control, contracts, and support claims.",
    requirements: [
      "Bachelor's in Quantity Surveying",
      "Experience with FIDIC/JB contracts",
      "Attention to detail and reporting skills",
    ],
    type: "Full-time",
    location: "Kampala, Uganda",
  },
  {
    id: 4,
    title: "Structural Designer",
    department: "Structural & Architectural Support",
    description:
      "Coordinate MEP, perform structural detailing, and provide buildability reviews.",
    requirements: [
      "Degree in Structural Engineering",
      "Experience in design coordination",
      "Proficient in CAD/BIM software",
    ],
    type: "Full-time",
    location: "Kampala, Uganda",
  },
  {
    id: 5,
    title: "Procurement & Logistics Officer",
    department: "Procurement & Enabling Services",
    description:
      "Manage sourcing, equipment hire, regulatory approvals and site mobilization.",
    requirements: [
      "Degree in Supply Chain/Procurement",
      "Experience in construction procurement",
      "Good negotiation and communication skills",
    ],
    type: "Full-time",
    location: "Kampala, Uganda",
  },
  {
    id: 6,
    title: "Intern – Project Support",
    department: "All Departments",
    description:
      "Assist various teams in project coordination, documentation, and reporting.",
    requirements: [
      "Currently pursuing relevant degree",
      "Good communication and organizational skills",
      "Willingness to learn and travel",
    ],
    type: "Internship",
    location: "Kampala, Uganda",
  },
];

const CareersPage: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [isLeftDisabled, setIsLeftDisabled] = useState(true);
  const [isRightDisabled, setIsRightDisabled] = useState(false);
  const [selectedJob, setSelectedJob] = useState<JobPosting | null>(
    jobPostings[0]
  );
  const [fileName, setFileName] = useState<string>("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    file: null as File | null,
  });

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setIsLeftDisabled(scrollLeft <= 0);
      setIsRightDisabled(scrollLeft + clientWidth >= scrollWidth - 1);
    }
  };

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 300;
    const currentScroll = scrollRef.current.scrollLeft;
    const targetScroll =
      direction === "left"
        ? currentScroll - scrollAmount
        : currentScroll + scrollAmount;

    scrollRef.current.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });
    setTimeout(checkScrollPosition, 300);
  };

  useEffect(() => {
    checkScrollPosition();
    window.addEventListener("resize", checkScrollPosition);
    return () => window.removeEventListener("resize", checkScrollPosition);
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFileName(file.name);
      setFormData({ ...formData, file });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.file ||
      !selectedJob
    ) {
      alert("Please fill all fields and select a file.");
      return;
    }
    const formDataToSend = new FormData();
    formDataToSend.append("fullName", formData.fullName);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("jobId", selectedJob.id.toString());
    formDataToSend.append("jobTitle", selectedJob.title);
    formDataToSend.append("file", formData.file);

    try {
      const response = await fetch("/api/send-application", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        alert("Application sent successfully!");
        setFormData({ fullName: "", email: "", phone: "", file: null });
        setFileName("");
      } else {
        alert("Error sending your application.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred.");
    }
  };

  return (
    <section id="careers" className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-fluid-4xl font-bold mb-2">Join Mickam (U) Ltd</h1>
        <p className="text-lg text-gray-600 mb-4">
          We are looking for talented professionals to deliver quality and
          sustainable construction across Uganda and East Africa.
        </p>
      </div>

      <div className="relative mb-12">
        <div
          ref={scrollRef}
          className="flex items-center overflow-x-scroll gap-4 pb-6 snap-x scrollbar_cuisine"
        >
          {jobPostings.map((job) => (
            <button
              key={job.id}
              onClick={() => setSelectedJob(job)}
              className={cn(
                "min-w-72 snap-mandatory p-6 rounded-xl transition-all duration-300 text-left",
                selectedJob?.id === job.id
                  ? "bg-green-600 text-white shadow-lg scale-105"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-800"
              )}
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-bold">{job.title}</h3>
                <span
                  className={cn(
                    "text-xs px-2 py-1 rounded-full font-semibold",
                    job.type === "Full-time" && "bg-green-200 text-green-800",
                    job.type === "Part-time" && "bg-blue-200 text-blue-800",
                    job.type === "Internship" && "bg-purple-200 text-purple-800"
                  )}
                >
                  {job.type}
                </span>
              </div>
              <p className="text-sm opacity-90">{job.department}</p>
              <p className="text-xs mt-2 opacity-75">{job.location}</p>
            </button>
          ))}
        </div>

        <button
          onClick={() => handleScroll("left")}
          disabled={isLeftDisabled}
          className="max-lg:hidden absolute left-0  top-1/2 transform -translate-y-1/2 bg-green-600 hover:bg-green-500 p-2 shadow-md hexa disabled:bg-gray-400 hover:scale-105 active:scale-95 transition-all"
        >
          <ChevronLeft className="h-6 w-6 text-white" strokeWidth={4} />
        </button>
        <button
          onClick={() => handleScroll("right")}
          disabled={isRightDisabled}
          className="max-lg:hidden absolute right-0  top-1/2 transform -translate-y-1/2 bg-green-600 hover:bg-green-500 p-2 shadow-md hexa disabled:bg-gray-400 hover:scale-105 active:scale-95 transition-all"
        >
          <ChevronRight className="h-6 w-6 text-white" strokeWidth={4} />
        </button>
      </div>

      {selectedJob && (
        <div className="grid md:grid-cols-2 gap-12">
          {/* Job Details */}
          <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-xl shadow-md">
            <h2 className="text-3xl font-bold mb-2">{selectedJob.title}</h2>
            <p className="text-gray-600 mb-6">{selectedJob.description}</p>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Requirements</h3>
              <ul className="space-y-2">
                {selectedJob.requirements.map((req, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                    {req}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-6 border-t">
              <div>
                <p className="text-sm text-gray-600">Contract Type</p>
                <p className="font-semibold text-green-600">
                  {selectedJob.type}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Location</p>
                <p className="font-semibold">{selectedJob.location}</p>
              </div>
            </div>
          </div>

          {/* Application Form */}
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-6">Apply Now</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Phone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="+256 7XX XXX XXX"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Upload CV / Cover Letter *
                </label>
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 border-2 border-dashed border-green-300 rounded-lg hover:bg-green-50 transition-all"
                >
                  <Upload className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">
                    {fileName || "Click to select file"}
                  </span>
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">
                  PDF, DOC or DOCX (max 5MB)
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-500 text-white font-semibold py-3 rounded-lg transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                Submit Application <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default CareersPage;
