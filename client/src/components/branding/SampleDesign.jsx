import Image from "next/image";
import Info from "./Info";

export default function SampleDesign() {
  const screens = [
    "/assets/branding/Phone1.png",
    "/assets/branding/Phone2.png",
    "/assets/branding/Phone3.png",
    "/assets/branding/Phone4.png",
    // "/assets/branding/Phone5.png",
  ];
  return (
    <>
    <div className="bg-black text-white py-16 px-6 md:px-10 flex justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Large Left Image */}
        <div className="rounded-lg overflow-hidden">
          <Image 
            src="/assets/branding/sample1.png" 
            alt="Wireframe Sketch"
            width={800}
            height={500}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Two Smaller Stacked Images */}
        <div className="flex flex-col gap-4">
          <div className="rounded-lg overflow-hidden">
            <Image 
              src="/assets/branding/sample2.png"
              alt="Wireframe Sketch 2"
              width={400}
              height={250}
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="rounded-lg overflow-hidden">
            <Image 
                  src="/assets/branding/sample3.png"
              alt="Wireframe Sketch 3"
              width={400}
              height={250}
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

      </div>
    </div>
    <div className="bg-black text-white py-16 px-6 md:px-10 flex justify-center">
      <div className="max-w-6xl w-full flex flex-wrap justify-center gap-4 md:gap-6">
        
        {screens.map((screen, index) => (
          <div key={index} className="relative w-36 md:w-48 lg:w-52 xl:w-60 rounded-lg overflow-hidden shadow-lg">
            <Image 
              src={screen}
              alt={`Mobile UI Screen ${index + 1}`}
              width={300}
              height={600}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        ))}

      </div>
    </div>
    <Info bgColor={"bg-white"} textColor={"text-black"} tittle={`Final User Interface `} description={`  The problem is Costwise previously have an unorganized management system. Where navigating was much more complex also UI was there one of the issues. Besides this the previous one doesn’t have any AI-bot.which we had to maintain.`} />
    </>
  );
}
