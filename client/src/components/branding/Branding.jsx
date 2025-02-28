import Image from "next/image";
import UserCentricDesign from "./UserCentricDesign";

import Overview from "./Overview";

export default function Branding({ data }) {
  const { services, contents } = data;
  return (
    <>
      {/* Branding Section */}
      <div className="bg-white text-center py-20">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          {data?.name}
        </h1>

        {/* Subtitle */}
        <p className="text-gray-500 mt-2 text-sm md:text-base">{data?.desc}</p>

        {/* Hero Image */}
        <div className="mt-6">
          <Image
            src={data?.photos?.[0]}
            alt="Mobile App Design"
            width={600}
            height={400}
            className="rounded-lg  w-full "
          />
        </div>
      </div>
      {/* Overview */}
      <Overview services={services} contents={contents} />

      {/* User Centric Design Section */}
      <UserCentricDesign contents={contents} />
      {/* FAQ */}
    </>
  );
}
