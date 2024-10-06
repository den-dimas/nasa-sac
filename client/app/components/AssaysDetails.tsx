import rat from "../../assets/rat-sample.png"
import { Assay } from "~/models/assay.model";

export default function AssaysDetails({
  data,
  setShow,
}: {
  data: any;
  setShow: any;
}) {
  return (
    <div className="absolute top-0 left-0 z-20 flex items-center justify-center w-screen h-full overflow-hidden bg-slate-300 bg-opacity-50 backdrop-blur-sm">
      <div className="w-[90%] h-[90%] bg-gray-50 flex flex-col rounded-xl px-4 py-2">
        <div className="flex justify-between items-center pb-1 mb-1">
          <h1 className="font-black text-xl">ASSAYS DETAILS</h1>

          <button
            className="bg-black text-white font-bold px-1.5"
            onClick={() => setShow(false)}
          >
            X
          </button>
        </div>

        <div className="w-full h-0.5 bg-black mb-4" />

        <div className="flex items-center gap-9 h-full">
            <img src={rat} className="w-[15%] object-contain object-center" />
            <div>
              <h1>Sample Name: {data["Sample Name"]}</h1>
              <h1>QA Instrument: {data["Parameter Value[QA Instrument]"]}</h1>
              <h1>Organism: Mus Musculus</h1>
              <h1>Term Source REF: {data["Term Source REF"]}</h1>
              <h1>Spike-in Quality Control: {data["Parameter Value[Spike-in Quality Control]"]} Weeks</h1>
              <h1>Spike-in Mix Number: {data["Parameter Value[Spike-in Mix Number]"]}</h1>
              <h1>Library Selection: {data["Parameter Value[library selection]"]}</h1>
              <h1>Library Layout: {data["Parameter Value[library layout]"]}</h1>
              <h1>Stranded Condition: {data["Parameter Value[stranded]"]}</h1>
              <h1>Fragment Size: {data["Parameter Value[Fragment Size]"]}</h1>
              <h1>rRNA Contamination: {data["Parameter Value[rRNA Contamination]"]}%</h1>
            </div>
          </div>
      </div>
    </div>
  );
}
