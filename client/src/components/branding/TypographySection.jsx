import ColorPalette from "./ColorPalette";
import Info from "./Info";

export default function TypographySection() {
  return (
    <>
    <div className="relative bg-gradient-to-br from-gray-900 to-black text-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        
        {/* Subtle Background Glow */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500 rounded-full opacity-50 blur-3xl"></div>

        {/* Top Heading & Description */}
        <div className="md:flex md:justify-between md:items-start">
          <h2 className="text-2xl md:text-3xl font-light text-white">
            <span className="font-semibold ">Typography</span> & Color
          </h2>
          <p className="text-gray-400 text-sm md:max-w-md mt-4 md:mt-0">
            <span className="font-semibold">Inter</span> is a contemporary sans-serif typeface that balances 
            <strong> elegance</strong> and <strong> readability</strong>, making it a perfect fit for the
            <strong> myHydration</strong> Mobile App.
          </p>
        </div>

        {/* Typography Showcase */}
        <div className="flex  justify-center items-center mt-16">
          <h1 className="text-7xl md:text-8xl font-extrabold tracking-tight text-white">Inter</h1>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mt-16 gap-10">
      <p className="text-gray-400 text-sm mt-10 md:max-w-2xl">
          Designed with simplicity and clarity in mind, <span className="font-semibold">Inter</span> provides a clean 
          & modern look that enhances user experience without distraction. Its refined lines and versatile 
          style reflect <span className="font-semibold">myHydration</span>.
        </p>
        <p className="text-3xl text-gray-300 mt-6 md:mt-0">AaBbCc 123</p>
      </div>
    </div>
    <ColorPalette/>
    
    <Info bgColor={"bg-white"} textColor={"text-black"} tittle={`Wireframe`} description={`  Wireframes are essential because they provide a clear foundation for the app’s structure and user flow. They help teams align on key elements and functionality before diving into visual details. This early focus on layout and usability ensures that potential issues are caught early, saving time and effort during development and leading to a more user-friendly final product.`} />
    </>
  );
}
