import { BoldText } from "@/components/micro-components/BoldText";
import { ContentBorder } from "@/components/micro-components/ContentBorder";
import companyData from "@/content/companyData";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Company() {
  const { title, content, keyPoints } = companyData;

  return (
    <section id="histoire" className=" py-20">
      <div className="max-w-5xl mx-auto px-4 py-2">
        <div className="mb-12 text-center">
          <h3 className="text-fluid-2xl lg:text-fluid-4xl 3xl:text-fluid-5xl container leading-none font-bold mb-6">
            {title}
          </h3>
        </div>

        <div className="mx-auto max-w-3xl">
          <ContentBorder className="mb-12">
            <BoldText content={content} />
          </ContentBorder>

          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {keyPoints.map((keyPoint, index) => (
              <article
                key={index}
                className={cn(
                  "p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-colors duration-300",
                  index % 2 === 0 ? "border-r lg:border-black/10" : ""
                )}
              >
                <h4 className="text-xl font-bold mb-2">{keyPoint.title}</h4>
                <p className="text-gray-700 leading-relaxed">
                  {keyPoint.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* --- ORGANIGRAMME ET CARDS INDIVIDUELLES --- */}
      {/* <div className="container max-w-6xl mx-auto px-4 mt-16">
  
  <div className="container max-w-6xl mx-auto px-4 mt-2">
    <h3 className="text-2xl font-bold mb-8 text-center">Our Team</h3>

    <div className="flex justify-center mb-12">
    
      <div className="flex flex-col items-center relative">
        <div className="w-28 h-28 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
          F
        </div>
        <div className="mt-3 text-center">
          <p className="font-semibold">Founder · John Doe</p>
          <p className="text-sm text-gray-500">Vision & Strategy</p>
        </div>

     
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-px h-12 bg-green-300"></div>
      </div>
    </div>

   
    <div className="relative flex flex-col items-center">
      
      <div className="flex justify-center w-full absolute top-0 mt-6">
        <div className="flex w-3/4 border-t-2 border-green-300"></div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 mt-16">
        {[
          { name: "CTO · Alice Martin", role: "Tech & Product" },
          { name: "COO · Marco Silva", role: "Operations" },
          { name: "CFO · Lea Moreau", role: "Finance" },
          { name: "Head of Marketing · C. V.", role: "Marketing" },
          { name: "Head of Engineering · R. K.", role: "Engineering" },
          { name: "HR Lead · N. B.", role: "Human Resources" },
        ].map((person, idx) => (
          <div key={idx} className="flex flex-col items-center relative">
           
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-6 w-px h-6 bg-green-300"></div>

           
            <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center text-white font-semibold shadow-md">
              {person.name.split(" ")[0][0]}
            </div>

            <div className="mt-3 text-center">
              <p className="font-medium text-sm">{person.name}</p>
              <p className="text-xs text-gray-500">{person.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>

  
  <div>
    <h4 className="text-xl font-bold mb-6 text-center">Meet Our Key Members</h4>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          name: "Alice Martin",
          role: "CTO",
          image: "/team/alice.jpg",
        },
        {
          name: "Marco Silva",
          role: "COO",
          image: "/team/marco.jpg",
        },
        {
          name: "Lea Moreau",
          role: "CFO",
          image: "/team/lea.jpg",
        },
        {
          name: "C. V.",
          role: "Head of Marketing",
          image: "/team/cv.jpg",
        },
        {
          name: "R. K.",
          role: "Head of Engineering",
          image: "/team/rk.jpg",
        },
        {
          name: "N. B.",
          role: "HR Lead",
          image: "/team/nb.jpg",
        },
      ].map((person, idx) => (
        <div
          key={idx}
          className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
        >
          <div className="relative h-56">
            <Image
              src={person.image}
              alt={person.name}
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4 text-center">
            <p className="font-semibold">{person.name}</p>
            <p className="text-gray-500">{person.role}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>; */}
    </section>
  );
}
