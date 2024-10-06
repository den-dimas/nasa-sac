import { motion } from "framer-motion";

import AssaysItem from "./AssaysItem";

interface assaysWindowProps {
  setShow: any;
  data: any[];
}

export default function AssaysWindow({ setShow, data }: assaysWindowProps) {
  return (
    <motion.div
      id="samples-osd-379"
      className="absolute top-0 left-0 z-10 flex items-center justify-center w-full h-full overflow-y-hidden bg-slate-300 bg-opacity-50 backdrop-blur-sm"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
    >
      <div className="w-[90%] h-[90%] bg-gray-50 flex flex-col rounded-xl px-4 py-2">
        <div className="flex justify-between items-center pb-1 mb-1">
          <h1 className="font-black text-xl">ASSAYS DATA</h1>

          <button
            className="bg-black text-white font-bold px-1.5"
            onClick={() => setShow(false)}
          >
            X
          </button>
        </div>

        <div className="w-full h-0.5 bg-black mb-4" />

        <div className="grid grid-cols-3 gap-6 overflow-y-scroll">
          {data.map((d, i) => (
            <AssaysItem data={d} key={i} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
