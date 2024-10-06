import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { LoaderFunction, MetaFunction } from "@remix-run/node";
import { ClientLoaderFunctionArgs } from "@remix-run/react";
import { cacheClientLoader, useCachedLoaderData } from "remix-client-cache";

import { getaOSD665, getOSD379, getOSD665 } from "~/services/nasa.server";
import { Sample } from "~/models/sample.model";

import SampleWindow from "~/components/SampleWindows";

import StarParticles from "~/components/StarParticles";
import base from "../../assets/665/base-665.png";
import jars from "../../assets/665/jars.png";
import monitor from "../../assets/665/monitor.png";
import poster from "../../assets/665/poster.png";
import buku from "../../assets/665/buku.png";
import research from "../../assets/665/research.png";
import ProtocolOSD379 from "~/components/Protocol379";
import AssaysWindow from "~/components/AssaysWindow";

export const meta: MetaFunction = () => {
  return [{ title: "Research OSD 665 Data" }];
};

export const loader: LoaderFunction = async ({ request }) => {
  const samples = await getOSD665();
  const assays = await getaOSD665();

  if (!samples || !assays) return { samples: [], assays: [] };

  return { samples, assays };
};

export const clientLoader = (args: ClientLoaderFunctionArgs) =>
  cacheClientLoader(args);

clientLoader.hydrate = true;

export default function OSD665() {
  const [showSamples, setShowSamples] = useState(false);
  const [showResearch, setShowResearch] = useState(false);
  const [showProtocol, setShowProtocol] = useState(false);
  const [showAssays, setShowAssays] = useState(false);

  const metadata = useCachedLoaderData<typeof loader>();
  const samples: Sample[] = metadata.samples.tableData.current;
  const assays: any[] = metadata.assays.tableData.current;

  return (
    <>
      <StarParticles />

      <AnimatePresence mode="wait" initial={false}>
        <motion.div id="osd379" className="aspect-video">
          <img
            id="378-background"
            className="absolute top-0 left-0"
            src={base}
          />

          <img
            id="jars"
            src={jars}
            className="absolute top-[30%] left-[53.5%] w-[13%] clickable cursor-pointer"
            onClick={() => setShowSamples(true)}
          />

          <img
            id="monitor"
            src={monitor}
            className="absolute top-[17.6%] left-[82.1%] w-[17.8%] clickable cursor-pointer"
            onClick={() => setShowAssays(true)}
          />

          <img
            id="poster"
            src={poster}
            className="absolute top-[22.6%] left-[24%] w-[12.8%] clickable cursor-pointer"
            onClick={() => setShowProtocol(true)}
          />

          <img
            id="buku"
            src={buku}
            className="absolute top-[59.2%] left-[60.2%] w-[6.5%] clickable cursor-pointer"
            onClick={() => setShowResearch(true)} // Menampilkan research ketika buku diklik
          />

          <AnimatePresence>
            {showSamples && (
              <SampleWindow setShow={setShowSamples} data={samples} />
            )}
          </AnimatePresence>

          <AnimatePresence>
            {showResearch && (
              <motion.div
                className="absolute top-0 left-0 z-10 flex items-center justify-center w-full h-full overflow-y-hidden bg-slate-300 bg-opacity-50 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="relative w-[80%] h-[80%] bg-transparent rounded-xl p-4">
                  <button
                    className="absolute top-2 right-2 bg-black text-white font-bold px-2"
                    onClick={() => setShowResearch(false)}
                  >
                    X
                  </button>
                  <img
                    src={research}
                    alt="Research"
                    className="w-full h-full object-contain"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {showAssays && (
              <AssaysWindow setShow={setShowAssays} data={assays} />
            )}
          </AnimatePresence>

          {showProtocol && <ProtocolOSD379 setShow={setShowProtocol} />}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
