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
      className="absolute top-0 left-0 z-10 flex items-center justify-center w-full h-full overflow-y-hidden bg-slate-300 bg-opacity-50 backdrop-blur-sm"
    >
      <div className="w-[90%] h-[90%] bg-gray-50 flex flex-col gap-6 rounded-xl px-4 py-2">
        <div className="flex justify-between items-center">
          <h1>Samples Data</h1>

          <button
            className="bg-black text-white font-bold px-1.5"
            onClick={() => setShowSamples(false)}
          >
            X
          </button>
        </div>

        <div className="w-full h-0.5 bg-black" />

        <div className="grid grid-cols-3 gap-6 overflow-y-scroll">
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
    </div>
  );
}
