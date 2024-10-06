import { Sample } from "~/models/sample.model";

interface sampleWindowProps {
  setShowSamples: any;
  samples: Sample[];
}

export default function SampleWindow({
  setShowSamples,
  samples,
}: sampleWindowProps) {
  return (
    <div
      id="samples-osd-379"
      className="absolute top-0 left-0 z-10 p-6 bg-gray-50 flex flex-col gap-6 w-full h-full overflow-y-hidden"
    >
      <div className="flex justify-between items-center">
        <h1>Samples Data</h1>

        <button
          className="bg-black rounded-lg text-white font-bold p-2"
          onClick={() => setShowSamples(false)}
        >
          X
        </button>
      </div>

      <div className="w-full h-0.5 bg-black" />

      <div className="grid grid-cols-4 gap-6 overflow-y-scroll">
        {samples.map((s, i) => (
          <div
            key={i}
            id={"samples-" + (i + 1)}
            className="border-2 border-black bg-gray-300"
          >
            <h1>Sample Name: {s["Sample Name"]}</h1>
            <h1>Age: {s["Factor Value[Age]"]}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
