import * as React from "react";
import Image from "next/image";

export default function BlogDetailsHero({ blogMain }) {
  return (
    <div className="bg-white p-6 md:p-10 rounded-xl shadow-lg">
      <div className="grid grid-cols-12 gap-4">
        {/* Left Side Content (span 6 columns on larger screens, 12 on mobile) */}
        <div className="col-span-12 lg:col-span-6">
          <div className="flex justify-center items-center h-full">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 w-[220px]">
                {blogMain?.name}
              </h1>
              <p className="text-base md:text-lg font-medium text-gray-700 mt-4">
                {blogMain?.desc}
              </p>

              {/* Author Information */}
              <div className="flex items-center mt-6">
                <Image
                  src="/assets/blog-image/author.png"
                  width={60}
                  height={60}
                  className="rounded-full"
                  alt="Author"
                />
                <div className="ml-3 text-sm text-gray-600">
                  <span className="font-semibold">Md Rafatul Islam</span>
                  <div>Published 14 Jan 2024</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Images Grid (span 6 columns on larger screens, 12 on mobile) */}
        <div className="col-span-12 lg:col-span-6 gap-4">
          {blogMain?.photos?.map((photo, index) => (
            <div key={index}>
              <Image
                src={photo}
                alt={`Blog Image ${index + 1}`}
                className="rounded-lg"
                width={1000}
                height={1000}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
