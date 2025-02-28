import Image from "next/image";

export default function AdvanceHydration() {
  const screens = [
    { src: "/assets/branding/sample6.png", rotate: "-rotate-6" },
    { src: "/assets/branding/sample7.png", rotate: "rotate-6" },
    { src: "/assets/branding/sample8.png", rotate: "-rotate-3" },
    { src: "/assets/branding/sample9.png", rotate: "rotate-3" },
    // { src: "/assets/branding/sample10.png", rotate: "-rotate-2" },
    // { src: "/assets/branding/sample11.png", rotate: "rotate-2" },
    // { src: "/assets/branding/sample12.png", rotate: "-rotate-4" },
    // { src: "/assets/branding/sample12.png", rotate: "rotate-4" },
  ];

  return (
  <div className="bg-black text-white py-16 px-6 md:px-10">
      
      <h2 className="text-white w-2/3 mb-4">Unleash Your Potential with Advanced
      Hydration Tracker</h2>
    <div className=" flex justify-center">
  
      <div className="max-w-6xl w-full grid grid-cols-2 md:grid-cols-4 gap-6">
        
        {screens.map((screen, index) => (
          <div key={index} className={`relative w-36 md:w-48 lg:w-52 xl:w-60 rounded-lg overflow-hidden shadow-lg ${screen.rotate}`}>
            <Image 
              src={screen.src}
              alt={`Mobile UI Screen ${index + 1}`}
              width={300}
              height={600}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        ))}

      </div>
    </div>
  </div>
  );
}
