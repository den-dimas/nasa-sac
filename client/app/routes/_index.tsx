import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "NASA App" },
    { name: "description", content: "Welcome to Space Science App!" },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div>
        <div></div>
      </div>
    </div>
  );
}
