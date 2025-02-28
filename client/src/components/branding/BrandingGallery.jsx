import Image from "next/image";

export default function BrandingGallery() {
  return (
    <>
      <div className="bg-black text-white py-16 px-6 md:px-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Section - Text Content */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-8 rounded-lg flex flex-col justify-center">
            <div className="bg-white bg-opacity-20 text-white text-sm px-4 py-2 rounded-full w-max">
              Stay refreshed and exceptional 💧
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mt-4">
              <span className="text-white">
                Design isn’t just about aesthetics;
              </span>
              it’s about making healthy habits effortlessly engaging
            </h2>
          </div>

          {/* Right Section - App Icon Image */}
          <div className="rounded-lg overflow-hidden">
            <Image
              src="/assets/branding/gallery-image1.png" // Replace with actual image path
              alt="MyHydration App"
              width={500}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
      {/* Brand Style Guide */}
      <div className="bg-black text-white py-16 px-6 md:px-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-8 rounded-lg flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold  text-white">
              Brand <br /> Style Guide
            </h2>
            <hr className="border-t border-white opacity-50 mt-4" />
            <p className="text-xs text-white opacity-80 mt-2">
              Brand Foundations | © 2024 All Rights Reserved
            </p>
          </div>

          <div className="rounded-lg overflow-hidden">
            <Image
              src="/assets/branding/brand-guide.png"
              alt="MyHydration Logo Guide"
              width={800}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      <div className="bg-black text-white py-16 px-6 md:px-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-lg overflow-hidden">
            <Image
              src="/assets/branding/brand-guide2.png"
              alt="MyHydration Logo Variations"
              width={800}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-6 rounded-lg flex gap-6">
            <div className="rounded-lg overflow-hidden bg-gray-200">
              <Image
                src="/assets/branding/bottole.png"
                alt="MyHydration Bottles"
                width={400}
                height={250}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/assets/branding/clock.png"
                alt="Smartwatch with MyHydration"
                width={400}
                height={250}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
