import { useState } from "react";
import { motion, AnimatePresence, useIsPresent } from "framer-motion";

import { LoaderFunction, MetaFunction } from "@remix-run/node";
import { ClientLoaderFunctionArgs } from "@remix-run/react";
import { cacheClientLoader, useCachedLoaderData } from "remix-client-cache";

import { getOSD379 } from "~/services/nasa.server";
import { Sample } from "~/models/sample.model";

import SampleWindow from "~/components/SampleWindows";

import StarParticles from "~/components/StarParticles";
import base from "../../assets/665/base-665.png";
import jars from "../../assets/665/jars.png";
import monitor from "../../assets/665/monitor.png";
import poster from "../../assets/665/poster.png";
import buku from "../../assets/665/buku.png"
import meja from "../../assets/665/meja.png"



export const meta: MetaFunction = () => {
    return [{ title: "Research OSD 665 Data" }];
};

export const loader: LoaderFunction = async ({ request }) => {
    const metadata = await getOSD379();

    if (!metadata) return [];

    return metadata;
};

export const clientLoader = (args: ClientLoaderFunctionArgs) =>
    cacheClientLoader(args);

clientLoader.hydrate = true;

export default function OSD665() {
    const [showSamples, setShowSamples] = useState(false);

    const metadata = useCachedLoaderData<typeof loader>();
    const samples: Sample[] = metadata.tableData.first;

    return (
        <>
            <StarParticles />

            <AnimatePresence mode="wait" initial={false}>
                <motion.div id="osd379" className="aspect-video">
                    <img id="378-background" className="absolute top-0 left-0" src={base} />


                    <img
                        id="jars"
                        src={jars}
                        className="absolute top-[30%] left-[53%] w-[13%] clickable cursor-pointer"
                        onClick={() => setShowSamples(true)}
                    />

                    <img
                        id="monitor"
                        src={monitor}
                        className="absolute top-[17.6%] left-[82.1%] w-[17.8%] clickable cursor-pointer"
                        onClick={() => setShowSamples(true)}
                    />

                    <img
                        id="poster"
                        src={poster}
                        className="absolute top-[22.6%] left-[24%] w-[12.8%] clickable cursor-pointer"
                        onClick={() => setShowSamples(true)}
                    />

                    <img
                        id="buku"
                        src={buku}
                        className="absolute top-[59.2%] left-[60.2%] w-[6.5%] clickable cursor-pointer"
                        onClick={() => setShowSamples(true)}
                    />


                    {showSamples && (
                        <SampleWindow setShowSamples={setShowSamples} samples={samples} />
                    )}
                </motion.div>
            </AnimatePresence>
        </>
    );
}
