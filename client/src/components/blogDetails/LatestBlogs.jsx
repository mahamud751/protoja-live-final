import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"; // Importing the arrow icon

export default function LatestBlogs({ blogs }) {
  return (
    <>
      <div className="flex justify-between items-center  p-6">
        {/* Left Content */}
        <div>
          <p className="text-orange-600 font-semibold text-sm">Latest posts</p>
          <h1 className="text-3xl font-bold text-gray-900">Protoja Blog</h1>
          <p className="text-gray-600">
            Interviews, tips, guides, industry best practices
          </p>
        </div>

        {/* View All Button */}
        <button className="flex items-center gap-2 bg-orange-500 text-black px-4 py-2 rounded-full hover:bg-orange-600 transition">
          View all posts <AiOutlineArrowLeft size={18} />
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-4">
        {blogs?.map((card) => (
          <Link href={`/blog-details/${card?._id}`} key={card?._id}>
            <div className="rounded-lg overflow-hidden shadow-lg bg-white">
              {/* Image with Next.js Image component */}
              <div className="relative w-full h-48">
                <Image
                  src={card?.photos[0]} // Display the first image from the 'photos' array
                  alt={card?.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>

              {/* Content */}
              <div className="p-3">
                <div className="flex justify-between">
                  <h2 className="text-2xl font-semibold text-gray-800 h-16">
                    {card?.name}
                  </h2>
                  <MdArrowOutward size={20} className="text-black" />
                </div>
                <p className="text-gray-600 mt-2 text-sm">{card?.desc}</p>
              </div>

              {/* Author and Date */}
              <div className="p-3 text-gray-600 text-xs border-t border-gray-200">
                <div>
                  <span>{card?.author}</span>
                </div>
                <div>
                  <span>{new Date(card?.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Slider Section */}
      <div className="flex space-x-4 mb-3">
        {/* Left Arrow Button */}
        <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100 transition">
          <AiOutlineArrowLeft size={18} className="text-gray-600" />
        </button>

        {/* Right Arrow Button */}
        <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100 transition">
          <AiOutlineArrowRight size={18} className="text-gray-600" />
        </button>
      </div>
    </>
  );
}
