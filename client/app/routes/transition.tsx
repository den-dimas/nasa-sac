import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import {
  Link,
  Navigate,
  useLoaderData,
  useNavigate,
  useParams,
  useSearchParams,
} from "@remix-run/react";
import { motion, AnimatePresence, useIsPresent } from "framer-motion";
import StarParticles from "~/components/StarParticles";

export const meta: MetaFunction = () => {
  return [{ title: "Loading!" }];
};

export const loader: LoaderFunction = async ({ request }) => {
  let { searchParams } = new URL(request.url);
  let query = searchParams.get("research");

  return query;
};

export default function Transition() {
  const isPresent = useIsPresent();
  const params = useLoaderData<typeof loader>();

  return (
    <>
      <StarParticles />

      <AnimatePresence>
        <Navigate to={"/" + params} key={2} replace={true} />

        <div className="w-screen h-screen flex items-center justify-center z-10">
          <h1 className="font-black text-white text-3xl">LOADING...</h1>
        </div>

        <motion.div
          initial={{ scaleX: 1 }}
          animate={{
            scaleX: 0,
            transition: { duration: 0.5, ease: "circOut" },
          }}
          exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
          style={{ originX: isPresent ? 0 : 1 }}
          className="fixed top-0 left-0 right-0 bottom-0 bg-blue-900 z-20"
          key={6}
        />
      </AnimatePresence>
    </>
  );
}
