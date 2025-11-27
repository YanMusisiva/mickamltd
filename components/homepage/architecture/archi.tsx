import architectureData from "@/content/architectData";

import { ContentBorder } from "@/components/micro-components/ContentBorder";
import { CardAccordion } from "@/components/micro-components/CardAccordion";
import { BoldText } from "@/components/micro-components/BoldText";

export const Archi = () => {
  const { title, content, features } = architectureData;

  return (
    <section id="architecture" className="py-4 my-4">
      <h3 className="text-fluid-2xl lg:text-fluid-3xl tracking-wider container leading-none font-bold max-">
        {title}
      </h3>
      <div className="flex flex-col items-center justify-center container">
        <div className="relative max-lg:flex-col flex gap-6">
          <div className="max-w-2xl lg:max-w-md mt-6 lg:mt-0 lg:mr-10 flex flex-col">
            <ContentBorder className="mt-10 lg:mt-20">
              <BoldText content={content} />
            </ContentBorder>
            <a
              href="/contact"
              className="inline-block mt-3 px-8 py-3 w-fit rounded-full bg-black text-white font-semibold shadow-md hover:bg-gray-800 hover:shadow-lg transition-all duration-200"
            >
              Get a quote
            </a>
          </div>

          <div className="grid  md:grid-cols-2 max-w-2xl mt-10 gap-2">
            {features.map((feature, index) => (
              <CardAccordion
                key={index}
                title={feature.title}
                description={feature.description}
                image={feature.image}
                direction={index % 2 === 0 ? "left" : "right"}
                duration={index % 2 === 0 ? 0.3 : 0.5}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
