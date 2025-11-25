import historyData from "@/content/historyData";

import { Suspense } from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import { Users, Target, TrendingUp, Zap } from "lucide-react";

export const History = () => {
  const { title, afterImg, beforeImg } = historyData;

  return (
    <section id="histoire" className=" py-4">
      {/* Team stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 px-4">
        {[
          { icon: Users, label: "Team Members", value: "45+", color: "blue" },
          { icon: Target, label: "Departments", value: "7", color: "purple" },
          {
            icon: TrendingUp,
            label: "Years of Experience",
            value: "6",
            color: "green",
          },
          {
            icon: Zap,
            label: "Projects Completed",
            value: "120+",
            color: "amber",
          },
        ].map((stat, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 text-center hover:shadow-xl transition-shadow"
          >
            <stat.icon
              className={`w-8 h-8 mx-auto mb-2 text-${stat.color}-500`}
            />
            <div className="text-3xl font-bold text-slate-800">
              {stat.value}
            </div>
            <div className="text-sm text-slate-600 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
      <h3 className="text-fluid-2xl lg:text-fluid-3xl 3xl:text-fluid-4xl container leading-none font-bold mb-6">
        {title}
      </h3>
      <div className="flex flex-col items-center justify-center container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* --- Block 1 --- */}
          <div className="flex flex-col gap-4">
            <Suspense fallback={<div>Loading...</div>}>
              {beforeImg && afterImg && (
                <ReactCompareSlider
                  itemOne={
                    <ReactCompareSliderImage
                      src={beforeImg}
                      alt="Before Image"
                      className="cursor-pointer"
                      loading="lazy"
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src={afterImg}
                      alt="After Image"
                      className="cursor-pointer"
                      loading="lazy"
                    />
                  }
                />
              )}
            </Suspense>

            <h5 className="text-xl font-bold">Description</h5>
            <p className="text-gray-600">
              This is a simple description related to the first image
              comparison.
            </p>
          </div>

          {/* --- Block 2 --- */}
          <div className="flex flex-col gap-4">
            <Suspense fallback={<div>Loading...</div>}>
              {beforeImg && afterImg && (
                <ReactCompareSlider
                  itemOne={
                    <ReactCompareSliderImage
                      src={beforeImg}
                      alt="Before Image"
                      className="cursor-pointer"
                      loading="lazy"
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src={afterImg}
                      alt="After Image"
                      className="cursor-pointer"
                      loading="lazy"
                    />
                  }
                />
              )}
            </Suspense>

            <h5 className="text-xl font-bold">Description</h5>
            <p className="text-gray-600">
              Description related to the second image comparison.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
