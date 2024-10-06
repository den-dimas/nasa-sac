import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import tikus from "../../assets/protocol379/tikus.png";
import pisau from "../../assets/protocol379/pisau.png";
import tabung from "../../assets/protocol379/tabung.png";
import koskop from "../../assets/protocol379/koskop.png";
import line1 from "../../assets/protocol379/line1.png";
import line2 from "../../assets/protocol379/line2.png";
import line3 from "../../assets/protocol379/line3.png";
import bg from "../../assets/protocol379/background.png";

export default function ProtocolOSD379({ setShow }: { setShow: any }) {
  const [activePopup, setActivePopup] = useState("");

  const handlePopupClick = (popupType: any) => {
    setActivePopup(popupType);
  };

  const closePopup = () => {
    setActivePopup("");
  };

  return (
    <div className="absolute top-0 left-0 z-10 flex items-center justify-center w-full h-full overflow-y-hidden bg-slate-300 bg-opacity-50 backdrop-blur-sm overflow-x-scroll">
      <button
        className="absolute top-[5%] left-[2%] z-20 bg-white text-black font-bold px-1.5"
        onClick={() => setShow(false)}
      >
        X
      </button>

      <img src={bg} className="absolute z-10 h-[98%] object-cover" />

      <div id="osd379" className="absolute z-10 w-full h-full">
        <img
          id="tikus"
          src={tikus}
          className="absolute top-[60%] left-[5%] w-[10%] clickable cursor-pointer"
          onClick={() => handlePopupClick("tikus")}
        />

        <img
          id="line1"
          src={line1}
          className="absolute top-[20%] left-[10%] w-[15%]"
        />

        <img
          id="pisau"
          src={pisau}
          className="absolute top-[15%] left-[25%] w-[10%] clickable cursor-pointer"
          onClick={() => handlePopupClick("pisau")}
        />

        <img
          id="line2"
          src={line2}
          className="absolute top-[38%] left-[30%] w-[30%]"
        />

        <img
          id="koskop"
          src={koskop}
          className="absolute top-[60%] left-[55%] w-[8%] clickable cursor-pointer"
          onClick={() => handlePopupClick("koskop")}
        />

        <img
          id="line3"
          src={line3}
          className="absolute top-[35%] left-[65%] w-[15%]"
        />

        <img
          id="tabung"
          src={tabung}
          className="absolute top-[17%] left-[69%] w-[7%] clickable cursor-pointer"
          onClick={() => handlePopupClick("tabung")}
        />
      </div>

      <AnimatePresence>
        {activePopup === "tikus" && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          >
            <div className="bg-white p-6 sm:p-8 rounded-lg max-w-lg mx-auto relative">
              <h2 className="text-2xl font-bold mb-4">Animal Husbandry</h2>
              <p className="text-sm text-gray-700">
                The mice, sourced from Taconic Biosciences, were prepared for
                NASA spaceflight by being weighed, chipped with RFID, and housed
                at NASA KSC under controlled conditions. Initially, they were
                kept in a 12:12 light cycle, provided with standard bedding, lab
                chow, and igloo-type enrichment. At three weeks before launch,
                the mice were moved to raised mesh flooring to simulate
                spaceflight conditions, given specialized NASA rodent food bars
                (NuRFB), and weighed bi-weekly. Ten days before launch, the mice
                were grouped for social acclimation, and two days before launch,
                spaceflight, ground control, and baseline groups were
                identified. Spaceflight and Habitat Ground Control (HGC) mice
                were loaded into Transporters, while Vivarium Ground Control
                (VGC) mice were kept on normal bedding. All groups were fed on a
                weekly schedule. Some food bars became loose in flight, possibly
                causing stress, and mold contamination occurred in some
                Spaceflight and HGC food. Post-flight, mice faced additional
                stress due to double-density housing and rough conditions during
                the return.
              </p>
              <button
                className="absolute top-2 right-2 text-xl font-bold"
                onClick={closePopup}
              >
                &times;
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activePopup === "pisau" && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          >
            <div className="bg-white p-6 sm:p-8 rounded-lg max-w-lg mx-auto relative">
              <h2 className="text-2xl font-bold mb-4">Sample Collection</h2>
              <p className="text-sm text-gray-700">
                The Live Animal Return (LAR) liver samples involved
                anesthetizing mice with gas and euthanizing them via cardiac
                puncture blood draw. Their livers were dissected into lobes,
                snap frozen in liquid nitrogen, and stored at -80째C. This
                procedure applied to all experimental groups (baseline, flight,
                habitat, and vivarium ground controls), ensuring identical
                treatment. The tissues were frozen within 10-16 minutes
                post-procedure and remained at -80째C or lower during storage
                and transport. For ISS Terminal (ISS-T) liver samples, mice were
                anesthetized with ketamine/xylazine and euthanized similarly.
                Their spleens were preserved in RNA Later, and carcasses were
                stored at -80째C. Liver dissection was done after thawing the
                carcasses, followed by snap freezing and storage at -80째C. The
                process was carefully controlled during transportation and
                storage.
              </p>
              <button
                className="absolute top-2 right-2 text-xl font-bold"
                onClick={closePopup}
              >
                &times;
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activePopup === "koskop" && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          >
            <div className="bg-white p-6 sm:p-8 rounded-lg max-w-lg mx-auto relative">
              <h2 className="text-2xl font-bold mb-4">
                Nucleic acid extraction
              </h2>
              <p className="text-sm text-gray-700">
                This popup contains information about the pisau (knife). The
                pisau was used in certain procedures during the mission...
              </p>
              <button
                className="absolute top-2 right-2 text-xl font-bold"
                onClick={closePopup}
              >
                &times;
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activePopup === "tabung" && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          >
            <div className="bg-white p-6 sm:p-8 rounded-lg max-w-lg mx-auto relative">
              <h2 className="text-2xl font-bold mb-4">Spike-in protocol</h2>
              <p className="text-sm text-gray-700">
                ERCC ExFold RNA Spike-In Mixes (Thermo Fisher Scientific,
                Waltham, MA Cat # 4456739, v92) at 1:100 dilution of either Mix
                1 or Mix 2 were added on the day of library prep at the
                concentrations suggested by the manufacturer protocol. Mix1 was
                used for ISS-T FLT, ISS-T BSL, LAR VIV, and LAR GC. Mix 2 was
                used for ISS-T GC, ISS-T VIV, LAR FLT, and LAR BSL.{" "}
              </p>
              <button
                className="absolute top-2 right-2 text-xl font-bold"
                onClick={closePopup}
              >
                &times;
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
