import type { MetaFunction } from "@remix-run/node";
import { Link, useNavigate } from "@remix-run/react";
import { motion, AnimatePresence, useIsPresent } from "framer-motion";

import StarParticles from "~/components/StarParticles";

import osd397 from "../../assets/osd397.svg";
import osd665 from "../../assets/osd665.svg";
import earth from "../../assets/earth-full.png";
import { useEffect } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "NASA App" },
    { name: "description", content: "Welcome to Space Science App!" },
  ];
};

export default function Index() {
  const navigate = useNavigate();
  const isPresent = useIsPresent();

  useEffect(() => {
    navigate(".", { replace: true });
  }, []);

  return (
    <>
      <StarParticles />

      <div className="w-full h-full aspect-video z-10">
        <AnimatePresence>
          <motion.img
            src={earth}
            className="absolute drop-shadow-[0_0_1rem_white] origin-center ease-in-out top-[70%] w-[150%] animate-rotate-full"
            initial={{ y: "300%", scale: 0 }}
            animate={{ y: "0%", scale: 1 }}
            exit={{ y: "300%", scale: 0 }}
            transition={{ duration: 1.1, easings: "linear" }}
            key={3}
          />

          <motion.div
            id="choose-osd379"
            className="absolute w-[20%] top-[15%] left-[15%] group cursor-pointer"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 1, easings: "easeInOut" }}
            onClick={() => navigate("/transition?research=osd-379")}
            key={0}
          >
            <img
              src={osd397}
              className={
                "-rotate-12 group-hover:rotate-0 group-hover:scale-125 easeInOut duration-500 aspect-video img-outline-glow animate-spin"
              }
            />

            <div className="text-white text-center font-bold text-xl scale-0 group-hover:scale-100 origin-top ease-in-out duration-500 absolute top-[110%] left-[50%] -translate-x-1/2">
              <h1 className="text-2xl bg-white text-black px-1 py-1">
                OSD-379
              </h1>
              <p className="whitespace-nowrap">Liver Experiment</p>
            </div>
          </motion.div>

          <motion.div
            id="choose-osd665"
            className="absolute w-[20%] top-[15%] right-[15%] group cursor-pointer"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.5, easings: "ease-in-out" }}
            onClick={() => navigate("/transition?research=osd-665")}
            key={1}
          >
            <img
              src={osd665}
              className="rotate-12 group-hover:rotate-0 group-hover:scale-125 ease-in-out duration-500 aspect-video img-outline-glow animate-nips"
            />

            <div className="text-white text-center font-bold text-xl scale-0 group-hover:scale-100 origin-top ease-in-out duration-500 absolute top-[120%] left-[50%] -translate-x-1/2">
              <h1 className="text-2xl bg-white text-black px-1 py-1">
                OSD-665
              </h1>
              <p className="whitespace-nowrap">Muscle Experiment</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="fixed top-0 left-0 right-0 bottom-0 bg-white z-20"
        key={6}
      />
    </>
  );
}
