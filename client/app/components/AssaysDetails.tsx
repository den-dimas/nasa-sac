export default function AssaysDetails({
  data,
  setShow,
}: {
  data: any;
  setShow: any;
}) {
  return (
    <div className="absolute top-0 left-0 z-20 flex items-center justify-center w-screen h-full overflow-hidden bg-slate-300 bg-opacity-50 backdrop-blur-sm">
      <div className="w-[90%] h-[90%] bg-gray-50 flex flex-col rounded-xl px-4 py-2">
        <div className="flex justify-between items-center pb-1 mb-1">
          <h1 className="font-black text-xl">ASSAYS DETAILS</h1>

          <button
            className="bg-black text-white font-bold px-1.5"
            onClick={() => setShow(false)}
          >
            X
          </button>
        </div>

        <div className="w-full h-0.5 bg-black mb-4" />

        <div className="flex items-center gap-9 h-full">
          <div>
            <h1>Details here</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
