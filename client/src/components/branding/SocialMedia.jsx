import Image from "next/image";
import { AiOutlineHeart, AiOutlineMessage, AiOutlineSend,  } from "react-icons/ai";
import { FaRegBookmark } from "react-icons/fa6";

export default function SocialMediaSection() {
  const posts = [
    { src: "/assets/branding/social1.png", text: "" },
    { src: "", text: "Unleash your Potential" }, // Text-only post
    { src: "/assets/branding/social2.png", text: "" },
  ];

  return (
    <>
    <div className="bg-black text-white py-10 px-6 md:px-10 flex flex-col">
      {/* Section Header */}
      <h2 className="text-4xl font-bold mb-8 text-white">Social Media</h2>

      {/* Social Media Posts */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <div key={index} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg w-full">
            {/* Mock Instagram Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800">
              <div className="flex items-center space-x-2">
                <Image src="/assets/branding/icon.png" alt="myHydration" width={20} height={20} />
                <span className="text-sm font-semibold">myHydration</span>
              </div>
              <span className="text-gray-500 text-xl">• • •</span>
            </div>

            {/* Post Content - Image or Text */}
            <div className="w-full h-64 flex items-center justify-center bg-black">
              {post.text ? (
                <div className="w-full h-full flex items-center justify-center bg-[#0D1726] text-center px-6">
                  <p className="text-lg font-semibold text-white">
                    {post.text.split(" ").map((word, i) => (
                      <span key={i} className={i === 2 ? "text-blue-500" : ""}>{word} </span>
                    ))}
                  </p>
                </div>
              ) : (
                <Image 
                  src={post.src} 
                  alt="Social Media Post" 
                  width={300} 
                  height={300} 
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            {/* Mock Instagram Footer with React Icons */}
            <div className="flex justify-between px-4 py-3 text-gray-500 text-xl">
              <div className="flex space-x-4">
                <AiOutlineHeart className="hover:text-white cursor-pointer transition-all duration-200" />
                <AiOutlineMessage className="hover:text-white cursor-pointer transition-all duration-200" />
                <AiOutlineSend className="hover:text-white cursor-pointer transition-all duration-200" />
              </div>
              <FaRegBookmark className="hover:text-white cursor-pointer transition-all duration-200" />
            </div>

          </div>
        ))}
      </div>
    
    </div>
    <div className=" ">
            <Image
              src="/assets/branding/mockup2.png"
              alt="Mobile App Design"
              width={600}
              height={400}
              className="w-full "
            />
          </div>
    </>
  );
}
