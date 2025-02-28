import Image from "next/image";

export default function Overview({ services, contents }) {
  console.log(contents);
  return (
    <div className="bg-white text-black py-10 px-6 md:px-10 flex flex-col md:flex-row max-w-7xl mx-auto">
      {/* Left Sidebar */}
      <div className="w-full md:w-1/4 space-y-4 text-gray-700 text-sm">
        <div>
          <p className="font-semibold">Industry</p>
          <p>Health</p>
        </div>
        <div>
          <p className="font-semibold">Headquarters</p>
          <p>London, UK</p>
        </div>
        <div>
          <p className="font-semibold">Company Size</p>
          <p>10+ employees</p>
        </div>
        <div>
          <p className="font-semibold">Services</p>
          {services?.length > 0 ? (
            services.map((service, index) => (
              <p key={index}>{service?.title}</p>
            ))
          ) : (
            <p>No services available</p>
          )}
        </div>
        <div>
          <p className="font-semibold">Website</p>
          <a href="#" className="text-blue-600 hover:underline">
            Visit their website
          </a>
        </div>
      </div>

      {/* Right Content */}
      <div className="w-full md:w-3/4 md:pl-10 space-y-8">
        {contents?.slice(0, 3).map((content, index) => (
          <section key={index}>
            <h2 className="text-2xl font-bold">{content?.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: content?.description }} />
          </section>
        ))}

        {/* Testimonial Section */}
        <section className="bg-gray-100 p-6 rounded-lg flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
          {/* Video Thumbnail */}
          <div className="relative w-72 h-56">
            <Image
              src="/assets/branding/overview-video.png"
              alt="Testimonial Video"
              width={350}
              height={240}
              className="rounded-lg w-full h-full"
            />
            {/* <AiFillPlayCircle className="absolute inset-0 top-10 text-orange-500 text-6xl cursor-pointer" /> */}
          </div>

          {/* Review Content */}
          <div className="text-gray-700 text-sm">
            <div className="flex items-center space-x-2">
              <span className="text-gray-500">Reviewed on</span>
              <span className="text-red-500 font-semibold">Clutch ★★★★★</span>
            </div>
            <p className="text-lg font-semibold mt-3">
              We were extremely impressed with how they approached teamwork, how
              they took feedback on board, and how responsive they were
              throughout the process.
            </p>
            <p className="text-sm font-semibold mt-4">Pinto Allen</p>
            <p className="text-xs text-gray-500">
              Founder & CEO, Cyber Networks
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
