import { useState } from "react";
import { motion, AnimatePresence, useIsPresent } from "framer-motion";

import { LoaderFunction, MetaFunction } from "@remix-run/node";
import { ClientLoaderFunctionArgs, useNavigate } from "@remix-run/react";
import { cacheClientLoader, useCachedLoaderData } from "remix-client-cache";

import { getOSD379 } from "~/services/nasa.server";
import { Sample } from "~/models/sample.model";

import SampleWindow from "~/components/SampleWindows";

import base from "../../assets/379/base-379.png";
import jars from "../../assets/379/jars.png";
import monitor from "../../assets/379/monitor.png";
import poster from "../../assets/379/poster.png";
import goto from "../../assets/379/goto.png";
import StarParticles from "~/components/StarParticles";

export const meta: MetaFunction = () => {
  return [{ title: "Research OSD 379 Data" }];
};

export const loader: LoaderFunction = async ({ request }) => {
  const metadata = await getOSD379();

  if (!metadata) return [];

  return metadata;
};

export const clientLoader = (args: ClientLoaderFunctionArgs) =>
  cacheClientLoader(args);

clientLoader.hydrate = true;

export default function OSD379() {
  const navigate = useNavigate();

  const [showSamples, setShowSamples] = useState(false);

  const metadata = useCachedLoaderData<typeof loader>();
  const samples: Sample[] = metadata.tableData.first;

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
            className="absolute top-[22.5%] left-[3.5%] w-[33%] clickable cursor-pointer"
            onClick={() => setShowSamples(true)}
          />

          <img
            id="monitor"
            src={monitor}
            className="absolute top-[52%] left-[16%] w-[20%] clickable cursor-pointer"
            onClick={() => setShowSamples(true)}
          />

          <img
            id="poster"
            src={poster}
            className="absolute top-[49%] left-[3.8%] w-[9.5%] clickable cursor-pointer"
            onClick={() => setShowSamples(true)}
          />

          <img
            id="goto"
            src={goto}
            className="absolute top-[33.55%] right-[5.55%] w-[30%] clickable cursor-pointer"
            onClick={() => navigate("/transition?research=osd-665")}
          />

          <AnimatePresence>
            {showSamples && (
              <SampleWindow setShow={setShowSamples} data={samples} />
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
