import { useState } from "react";
import { motion, AnimatePresence, useIsPresent } from "framer-motion";

import { LoaderFunction, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { getOSD379 } from "~/services/nasa.server";
import { Sample } from "~/models/sample.model";

export const meta: MetaFunction = () => {
  return [{ title: "Research OSD 379 Data" }];
};

export const loader: LoaderFunction = async ({ request }) => {
  const metadata = await getOSD379();

  if (!metadata) return [];

  return metadata;
};

export default function OSD379() {
  const [showSamples, setShowSamples] = useState(false);

  const metadata = useLoaderData<typeof loader>();
  const samples: Sample[] = metadata.tableData.first;

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div id="osd379" className="aspect-video">
        <div
          id="samples-trigger-osd-379"
          className="border-2 border-black w-64 h-64 bg-orange-300 rounded-xl absolute top-[calc(50%-16rem)] left-12 flex"
          onClick={() => setShowSamples(true)}
        />

        {showSamples && (
          <div
            id="samples-osd-379"
            className="relative w-screen min-h-screen z-10 p-6 bg-gray-50 flex flex-col gap-6"
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

            <div className="grid grid-cols-4 gap-6">
              {samples.map((s, i) => (
                <div
                  key={i}
                  id={"samples-" + (i + 1)}
                  className="w-72 h-72 border-2 border-black bg-gray-300"
                >
                  <h1>Sample Name: {s["Sample Name"]}</h1>
                  <h1>Age: {s["Factor Value[Age]"]}</h1>
                </div>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
