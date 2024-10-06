import { Sample } from "~/models/sample.model";

import rat from "../../assets/rat-sample.png";
import { useState } from "react";
import SampleDetails from "./SampleDetails";

export default function SampleItem({ sample }: { sample: Sample }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <div
        className="border-2 border-black bg-gray-300 flex p-2 gap-4 h-full clickable cursor-pointer"
        onClick={() => setShowDetails(true)}
      >
        <img src={rat} className="w-[20%] object-contain object-center" />

        <div className="text-sm truncate">
          <h1>{sample["Sample Name"]}</h1>
          <h1>{sample["Characteristics[Organism]"]}</h1>
          <h1>{sample["Characteristics[Sex]"]}</h1>
          <h1>{sample["Characteristics[Strain]"]}</h1>
          <h1>{sample["Factor Value[Age]"]} Weeks</h1>
        </div>
      </div>

      {showDetails && (
        <SampleDetails sample={sample} setShow={setShowDetails} />
      )}
    </>
  );
}
