import { useState } from "react";

import folder from "../../assets/379/assays-folder.svg";
import AssaysDetails from "./AssaysDetails";

export default function AssaysItem({ data }: { data: any }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <div
        className="border-2 border-black bg-gray-300 flex p-2 gap-4 h-full clickable cursor-pointer flex-col"
        onClick={() => setShowDetails(true)}
      >
        <img
          src={folder}
          className="w-[20%] object-contain object-center self-center"
        />

        <h1 className="text-sm truncate">{data["Sample Name"]}</h1>
      </div>

      {showDetails && <AssaysDetails data={data} setShow={setShowDetails} />}
    </>
  );
}
