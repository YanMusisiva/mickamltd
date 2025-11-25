import { Feature } from "@/content/types/contentType";
import { cn } from "@/lib/utils";
import { ArrowRight, Hexagon, Quote } from "lucide-react";
import Link from "next/link";
import { InsetAnimVideo } from "./InsetAnimVideo";

type StickySectionProps = {
  features: Feature[];
};

export const StickySection = ({ features }: StickySectionProps) => {
  return (
    <div className="w-full relative space-y-28 lg:space-y-52 bg-neutral-700">
      {features.map((feature, index) => (
        <div
          id={`feature-g${index}`}
          key={index}
          className={cn(
            "feature max-lg:space-y-10 max-lg:py-10 lg:flex items-center px-2 lg:px-10 py-10 min-h-svh lg:sticky lg:top-0 bg-neutral-700",
            index % 2 === 0 ? "flex-row-reverse" : "flex-row"
          )}
        >
          {/* TEXT AREA */}
          <div className="text w-full lg:w-1/2 flex items-center justify-center gap-10 flex-col text-center">
            <div className="w-full flex flex-col items-center">
              {feature.icon}

              <p className="text-fluid-3xl max-w-xl leading-none text-white font-bold pt-2 text-center">
                {feature.title}
              </p>

              <p className="mt-3 text-xl text-slate-200 pt-2 max-w-2xl px-2 text-center">
                {feature.description}
              </p>

              {feature.cta && (
                <p className="mt-3 text-md text-green-300 font-bold italic pt-2 max-w-2xl px-2 text-center">
                  <Quote className="inline-block w-4 h-4 mr-2 opacity-50 -scale-x-100 -translate-y-2" />
                  {feature.cta.desc}
                  <Quote className="inline-block size-3 ml-2 opacity-50 translate-y-2" />
                </p>
              )}
            </div>

            {feature.cta && (
              <Link
                href={feature.cta.href}
                className="text-lg hover:scale-105 active:scale-95 transition-all text-white font-bold bg-green-700 hover:bg-green-600 py-2 px-3 rounded-xl flex items-center gap-2"
              >
                {feature.cta.buttonText}
                <ArrowRight className="inline-block w-0 group-hover:w-5 transition-all" />
              </Link>
            )}

            <span className="mx-auto h-[1px] w-56 lg:w-96 bg-neutral-800 flex justify-center items-center relative">
              <Hexagon className="fill-white stroke-none" size={30} />
            </span>
          </div>

          {/* VIDEO AREA */}
          <InsetAnimVideo
            src={feature.video}
            index={index}
            className="group-hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
};
