import { Sample } from "~/models/sample.model";

import rat from "../../assets/rat-sample.png";

export default function SampleDetails({
  sample,
  setShow,
}: {
  sample: Sample;
  setShow: any;
}) {
  return (
    <div className="absolute top-0 left-0 z-20 flex items-center justify-center w-screen h-full overflow-hidden bg-slate-300 bg-opacity-50 backdrop-blur-sm">
      <div className="w-[90%] h-[90%] bg-gray-50 flex flex-col rounded-xl px-4 py-2">
        <div className="flex justify-between items-center pb-1 mb-1">
          <h1 className="font-black text-xl">SAMPLES DETAILS</h1>

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
            <h1>Sample Name: {sample["Sample Name"]}</h1>
            <h1>Strain: {sample["Characteristics[Strain]"]}</h1>
            <h1>Organism: {sample["Characteristics[Organism]"]}</h1>
            <h1>Sex: {sample["Characteristics[Sex]"]}</h1>
            <h1>Age: {sample["Factor Value[Age]"]} Weeks</h1>
            <h1>Material Type: {sample["Characteristics[Material Type]"]}</h1>
            <h1>Genotype: {sample["Characteristics[Genotype]"]}</h1>
            <h1>Spaceflight: {sample["Factor Value[Spaceflight]"]}</h1>
            <h1>Animal Source: {sample["Characteristics[Animal Source]"]}</h1>
            <h1>Euthanasia Location: {sample["Factor Value[Euthanasia Location]"]}</h1>
            <h1>Dissection Contidition: {sample["Factor Value[Dissection Condition]"]}</h1>
            <h1>Protocol REF: {sample["Protocol REF"]}</h1>
            <h1>Light Cycle: {sample["Parameter Value[Light Cycle]"]}</h1>
            <h1>Diet: {sample["Parameter Value[Diet]"]}</h1>
            <h1>LAR Receipt Date: {sample["Comment[LAR Animal Receipt Date at Scrippts]"]}</h1>
            <h1>Euthanasia Date: {sample["Comment[Euthanasia Dates]"]}</h1>
            <h1>Dissection Date: {sample["Comment[Dissection Dates]"]}</h1>
            <h1>Euthanasia Method: {sample["Parameter Value[Euthanasia Method]"]}</h1>
            <h1>Presevation Method: {sample["Parameter Value[Sample Preservation Method]"]}</h1>
            <h1>Presevation Mode: {sample["Parameter Value[Carcass Preservation Method]"]}</h1>
            <h1>Storage Temperature: {sample["Parameter Value[Sample Storage Temperature]"]}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
