"use client";
import { useState } from "react";

type InsetAnimVideoProps = {
  src: string;
  className?: string;
  index?: number;
  poster?: string;
};

export const InsetAnimVideo = ({
  src,
  className,
  poster,
}: InsetAnimVideoProps) => {
  const [play, setPlay] = useState(false);

  return (
    <div
      className={`relative w-full lg:w-1/2 min-h-[300px] lg:min-h-[400px] aspect-video overflow-hidden rounded-xl bg-black ${className}`}
    >
      {!play && (
        <div
          className="w-full h-full flex items-center justify-center cursor-pointer relative"
          onClick={() => setPlay(true)}
        >
          {poster && (
            <img
              src={poster}
              alt="Video placeholder"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          )}
          <div className="absolute w-20 h-20 flex items-center justify-center bg-yellow-600 rounded-full opacity-80 hover:opacity-100 text-white text-3xl">
            ▶
          </div>
        </div>
      )}

      {play && (
        <video
          src={src}
          muted
          autoPlay
          className="w-full h-full object-cover rounded-xl"
        />
      )}
    </div>
  );
};
