export default function ImpactOfProject() {
  const metrics = [
    {
      id: "01",
      title: "Improve Retention rate",
      value: "19%",
      bgColor: "bg-black text-white",
    },
    {
      id: "02",
      title: "Increase weekly Active User",
      value: "25%",
      bgColor: "bg-white text-black border",
    },
    {
      id: "03",
      title: "Average app Rating",
      value: "5.00",
      bgColor: "bg-black text-white",
    },
  ];

  return (
    <div className="bg-white text-black py-16 px-6 md:px-10 flex flex-col items-center">
      {/* Section Header */}
      <h2 className="text-4xl font-bold text-center">Impact of project</h2>
      <p className="text-lg text-gray-500 text-center mt-2">in number</p>

      {/* Metrics Cards */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className={`rounded-lg overflow-hidden shadow-lg p-6 flex flex-col justify-between ${metric.bgColor}`}
          >
            <p className="text-sm font-medium">{metric.id}</p>
            <p className="text-lg mt-2">{metric.title}</p>
            <hr className="border-gray-500 my-4" />
            <p className="text-3xl font-bold">{metric.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
