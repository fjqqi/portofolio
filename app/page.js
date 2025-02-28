import Image from "next/image";
import { Navbar } from "./components/Navbar";

export default function Home() {
  return (
    <>
      <div className="min-w-screen">
        <Navbar />
        <div className="px-28 mt-28 min-h-screen">
          <div className="">Hi Im Fiqqi</div>
        </div>
        <div className="min-h-screen ">Hi Im Fiqqi</div>
      </div>
    </>
  );
}
