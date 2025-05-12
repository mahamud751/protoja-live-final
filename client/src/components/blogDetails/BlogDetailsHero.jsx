import * as React from "react";
import Image from "next/image";

export default function BlogDetailsHero({ blogMain }) {
  const firstPhoto = blogMain?.photos?.[0];

  return (
    <div className="bg-white p-6 md:p-10 rounded-2xl shadow-xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Content */}
        <div className="lg:col-span-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            {blogMain?.name}
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {blogMain?.desc}
          </p>

          {/* Author Info */}
          <div className="flex items-center gap-4">
            <Image
              src="/images/avatar.jpg"
              width={48}
              height={48}
              className="rounded-full border border-gray-200"
              alt="Author"
            />
            <div>
              <p className="text-sm text-gray-800 font-semibold">Md Rafatul Islam</p>
              <p className="text-sm text-gray-500">Published 14 Jan 2024</p>
            </div>
          </div>
        </div>

        {/* Right Side – Show only first image */}
        <div className="lg:col-span-6 w-full">
          {firstPhoto ? (
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src={firstPhoto}
                alt="Blog Main Image"
                className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                width={1000}
                height={1000}
                priority
              />
            </div>
          ) : (
            <div className="w-full h-64 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">
              No image available
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
