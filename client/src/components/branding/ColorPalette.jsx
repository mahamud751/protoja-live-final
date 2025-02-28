export default function ColorPalette() {
    const primaryColors = ["#2196FF", "#010D25", "#04274A", "#1573C6", "#B3B8B6"];
    const secondaryColors = ["#D9E8F8", "#23AAFB", "#2097DF", "#1D85D2", "#1E78C0", "#1E72B0", "#1E678C", "#0A1A2F"];
    const tertiaryColors = ["#F2F4F7", "#E1E7EC", "#C5D2DC", "#A3B9C9", "#1E7AB0", "#1E73A0", "#1E678C", "#0A1A2F"];


    return (
      <div className="bg-black text-white py-5  ">
        <div className=" space-y-8">
          
          {/* Primary Colors */}
          <div className="bg-black text-white  flex justify-center">
      <div className="relative flex items-center bg-gray-900 px-6 py-4 rounded-full w-max">
        
        {/* Color Swatches */}
        <div className="flex space-x-4">
          {primaryColors.map((color, index) => (
            <div key={index} className="relative w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center shadow-md"
              style={{ backgroundColor: color }}>
              <span className="text-xs font-semibold bg-gray-800 bg-opacity-60 px-2 py-1 rounded">{color}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
          {/* Secondary Colors */}
          <div className="bg-black text-white flex justify-center">
      <div className="relative flex items-center bg-gray-900 px-6 py-4 rounded-full w-max overflow-hidden">
        
        {/* Color Swatches */}
        <div className="flex space-x-[-20px]">
          {secondaryColors.map((color, index) => (
            <div key={index} className="relative w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center shadow-md"
              style={{ backgroundColor: color, zIndex: secondaryColors.length - index }}>
              <span className="text-xs font-semibold bg-gray-800 bg-opacity-50 px-2 py-1 rounded">{color}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  
          {/* Tertiary Colors */}
          <div className="bg-black text-white  flex justify-center">
      <div className="relative flex items-center bg-gray-900 px-6 py-4 rounded-full w-max overflow-hidden">
        
        {/* Color Swatches */}
        <div className="flex space-x-[-22px]">
          {tertiaryColors.map((color, index) => (
            <div key={index} className="relative w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center shadow-md"
              style={{ backgroundColor: color, zIndex: tertiaryColors.length - index }}>
              <span className="text-xs font-semibold bg-gray-800 bg-opacity-60 px-2 py-1 rounded">{color}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  
        </div>
      </div>
    );
  }
  