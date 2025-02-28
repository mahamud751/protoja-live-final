import Image from "next/image";

const MockupImage = () => {
  return (
    <div>
      <Image
        src="/assets/branding/phone-mockup.png"
        alt="Mobile App Design"
        width={600}
        height={400}
        className="w-full "
      />
    </div>
  );
};

export default MockupImage;
