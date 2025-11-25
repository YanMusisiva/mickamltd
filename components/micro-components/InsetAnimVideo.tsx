"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";

export const InsetAnimVideo = ({
  src,
  className,
  index,
}: {
  src: string;
  className?: string;
  index?: number;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useGSAP(() => {
    if (!videoRef.current) return;

    gsap.from(videoRef.current, {
      scale: 0.6,
      filter: "grayscale(50%)",
      rotateY: index! % 2 === 0 ? 10 : -10,
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: videoRef.current,
        start: "top 80%",
        end: "bottom 30%",
        toggleActions: "play none none none",
      },
    });
  }, [videoRef]);

  return (
    <div className="relative aspect-video overflow-hidden rounded-xl bg-black">
      <video
        ref={videoRef}
        src={src}
        muted
        autoPlay
        loop
        playsInline
        className={`w-full h-full object-contain rounded-xl transition-all duration-300 ${className}`}
      />
    </div>
  );
};
