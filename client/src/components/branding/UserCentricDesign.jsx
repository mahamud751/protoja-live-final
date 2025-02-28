import Image from "next/image";
import Faq from "./Faq";
import ImpactOfProject from "./ImpactOfProject";

export default function UserCentricDesign({ contents }) {
  return (
    <>
      {contents?.slice(3, 4).map((item) => {
        return (
          <>
            {item?.images?.map((photo) => (
              <div key={photo} className="relative">
                <Image
                  src={photo}
                  alt={`Mockup Image`}
                  className="rounded-lg"
                  width={2000}
                  height={2000}
                />
              </div>
            ))}
          </>
        );
      })}

      <div className="my-12">
        {" "}
        <Faq contents={contents} />
      </div>
      <div>
        {contents?.slice(4, 5).map((item) => {
          return (
            <>
              {item?.images?.map((photo) => (
                <div key={photo} className="relative">
                  <Image
                    src={photo}
                    alt={`Mockup Image`}
                    className="rounded-lg"
                    width={2000}
                    height={1000}
                  />
                </div>
              ))}
            </>
          );
        })}
      </div>
      {/* Branding Info */}
      <div className={`bg-[#111111] text-white py-16 px-6 md:px-10`}>
        <div className="grid grid-cols-12">
          <div className="col-span-6"></div>
          <div className="col-span-6">
            <h2 className={`text-3xl md:text-4xl font-semibold text-white`}>
              Branding
            </h2>

            <p className="text-gray-400 mt-4 text-sm md:text-base leading-relaxed mb-12">
              The problem is Costwise previously had an unorganized management
              system. Navigating was much more complex, and UI was one of the
              issues. Besides this, the previous version did not have any
              AI-bot, which we had to maintain.
            </p>
          </div>
        </div>
        <div>
          {contents?.slice(5, 6).map((item) => {
            return (
              <>
                {item?.images?.map((photo) => (
                  <div key={photo} className="relative">
                    <Image
                      src={photo}
                      alt={`Mockup Image`}
                      className="rounded-lg"
                      width={2000}
                      height={1000}
                    />
                  </div>
                ))}
              </>
            );
          })}
        </div>
      </div>
      <div className={`bg-[white]  py-16 px-6 md:px-10`}>
        <div className="grid grid-cols-12">
          <div className="col-span-6"></div>
          <div className="col-span-6">
            <h2 className={`text-3xl md:text-4xl font-semibold`}>
              Style Guide
            </h2>

            <p className="text-gray-400 mt-4 text-sm md:text-base leading-relaxed mb-12">
              The problem is Costwise previously have an unorganized management
              system. Where navigating was much more complex also UI was there
              one of the issues. Besides this the previous one doesn’t have any
              AI-bot.which we had to maintain.
            </p>
          </div>
        </div>
        <div>
          {contents?.slice(6, 7).map((item) => {
            return (
              <>
                {item?.images?.map((photo) => (
                  <div key={photo} className="relative">
                    <Image
                      src={photo}
                      alt={`Mockup Image`}
                      className="rounded-lg"
                      width={2000}
                      height={1000}
                    />
                  </div>
                ))}
              </>
            );
          })}
        </div>
      </div>
      <div className={`bg-[white]  py-16 px-6 md:px-10`}>
        <div className="grid grid-cols-12">
          <div className="col-span-6"></div>
          <div className="col-span-6">
            <h2 className={`text-3xl md:text-4xl font-semibold`}>Wireframes</h2>

            <p className="text-gray-400 mt-4 text-sm md:text-base leading-relaxed mb-12">
              Wireframes are essential because they provide a clear foundation
              for the app’s structure and user flow. They help teams align on
              key elements and functionality before diving into visual details.
              This early focus on layout and usability ensures that potential
              issues are caught early, saving time and effort during development
              and leading to a more user-friendly final product.
            </p>
          </div>
        </div>
        <div>
          {contents?.slice(7, 8).map((item) => {
            return (
              <>
                {item?.images?.map((photo) => (
                  <div key={photo} className="relative">
                    <Image
                      src={photo}
                      alt={`Mockup Image`}
                      className="rounded-lg"
                      width={2000}
                      height={1000}
                    />
                  </div>
                ))}
              </>
            );
          })}
        </div>
      </div>
      <div className={`bg-[white]  py-16 px-6 md:px-10`}>
        <div className="grid grid-cols-12">
          <div className="col-span-6"></div>
          <div className="col-span-6">
            <h2 className={`text-3xl md:text-4xl font-semibold`}>
              Final User Interface{" "}
            </h2>

            <p className="text-gray-400 mt-4 text-sm md:text-base leading-relaxed mb-12">
              The problem is Costwise previously have an unorganized management
              system. Where navigating was much more complex also UI was there
              one of the issues. Besides this the previous one doesn’t have any
              AI-bot.which we had to maintain.
            </p>
          </div>
        </div>
        <div>
          {contents?.slice(8, 9).map((item) => {
            return (
              <>
                {item?.images?.map((photo) => (
                  <div key={photo} className="relative">
                    <Image
                      src={photo}
                      alt={`Mockup Image`}
                      className="rounded-lg"
                      width={2000}
                      height={1000}
                    />
                  </div>
                ))}
              </>
            );
          })}
        </div>
      </div>
      <ImpactOfProject />
    </>
  );
}
