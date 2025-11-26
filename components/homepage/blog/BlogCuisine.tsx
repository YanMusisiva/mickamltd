"use client";
import React, { useEffect, useRef, useState } from "react";
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
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isVertical, setIsVertical] = useState(false);
  const [play, setPlay] = useState(false);

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;

    const { videoWidth, videoHeight } = videoRef.current;

    setIsVertical(videoHeight > videoWidth);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.onloadedmetadata = () => {
        setDuration(videoRef.current!.duration);
      };
    }
  }, [selectedVideo]);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (videoRef.current) {
      const time = Number(e.target.value);
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

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
        <h3 className="text-fluid-3xl font-bold mb-2">
          {ecovilleCulinaryData.title}
        </h3>
        <p className="text-lg text-gray-600 mb-4">
          {ecovilleCulinaryData.content}
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 mb-8 group">
        {/* Lecteur vidéo responsive */}
        <div className="relative aspect-video overflow-hidden rounded-xl bg-black">
          {!play && (
            <div
              className="w-full h-full flex items-center justify-center cursor-pointer relative"
              onClick={() => setPlay(true)}
            >
              <div className="absolute w-16 h-16 flex items-center justify-center bg-yellow-600 rounded-full opacity-80 hover:opacity-100 text-white text-3xl">
                ▶
              </div>
            </div>
          )}

          {play && (
            <video
              src={ecovilleCulinaryData.highlightedRestaurant.video}
              muted
              loop
              className="w-full h-full object-cover rounded-xl"
              autoPlay
              playsInline
            />
          )}
        </div>

        <div>
          <span className="text-sm text-gray-500 mb-2 block">Featured</span>

          <h2 className="text-2xl font-bold mb-2">
            {ecovilleCulinaryData.highlightedRestaurant.title}
          </h2>

          <p className="text-gray-600 mb-4">
            {ecovilleCulinaryData.highlightedRestaurant.description}
          </p>
        </div>
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
              onClick={() => setSelectedVideo(article.video!)}
            >
              {/* Aperçu vidéo */}
              <div className="relative aspect-video overflow-hidden rounded-xl bg-black">
                <video
                  src={article.video!}
                  muted
                  playsInline
                  className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/30 p-4 rounded-full">
                    <ArrowRight className="h-8 w-8 text-yellow-600" />
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
          className="max-lg:hidden absolute left-0 top-1/2 transform -translate-y-1/2 bg-yellow-600 hover:bg-yellow-500 p-2 shadow-md hexa disabled:bg-gray-400 hover:scale-105 active:scale-95 transition-all"
        >
          <ChevronLeft className="h-6 w-6 text-white" strokeWidth={4} />
        </button>
        <button
          onClick={() => handleScroll("right")}
          disabled={isRightDisabled}
          className={cn(
            "max-lg:hidden absolute right-0 top-1/2 transform -translate-y-1/2 bg-yellow-600 hover:bg-yellow-500 p-2 shadow-md hexa disabled:bg-gray-400 hover:scale-105 active:scale-95 transition-all"
          )}
        >
          <ChevronRight className="h-6 w-6 text-white" strokeWidth={4} />
        </button>
      </div>

      {/* Modal for video playback */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-4xl max-h-[90vh] rounded-xl bg-black shadow-xl overflow-hidden flex flex-col">
            {/* Bouton fermer */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-50 bg-white rounded-full p-2 hover:bg-gray-200 transition"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Lecteur vidéo */}
            <video
              ref={videoRef}
              src={selectedVideo}
              muted
              controls={false}
              autoPlay
              className={`
    bg-black
    ${isVertical ? "w-auto h-full mx-auto" : "w-full h-auto"}
  `}
              onLoadedMetadata={handleLoadedMetadata}
              onTimeUpdate={handleTimeUpdate}
            />

            {/* Barre de contrôle */}
            <div className="p-4 bg-black/70 flex flex-col gap-3">
              {/* Barre de défilement */}
              <input
                type="range"
                min={0}
                max={duration}
                value={currentTime}
                onChange={handleSeek}
                className="w-full accent-white"
              />

              {/* Boutons Play / Pause */}
              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={togglePlay}
                  className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-200"
                >
                  {isPlaying ? "Pause" : "Play"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
