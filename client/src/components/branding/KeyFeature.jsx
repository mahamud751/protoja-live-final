import Image from "next/image";
import Info from "./Info";

export default function StatisticsGrid() {
  return (
    <>
      <div className="bg-black text-white px-6 md:px-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-900 p-6 rounded-lg shadow-md text-center ">
            <p className="text-gray-400 text-sm text-white">
              Insert some statistic
            </p>
            <h2 className="text-xl font-semibold mt-2 text-white">
              Key feature
            </h2>
            <p className="text-gray-500 text-lg mt-1">
              Insert some statistic or metric name
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-8 rounded-lg flex flex-col justify-center items-center text-center">
            <p className="text-white text-sm opacity-80">
              Insert some statistic
            </p>
            <h1 className="text-5xl font-bold mt-2 text-white">100k</h1>
            <p className="text-white text-sm bg-white bg-opacity-20 px-4 py-2 rounded-full w-max mx-auto mt-2">
              Insert some statistic name
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg shadow-md text-center">
            <p className="text-gray-400 text-sm">
              Machine learning suggestions
            </p>
            <h2 className="text-3xl font-semibold mt-2 text-blue-500">
              Ship faster <br /> with AI
            </h2>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg shadow-md text-center">
            <p className="text-blue-400 text-xl font-bold mt-3">★★★★★</p>
            <h2 className="text-2xl font-bold mt-2 text-white">100k</h2>
            <p className="text-gray-500 text-lg">Insert some statistic</p>
          </div>

          <div className="rounded-lg overflow-hidden">
            <Image
              src="/assets/branding/mobile2.png"
              alt="App Dashboard"
              width={400}
              height={500}
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Bottom Right - Key Feature */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-md text-center">
            <p className="text-white text-sm">Insert some statistic</p>
            <h2 className="text-xl font-semibold mt-2 text-white">
              Key feature
            </h2>
            <p className="text-gray-500 text-lg mt-1">
              Insert some statistic or metric name
            </p>
          </div>
        </div>
      </div>
      {/* Company Deck */}

      <div className="bg-black text-white py-16 px-6 md:px-10 flex justify-center">
        <div className="max-w-6xl w-full bg-gradient-to-br from-gray-900 to-black p-10 rounded-2xl shadow-lg relative overflow-hidden">
          {/* Background Glow Effect */}
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500 rounded-full opacity-50 blur-3xl"></div>

          {/* Team Avatars */}
          <div className="flex space-x-2">
            <div className="w-[50px] h-[50px]">
              <Image
                src="/assets/blog-image/author.png"
                alt="Team Member"
                width={50}
                height={50}
                className="object-cover clip-polygon"
              />
            </div>
            <div className="w-[50px] h-[50px]">
              <Image
                src="/assets/blog-image/author.png"
                alt="Team Member"
                width={50}
                height={50}
                className="object-cover clip-polygon"
              />
            </div>
            <div className="w-[50px] h-[50px]">
              <Image
                src="/assets/blog-image/author.png"
                alt="Team Member"
                width={50}
                height={50}
                className="object-cover clip-polygon"
              />
            </div>
            <div className="w-[50px] h-[50px]">
              <Image
                src="/assets/blog-image/author.png"
                alt="Team Member"
                width={50}
                height={50}
                className="object-cover clip-polygon"
              />
            </div>
          </div>

          <h2 className="text-lg text-gray-300 mt-4">MyHydration</h2>
          <h1 className="text-5xl font-bold mt-2 text-white">Company Deck</h1>

          {/* Divider */}
          <hr className="border-gray-700 my-6" />

          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <h3 className="font-semibold text-white">John J. Doe</h3>
              <p className="text-gray-500 text-sm">Product Manager</p>
            </div>
            <div>
              <h3 className="font-semibold text-white">Rafatul Islam</h3>
              <p className="text-gray-500 text-sm">Design Lead</p>
            </div>
            <div>
              <h3 className="font-semibold text-white">Joy</h3>
              <p className="text-gray-500 text-sm">Product Designer</p>
            </div>
          </div>
        </div>
      </div>
      {/* Style Guide */}
      <Info
        bgColor={"bg-white"}
        textColor={"text-black"}
        tittle={`Style Guide`}
        description={` The problem is Costwise previously have an unorganized management system. Where navigating was much more complex also UI was there one of the issues. Besides this the previous one doesn’t have any AI-bot.which we had to maintain.`}
      />
    </>
  );
}
