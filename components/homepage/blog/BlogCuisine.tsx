"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import ecovilleCulinaryData from "@/content/CulinaryData";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

export const BlogCuisine: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isLeftDisabled, setIsLeftDisabled] = useState(true);
  const [isRightDisabled, setIsRightDisabled] = useState(false);

  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setIsLeftDisabled(scrollLeft <= 0);
      setIsRightDisabled(scrollLeft + clientWidth >= scrollWidth - 1);
    }
  };

  const { contextSafe } = useGSAP({ scope: scrollRef.current! });

  const handleScroll = contextSafe((direction: "left" | "right") => {
    const scrollAmount = 300;
    const currentScroll = scrollRef.current!.scrollLeft;
    const targetScroll =
      direction === "left"
        ? currentScroll - scrollAmount
        : currentScroll + scrollAmount;

    gsap.to(scrollRef.current, {
      scrollLeft: targetScroll,
      duration: 0.5,
      ease: "power2.out",
      onUpdate: checkScrollPosition,
    });
  });

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener("scroll", checkScrollPosition);
      scrollElement.addEventListener("resize", checkScrollPosition);
      checkScrollPosition();
    }
    return () => {
      if (scrollElement) {
        scrollElement.removeEventListener("scroll", checkScrollPosition);
        scrollElement.removeEventListener("resize", checkScrollPosition);
      }
    };
  }, []);

  useGSAP(() => {
    gsap.from(scrollRef.current, {
      scrollLeft: 0,
      duration: 0.5,
      ease: "power2.out",
    });
  });

  return (
    <section id="cuisine" className="max-w-6xl mx-auto px-4 py-4">
      <div className="mb-8">
        <h3 className="text-fluid-4xl font-bold mb-2">
          {ecovilleCulinaryData.title}
        </h3>
        <p className="text-lg text-gray-600 mb-4">
          {ecovilleCulinaryData.content}
        </p>
      </div>

      <div className="relative">
        <div
          ref={scrollRef}
          className="flex items-center overflow-x-scroll gap-8 pb-12 snap-x scrollbar_cuisine"
        >
          {ecovilleCulinaryData.articles.map((article, index) => (
            <div
              key={index}
              className="min-w-80 snap-mandatory min-h-[400px] flex flex-col p-2 rounded-xl group transition-all duration-300 hover:shadow-lg cursor-pointer"
              onClick={() => setSelectedVideo(article.image!)} // Ici on simule la video src
            >
              <div className="relative aspect-video overflow-hidden rounded-xl">
                <Image
                  src={article.image!}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 45vw"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="/svg/placeholder.svg"
                  className="rounded-lg mb-4 object-cover group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/30 p-4 rounded-full">
                    <ArrowRight className="h-8 w-8 text-green-700" />
                  </div>
                </div>
              </div>
              <span className="text-xs text-gray-500 mt-1 mb-2 block">
                Video
              </span>
              <h3 className="text-xl font-bold mb-2 h-14">{article.title}</h3>
              <p className="text-gray-600 mb-4 line-clamp-3">
                {article.description}
              </p>
            </div>
          ))}
        </div>

        {/* Scroll buttons */}
        <button
          onClick={() => handleScroll("left")}
          disabled={isLeftDisabled}
          className="max-lg:hidden absolute left-0 top-1/2 transform -translate-y-1/2 bg-green-600 hover:bg-green-500 p-2 shadow-md hexa disabled:bg-gray-400 hover:scale-105 active:scale-95 transition-all"
        >
          <ChevronLeft className="h-6 w-6 text-white" strokeWidth={4} />
        </button>
        <button
          onClick={() => handleScroll("right")}
          disabled={isRightDisabled}
          className={cn(
            "max-lg:hidden absolute right-0 top-1/2 transform -translate-y-1/2 bg-green-600 hover:bg-green-500 p-2 shadow-md hexa disabled:bg-gray-400 hover:scale-105 active:scale-95 transition-all"
          )}
        >
          <ChevronRight className="h-6 w-6 text-white" strokeWidth={4} />
        </button>
      </div>

      {/* Modal for video playback */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-4xl aspect-video rounded-xl overflow-hidden bg-black shadow-xl">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-50 bg-white rounded-full p-2 hover:bg-gray-200 transition"
            >
              <X className="h-6 w-6" />
            </button>
            <video
              src={selectedVideo}
              controls
              autoPlay
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}
    </section>
  );
};
