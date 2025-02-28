export default function Badge() {
  const badgeSize = "160px";

  return (
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
        "p",
        "l",
        "a",
        "y",
        "n",
        "o",
        "w",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        "s",
        "h",
        "o",
        "w",
        "r",
        "e",
        "e",
        "l",
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
            transform: `rotate(${(360 / 26) * i}deg)`,
          }}
          key={i}
        >
          {char}
        </span>
      ))}
    </div>
  );
}
