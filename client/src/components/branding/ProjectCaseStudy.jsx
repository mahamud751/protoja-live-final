import Image from "next/image";

export default function ProjectCaseStudy({ project }) {
  return (
    <div className="bg-white text-black pb-5 px-6 md:px-10 flex flex-col items-center">
      {/* Section Header */}
      <h2 className="text-4xl font-bold text-center">
        More project Case study
      </h2>

      {/* Projects Grid */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {project?.map((project, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden shadow-lg w-full"
          >
            <div className="relative w-full h-56">
              <Image
                src={project?.photos[0]}
                alt={project?.name}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="mt-4 p-3">
              <h3 className="text-lg font-semibold">{project?.name}</h3>
              <p className="text-gray-500 text-sm mt-1">{project?.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
