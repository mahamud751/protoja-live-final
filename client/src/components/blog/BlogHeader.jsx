import Image from "next/image";

const BlogHeader = () => {
  return (
    <>
      <div className="relative w-full">
        <Image
          src="/assets/blogTop.png"
          alt="Color Psychology in Branding"
          width={4000}
          height={2000}
          className="w-full sm:h-[600px] md:h-[800px]"
          priority
        />
      </div>
    </>
  );
};

export default BlogHeader;
