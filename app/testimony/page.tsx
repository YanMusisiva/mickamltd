"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import testimonyData from "@/content/testimonyData";
import Link from "next/link";
import { HoverLinkEffect } from "@/components/micro-components/HoverLinkEffect";

const testimony = testimonyData;

export const BlogCuisine: React.FC = () => {
  return (
    <section id="cuisine" className="max-w-6xl mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="mb-12">
        <h3 className="text-fluid-4xl font-bold mb-2">{testimonyData.title}</h3>
        <p className="text-lg text-gray-600 mb-4">{testimonyData.content}</p>
        <Link
          href="/#cuisine"
          className="text-green-700 group relative gap-2 w-fit flex items-center pb-2"
        >
          <HoverLinkEffect />
          Contact us <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>

      {/* All Restaurants with Featured Layout */}
      {testimonyData.articles.length > 0 && (
        <div className="space-y-16">
          {testimonyData.articles.map((article, index) => (
            <div key={index} className="mb-16">
              <div
                className={`grid md:grid-cols-2 gap-8 group ${
                  index % 2 === 1 ? "md:grid-flow-col-dense" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`relative aspect-video overflow-hidden rounded-xl ${
                    index % 2 === 1 ? "md:order-2" : ""
                  }`}
                >
                  <Image
                    src={article?.image ?? "/svg/placeholder.svg"}
                    alt={article?.title ?? ""}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 45vw"
                    fill
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="/svg/placeholder.svg"
                    className="rounded-xl object-cover group-hover:scale-105 transition-all duration-300"
                  />
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <span className="text-sm text-green-600 font-semibold mb-2 block">
                    {index === 0 ? "Featured Project" : "PROJECT"}
                  </span>
                  <h2 className="text-3xl font-bold mb-2">
                    {article?.title ?? ""}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {article?.description ?? ""}
                  </p>
                  <Link
                    href="/#cuisine"
                    className="text-green-700 group relative gap-2 w-fit flex items-center pb-2"
                  >
                    <HoverLinkEffect />
                    LEARN MORE <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Empty State */}
      {testimonyData.articles.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-600 text-lg">
            No projects available at the moment.
          </p>
        </div>
      )}
    </section>
  );
};

export default BlogCuisine;
