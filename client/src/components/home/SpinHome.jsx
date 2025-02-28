import Logo from "../icons/Logo";
export default function SpinHome() {
  const badgeSize = "160px";

  return (
    <div
      className="absolute pointer-events-none ms-[-200px]"
      style={{
        width: "200px",
        height: "200px",
        borderRadius: "50%",
        backgroundColor: "yellow", // Circle is yellow

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "transform 0.1s ease",
      }}
    >
      <div
        className="flex justify-center items-center rounded-full animate-identifier"
        style={{
          width: badgeSize,
          height: badgeSize,
        }}
        id="badge"
      >
        {[
          " ",
          "l",
          "e",
          "t",
          "'",
          "s",
          " ",
          "b",
          "u",
          "i",
          "l",
          "d",
          " ",
          " ",
          "t",
          "o",
          "g",
          "e",
          "t",
          "h",
          "e",
          "r",
          " ",
          ".",
          " ",
          "l",
          "e",
          "t",
          "'",
          "s",
          " ",
          "b",
          "u",
          "i",
          "l",
          "d",
          " ",
          "t",
          "o",
          "g",
          "e",
          "t",
          "h",
          "e",
          "r",
          " ",
        ].map((char, i) => (
          <span
            className="absolute text-black font-semibold text-xs uppercase"
            style={{
              top: "0",
              left: `calc(50% - 5px / 2)`,
              height: `calc(${badgeSize} / 2)`,
              width: "1px",
              textAlign: "center",
              lineHeight: "1rem",
              transformOrigin: "bottom center",
              transform: `rotate(${(360 / 46) * i}deg)`,
            }}
            key={i}
          >
            {char}
          </span>
        ))}
      </div>
      <div
        style={{
          fontSize: "60px",
          color: "black",
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <Logo />
      </div>
    </div>
  );
}
